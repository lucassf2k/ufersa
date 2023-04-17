package unidade02;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class RevisaoProva02 {
  public static String[] mySplit(String input, String delimiter) {
    // Verificar se a string de entrada e o delimitador não são nulos
    if (input == null || delimiter == null) {
        throw new NullPointerException("Input string and delimiter cannot be null.");
    }
    // Inicializar um ArrayList para armazenar as substrings
    List<String> substrings = new ArrayList<>();
    // Inicializar um StringBuilder para construir cada substring
    StringBuilder substringBuilder = new StringBuilder();
    // Percorrer a string de entrada caractere por caractere
    for (int i = 0; i < input.length(); i++) {
        // Se o caractere atual for igual ao primeiro caractere do delimitador
        if (input.charAt(i) == delimiter.charAt(0)) {
            // Verificar se os caracteres seguintes correspondem ao delimitador completo
            boolean delimiterFound = true;
            for (int j = 1; j < delimiter.length(); j++) {
                if (i + j >= input.length() || input.charAt(i + j) != delimiter.charAt(j)) {
                    delimiterFound = false;
                    break;
                }
            }
            // Se o delimitador foi encontrado, adicionar a substring atual à lista e reinicializar o StringBuilder
            if (delimiterFound) {
                substrings.add(substringBuilder.toString());
                substringBuilder.setLength(0);
                i += delimiter.length() - 1;
                continue;
            }
        }
        // Se o caractere atual não for um delimitador, adicioná-lo à substring atual
        substringBuilder.append(input.charAt(i));
    }
    // Adicionar a última substring à lista (mesmo que não haja um delimitador após ela)
    substrings.add(substringBuilder.toString());
    // Converter a lista em um array de strings e retornar
    return substrings.toArray(new String[0]);
  }

  static void reverseString(char[] s) {
    int head = 0;
    int tail = s.length - 1;

    while(head < tail) {
      char temp = s[head];
      s[head] = s[tail];
      s[tail] = temp;

      head++;
      tail--;
    }
  }

  public static List<String> fizzBuzz(int n) {
    List<String> outPut = new ArrayList<>();

    for(int i=1; i<=n; i++) {
      if(i % 3 == 0 && i % 5 == 0) { // divisível por 3 e 5
          outPut.add("FizzBuzz");
      } else if(i % 3 == 0) { // divisível por 3
          outPut.add("Fizz");
      } else if(i % 5 == 0) { // divisível por 5
          outPut.add("Buzz");
      } else { // não é divisível por 3 ou 5
          outPut.add(Integer.toString(i)); // adiciona o número como uma string
      }
  }

    return outPut;
  }

  public static void main(String[] args) {
    // char[] input = { 'h', 'e', 'l', 'l', 'o' };

    // reverseString(input);

    // System.out.println(Arrays.toString(input));

    List<String> result = fizzBuzz(3);

    System.out.println(result);
  }
}
