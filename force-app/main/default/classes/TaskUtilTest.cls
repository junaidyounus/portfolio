@isTest
private class TaskUtilTest {
@isTest
    public static void testTaskPriorityNormal(){
        String pri = TaskUtil.getTaskPriority('NA');
        System.assertEquals('Normal', pri, 'Priority is normal');
    }
   @isTest 
    public static void testTaskHighPriority(){
        String pri = TaskUtil.getTaskPriority('CA');
        System.assertEquals('High', pri, 'Priority is high');
    }
    @isTest 
    public static void testTaskInvalidPriority(){
        String pri = TaskUtil.getTaskPriority('USA');
        System.assertEquals(null, pri, 'Priority is invalid');
    }
    
}