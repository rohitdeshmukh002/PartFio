import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderpageComponent } from './headerpage/headerpage.component';
import { DevelopmentComponent } from './development/development.component';
import { PlatfioComponent } from './platfio/platfio.component';
import { MiddleblockComponent } from './middleblock/middleblock.component';
import { FounderComponent } from './founder/founder.component';
import { FrequentComponent } from './frequent/frequent.component';
import { FormsModule } from '@angular/forms';
import { SecondLastComponent } from './second-last/second-last.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderpageComponent,
    DevelopmentComponent,
    PlatfioComponent,
    MiddleblockComponent,
    FounderComponent,
    FrequentComponent,
    SecondLastComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
