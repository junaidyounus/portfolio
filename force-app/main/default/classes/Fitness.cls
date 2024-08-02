public class Fitness {
    
    public static Decimal calculateBMI(Decimal weight, Decimal height){
        if(height <= 0 || weight < 0){
            return -1;
        }
        decimal result = weight / (height*height);
        return result;
    }
    
        public static Decimal calculatePace(Decimal distance, Decimal minutes){
            if(distance < 0 || minutes <= 0){
                return -1;
            }
        Decimal hr = minutes/60;
        Decimal pace = distance/hr;
        return pace;
    }

}