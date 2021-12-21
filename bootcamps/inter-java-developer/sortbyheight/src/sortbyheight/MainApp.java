package sortbyheight;

public class MainApp {
	public static void main(String args[]) {
		int array[] = {-1, 5, 60, 40, -1, -1, 55, 18, 29, 7, -1};
		array = SortByHeight.sortByHeight(array);
		for(int i = 0; i < array.length; i ++) {
			System.out.print(" " + array[i] );
		}
	}
}
