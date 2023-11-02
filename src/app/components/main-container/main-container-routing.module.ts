import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevCalendarComponent } from '../dev-calendar/dev-calendar.component';
import { ExampleCompOneComponent } from '../../base/components/example-comp-one/example-comp-one.component';
import { RoomsComponent } from '../rooms/rooms.component';
import { ServiziComponent } from '../servizi/servizi.component';


const routes: Routes = [
  { path: '', component: DevCalendarComponent },
  { path: 'home', component: DevCalendarComponent },
  { path: 'folders', component: ExampleCompOneComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'services', component: ServiziComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class MainContainerRoutingModule {}