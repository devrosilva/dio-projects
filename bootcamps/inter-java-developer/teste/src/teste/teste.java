package teste;

public class teste {
	public static void main(String args[]) {
		Integer a = 1735;
		
		String string = a.toString();
		int firstHalf = 0;
		int secondHalf = 0;
		
		for(int i = 0; i < string.length(); i++) {
			if( i < (string.length()/2) ) {
				firstHalf += string.charAt(i);
			}
			else {
				secondHalf += string.charAt(i);
			}
		}
		
		if(firstHalf == secondHalf) {
			System.out.println("Iguais");
		}
		else {
			System.out.println("Diferentes");
		}
	}
}
