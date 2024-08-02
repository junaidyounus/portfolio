import { LightningElement, wire, track } from 'lwc';
import getRecentContacts from '@salesforce/apex/ContactController.getRecentContacts';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
const columns = [
    { label: 'First Name', fieldName: 'FirstName' },
    { label: 'Last Name', fieldName: 'LastName' },
    { label: 'Email', fieldName: 'Email', type: 'email' },
    {label: 'Account Name',fieldName:'AccountId'}
];

export default class ContactManager extends LightningElement {
    @track contacts;
    columns = columns;

    @wire(getRecentContacts)
    wiredContacts({ error, data }) {
        if (data) {
            this.contacts = data;
        } else if (error) {
            console.error('Error retrieving recent contacts: ', error);
        }
    }

    handleSuccess(event) {
        console.log(event.detail.id);
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'Contact created successfully',
                variant: 'success'
            })
        );
        // Refresh the recent contacts data
        return refreshApex(this.contacts);
    }
}