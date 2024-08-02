import { LightningElement , wire} from 'lwc';
import Id from '@salesforce/user/Id'
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/User.Email'
import {getRecord} from 'lightning/uiRecordApi'
const fields = [NAME_FIELD, EMAIL_FIELD]
export default class WireDemoUserDetail extends LightningElement {
    userId = Id
    //0055j000006lofVAAQ
// getRecord is the module which is importing from lightning/uiRecordApi
// Configration is mandatory to pass and it would be in form of object
// Make sure fields should be imported not use hard code because some time some one change the field name it will show error
    userDetail
    fields = fields
    @wire(getRecord,{recordId:'$userId', fields})
    userDetailHandler({data,error}){
        if(data){
            this.userDetail = data.fields
        }
        if(error){
            console.error(error);
        }
    }
    @wire(getRecord,{recordId:'$userId', fields})
    userDetailProperty
}