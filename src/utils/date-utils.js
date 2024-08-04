import { formatDate, parseISO } from 'date-fns'
import { es } from 'date-fns/locale'

export function getFormattedDate(date) {
  if (!date) {
    return '-'
  }
  let formattedDate = formatDate(parseISO(date), 'PPpp', { locale: es })
  return formattedDate
}
