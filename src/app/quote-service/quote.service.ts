import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'
import { IQuote } from '../quote-generator/quote';

@Injectable()
export class QuoteService {
    //private _quoteUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?';
    private _quoteUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    
    constructor(private _http: HttpClient) { }

    getQuote(): Observable<IQuote> {
        return this._http.get<IQuote>(this._quoteUrl)
        //.map(res => res.json())
        .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }
}
