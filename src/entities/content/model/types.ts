import { JSX } from 'react';

export interface IRowData {
  id: string;
  name: string;
  date: string;
  value: number;
}

export interface IContentData {
  content: IRowData[];
}

export interface IContentFilter {
  searchParam: string;
}

export type IContentModalForm = Omit<IRowData, 'id'>;

export interface IContentPageContext {
  handleAdd: () => void;
  handleEdit: (record: IRowData) => void;
}

export interface IContentColumnData {
  title: string;
  dataIndex: string;
  key?: number | string;
  sorter?: (a: IRowData, b: IRowData) => number;
  render?: (_: unknown, row: IRowData) => JSX.Element | null;
}
