import { LightningElement,wire, api } from 'lwc';
import {getRecord , getFieldValue, getFieldDisplayValue} from 'lightning/uiRecordApi'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import OWNER_NAME_FIELD from '@salesforce/schema/Account.Owner.Name'
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class GetRecordDemo extends LightningElement {
    name
    owner
    annualRevenue 
    @api recordId;
     @wire(getRecord,{recordId:'$recordId', 
     fields:[ NAME_FIELD, OWNER_NAME_FIELD, ANNUAL_REVENUE_FIELD]})

    // @wire(getRecord,{recordId:'$recordId', 
    // layoutTypes:['full'], modes:['View']})
    accountHandler({data}){
        if(data){
            console.log(data);
            this.name = getFieldValue(data, NAME_FIELD)
            this.owner = getFieldValue(data, OWNER_NAME_FIELD)
            this.annualRevenue = getFieldDisplayValue(data, ANNUAL_REVENUE_FIELD)

        }
    }
}