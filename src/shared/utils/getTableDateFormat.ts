import dayjs from 'dayjs';

export const getTableDateFormat = (date: Date | string) => dayjs(date).format('YYYY-MM-DD');
