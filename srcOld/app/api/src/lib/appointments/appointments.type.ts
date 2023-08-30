export type Appointments = Appointment[];

export type Appointment = {
  text: string;
  priorityId: number;
  startDate: Date;
  endDate: Date;
  recurrenceRule?: string;
};

export type AppointmentsAPI = AppointmentAPI[];
export type AppointmentAPI = {
  text: string;
  priorityId: number;
  startDate: string;
  endDate: string;
  recurrenceRule?: string;
};
