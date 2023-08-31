import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainContainerModule} from './components/main-container/main-container.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [MainContainerModule, BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
