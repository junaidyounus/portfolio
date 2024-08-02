public with sharing class AppointmentController {
    @AuraEnabled(cacheable=true)
    public static Integer todayAppointment() {
        return [SELECT COUNT() from Appointment__c WHERE Status__c = 'Scheduled' AND AppointmentDateTime__c = TODAY];
    }
}