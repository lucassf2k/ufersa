package unidade1;

import java.util.Scanner;

public class Question26 {

	static Scanner scan = new Scanner( System.in );
	
	public static void main(String[] args) {
		int column;
		int rows;
		
		System.out.print("Digite a quantidade de colunas: ");
		column = scan.nextInt();
		
		System.out.print("Digite a quantidade de linhas: ");
		rows = scan.nextInt();
		
		int[][] matrix = new int[column][rows];
		
		for (int i = 0; i < column; i++) {
			for (int k = 0; k < rows; k++) {
				System.out.print("Digite o valor da linha " + i + "x" + k + ": ");
				int numOfRow = scan.nextInt();
				matrix[i][k] = numOfRow; 
			}
		}
		
		System.out.println("============ Sua matrix ============");
		
		for (int i = 0; i < column; i++) {
			for (int k = 0; k < rows; k++) {
				System.out.print(matrix[i][k]);
			}
			System.out.println(" ");
		}
	}
}
