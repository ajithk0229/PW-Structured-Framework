import {test as baseTest ,Page} from '@playwright/test'
import { Userloginpage } from '../pages/loginpage'

type Loginfeature={
     pagewithlogin:Page
}

export const test=baseTest.extend<Loginfeature>({
    pagewithlogin:async({page},use)=>{
        const login=new Userloginpage(page)
        await login.userlogin()
        await use(page)
    }
})