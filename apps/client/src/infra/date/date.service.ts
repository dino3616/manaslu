import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

export const formatDate = (date: Date, pattern: string) => format(utcToZonedTime(date, 'Asia/Tokyo'), pattern);
