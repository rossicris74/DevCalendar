import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { MainContainerModule } from './components/main-container/main-container.module';
// import { TestStoreModule } from './root-store/src/test/test-store.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { DxDataGridModule } from 'devextreme-angular';
import { ClientiModule } from './components/clienti/clienti.module';
import { RoomsModule } from './components/rooms/rooms.module';
import { ServiziModule } from './components/servizi/servizi.module'
import { TestStoreModule } from './root-store/src/test/test-store.module';
import { RoomsStoreModule } from './root-store/src/rooms/rooms-store.module';
import { ServiziStoreModule } from './root-store/src/servizi/servizi-store.module';


@NgModule({
  declarations: [AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ClientiModule,
    DxDataGridModule,
    EffectsModule.forRoot([]),
    FontAwesomeModule,
    HttpClientModule,
    MainContainerModule,
    RoomsModule,
    RoomsStoreModule,
    ServiziStoreModule,
    TestStoreModule,
    ServiziModule,
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
