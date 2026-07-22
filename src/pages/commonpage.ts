import { Page } from "@playwright/test"

export class Commonpage {
    page: Page
    constructor(page: Page) {
        this.page = page

    }
    async navigateviaHomepage(parentMenu: string, childMenu: string) {

        await this.page.getByText(parentMenu, { exact: true }).click()
        if (childMenu) {
            await this.page.getByRole('link', { name: childMenu}).click({timeout:10000})
        }
    }
    async randomnumber(){
        const RandomNUm=Math.floor(Math.random() * 10000)
        return RandomNUm
    }


}