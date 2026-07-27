import { test } from '../src/config/fixture'
import { Userpage } from '../src/pages/userpage'



test.describe('User page test', () => {

    let userspage: Userpage

    test.beforeEach(async ({ pagewithlogin }) => {
        pagewithlogin.setDefaultTimeout(60000)
        userspage = new Userpage(pagewithlogin)
    })

    test('TC-003:Verfiy validation when the required fields are empty', async () => {
        await userspage.navigateviaHomepage('Administrator', 'Users')
        await userspage.verifyuserpage()
        await userspage.verifyerrmessage()
    })
    test('TC-004:verify the user creation with valid data', async () => {
        test.setTimeout(120000)
        await userspage.navigateviaHomepage('Administrator', 'Users')
        await userspage.verifyuserpage()
        await userspage.verifyusercreation()

    })
  

})