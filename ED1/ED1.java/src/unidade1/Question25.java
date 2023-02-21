package unidade1;

import java.util.Scanner;

public class Question25 {

	static Scanner scan = new Scanner(System.in);
	
	public static void main(String[] args) {
		System.out.print("Digite a quantidade de elementos que deseja armazenar: ");
		int tamVet = scan.nextInt();
		
		int[] nums = new int [tamVet];
		
		for (int i = 0; i < tamVet; i++) {
			System.out.print("\nDigite o valor da posição " + i + ": ");
			int num = scan.nextInt();
			
			nums[i] = num;
		}
		
		System.out.println("Sua lista ----------");
		
		for (int num: nums) {
			System.out.println(num);
		}
	}
}
