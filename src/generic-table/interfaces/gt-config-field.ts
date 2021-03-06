import { GtRow } from './gt-row';

export interface GtRenderFunc<R extends GtRow> {
  (row: R): string;
}

export interface GtValueFunc<R extends GtRow> {
  (row: R): any;
}

export interface GtClickFunc<R extends GtRow> {
  (row: R, col: any): void;
}

export interface GtConfigField<R extends GtRow> {
  // name or label of field
  // (will be displayed as heading for column)
  name: string;
  // key for mapping column to settings and data
  objectKey: string;
  // custom class names for column
  classNames?: string;
  // custom function for column presentation
  render?: GtRenderFunc<R>;
  // should the field be compiled (false by default)
  compile?: boolean;
  // custom function for column value
  value?: GtValueFunc<R>;
  // custom click callback
  click?: GtClickFunc<R>;
  // should row open or close (expand) when clicked
  expand?: boolean;
  // custom function for export presentation
  export?: GtValueFunc<R>;
  sort?: GtValueFunc<R>;
  // custom function for search value,
  // set to false if field shouldn't be searchable (true by default)
  search?: any;
}
