import { LightningElement } from 'lwc';

export default class CaseSelector extends LightningElement {

    caseOptions = [/* List of case options */];

    handleCaseSelection(event) {
        const selectedCaseNumber = event.detail.value;
        this.dispatchEvent(new CustomEvent('caseselected', { detail: selectedCaseNumber }));
    }
}