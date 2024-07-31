import { LightningElement , api} from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'

export default class PortfolioUserStats extends LightningElement {

   trailheadRankImg //= 
   @api badges //='382+'
   @api points //='123,120+'
   @api trails // ='62+'
   @api rank

   renderedCallback(){
    if(this.rank){
         let url = `${PortfolioAssets}/PortfolioAssets/Ranks/${this.rank}.png`
         this.trailheadRankImg = url
    }
   }
}