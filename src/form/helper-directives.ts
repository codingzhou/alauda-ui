/* eslint-disable @typescript-eslint/no-extraneous-class */
// tslint:disable: no-host-metadata-property
import { Directive, Input } from '@angular/core';

import { coerceAttrBoolean } from '../utils/coercion';

@Directive({
  selector: 'label[auiFormItemLabel]',
  host: {
    '[class.aui-form-item__label]': 'true',
  },
})
export class FormItemLabelDirective {}

@Directive({
  selector: '[auiFormItemHint]',
  host: {
    '[class.aui-form-item__hint]': 'true',
  },
})
export class FormItemHintDirective {}

@Directive({
  selector: '[auiFormItemAddon]',
  host: {
    '[class.aui-form-item__addon]': 'true',
  },
})
export class FormItemAddonDirective {}

@Directive({
  selector: '[auiFormItemError]',
  host: {
    '[class.aui-form-item__error]': 'true',
  },
})
export class FormItemErrorDirective {}

@Directive({
  selector: '[auiFormItemControl]',
  host: {
    '[class.aui-form-item__control]': 'true',
  },
})
export class FormItemControlDirective {
  @Input()
  get required() {
    return this._required;
  }

  set required(val) {
    this._required = coerceAttrBoolean(val);
  }

  private _required = false;
}
