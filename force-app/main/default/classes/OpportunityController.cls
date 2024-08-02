public class OpportunityController {
    
    public static void updateOpportunity(List<Id> oppIds){
        List<Opportunity> opps = [SELECT Id, Amount, Profile__c FROM Opportunity WHERE Id IN: oppIds];
        for(Opportunity opp : opps){
            if(opp.Amount == null){
                 opp.Profile__c = 'Low';
            }
            else if(opp.Amount <=10000){
                opp.Profile__c = 'Low';
            } 
            else if (opp.Amount >= 50000){
                opp.Profile__c = 'High';
            } 
            else{
                 opp.Profile__c = 'Medium';
            } 
           
        }
         update opps;
    }

}