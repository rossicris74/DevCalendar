import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DevCalendarModule} from '../app/components/dev-calendar/dev-calendar-module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [DevCalendarModule, BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
