import { LightningElement , wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountControllerForLWC.getAccountList';

export default class ApexLWCWireDatatable extends LightningElement {
 /*
    columns = [
    {
        label:'Account Name',
        fieldName:'Name'
    },
    {
        label:'State',
        fieldName:'BillingState',
        type:'Address'
    }
  ]
  */
  columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Street', fieldName: 'BillingStreet' },
    { label: 'State', fieldName: 'BillingState' },
    { label: 'Postal Code', fieldName: 'BillingPostalCode' },
    { label: 'City', fieldName: 'BillingCity' },
    { label: 'Country', fieldName: 'BillingCountry' }
   
    
];

    displaytable;
@wire(getAccountList)
reatedData({data,error}){
    console.log('data',data);
    if(data){
        this.displaytable=data;
    }
    else if(error){
        console.log('Found error!');
    }
}

}