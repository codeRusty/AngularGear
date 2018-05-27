import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { coreHTTP } from './common/lib/core/coreHTTP.service';
import { AppCommonModule } from './common/commom.module';
import { RightBarComponent } from './components/right-bar/right-bar.component';
import { LeftViewComponent } from './components/left-view/left-view.component';

@NgModule({
  declarations: [
    AppComponent,
    RightBarComponent,
    LeftViewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppCommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
