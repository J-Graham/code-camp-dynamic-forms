import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { UiModule } from './ui/ui.module';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { AdvancedFormComponent } from './advanced-form/advanced-form.component';
import { DynamicFormsModule } from './dynamic-forms/dynamic-forms.module';

@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        AboutComponent,
        BasicFormComponent,
        AdvancedFormComponent,
    ],
    imports: [BrowserModule, UiModule, AppRoutingModule, DynamicFormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
