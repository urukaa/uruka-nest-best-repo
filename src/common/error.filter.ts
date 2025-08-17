import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { ZodError } from 'zod';

@Catch(HttpException, ZodError)
export class ErrorFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const res = host.switchToHttp().getResponse();

    if (exception instanceof HttpException) {
      const payload = exception.getResponse(); // string | object
      return res.status(exception.getStatus()).json({
        errors: payload,
      });
    }

  if (exception instanceof ZodError) {
    const { fieldErrors, formErrors } = exception.flatten();
    return res.status(400).json({
      message: 'Validation error',
      errors: { fieldErrors, formErrors },
    });
  }

    // Fallback
    return res.status(500).json({
      message: 'Internal Server Error',
      errors: (exception as any)?.message ?? 'Unknown error',
    });
  }
}
