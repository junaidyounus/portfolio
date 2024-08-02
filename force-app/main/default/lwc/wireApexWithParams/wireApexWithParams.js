import { LightningElement,wire} from 'lwc';
import filterAccountByType from '@salesforce/apex/AccountControllerForWireApex.filterAccountByType'

export default class WireApexWithParams extends LightningElement {
    selectedType=''
    @wire(filterAccountByType, {type:'$selectedType'})
    filteredAccounts
    get typeOptions(){
        return [
            {label:"Customer - Channel", value:"Customer - Channel"},
            {label:"Customer - Direct", value:"Customer - Direct"}
        ]
    }
    typeHandler(event){
        this.selectedType = event.target.value
    }
}