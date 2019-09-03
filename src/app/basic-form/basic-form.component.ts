import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FORM_CONFIG } from '../form-configuration/dynamic-form';

@Component({
    selector: 'app-basic-form',
    templateUrl: './basic-form.component.html',
})
export class BasicFormComponent implements OnInit {
    formConfig = FORM_CONFIG.building;
    formGroup: FormGroup;

    constructor() {}

    ngOnInit(): void {
        this.formGroup = new FormGroup({
            building: new FormGroup({}),
        });
    }
}
