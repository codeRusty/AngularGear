import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, RequestOptionsArgs, Response, RequestMethod, Request, Connection, ConnectionBackend } from '@angular/http';
import * as Rx from 'rxjs';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { WEB_ERRORS } from '../../constants/app.constants'
import { StringExtentions } from '../../extentions/string.extentions';
import { BootstrapOptions } from '@angular/core/src/application_ref';
// import { LoaderService } from "../../Common/components/loader.service";


export enum Action { QueryStart, QueryStop };

@Injectable()
export class coreHTTP {

  // To check if the base URL is Set and wether to use it or not.
  _isBaseURLSet: boolean;

  // To save the base URL. And set it to all requests
  _baseURL: string;

  // wether to use token of not in the request header.
  _useTokenForHeaderReq: boolean;

  // store a token which user want.
  _token: string;

  //used to send the token in header(name of the token in the requests);
  _rqTokenString: string = "Token";

  // subscribe to the event to check when a request is being processed.
  process: EventEmitter<any> = new EventEmitter<any>();

  // subscribe to the event to listen if there is any authRequest in the app.
  authFailed: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _http: Http) {
    this._baseURL = StringExtentions.Empty;
    this._isBaseURLSet = false;
  }

  public setBaseURL(baseURL: string): void {
    this._isBaseURLSet = true;
    this._baseURL = baseURL;
  }

  public setToken(token: string): void {
    this._token = token;
    this._useTokenForHeaderReq = true;
  }

  private _buildAuthHeader(): string {
    return localStorage.getItem("userToken");
  }

  public get(url: string, options?: RequestOptionsArgs): Rx.Observable<Response> {
    return this._request(RequestMethod.Get, url, null, options);
  }

  public post(url: string, body: string, options?: RequestOptionsArgs): Rx.Observable<Response> {
    return this._request(RequestMethod.Post, url, body, options);
  }

  public put(url: string, body: string, options?: RequestOptionsArgs): Rx.Observable<Response> {
    return this._request(RequestMethod.Put, url, body, options);
  }

  public delete(url: string, options?: RequestOptionsArgs): Rx.Observable<Response> {
    return this._request(RequestMethod.Delete, url, null, options);
  }

  public patch(url: string, body: string, options?: RequestOptionsArgs): Rx.Observable<Response> {
    return this._request(RequestMethod.Patch, url, body, options);
  }

  public head(url: string, options?: RequestOptionsArgs): Rx.Observable<Response> {
    return this._request(RequestMethod.Head, url, null, options);
  }

  private _request(method: RequestMethod, url: string, body?: string, options?: RequestOptionsArgs): Rx.Observable<Response> {
    let URL = this._prepareURL(url);
    let requestOptions = new RequestOptions(Object.assign({
      method: method,
      url: url,
      body: body
    }, options));

    if (!requestOptions.headers) {
      requestOptions.headers = new Headers();
    }


    requestOptions.headers.set(this._rqTokenString, this._token)
    requestOptions.headers.set("Content-Type", 'application/json')

    this.showLoader('showLoader')

    return Rx.Observable.create((observer) => {
      // this.process.next(Action.QueryStart);
      this._http.request(new Request(requestOptions))
        .pipe(res => res)
        .subscribe(
          (res) => {
            observer.next(res);
            observer.complete();
          },
          (err) => {
            switch (err.status) {
              case 401:
                //intercept 401
                this.authFailed.next(err);
                observer.error(WEB_ERRORS.Error401);
                break;
              case 404:
                //intercept 401
                this.authFailed.next(err);
                observer.error(WEB_ERRORS.Error404);
                break;
              default:
                observer.error(err);
                break;
            }
          })

    })
  }

  private _prepareURL(url: string) {
    return (this._isBaseURLSet) ? this._baseURL + url : url;
  }


  hideLoader(text: string) {
    // console.log(text);
    // this.loaderService.hide();
  }
  showLoader(text: string) {
    // console.log(text);
    // this.loaderService.show();
  }

}
