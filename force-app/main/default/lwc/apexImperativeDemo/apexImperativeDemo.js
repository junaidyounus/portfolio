import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/AccountControllerForWireApex.getAccountList'

export default class ApexImperativeDemo extends LightningElement {
    accounts
    handleChange(){
        getAccountList().then(result=>{
            console.log(result);
            this.accounts = result 

    }).catch(error=>{
        console.log(error);
    })
    }
}