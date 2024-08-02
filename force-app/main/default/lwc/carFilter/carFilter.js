import { LightningElement , wire} from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import CAR_OBJECT from '@salesforce/schema/Car__c'

// Car Schema
import CATEGORY_FIELD from '@salesforce/schema/Car__c.Category__c'
import MAKE_FIELD from '@salesforce/schema/Car__c.Make__c'

// Constants
const CATEGORY_ERROR = 'Error loading categories'
const MAKE_ERROR = 'Error loading make type'

// Lightning Message Service
 import {publish, MessageContext } from 'lightning/messageService'
 import CARS_FILTERED_MESSAGE from '@salesforce/messageChannel/CarsFiltered__c'

export default class CarFilter extends LightningElement  {
    filters={
        searchKey:'',
        maxPrice:999999

    }

    categoryError = CATEGORY_ERROR
    makeError = MAKE_ERROR
    timer

    // Load context for LMS 
    @wire(MessageContext )
     messageContext

    /** Fetching Category PickList */
    @wire(getObjectInfo, {objectApiName: CAR_OBJECT})
    carObjectInfo

    @wire(getPicklistValues, {
        recordTypeId:'$carObjectInfo.data.defaultRecordTypeId',
        fieldApiName: CATEGORY_FIELD
    })categories

        /** Fetching Make PickList */
 
        @wire(getPicklistValues, {
            recordTypeId:'$carObjectInfo.data.defaultRecordTypeId',
            fieldApiName: MAKE_FIELD
        })makeType


    handleSearchKeyChange(event){
        console.log(event.target.value);
        this.filters = {...this.filters, "searchKey":event.target.value}
        this.sendDataToCarList()
    }
    handleMaxPriceChange(event){
        console.log(event.target.value);
        this.filters = {...this.filters, "maxPrice":event.target.value}
        this.sendDataToCarList()
    }
    handleCheckbox(event){
        if(!this.filters.categories){
            const categories = this.categories.data.values.map(item=>item.value)
            const makeType = this.makeType.data.values.map(item=>item.value)
            this.filters = {...this.filters, categories, makeType}
        }
        const {name, value} = event.target.dataset 
        // console.log("name", name);
        // console.log("value", value);
        if(event.target.checked){
            if(!this.filters[name].includes(value)){
                this.filters[name] = [...this.filters[name], value]
            }
        }else{
            this.filters[name] = this.filters[name].filter(item=>item !==value)
        }
        this.sendDataToCarList()
    }

    sendDataToCarList(){
        window.clearTimeout(this.timer)
        this.timer = window.setTimeout(()=>{
            publish(this.messageContext, CARS_FILTERED_MESSAGE, {
                // first filters is the field name from message channel field name second filters name is local property
                filters:this.filters
            })
        },400)

    }
}