import { Router } from 'express';
import { submitContactForm } from '../controllers/contact.controller.js';

export const contactRoutes = Router();

contactRoutes.post('/', submitContactForm);