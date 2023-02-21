package unidade1;

import java.util.Scanner;

public class Question23 {

	static Scanner scan = new Scanner( System.in );
	
	public static void main(String[] args) {
		System.out.print("Digite um número: ");
		int num = scan.nextInt();
		
		int fatorial = 1;
		for (int i = 1; i <= num; i++) {
			fatorial *= i;
		}
		
		if (num == 0) {
			System.out.println("O fatorial de " + num + " é " + fatorial);
		} else {
			System.out.println("O fatorial de " + num + " é " + fatorial);			
		}
		
	}
}
