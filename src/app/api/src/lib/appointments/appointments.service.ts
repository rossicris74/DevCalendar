import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from '../api/api.service';
import {
  GetAppointmentsSuccessResponse,
  getAppointmentsJsonDbEndpoint,
  getAppointmentsLocalEndpoint,
} from './endpoints/appointments.endpoint';
import { fromApiToClientAppointments } from './helper/appointments';
import { AppointmentsType } from './public-api';

@Injectable({
  providedIn: 'root',
})
export class AppointmentsService {
  constructor(private readonly api: ApiService) {}

  getAppointmentsLocal(): Observable<AppointmentsType.Appointments> {
    return this.api
      .readLocal<GetAppointmentsSuccessResponse>(getAppointmentsLocalEndpoint())
      .pipe(
        map((appointmentsAPI) =>
          appointmentsAPI.map(fromApiToClientAppointments)
        )
      );
  }

  getAppointmentsJsonDb(): Observable<AppointmentsType.AppointmentsAPI> {
    return this.api.readJsonDb<GetAppointmentsSuccessResponse>(
      getAppointmentsJsonDbEndpoint()
    );
  }
}
