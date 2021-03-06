import { CDK_TABLE_TEMPLATE, CdkTable } from '@angular/cdk/table';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'aui-table',
  exportAs: 'auiTable',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['table.component.scss'],
  template: CDK_TABLE_TEMPLATE,
  host: {
    class: 'aui-table',
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent<T> extends CdkTable<T> {}
