import { Appointment, AppointmentAPI } from '../appointments.type';
export function fromApiToClientAppointments(
  appointmentAPI: AppointmentAPI
): Appointment {
  return {
    text: appointmentAPI.text,
    priorityId: appointmentAPI.priorityId,
    startDate: new Date(appointmentAPI.startDate),
    endDate: new Date(appointmentAPI.endDate),
    recurrenceRule: appointmentAPI.recurrenceRule
      ? appointmentAPI.recurrenceRule
      : '',
  };
}
