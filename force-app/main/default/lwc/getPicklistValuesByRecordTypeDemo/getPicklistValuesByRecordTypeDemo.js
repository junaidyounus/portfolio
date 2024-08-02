import { LightningElement , wire} from 'lwc';
import { getPicklistValuesByRecordType, getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'

export default class GetPicklistValuesByRecordTypeDemo extends LightningElement {
    selectedIndustry
    selectedRating
    ratingOptions
    industryOptions
    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    objectInfo
    
    @wire(getPicklistValuesByRecordType, {recordTypeId:'$objectInfo.data.defaultRecordTypeId', objectApiName: ACCOUNT_OBJECT})
    picklistHandler({data, error}){
        if(data){
            console.log(data);
            this.industryOptions = this.generatePicklist(data.picklistFieldValues.Industry);
            this.ratingOptions = this.generatePicklist(data.picklistFieldValues.Rating);
        }
        if(error){
            console.error(error);
        }
    }

    generatePicklist(data){
        return data.values.map(item=>({ "label":item.label, "value": item.value}))
    }

    handleChange(event){
        const {name, value} = event.target;
        console.log(name +'==>'+ value);
        if(name === 'industry'){
            this.selectedIndustry = value
        }

        if(name === 'rating'){
            this.selectedRating = value
        }
    }
}