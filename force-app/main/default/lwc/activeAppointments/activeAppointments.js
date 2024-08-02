import { LightningElement, wire } from 'lwc';
import todayAppointment from "@salesforce/apex/AppointmentController.todayAppointment";

export default class ActiveAppointments extends LightningElement {
    @wire(todayAppointment)
    appointmentsCount;
}