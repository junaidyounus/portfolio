import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountContactController.getAccounts';
import getContacts from '@salesforce/apex/AccountContactController.getContacts';

export default class AccountContactSelector extends LightningElement {
    accountOptions = [];
    contactOptions = [];
    selectedAccount;
    selectedContacts = [];
    showContacts = false;

    @wire(getAccounts)
    wiredAccounts({ error, data }) {
        if (data) {
            this.accountOptions = data.map(account => ({
                label: account.Name,
                value: account.Id
            }));
        } else if (error) {
            console.error('Error fetching accounts', error);
        }
    }

    handleAccountChange(event) {
        this.selectedAccount = event.detail.value;
        this.fetchContacts(this.selectedAccount);
    }

    fetchContacts(accountId) {
        getContacts({ accountId })
            .then(data => {
                this.contactOptions = data.map(contact => ({
                    label: contact.Name,
                    value: contact.Id
                }));
                this.showContacts = true;
            })
            .catch(error => {
                console.error('Error fetching contacts', error);
                this.showContacts = false;
            });
    }

    handleContactChange(event) {
        this.selectedContacts = event.detail.value;
    }
}