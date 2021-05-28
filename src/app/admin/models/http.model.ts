import {Observable} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

export abstract class AbstractHttpService {

  /**
   * @param endpoint endpoint without first fowardslash
   * @param headers
   * */
  abstract get<T>(endpoint: string, headers?: any): Observable<T>;

  abstract post<T>(endpoint: string, data: any, headers?: any): Observable<T>;

  abstract put<T>(endpoint: string, data: any, headers?: any): Observable<T>;

  abstract delete<T>(endpoint: string, headers?: any): Observable<T>;

  abstract toaster(type: string, message: string): void;

  abstract redirect(url: any): void;

  abstract showHttpError(error: HttpErrorResponse): void;

}
