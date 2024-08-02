public with sharing class RefreshContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList() {
        return [SELECT Id, FirstName, LastName, Email FROM Contact LIMIT 10];

    }
}