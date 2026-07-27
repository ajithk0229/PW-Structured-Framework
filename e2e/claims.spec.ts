import { test } from '../src/config/fixture'
import { Claimspage } from '../src/pages/claimspage'
import { Claimspageheader } from '../src/constants/constants'

test.describe('Claims page test', () => {

    let claimspage: Claimspage

    test.beforeEach(async ({ pagewithlogin }) => {
        claimspage = new Claimspage(pagewithlogin)
    })

    test('TC-001:Verify the claims page headers', async () => {
        await claimspage.verifyheader(Claimspageheader)
    })

})