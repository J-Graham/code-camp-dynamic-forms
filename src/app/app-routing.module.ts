import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { AdvancedFormComponent } from './advanced-form/advanced-form.component';

const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'basic',
        component: BasicFormComponent,
    },
    {
        path: 'advanced',
        component: AdvancedFormComponent,
    },
    {
        path: '**',
        component: WelcomeComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
