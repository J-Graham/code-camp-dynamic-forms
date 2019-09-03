import {
    Validators,
    FormControl,
    FormBuilder,
    ValidatorFn,
} from '@angular/forms';

import { InputTypes, SelectInputTypes } from './form-elements.library';

export interface IDynamicField {
    formGroup: string;
    label: string;
    value: string | number[];
    name: string;
    type: DynamicFieldType;
    options?: any[];
    validation?: Validators[];
    validators?: IDynamicValidation;
    placeholder?: string;
    labelHtml?: string;
}

export class DynamicField implements IDynamicField {
    formGroup: string;
    label: string;
    value: string | number[];
    name: string;
    type: DynamicFieldType;
    options: any[];
    validation: Validators[];
    validators: IDynamicValidation;
    placeholder: string;
    labelHtml: string;

    constructor(formGroup: IDynamicField) {
        this.constructClass(formGroup);
    }

    private constructClass(constructorObject: IDynamicField): void {
        // set some defaults to the contructorObject
        if (typeof constructorObject.validators === 'undefined') {
            constructorObject.validators = {};
        }
        if (typeof constructorObject.labelHtml === 'undefined') {
            constructorObject.labelHtml = `<label>${constructorObject.label}</label>`;
        }

        Object.assign(
            constructorObject.validators,
            constructorObject.validators
        );

        if (
            typeof constructorObject.type.inputType === 'undefined' ||
            constructorObject.type.inputType === null
        ) {
            if (constructorObject.type.fieldType === DynamicFieldTypes.Input) {
                const maxLengthOverTextboxDefault =
                    constructorObject.validators &&
                    constructorObject.validators.maxlength > 100
                        ? true
                        : false;

                constructorObject.type.inputType = maxLengthOverTextboxDefault
                    ? InputTypes.Textarea
                    : InputTypes.Textbox;
            }
        }

        // assign contructorObject values to the class
        this.formGroup = constructorObject.formGroup;
        this.label = constructorObject.label;
        this.value = constructorObject.value;
        this.name = constructorObject.name;
        this.type = constructorObject.type;
        this.options = constructorObject.options;
        this.validation = constructorObject.validation;
        this.validators = constructorObject.validators;
        this.placeholder = constructorObject.placeholder;
        this.labelHtml = constructorObject.labelHtml;
    }

    createControl(fb: FormBuilder): FormControl {
        return fb.control(this.value, this.validation as ValidatorFn[]);
    }
}

export enum DynamicFieldTypes {
    Input = 1,
    Select = 2,
}

export interface IDynamicFieldType {
    fieldType: DynamicFieldTypes;
    inputType?: InputTypes | SelectInputTypes;
}

export class DynamicFieldType implements IDynamicFieldType {
    fieldType: DynamicFieldTypes;
    inputType: InputTypes | SelectInputTypes;

    constructor(dynamicFieldType: IDynamicFieldType) {
        Object.assign(this, dynamicFieldType);
    }
}

export interface IDynamicValidation {
    required?: boolean;
    maxlength?: number;
    minlength?: number;
}
