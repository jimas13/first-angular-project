import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { QuoteGeneratorComponent } from './quote-generator/quote-generator.component';
import { QuoteService } from './quote-service/quote.service';


@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    QuoteGeneratorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
