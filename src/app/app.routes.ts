import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { PaymentSolutionComponent } from './payment-solution/payment-solution.component';
import { PersonalLoanComponent } from './personal-loan/personal-loan.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'contact',component:ContactComponent},
    {path:'about',component:AboutComponent},
    {path:'service',component:ServiceComponent},
    {path:'payment',component:PaymentSolutionComponent},
    {path:'',component:PersonalLoanComponent},
    {path:'privacy-policy',component:PrivacyPolicyComponent}
];
