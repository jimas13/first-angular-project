import { Component, Output, EventEmitter } from '@angular/core';
import { IQuote } from '../quote-generator/quote';
import { QuoteService } from '../quote-service/quote.service';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent {
  title = 'app';
  refreshedQuote:IQuote;
  @Output() quoteEmit: EventEmitter<IQuote> = new EventEmitter<IQuote>();
  
  constructor(private _quoteService:QuoteService){}

  fetchNewQuote():void{
    this._quoteService.getQuote()
    .subscribe(newQuote =>{
      this.refreshedQuote = newQuote;
      console.log(this.refreshedQuote);      
    },
    err=> console.log(err)
  );
  }

  onClick():void{
    
    this.quoteEmit.emit(this.refreshedQuote);
    console.log("evenemitted");
  }
}
