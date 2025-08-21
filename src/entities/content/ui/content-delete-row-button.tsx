import { DeleteOutlined } from '@ant-design/icons';
import { useDeleteContentData } from '@entities/content/model/content-table-slice';
import { IRowData } from '@entities/content/model/types';
import { Button } from 'antd';

interface IContentDeleteRowButtonProps {
  record: IRowData;
  onClick?: (id: string) => void;
}

export const ContentDeleteRowButton = ({ record, onClick }: IContentDeleteRowButtonProps) => {
  const deleteRow = useDeleteContentData();

  const handleDelete = onClick ?? deleteRow;
  return <Button danger icon={<DeleteOutlined />} onClick={() => handleDelete(record.id)} />;
};
