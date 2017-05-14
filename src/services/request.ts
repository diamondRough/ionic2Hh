import { Injectable } from "@angular/core/src/di/metadata";
import { Http, Response, RequestOptionsArgs } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx"


@Injectable()
export class Request{

  constructor(private http: Http) {

  }

  private before(url, options) {
    options || (options = {});
    options.headers || (options.headers = {});
    options.headers["X-CLIENT"] = "WEB-TEACHER";
    options.headers["X-TOKEN"] = "";
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    this.before(url, options);
    return this.http.get(url, options);
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    this.before(url, options);
    return this.http.post(url, body, options);
  }

  put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    this.before(url, options);
    return this.http.put(url, body, options);
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    this.before(url, options);
    return this.http.delete(url, options);
  }

}
