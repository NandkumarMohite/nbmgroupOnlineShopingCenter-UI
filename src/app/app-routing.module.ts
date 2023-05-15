import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CartComponentComponent } from './components/cart-component/cart-component.component';
import { SubmitMobileDataComponent } from './components/submit-mobile-data/submit-mobile-data.component';

const routes: Routes = [

{
  path:"",
  component:WelcomeComponent,
  pathMatch:"full"
}
,
{
  path:"cart",
  component:CartComponentComponent
  
  
}
,
{
  path:"submit-Element",
  component:SubmitMobileDataComponent
  
  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
