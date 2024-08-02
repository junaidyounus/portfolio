import { LightningElement,wire } from 'lwc';
import getPatientsCount from "@salesforce/apex/PatientController.getPatientsCount";

export default class AdmittedPatients extends LightningElement {
    @wire(getPatientsCount)
    patientsCount;
}