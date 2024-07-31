import { LightningElement, api } from 'lwc';

export default class PortfolioUserDetailsAndStatsWrapper extends LightningElement {
    @api recordId //='a0FJ40000000HSUMA2'
    @api objectApiName //='Portfolio__c'
    @api rank
    @api badges
    @api points
    @api trails
    @api resumeUrl
}