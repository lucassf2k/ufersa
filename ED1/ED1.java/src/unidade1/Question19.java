package unidade1;

import java.util.Scanner;

public class Question19 {

	static Scanner scan = new Scanner( System.in );
	
	public static void main(String[] args) {
		System.out.print("Digite um número para formar sua tabuada: ");
		int num = scan.nextInt();
		
		System.out.println("Multiplicação");
		for (int i = 0; i <= 9; i++) {
			System.out.println(i + " x " + num + " = " + (i * num));
		}
		
		System.out.println("Soma");
		for (int i = 0; i <= 9; i++) {
			System.out.println(i + " + " + num + " = " + (i + num));
		}
	}
}
