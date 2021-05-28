import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {AbstractHttpService} from '../../../admin/models/http.model';
import {Observable} from 'rxjs';
import {JwtToken} from '../../../admin/models/jwt-token.model';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService extends AbstractHttpService {

  private readonly api = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient, private toastr: ToastrService, private router: Router) {
    super();
  }

  get<T>(endpoint: string, headers = this.headers): Observable<T> {
    return this.httpClient.get<T>(`${this.api}/${endpoint}`, {headers});
  }

  post<T>(endpoint: string, data: any, headers = this.headers): Observable<T> {
    return this.httpClient.post<T>(`${this.api}/${endpoint}`, data, {headers});
  }

  put<T>(endpoint: string, data: any, headers = this.headers): Observable<T> {
    return this.httpClient.put<T>(`${this.api}/${endpoint}`, data, {headers});
  }

  delete<T>(endpoint: string, headers = this.headers): Observable<T> {
    return this.httpClient.delete<T>(`${this.api}/${endpoint}`, {headers});
  }

  toaster(type: string, message: string) {
    switch (type) {
      case 'success':
        this.toastr.success(message);
        break;
      case 'info':
        this.toastr.info(message);
        break;
      case 'error':
        this.toastr.error(message);
        break;
      case 'warning':
        this.toastr.error(message);
        break;
      default:
        this.toastr.show(message);
    }
  }

  showHttpError(error: HttpErrorResponse) {
    this.toaster('error', error.error.message);
  }

  get headers() {
    const token = JSON.parse(localStorage.getItem('springToken')) as JwtToken;
    return new HttpHeaders({
      'Authorization': `${token?.tokenType} ${token?.accessToken}`,
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
  }

  redirect(url: any): void {
    this.router.navigateByUrl(`/feegn/${url}`);
  }


}
