import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DynamicField } from '../libraries/dynamic-field.library';

@Component({
    selector: 'app-dynamic-field',
    template: `
        <div
            *ngIf="showControl"
            appDynamicField
            [config]="field"
            [group]="form"
        ></div>
    `,
})
export class AppDynamicFieldComponent implements OnInit {
    @Input() field: DynamicField;
    @Input() form: FormGroup;

    showControl = true;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        if (typeof this.form === 'undefined') {
            this.form = this.fb.group({});
        }
        const currentGroup = this.field.formGroup
            ? (this.form.get(this.field.formGroup) as FormGroup)
            : this.form;
        if (!currentGroup) {
            this.formNotFoundError();
        }
        if (currentGroup.get(this.field.name)) {
            currentGroup.setControl(
                this.field.name,
                this.field.createControl(this.fb)
            );
        } else {
            currentGroup.addControl(
                this.field.name,
                this.field.createControl(this.fb)
            );
        }
    }

    private formNotFoundError(): void {
        this.showControl = false;
        const errorMessage = `
    Error in DynamicFieldComponent:  Form Not Found
    this may happen if the FormGroup on the field is not present on the passed in form.
    field[name] = '${this.field.name}'
    field[formGroup] = '${this.field.formGroup}'
    `;
        throw errorMessage;
    }
}
