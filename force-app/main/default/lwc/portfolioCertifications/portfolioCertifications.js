import { LightningElement, wire , api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import SF_CERT_FIELDS from '@salesforce/schema/Portfolio__c.SalesforceCertifications__c'
import OTHER_CERT_FIELDS from '@salesforce/schema/Portfolio__c.OtherCertifications__c'
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'

export default class PortfolioCertifications extends LightningElement {

    certLogo = `${PortfolioAssets}/PortfolioAssets/cert_logo.png`
    @api recordId
    sfCertsList = []
    otherCertsList = []
    @wire(getRecord, {
        recordId:'$recordId',
        fields:[SF_CERT_FIELDS,OTHER_CERT_FIELDS]
    })CertificationHandler({data,error}){
        if(data){
            console.log("Certifications Data", JSON.stringify(data));
            this.formatData(data)
        }
        if(error){
            console.error("Certifications Error", error);
        }
    }

    formatData(data){
       const {SalesforceCertifications__c, OtherCertifications__c } = data.fields
       this.sfCertsList = SalesforceCertifications__c ? SalesforceCertifications__c.value.split(';').map(item=>{
           return `Salesforce Certified ${item}`
       }):[]

       this.otherCertsList = OtherCertifications__c ? OtherCertifications__c.value.split(','):[]
    }
}