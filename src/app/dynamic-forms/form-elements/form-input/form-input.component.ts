import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormElementsBase } from '../../libraries/form-elements.base';
export enum InputTypes {
    Textbox = 1,
    Textarea = 2,
}

@Component({
    selector: 'app-form-input',
    styles: [
        `
            .space-for-validation {
                margin-bottom: 15px;
            }
            .errortext {
                color: #dd4b39;
            }
        `,
    ],
    templateUrl: './form-input.component.html',
})
export class FormInputComponent extends FormElementsBase implements OnInit {
    isFocused = false;

    inputType: InputTypes;
    inputTypes = InputTypes;

    @ViewChild('input', { static: true }) inputElement: ElementRef;

    constructor() {
        super();
    }

    ngOnInit(): void {
        if (
            typeof this.config.type.inputType === 'undefined' ||
            this.config.type.inputType === null
        ) {
            if (this.getMaxLengthValue() > 100) {
                this.inputType = InputTypes.Textarea;
            } else {
                this.inputType = InputTypes.Textbox;
            }
        } else {
            this.inputType = this.config.type.inputType as InputTypes;
        }
    }
}
