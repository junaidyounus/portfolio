import { LightningElement, wire } from 'lwc';
import getDoctorsCount from "@salesforce/apex/DoctorController.getDoctorsCount";

export default class ActiveDoctor extends LightningElement {
    @wire(getDoctorsCount)
    doctorsCount;
}