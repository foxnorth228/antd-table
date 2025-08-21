import { JSX } from 'react';

export interface IRowData {
  id: string;
  name: string;
  date: string;
  value: number;
}

export interface IContentTable {
  content: IRowData[];
}

export interface IContentFilter {
  searchParam: string;
}

export type IContentModalForm = Omit<IRowData, 'id'>;

export interface IContentTableColumnData {
  title: string;
  dataIndex: string;
  key?: number | string;
  sorter?: (a: IRowData, b: IRowData) => number;
  render?: (_: unknown, row: IRowData) => JSX.Element | null;
}
