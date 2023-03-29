import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutwebsiteComponent } from './layouts/layoutwebsite/layoutwebsite.component';
const routes: Routes = [
  {path:'', redirectTo:'website', pathMatch:'full'},//para redireccionar a website cuando hay errores
  {path:'', 
  component: LayoutwebsiteComponent,
  children:[
            { path: 'website', loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule) }
          ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
