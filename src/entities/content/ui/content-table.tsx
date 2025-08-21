import { actionsDataIndex, columns } from '@entities/content/model/content-table-data';
import { useAddContentData, useEditContentData } from '@entities/content/model/content-table-slice';
import { IRowData } from '@entities/content/model/types';
import { useFilteredContentData } from '@entities/content/model/use-filtered-content-data';
import { ContentAddRowButton } from '@entities/content/ui/content-add-row-button';
import { ContentDeleteRowButton } from '@entities/content/ui/content-delete-row-button';
import { ContentEditForm } from '@entities/content/ui/content-edit-form';
import { ContentEditRowButton } from '@entities/content/ui/content-edit-row-button';
import { ContentFilterInput } from '@entities/content/ui/content-filter-input';
import { getTableDateFormat } from '@shared/utils/getTableDateFormat';
import { Form, Modal, Space, Table } from 'antd';
import dayjs from 'dayjs';
import { useCallback, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ContentTable = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingRow, setEditingRow] = useState<IRowData | null>(null);
  const [form] = Form.useForm();

  const addData = useAddContentData();
  const editData = useEditContentData();

  const filteredData = useFilteredContentData();

  const handleAdd = () => {
    setEditingRow(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleEdit = useCallback(
    (record: IRowData) => {
      setEditingRow(record);
      form.setFieldsValue({
        name: record.name,
        date: dayjs(record.date),
        value: record.value,
      });
      setIsModalVisible(true);
    },
    [form]
  );

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      const newRow: IRowData = {
        id: editingRow ? editingRow.id : uuidv4(),
        name: values.name,
        date: values.date.toString(),
        value: values.value,
      };

      if (editingRow) {
        editData(newRow);
      } else {
        addData(newRow);
      }

      setEditingRow(null);
      setIsModalVisible(false);
      form.resetFields();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      /* empty */
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const renderColumns = useMemo(() => {
    const newColumns = columns;

    const actionsBlock = newColumns.find((column) => column.dataIndex === actionsDataIndex);
    if (actionsBlock) {
      actionsBlock.render = (_: unknown, row: IRowData) => (
        <Space>
          <ContentEditRowButton record={row} onClick={handleEdit} />
          <ContentDeleteRowButton record={row} />
        </Space>
      );
    }

    return newColumns;
  }, [handleEdit]);

  const filteredRenderData = useMemo(
    () =>
      filteredData.map((row) => ({
        ...row,
        date: getTableDateFormat(row.date),
        key: row.id,
      })),
    [filteredData]
  );

  return (
    <div style={{ padding: 24 }}>
      <Space style={{ marginBottom: 16 }}>
        <ContentAddRowButton onClick={handleAdd} />
        <ContentFilterInput />
      </Space>
      <Table columns={renderColumns} dataSource={filteredRenderData} rowKey="key" />
      <Modal
        title={'Редактировать запись'}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ContentEditForm form={form} />
      </Modal>
    </div>
  );
};
