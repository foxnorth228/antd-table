import { IContentTableColumnData, IRowData } from '@entities/content/model/types';

export const actionsDataIndex = 'actions';

export const columns: IContentTableColumnData[] = [
  {
    key: 'name',
    title: 'Имя',
    dataIndex: 'name',
    sorter: (a: IRowData, b: IRowData) => a.name.localeCompare(b.name),
  },
  {
    key: 'date',
    title: 'Дата',
    dataIndex: 'date',
    sorter: (a: IRowData, b: IRowData) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  },
  {
    key: 'value',
    title: 'Число',
    dataIndex: 'value',
    sorter: (a: IRowData, b: IRowData) => a.value - b.value,
  },
  {
    key: actionsDataIndex,
    title: 'Действия',
    dataIndex: actionsDataIndex,
    render: () => null,
  },
];
