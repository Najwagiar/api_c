import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';

//buat dulu response
export interface StandardResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T | null;
}

@Injectable()
export class TransformResponeInterceptor<T> implements NestInterceptor<T, StandardResponse<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<StandardResponse<T>> {
    const httpContext = context.switchToHttp();
    const response = httpContext.getResponse();
    const statusCode = response.statusCode;

    return next.handle().pipe(
      map((data: T) => ({
        success: true,
        statusCode,
        message: 'Request berhasil',
        data: data ?? null,
      })),
    );
  }
}