// import { Commonpage } from '../src/pages/commonpage';
import { Rolespage } from '../src/pages/rolespage';
import { test } from '../src/config/fixture'

test.describe('Roles page test', () => {

    let rolepage: Rolespage

    test.beforeEach(async ({ pagewithlogin }) => {
       pagewithlogin.setDefaultTimeout(120000)
        rolepage = new Rolespage(pagewithlogin)
    })

    test('TC-001: Verify user can open add application role app', async () => {
        await rolepage.navigateviaHomepage('Administrator', 'Roles')
        await rolepage.verfiyrolespage()
        await rolepage.verifyaddrolesbutton()
    })
     test('TC-002: Verify the user can create the role', async () => {
        await rolepage.navigateviaHomepage('Administrator', 'Roles')
        await rolepage.verfiyrolespage()
        await rolepage.verifyaddrolesbutton()
        await rolepage.createnewrole()
    })

})