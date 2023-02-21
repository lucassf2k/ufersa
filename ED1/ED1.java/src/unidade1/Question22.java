package unidade1;

import java.util.Scanner;

public class Question22 {

	static Scanner scan = new Scanner( System.in );
	
	public static void main(String[] args) {
		System.out.print("Digite um número: ");
		int a = scan.nextInt();
		
		System.out.print("Digite outro número: ");
		int b = scan.nextInt();
		
		int sum = 0;
		for (int i = a; i <= b; i++) {
			sum += i;
		}
		
		System.out.println("A somatório de " + a + " a " + b + " = " + sum);
	}
}
