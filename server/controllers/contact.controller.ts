// import { Request, Response, NextFunction } from 'express';
// import { contactFormSchema } from '../../src/schemas/contact.schema.js';
// import { prisma } from '../config/prisma.js';
// import { AppError } from '../middleware/error.middleware.js';
// import { sendContactEmail } from '../services/email.service.js';

// export async function submitContactForm(req: Request, res: Response, next: NextFunction) {
//   try {
//     // 1. Validate request body with shared Zod schema
//     const validationResult = contactFormSchema.safeParse(req.body);
    
//     if (!validationResult.success) {
//       throw new AppError('Invalid form data', 400);
//     }

//     const data = validationResult.data;

//     // 2. Save to database
//     const submission = await prisma.contactSubmission.create({
//       data,
//     });

//     // 3. Send email (non-blocking)
//     sendContactEmail(data).catch(err => 
//       console.error('Failed to send contact email:', err)
//     );

//     // 4. Return success
//     res.status(201).json({
//       success: true,
//       message: 'Contact form submitted successfully',
//       data: { id: submission.id },
//     });
//   } catch (error) {
//     next(error);
//   }
// }





import { Request, Response, NextFunction } from 'express';
import { contactFormSchema } from '../../src/schemas/contact.schema.js';
import { prisma } from '../config/prisma.js';
import { AppError } from '../middleware/error.middleware.js';
import { sendContactEmail } from '../services/email.service.js';

export async function submitContactForm(req: Request, res: Response, next: NextFunction) {
  try {
    const validationResult = contactFormSchema.safeParse(req.body);
    
    if (!validationResult.success) {
      throw new AppError('Invalid form data', 400);
    }

    const data = validationResult.data;

    // Save to database only if Prisma is connected
    if (prisma) {
      await prisma.contactSubmission.create({ data });
    } else {
      console.log('[DB MOCK] Would save to database:', data);
    }

    sendContactEmail(data).catch(err => 
      console.error('Failed to send contact email:', err)
    );

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
    });
  } catch (error) {
    next(error);
  }
}