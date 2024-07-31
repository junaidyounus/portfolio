import { LightningElement, wire , api } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';

const COLUMNS = [
    {label:'Educatoin', fieldName:'Education'},
    {label:'Institution Name', fieldName:'InstitutionName'},
    {label:'Passing Year', fieldName:'PassingYear'}

]

export default class PortfolioEducation extends LightningElement {
    tableData = []
    columns = COLUMNS
    @api recordId
    @wire(getRelatedListRecords, {
        parentRecordId: '$recordId',
        relatedListId:'Educations__r',
        fields:['Education__c.InstitutionName__c', 'Education__c.Title__c', 'Education__c.PassingYear__c'],
        sortBy:['Education__c.PassingYear__c']
    })EducationHandler({data,error}){
        if(data){
            console.log("Education Data", JSON.stringify(data));
            this.formatData(data)
        }
        if(error){
            console.error("Education Error", error);
        }
    }

    formatData(data){
        this.tableData = data.records.map(item=>{
            let Id = item.Id
            const {InstitutionName__c, Title__c, PassingYear__c} = item.fields
            let Education = Title__c.value
            let InstitutionName = InstitutionName__c.value
            let PassingYear = PassingYear__c.value

            return {Id, Education, InstitutionName, PassingYear}

        })
        
    }
}