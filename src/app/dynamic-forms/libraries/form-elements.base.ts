import { FormGroup, AbstractControl, ValidatorFn } from '@angular/forms';
import { DynamicField } from '../libraries/dynamic-field.library';

export class FormElementsBase {
    config: DynamicField;
    parentGroup: FormGroup;

    constructor() {}

    getControl(): AbstractControl {
        return this.getControlFromFormGroup(this.parentGroup, this.config);
    }

    private getControlFromFormGroup(
        group: FormGroup,
        config: DynamicField
    ): AbstractControl {
        let control = group.get([config.formGroup, config.name]);
        if (!control) {
            control = group.get(config.name);
        }
        return control;
    }

    getGroup(): FormGroup {
        return this.getGroupFromConfig(this.parentGroup, this.config);
    }

    private getGroupFromConfig(
        parentGroup: FormGroup,
        config: DynamicField
    ): FormGroup {
        const group: FormGroup = config.formGroup
            ? (parentGroup.get([config.formGroup]) as FormGroup)
            : parentGroup;
        return group;
    }

    getMaxLength(): string {
        return this.config.validators && this.config.validators.maxlength
            ? this.config.validators.maxlength.toString()
            : '';
    }

    getMaxLengthValue(): number {
        return this.config.validators && this.config.validators.maxlength
            ? this.config.validators.maxlength
            : 0;
    }

    getMaxLengthText(): string {
        const control = this.getControl();
        return `${
            control.value && control.value.length ? control.value.length : 0
        }/${this.config.validators.maxlength}`;
    }

    hasMaxLength(): boolean {
        return this.config.validators && this.config.validators.maxlength
            ? true
            : false;
    }

    showRequired(): boolean {
        return this.config.validators && this.config.validators.required;
    }

    hasError(error?: string): boolean {
        const control = this.getControl();

        if (error) {
            return (
                control.hasError(error) &&
                (error === 'maxlength' || control.touched)
            );
        } else {
            return (
                control.errors && (control.touched || control.errors.maxlength)
            );
        }
    }
}
