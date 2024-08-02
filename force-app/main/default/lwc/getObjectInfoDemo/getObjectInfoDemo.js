import { LightningElement , wire} from 'lwc';
import { getObjectInfo , getObjectInfos} from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'
export default class GetObjectInfoDemo extends LightningElement {
    defaultRecordTypeId
    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
   // property based approach
    objectInfo

    // function based appraoch
    /*
    objectInfo({data, error}){
        if(data){
            console.log(data);
            this.defaultRecordTypeId = data.defaultRecordTypeId
        }
        if(error){
            console.error(error)
        }
    }
    */
    objectInfos
    objectApiNames = [ACCOUNT_OBJECT, OPPORTUNITY_OBJECT]
    // pass object variable is a reactive mode because there is a chance first account and then opportunity data fetch and some time opposite of it 
    @wire(getObjectInfos,{objectApiName:'$objectApiNames'})
    objectInfosHandler({data,error}){
        if(data){
        console.log(data);
        this.objectInfos = data
    }
    if(error){
        console.error(error)
    }
  }
}