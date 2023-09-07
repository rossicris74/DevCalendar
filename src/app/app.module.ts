import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainContainerModule} from './components/main-container/main-container.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {TestStoreModule} from './root-store/src/test/test-store.module'
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [AppComponent],
  imports: [TestStoreModule,FontAwesomeModule,MainContainerModule, BrowserModule, HttpClientModule,StoreModule.forRoot({}),],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
