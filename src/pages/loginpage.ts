
import { expect, Locator, Page } from '@playwright/test';
// import testdata from '../testdata/Jsonfiles/testdata.json'

// const { username, password, baseurl } = testdata

export class Userloginpage {
    page: Page
    username: Locator
    password: Locator
    submit: Locator
    profileIcon: Locator
    baseurl: string 
    usernamevalue: string 
    passwordvalue: string 
    constructor(page: Page) {
        this.page = page
        this.username = page.getByRole('textbox', { name: 'Username' })
        this.password = page.getByRole('textbox', { name: 'Password' })
        this.submit = page.locator('[type="submit"]')
        this.profileIcon = page.locator('[class="rz-gravatar"]')
        this.baseurl = process.env.BASE_URL || ""
        this.usernamevalue = process.env.USER_NAME || ""
        this.passwordvalue = process.env.PASS_WORD || ""
    }
    async userlogin() {

        await this.page.goto(this.baseurl)

        await this.username.fill(this.usernamevalue)
        await this.password.fill(this.passwordvalue)
        await this.submit.click()

        await this.page.waitForURL('https://testcms.reco-claims.ca/', { timeout: 60000 })
        await this.profileIcon.waitFor({ state: 'visible', timeout: 30000 })
        await expect(this.profileIcon).toBeVisible()



    }


}