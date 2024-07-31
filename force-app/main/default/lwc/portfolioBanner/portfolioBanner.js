import { LightningElement,wire, api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import FULLNAME from '@salesforce/schema/Portfolio__c.Full_Name__c'
import COMPANY_LOCATION from '@salesforce/schema/Portfolio__c.CompanyLocation__c'
import COMPANY_NAME from '@salesforce/schema/Portfolio__c.CompanyName__c'
import DESIGNATION from '@salesforce/schema/Portfolio__c.Designation__c'

export default class PortfolioBanner extends LightningElement {
   @api recordId //= 'a0FJ40000000HSUMA2'
   @api linkedinUrl //= "https://www.linkedin.com/in/junaidsoomro"
   @api twitterUrl //= "https://www.twitter.com/"
   @api githubUrl //= "https://github.com/junaidyounus"
   @api youtubeUrl //= "https://www.youtube.com/@junaidyounus"
   @api trailheadUrl //= "https://www.salesforce.com/trailblazer/junaidsoomro"
   @api blogUrl //= "https://www.hulefa.com"


    userPic = `${PortfolioAssets}/PortfolioAssets/userPic1.png`
    linkedin = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`
    twitter = `${PortfolioAssets}/PortfolioAssets/Social/twitter.svg`
    github = `${PortfolioAssets}/PortfolioAssets/Social/github.svg`
    youtube = `${PortfolioAssets}/PortfolioAssets/Social/youtube.svg`
    trailhead = `${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`
    blog = `${PortfolioAssets}/PortfolioAssets/Social/blogger.svg`

    

    @wire(getRecord, {recordId:'$recordId', fields:[FULLNAME,COMPANY_LOCATION,COMPANY_NAME,DESIGNATION]})
    portfolioData
    // portfolioHandler({data,error}){
    //     if(data){
    //         console.log("record data", JSON.stringify(data) );
    //     }
    //     if(error){
    //         console.error(error);
    //     }
    // }
    get fullName(){
        return getFieldValue(this.portfolioData.data, FULLNAME)
    }
    get companyLocation(){
        return getFieldValue(this.portfolioData.data, COMPANY_LOCATION)
    }
    get companyName(){
        return getFieldValue(this.portfolioData.data, COMPANY_NAME)
    }
    get designation(){
        return getFieldValue(this.portfolioData.data, DESIGNATION)
    }
}