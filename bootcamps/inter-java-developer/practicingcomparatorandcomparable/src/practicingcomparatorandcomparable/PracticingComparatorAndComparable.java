/*
 *Small practice exercise with Comparators and Comparables. Exercise proposed by Digital Innovation One (DIO) as part of their Inter Java Developer Bootcamp.
 *The idea was to create an object and then use comparators and comparables to sort it. 
 */
package practicingcomparatorandcomparable;

import java.lang.Comparable;
import java.util.ArrayList;
import java.util.List;

public class PracticingComparatorAndComparable {
	public static void main(String args[]) {
		
		List<Student> student = new ArrayList<>();
		
		//Adds some students to the ArrayList.
		student.add(new Student("Cláudia", 38));
		student.add(new Student("Elisa", 3));
		student.add(new Student("Rodrigo", 35));
		student.add(new Student("Jason", 36));
		student.add(new Student("Welber", 37));
		student.add(new Student("Anderson", 37));
		student.add(new Student("Allan", 32));
		student.add(new Student("Lucas", 32));
		student.add(new Student("Irene", 68));
		student.add(new Student("José Geraldo", 60));
		
		System.out.print(student);
		
		student.sort((first,second) -> first.getAge() - second.getAge());
		
		System.out.print(student);
	}
}

//Class created in the same file of the main method just to make it easier for others to test the code.
class Student implements Comparable<Student>{
	private String name;
	private int age;
	
	public Student(String name, int age) {
		this.name = name;
		this.age = age;
	}
	
	
	public String getIdade() {
		return this.name;
	}
	
	public int getAge() {
		return this.age;
	}
	
	//So that the output shows the properties that we want and not positions in memory.
	@Override
	public String toString() {
		return this.name + " " + this.age;
	}
	
	//Implementation of compareTo (Comparable) so that we can use Student.sort to sort our object properly.
	@Override
	public int compareTo(Student student) {
		
		return this.getAge() - student.getAge();
	}
}
