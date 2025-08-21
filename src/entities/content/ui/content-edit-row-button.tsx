import { EditOutlined } from '@ant-design/icons';
import { useEditContentData } from '@entities/content/model/content-table-slice';
import { IRowData } from '@entities/content/model/types';
import { Button } from 'antd';

export interface IContentEditRowButtonProps {
  record: IRowData;
  onClick?: (record: IRowData) => void;
}

export const ContentEditRowButton = ({ record, onClick }: IContentEditRowButtonProps) => {
  const editRow = useEditContentData();

  const handleEdit = onClick ?? editRow;
  return <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} />;
};
