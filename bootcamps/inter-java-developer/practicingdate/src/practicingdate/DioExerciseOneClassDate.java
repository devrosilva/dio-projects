package practicingdate;
import java.util.Date;
import java.util.Scanner;

public class DioExerciseOneClassDate {
	public static void main(String args[]) {
		Scanner userInput = new Scanner(System.in);
		Long auxVar;
	
		System.out.println("What is your birth date in Milliseconds: ");
		auxVar = Long.parseLong(userInput.nextLine());
		
		Date fixedDate = new Date(1273892400000L);
		Date birthDate = new Date(auxVar);
		
		if(birthDate.after(fixedDate)) {
			System.out.println("You've born after 2010/05/15.");
		}
		else {
			System.out.println("You've born before 2010/05/15.");
		}
		
	}
}

