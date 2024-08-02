import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

const COLUMNS = [
    // Define columns for the comments datatable
];

export default class CaseComments extends LightningElement {
    @api recordId;
    comments = [];
    columns = COLUMNS;
    selectedRows = [];

    @wire(getRecord, { recordId: '$recordId', fields: [] })
    wiredRecord({ error, data }) {
        if (data) {
            this.comments = data.fields.CaseComments.value;
        } else if (error) {
            console.error('Error loading record:', error);
        }
    }

    handleRowSelection(event) {
        this.selectedRows = event.detail.selectedRows;
    }

    handleShowSelected() {
        // Dispatch event to send selected comments to next component
        this.dispatchEvent(new CustomEvent('showselected', { detail: this.selectedRows }));
    }
}