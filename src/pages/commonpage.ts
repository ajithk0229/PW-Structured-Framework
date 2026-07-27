import { Page, expect } from "@playwright/test"

export class Commonpage {
    page: Page
    constructor(page: Page) {
        this.page = page

    }
    async navigateviaHomepage(parentMenu: string, childMenu: string) {

        await this.page.getByText(parentMenu, { exact: true }).click()
        if (childMenu) {
            // await this.page.getByRole('link', { name: childMenu}).click({timeout:120000})
            const child = this.page.getByRole('link', { name: childMenu })
            await expect(child).toBeVisible({ timeout: 10000 }) // fail fast, don't wait 120s blind
            await child.click()
        }
    }
    async randomnumber() {
        const RandomNUm = Math.floor(Math.random() * 10000)
        return RandomNUm
    }
    async verifyheader(headers: string[]) {

        await this.page.locator('.rzi-circle-o-notch').waitFor({ state: 'detached', timeout: 60000 })
        for (const header of headers) {
            await expect(this.page.locator('thead th').getByText(header)).toBeVisible()
        }



    }

}