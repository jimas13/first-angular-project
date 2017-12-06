import { Component } from '@angular/core';
import { IQuote } from './quote';
import { OnInit } from '@angular/core';
import { QuoteService } from '../quote-service/quote.service';
import { error } from 'util';
@Component({
  selector: 'app-quote',
  templateUrl: './quote-generator.component.html'
})
export class QuoteGeneratorComponent implements OnInit{
  myQuote: IQuote;
  quote:string;
  author:string;
  errMessage: string;
  constructor(private _quoteService:QuoteService){}

  ngOnInit():void{
    this._quoteService.getQuote()
      .subscribe(newQuote =>{
        //console.log(newQuote);
        //console.log(this.myQuote);
        this.myQuote = newQuote;
        //this.quote = newQuote.quoteText;
        //this.author = newQuote.quoteAuthor;
        
      },
      err=> console.log(err)
      //error => this.errMessage = <any>error
    );
  }
}