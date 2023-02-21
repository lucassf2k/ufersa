package unidade1;

import java.util.Scanner;

public class Question18WithWhile {
	
	static Scanner scan = new Scanner(System.in);
	
	public static void main(String[] args) {
		final String password = "senha";
		
		Boolean condition = true;
		
		while(condition) {
			System.out.print("\nDegite a senha: ");
			String userPassword = scan.nextLine();
			
			if (password.equals(userPassword)) {
				System.out.println("Senha correta!");
				condition = false;
			} else {
				System.out.println("Senha incorreta!");
			}
		}
	}
}
