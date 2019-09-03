import { Component, OnInit } from '@angular/core';
import { FORM_CONFIG } from '../form-configuration/dynamic-form';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-advanced-form',
    templateUrl: './advanced-form.component.html',
})
export class AdvancedFormComponent implements OnInit {
    formConfig = FORM_CONFIG.customer;
    formGroup: FormGroup;

    constructor() {}

    ngOnInit(): void {
        this.formGroup = new FormGroup({
            customer: new FormGroup({}),
        });
    }
}
