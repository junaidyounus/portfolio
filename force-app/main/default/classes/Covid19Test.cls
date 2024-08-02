@isTest
public class Covid19Test {
    @isTest
    static void treatPatientTest(){
        Covid19 karachi = new Covid19(10);
        Integer treated = karachi.getTreated();
        Assert.areEqual(10, treated, 'Treated count does not equal to actual value');
        
        Covid19 pakistan = new Covid19(112);
        treated = pakistan.getTreated();
        Assert.areEqual(112, treated, 'Treated count does not equal to actual value');
        
        Assert.areEqual(122, Covid19.recoveredInCountry, 'Treated count does not equal to actual value');
        
        karachi.treatPatient();
        treated = karachi.getTreated();
        System.assert(treated == 11, 'Treated count does not match');
        System.assert(Covid19.recoveredInCountry == 123, 'Treated count does not match');
    }
    
     @isTest
    static void treatPatientTestNegative(){
        Covid19 karachi = new Covid19(-10);
        Integer treated = karachi.getTreated();
        Assert.areEqual(0, treated, 'Treated count does not equal to actual value');
        

    }

}