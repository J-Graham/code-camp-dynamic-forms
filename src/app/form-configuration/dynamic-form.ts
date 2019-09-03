import {
    DynamicField,
    DynamicFieldType,
    DynamicFieldTypes,
    IDynamicFieldType,
    IDynamicField,
} from '../dynamic-forms/libraries/dynamic-field.library';
import { Validators } from '@angular/forms';

export const FORM_CONFIG = {
    customer: {
        FirstName: new DynamicField({
            formGroup: 'customer',
            label: 'First Name',
            value: '',
            name: 'FirstName',
            validators: { required: true, maxlength: 100 },
            validation: [Validators.required, Validators.maxLength(100)],
            type: new DynamicFieldType({
                fieldType: DynamicFieldTypes.Input,
            } as IDynamicFieldType),
        } as IDynamicField),
        LastName: new DynamicField({
            formGroup: 'customer',
            label: 'Last Name',
            value: '',
            name: 'LastName',
            validators: { required: true, maxlength: 100 },
            validation: [Validators.required, Validators.maxLength(100)],
            type: new DynamicFieldType({
                fieldType: DynamicFieldTypes.Input,
            } as IDynamicFieldType),
        } as IDynamicField),
        Status: new DynamicField({
            formGroup: 'customer',
            label: 'Status',
            value: '0',
            name: 'Status',
            validators: { required: true },
            validation: [Validators.required],
            options: [
                { Id: 1, Name: 'Active' },
                { Id: 2, Name: 'Pending' },
                { Id: 3, Name: 'Lost' },
            ],
            type: new DynamicFieldType({
                fieldType: DynamicFieldTypes.Select,
            } as IDynamicFieldType),
        } as IDynamicField),
        Source: new DynamicField({
            formGroup: 'customer',
            label: 'Source',
            value: '0',
            name: 'Source',
            options: [
                { Id: 1, Name: 'Google' },
                { Id: 2, Name: 'Facebook' },
                { Id: 3, Name: 'Twitter' },
                { Id: 4, Name: 'Instagram' },
                { Id: 5, Name: 'Word of Mouth' },
                { Id: 6, Name: 'AIM' },
                { Id: 7, Name: 'MySpace' },
            ],
            type: new DynamicFieldType({
                fieldType: DynamicFieldTypes.Select,
            } as IDynamicFieldType),
        } as IDynamicField),
    },
    building: {
        LocationName: new DynamicField({
            formGroup: 'building',
            label: 'Location Name',
            value: '',
            name: 'LocationName',
            validators: { required: true, maxlength: 100 },
            validation: [Validators.required, Validators.maxLength(100)],
            type: new DynamicFieldType({
                fieldType: DynamicFieldTypes.Input,
            } as IDynamicFieldType),
        } as IDynamicField),
        SuiteNumber: new DynamicField({
            formGroup: 'building',
            label: 'Suite Number',
            value: '',
            name: 'SuiteNumber',
            validators: { required: true, maxlength: 100 },
            validation: [Validators.required, Validators.maxLength(100)],
            type: new DynamicFieldType({
                fieldType: DynamicFieldTypes.Input,
            } as IDynamicFieldType),
        } as IDynamicField),
    },
};
