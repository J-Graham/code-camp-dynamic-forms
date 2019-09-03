import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { FormElementsBase } from '../../libraries/form-elements.base';

export enum SelectInputTypes {
    Dropdown = 1,
    RadioButtonList = 2,
}

@Component({
    selector: 'app-form-select',
    styles: [
        `
            .space-for-validation {
                min-height: 35px;
                margin-bottom: 15px;
            }
        `,
    ],
    templateUrl: './form-select.component.html',
})
export class FormSelectComponent extends FormElementsBase implements OnInit {
    selectType: SelectInputTypes;
    selectTypes = SelectInputTypes;

    @ViewChild('input', { static: true }) inputElement: ElementRef;

    ngOnInit(): void {
        if (
            typeof this.config.type.inputType === 'undefined' ||
            this.config.type.inputType === null
        ) {
            if (this.config.options.length > 6) {
                this.selectType = SelectInputTypes.Dropdown;
            } else {
                this.selectType = SelectInputTypes.RadioButtonList;
            }
        } else {
            this.selectType = this.config.type.inputType as SelectInputTypes;
        }
    }

    getNoItemsErrorMessage(): string {
        return `no items available`;
    }

    labelClicked(option: any): void {
        const control = this.getControl();
        if (control.enabled) {
            control.patchValue(option.Id);
            control.markAsDirty();
            control.markAsTouched();
        }
    }
}
