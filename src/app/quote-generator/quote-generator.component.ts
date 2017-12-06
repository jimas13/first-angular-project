import { Component } from '@angular/core';
import { IQuote } from './quote';
import { OnInit } from '@angular/core';
import { QuoteService } from '../quote-service/quote.service';
import { error } from 'util';
import { Input } from '@angular/core/src/metadata/directives';
@Component({
  selector: 'app-quote',
  templateUrl: './quote-generator.component.html',
  styleUrls : ['./quote-generator-styles.css']
})
export class QuoteGeneratorComponent implements OnInit{
  myQuote: IQuote;
  quote:string;
  author:string;
  errMessage: string;

  constructor(private _quoteService:QuoteService){}

  updateQuote(newQuote:IQuote):void{
    console.log("update quote called");
    //this.myQuote = newQuote;
  }
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