public with sharing class PatientController {
    @AuraEnabled(cacheable=true)
    public static Integer getPatientsCount() {
        return [SELECT COUNT() from Patient__c];
    }
}