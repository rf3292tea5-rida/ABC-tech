import { apiClient } from './client';
import { ContactFormData } from '@/schemas/contact.schema';

export async function submitContactForm(data: ContactFormData) {
  return apiClient<{ success: boolean; message: string }>('/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}