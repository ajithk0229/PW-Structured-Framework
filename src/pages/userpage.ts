import { Page, expect } from '@playwright/test'
import { Commonpage } from './commonpage'


export class Userpage extends Commonpage {

    page: Page
    constructor(page: Page) {
        super(page)
        this.page = page
    }

    async verifyuserpage() {
        // await this.page.waitForURL('https://testcms.reco-claims.ca/application-users', { timeout: 120000 })
        await this.page.getByRole('heading', { name: 'Users', exact: true }).waitFor({ state: 'visible', timeout: 120000 })
        await expect(this.page.getByRole('heading', { name: 'Users', exact: true })).toBeVisible()
    }

    async verifyerrmessage() {
        await expect(this.page.getByRole('button', { name: 'add_circle_outline Add' })).toBeVisible()
        await this.page.getByRole('button', { name: 'add_circle_outline Add' }).click()
        // await this.page.getByText('Add Application User').waitFor({state:'visible',timeout:120000})
        await expect(this.page.getByText('Add Application User')).toBeVisible({ timeout: 120000 })
        await this.page.getByRole('button', { name: 'Save' }).waitFor({ state: 'visible', timeout: 120000 })
        await this.page.getByRole('button', { name: 'Save' }).click()
        await expect(this.page.getByText('Email is required', { exact: true })).toBeVisible({ timeout: 120000 })
        await expect(this.page.getByText('Name is required', { exact: true })).toBeVisible({ timeout: 120000 })
        await expect(this.page.getByText('Password is required', { exact: true })).toBeVisible({ timeout: 120000 })
    }

    async verifyusercreation() {
        const randomNumber = await this.randomnumber()
        await expect(this.page.getByRole('button', { name: 'add_circle_outline Add' })).toBeVisible()
        await this.page.getByRole('button', { name: 'add_circle_outline Add' }).click()
        await this.page.locator('input[name="Email"]').fill(`Test${randomNumber}@gmail.com`)
        await this.page.locator('input[name="UserFullName"]').fill(`Test${randomNumber}`)
        await this.page.locator('[class="rz-dropdown valid rz-state-empty"]').click()
        await this.page.locator('[class="rz-dropdown-items rz-dropdown-list"]').last().waitFor({state:'visible',timeout:60000})
        await this.page.getByText('Test_532610').click()
        await this.page.locator('input[name="Password"]').fill('Testing@12345')
        await this.page.locator('input[name="ConfirmPassword"]').fill('Testing@12345')
        await this.page.getByRole('button', { name: 'Save' }).click()

    }

}