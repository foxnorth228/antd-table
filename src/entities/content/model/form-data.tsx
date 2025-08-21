import { DatePicker, Input, InputNumber } from 'antd';

export const formData = {
  props: {
    layout: 'vertical' as const,
  },
  inputs: [
    {
      label: 'Имя',
      name: 'name',
      rules: [{ required: true, message: 'Введите имя' }],
      component: <Input />,
    },
    {
      label: 'Дата',
      name: 'date',
      rules: [{ required: true, message: 'Выберите дату' }],
      component: <DatePicker style={{ width: '100%' }} />,
    },
    {
      label: 'Число',
      name: 'value',
      rules: [{ required: true, message: 'Введите число' }],
      component: <InputNumber style={{ width: '100%' }} />,
    },
  ],
};
