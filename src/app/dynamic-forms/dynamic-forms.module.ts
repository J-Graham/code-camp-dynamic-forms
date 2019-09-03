import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDynamicFieldComponent } from './app-dynamic-field/app-dynamic-field.component';
import { DynamicFieldDirective } from './dynamic-field.directive';
import { FormSelectComponent } from './form-elements/form-select/form-select.component';
import { FormInputComponent } from './form-elements/form-input/form-input.component';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        AppDynamicFieldComponent,
        DynamicFieldDirective,
        FormInputComponent,
        FormSelectComponent,
    ],
    entryComponents: [FormInputComponent, FormSelectComponent],
    exports: [AppDynamicFieldComponent],
    imports: [CommonModule, ReactiveFormsModule, NgbModule],
})
export class DynamicFormsModule {}
