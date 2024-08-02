import { LightningElement , wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountControllerForLWC.getAccountList';

export default class ApexWireDemoAccount extends LightningElement {
 
@wire(getAccountList)
accounts

}