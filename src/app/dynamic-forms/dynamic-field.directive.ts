import {
    ComponentFactoryResolver,
    Directive,
    Input,
    OnInit,
    ViewContainerRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormSelectComponent } from './form-elements/form-select/form-select.component';
import {
    DynamicField,
    DynamicFieldTypes,
} from './libraries/dynamic-field.library';
import {
    InputTypes,
    SelectInputTypes,
} from './libraries/form-elements.library';
import { FormInputComponent } from './form-elements/form-input/form-input.component';

@Directive({
    selector: '[appDynamicField]',
})
export class DynamicFieldDirective implements OnInit {
    @Input()
    config: DynamicField;

    @Input()
    group: FormGroup;

    constructor(
        private resolver: ComponentFactoryResolver,
        private container: ViewContainerRef
    ) {}

    ngOnInit(): void {
        const component = this.getComponent(this.config);
        const factory = this.resolver.resolveComponentFactory<any>(component);
        const componentInstance = this.container.createComponent(factory);
        componentInstance.instance.parentGroup = this.group;
        componentInstance.instance.config = this.config;
    }

    /**
     * Determines which form-element component to resolve based on the
     * config input
     */
    getComponent(dynamicField: DynamicField): any {
        const fieldType = dynamicField.type.fieldType;

        if (fieldType === DynamicFieldTypes.Input) {
            return FormInputComponent;
        }
        if (fieldType === DynamicFieldTypes.Select) {
            return FormSelectComponent;
        }
    }
}
