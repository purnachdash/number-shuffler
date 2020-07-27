import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumberBlocksComponent } from './number-blocks/number-blocks.component';
import { NumberBlocksVerticalComponent } from './number-blocks-vertical/number-blocks-vertical.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberBlocksComponent,
    NumberBlocksVerticalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
