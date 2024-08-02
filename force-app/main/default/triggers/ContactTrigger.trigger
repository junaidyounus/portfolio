trigger ContactTrigger on Contact(after insert, after update, after delete, after undelete){
    switch on Trigger.operationType{
        WHEN AFTER_INSERT{
            Set<Id> accountIds = new Set<Id>();
            for(Contact con : Trigger.new){
                if(String.isNotBlank(con.AccountId)){
                    // write automation logic here
                    accountIds.add(con.AccountId);
                    String accountId = con.AccountId;
                 }
            }
            List<AggregateResult> results = [SELECT AccountId, COUNT(Id) totalContacts FROM Contact WHERE Active__c = true AND AccountId IN  :accountIds GROUP BY AccountId];
            List<Account> accountsToUpdate = new List<Account>(); 
            for(AggregateResult result : results){
                        String accId = String.valueOf(result.get('AccountId'));
                        Integer totalContacts = Integer.valueOf(result.get('totalContacts'));
                        Account acc = new Account(Id=accId, Active_Contacts__c = totalContacts);
                        accountsToUpdate.add(acc);
                        
                    }
            update accountsToUpdate;
        }
        WHEN AFTER_UPDATE{
             Set<Id> accountIds = new Set<Id>();
            for(Contact con : Trigger.new){
                if(String.isNotBlank(con.AccountId) && Trigger.oldMap.get(con.Id).Active__c != con.Active__c){
                    // write automation logic here
                    accountIds.add(con.AccountId);
                    String accountId = con.AccountId;
                }else if(Trigger.oldMap.get(con.Id).Active__c != con.Active__c){
                    accountIds.add(con.AccountId);
                    accountIds.add(Trigger.oldMap.get(con.Id).AccountId);
                }
            }
            List<AggregateResult> results = [SELECT AccountId, COUNT(Id) totalContacts FROM Contact WHERE Active__c = true AND AccountId IN  :accountIds GROUP BY AccountId];
            List<Account> accountsToUpdate = new List<Account>(); 
            for(AggregateResult result : results){
                        String accId = String.valueOf(result.get('AccountId'));
                        Integer totalContacts = Integer.valueOf(result.get('totalContacts'));
                        Account acc = new Account(Id=accId, Active_Contacts__c = totalContacts);
                        accountsToUpdate.add(acc);
                        
                    }
            update accountsToUpdate;
        }
    }
}