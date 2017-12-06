import { Component, Input } from '@angular/core';
import { IQuote } from './quote';
import { OnInit } from '@angular/core';
import { QuoteService } from '../quote-service/quote.service';
import { error } from 'util';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
@Component({
  selector: 'app-quote',
  templateUrl: './quote-generator.component.html',
  styleUrls : ['./quote-generator-styles.css']
})
export class QuoteGeneratorComponent implements OnInit, OnChanges{
  
  myQuote: IQuote;
  quote:string;
  author:string;
  errMessage: string;
  @Input() changeQuote:IQuote;

  constructor(private _quoteService:QuoteService){}

  updateQuote(newQuote:IQuote):void{
    this.myQuote = newQuote;
  }

  ngOnChanges(): void {
    this.updateQuote(this.changeQuote);
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