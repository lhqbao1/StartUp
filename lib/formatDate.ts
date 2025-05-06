import { format } from 'date-fns'

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return format(date, 'MMMM d, yyyy') // e.g., "May 6, 2025"
}