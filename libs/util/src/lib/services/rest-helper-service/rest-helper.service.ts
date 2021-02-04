import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export type ExtraOptionsType =
  | {
      headers?: Map<string, string>;
      params?: Map<string, string>;
    }
  | undefined;

export type KeyValueType = {
  [key: string]: unknown;
};
type HTTPClientOptionType = {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  observe?: 'body';
  params?:
    | HttpParams
    | {
        [param: string]: string | string[];
      };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
};
type HTTPExtraPramsType = {
  headers?: HttpHeaders;
  params?: HttpParams;
};

@Injectable({
  providedIn: 'root',
})
export class RestHelperService {
  constructor(private http: HttpClient) {}
  public post<T>(
    url: URL,
    body: KeyValueType,
    options?: ExtraOptionsType
  ): Observable<T> {
    const optionObject: HTTPClientOptionType = {
      ...this.reqOptions(options),
    };
    return this.http.post<T>(url.toString(), body, optionObject);
  }
  public put<T>(
    url: URL,
    body: KeyValueType,
    options?: ExtraOptionsType
  ): Observable<T> {
    const optionObject: HTTPClientOptionType = {
      ...this.reqOptions(options),
    };
    return this.http.put<T>(url.toString(), body, optionObject);
  }

  public delete<T>(
    url: URL,
    body?: KeyValueType,
    options?: ExtraOptionsType
  ): Observable<T> {
    const optionObject: HTTPClientOptionType = {
      ...this.reqOptions(options),
    };
    return this.http.delete<T>(url.toString(), optionObject);
  }

  public get<T>(url: URL, options?: ExtraOptionsType): Observable<T> {
    const optionObject: HTTPClientOptionType = {
      ...this.reqOptions(options),
    };
    return this.http.get<T>(url.toString(), optionObject);
  }

  private reqOptions(options: ExtraOptionsType): HTTPExtraPramsType {
    const {
      params: requestParams = new Map<string, string>(),
      headers: requestHeaders = new Map<string, string>(),
    } = options ? options : {};
    const headers = this.setHttpHeaders(requestHeaders);
    const params = this.setHttpParams(requestParams);
    return { headers, params };
  }
  private setHttpParams(paramsMap: Map<string, string>): HttpParams {
    let httpParams = new HttpParams();
    paramsMap.forEach((value, key) => {
      httpParams = httpParams.append(key, value);
    });
    return httpParams;
  }
  private setHttpHeaders(headersMap: Map<string, string>): HttpHeaders {
    let headers = new HttpHeaders();
    headersMap.forEach((value, key) => {
      headers = headers.append(key, value);
    });
    return headers;
  }
}
