import { Page, expect } from '@playwright/test'
import { Commonpage } from './commonpage';



export class Claimspage extends Commonpage{
    page:Page 
    constructor(page:Page){
        super(page)
        this.page=page
    }



}