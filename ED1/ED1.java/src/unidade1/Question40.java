package unidade1;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

class FileHandler {
  private String path;
  private String input;
  
  public FileHandler(String path) {
    this.path = path;
  }

  public FileHandler(String path, String input) {
    this.path = path;
    this.input = input;
  }

  public void writer(String str) throws IOException {
    BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(this.path));
    bufferedWriter.append(str.isEmpty() ? this.input : str);
    bufferedWriter.close();
  }

  public String reader() throws IOException {
    BufferedReader bufferedReader = new BufferedReader( new FileReader(this.path) );
    
    StringBuffer sbResult = new StringBuffer();
    String line = "";

    while(line != null) {
      sbResult.append(line + '\n');
      line = bufferedReader.readLine();
    }
    
    bufferedReader.close();

    return sbResult.toString();
  }
}

class Crypto {
  private FileHandler file;
 
  private final char[] ZENIT = { 'Z', 'E', 'N', 'I', 'T' };
  private final char[] POLIR = { 'P', 'O', 'L', 'I', 'R' };

  public Crypto(FileHandler file) {
    this.file = file;
  }

  public String encryto() {
    try {
      String str = this.file.reader();
      
      String[] strs = str.split(" ");

      String newLine = "";
      
      for (String word : strs) {
        for (char ch : word.toCharArray()) {
          char tmp_ch = ch;
          for (int i = 0; i < ZENIT.length; i++) {
            if (ch == '\u0000') {
              continue;
            }
            if (ch == ZENIT[i]) {
              tmp_ch = POLIR[i];
            } else if (ch == POLIR[i]) {
              tmp_ch = ZENIT[i];
            }
          }
          newLine += tmp_ch;
        }
        newLine += ' ';
      }

      this.file.writer(newLine);
      return newLine;

    } catch (IOException e) {
      e.printStackTrace();
      return "ERRO";
    }
  }

  public String decrypt() {
    try {
      String str = this.file.reader();
      
      String[] strs = str.split(" ");

      String newLine = "";
      
      for (String word : strs) {
        for (char ch : word.toCharArray()) {
          char tmp_ch = ch;
          for (int i = 0; i < ZENIT.length; i++) {
            if (ch == '\u0000') {
              continue;
            }
            if (ch == ZENIT[i]) {
              tmp_ch = POLIR[i];
            } else if (ch == POLIR[i]) {
              tmp_ch = ZENIT[i];
            }
          }
          newLine += tmp_ch;
        }
        newLine += ' ';
      }

      this.file.writer(newLine);
      return newLine;

    } catch (IOException e) {
      e.printStackTrace();
      return "ERRO";
    }
  }
}

public class Question40 {
  
  public static void main(String[] args) {
    Crypto crypto = new Crypto(new FileHandler("tmp/crypto.txt"));

    // String fileEncrypted = crypto.encryto();
    String fileDecrypted = crypto.decrypt();

    System.out.println(fileDecrypted);
  }
}
