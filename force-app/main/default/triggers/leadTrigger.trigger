trigger leadTrigger on Lead(before insert, before update){
    switch on Trigger.operationType{
        when BEFORE_INSERT{
            for(Lead leadRecord : Trigger.new){
            if(String.isBlank(leadRecord.LeadSource)){
                leadRecord.LeadSource = 'Other';
              }
            if(String.isBlank(leadRecord.Industry)){
               leadRecord.addError('Industry could not to be blank!');
              }  
            }
        }
        when BEFORE_UPDATE{
            for(Lead leadRecord : Trigger.new){
            if(String.isBlank(leadRecord.LeadSource)){
            leadRecord.LeadSource = 'Other';
               }
            if((leadRecord.Status == 'Closed - Converted' || leadRecord.Status == 'Closed - Not Converted') && Trigger.oldMap.get(leadRecord.id).Status == 'Open - Not Contacted'){
            leadRecord.Status.addError('You cannot directly close an open lead');
               }
         
            }  
          }
       }
    }