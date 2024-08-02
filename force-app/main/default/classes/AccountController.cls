public class AccountController {
    @AuraEnabled(cacheable=true)

    public static List<Account> getAccountList(){
        return [SELECT Id, Name, Type, Industry FROM Account LIMIT 5];
    }
    @AuraEnabled(cacheable=true)
    public static List<Account> filterAccountByType(String type){
        return [SELECT Id, Name, Type FROM Account WHERE Type=:type LIMIT 5];
    }

    public static void updateAvgCaseResolutionDays(Id accountIds){
        Map<Id, Integer> accountTotalCaseMap = new Map<Id, Integer>();
        Map<Id, Integer> accountTotalCaseDaysMap = new Map<Id, Integer>();
        Integer totalDays = 0, totalCases = 0;
        // retrive all the cases for this account
        // get resolution days for each account (ClosedDate - CreatedDate)
        for(Case caseObj : [SELECT Id, CreatedDate, ClosedDate, AccountId
                             FROM Case
                             WHERE IsClosed=true
                            	AND AccountId =: accountIds]){
            // increase number of cases
            totalCases++;
            // get duration in days and add it to totalDays
            totalDays += caseObj.CreatedDate.date().daysBetween(caseObj.ClosedDate.date());
        }
        Decimal resolutionDays = totalDays/totalCases;
        // update account object
        Account acc = new Account(Id=accountIds, Avg_Case_Resolution_Days__c = resolutionDays);
        update acc;
    }
}