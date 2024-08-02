public with sharing class AccountControllerForLWC {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return [SELECT Id,Name,BillingStreet,BillingState,BillingPostalCode,BillingCountry,BillingCity FROM Account];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> findAccounts(String searchKey){
        String key = '%'+searchKey+'%';
        return [SELECT Id, Name, Type, Industry FROM Account WHERE Name Like :key LIMIT 5];
    }
}