import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

export const getFormatDistanceNow = (date) => {
  const format =  formatDistanceToNow(date, { locale: es});

  return format;
};