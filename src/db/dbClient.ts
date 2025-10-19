import { createClient } from '@supabase/supabase-js'

const supabaseUrl: string = 'https://kjhvifxlampklifyaiiy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqaHZpZnhsYW1wa2xpZnlhaWl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3ODk0NjcsImV4cCI6MjA3NjM2NTQ2N30.V8iVouA7z_kx4tIi_iZ6FIWHHaJlRqtfvaJS0ajmCWo'
if(typeof supabaseKey !== 'string') {
  throw new Error('SUPABASE_KEY environment variable is not set')
}

export const supabase = createClient(supabaseUrl, supabaseKey)