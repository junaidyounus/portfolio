public class TaskUtil{
    public static String getTaskPriority(String LeadState){
        // Valid condition
        if(String.isBlank(LeadState) || LeadState.length() > 2){
            return null;
        }
        String taskPriority;
        if(LeadState == 'CA'){
            taskPriority = 'High';
        }else
        {
            taskPriority = 'Normal';
        }
        return taskPriority;
    }
}