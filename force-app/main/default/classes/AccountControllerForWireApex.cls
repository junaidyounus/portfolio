public with sharing class AccountControllerForWireApex {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return [SELECT Id, Name, Type, Industry FROM Account LIMIT 5];
    }
    @AuraEnabled(cacheable=true)
    public static List<Account> filterAccountByType(String type){
        return [SELECT Id, Name, Type FROM Account WHERE Type=:type LIMIT 5];
    }
}