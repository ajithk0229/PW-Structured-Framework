import { expect, Page } from "@playwright/test"
import { Commonpage } from "./commonpage"

export class Rolespage extends Commonpage {
    page: Page
    constructor(page: Page) {
        super(page)
        this.page = page
    }

    async verfiyrolespage() {
        await this.page.waitForURL('https://testcms.reco-claims.ca/application-roles',{timeout:30000})
        await this.page.getByRole('heading', { name: 'Roles', exact: true }).waitFor({ state: 'visible', timeout: 30000 })
        await expect(this.page.getByRole('heading', { name: 'Roles', exact: true })).toBeVisible()
    }
    async verifyaddrolesbutton() {
        await this.page.getByRole('button', { name: 'add_circle_outline' }).click()
        await this.page.getByText('Add Application Role', { exact: true }).waitFor({ state: 'visible' })
        await expect(this.page.getByText('Add Application Role', { exact: true })).toBeVisible()
        await expect(this.page.getByRole('button', { name: 'Save' })).toBeVisible()
        await expect(this.page.getByRole('button', { name: 'Cancel' })).toBeVisible()
    }
   async createnewrole(){
    const Randnumber=await this.randomnumber()
    await this.page.locator('[name="Name"]').fill(`Test-${Randnumber}`)
    await this.page.getByRole('button', { name: 'Save' }).click()
   }

}