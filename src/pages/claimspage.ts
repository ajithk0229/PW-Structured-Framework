import { Page, expect } from '@playwright/test'
import { Commonpage } from './commonpage';
import { log } from 'console';



export class Claimspage extends Commonpage {
    page: Page
    constructor(page: Page) {
        super(page)
        this.page = page
    }
    async verifyfiltervalues() {

        await this.page.locator('.rzi-circle-o-notch').waitFor({ state: 'visible', timeout: 60000 })
        await this.page.locator('.rzi-circle-o-notch').waitFor({ state: 'detached', timeout: 60000 })

        await this.page.getByRole('textbox', { name: 'Search' }).fill('00001')
        await this.page.getByRole('textbox', { name: 'Search' }).press('Enter')

        await this.page.locator('.rzi-circle-o-notch').waitFor({ state: 'visible', timeout: 60000 })
        await this.page.locator('.rzi-circle-o-notch').waitFor({ state: 'detached', timeout: 60000 })
        // await this.page.locator('.rzi-circle-o-notch').waitFor({ state: 'visible', timeout: 60000 })
        // await this.page.locator('.rzi-circle-o-notch').waitFor({ state: 'detached', timeout: 60000 })

        await this.page.locator('tbody tr td:first-child').first().waitFor({ state: 'visible', timeout: 60000 })
        const filteredvalues = await this.page.locator('tbody tr td:first-child').allInnerTexts()

        for (const value of filteredvalues) {
            expect(value.toString()).toContain('00001')
        }


    }



}