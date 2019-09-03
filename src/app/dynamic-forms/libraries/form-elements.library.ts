import { AbstractControl, FormGroup } from '@angular/forms';
import { DynamicField } from '../libraries/dynamic-field.library';

export enum InputTypes {
    Textbox = 1,
    Textarea = 2,
}

export enum SelectInputTypes {
    Dropdown = 1,
    RadioButtonList = 2,
}

export function getControlFromFormGroup(
    group: FormGroup,
    config: DynamicField
): AbstractControl {
    let control = group.get([config.formGroup, config.name]);
    if (!control) {
        control = group.get(config.name);
    }
    return control;
}

export function getGroupFromConfig(
    parentGroup: FormGroup,
    config: DynamicField
): FormGroup {
    let group: FormGroup = config.formGroup
        ? <FormGroup>parentGroup.get([config.formGroup])
        : parentGroup;
    return group;
}
