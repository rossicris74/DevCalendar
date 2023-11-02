import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { MainContainerModule } from './components/main-container/main-container.module';
import { TestStoreModule } from './root-store/src/test/test-store.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { DxDataGridModule } from 'devextreme-angular';
import { RoomsComponent } from './components/rooms/rooms.component';
import { ServiziComponent } from './components/servizi/servizi.component'


@NgModule({
  declarations: [AppComponent ,RoomsComponent, ServiziComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    DxDataGridModule,
    EffectsModule.forRoot([]),
    FontAwesomeModule,
    HttpClientModule,
    MainContainerModule,
    TestStoreModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      name: 'TryCalendar',
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
