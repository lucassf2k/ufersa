package unidade1;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

class Pessoa implements Serializable {
  private static final long serialVersionUID = 415L;
  private String cpf;
  private String nome;
  private String sexo;
  private int idade;
  private float peso;
  private float altura;


  @Override
  public int hashCode() {
    final int prime = 31;
    int result = 1;
    result = prime * result + ((cpf == null) ? 0 : cpf.hashCode());
    result = prime * result + ((nome == null) ? 0 : nome.hashCode());
    result = prime * result + ((sexo == null) ? 0 : sexo.hashCode());
    result = prime * result + idade;
    result = prime * result + Float.floatToIntBits(peso);
    result = prime * result + Float.floatToIntBits(altura);
    return result;
  }

  @Override
  public boolean equals(Object obj) {
    if (this == obj)
      return true;
    if (obj == null)
      return false;
    if (getClass() != obj.getClass())
      return false;
    Pessoa other = (Pessoa) obj;
    if (cpf == null) {
      if (other.cpf != null)
        return false;
    } else if (!cpf.equals(other.cpf))
      return false;
    if (nome == null) {
      if (other.nome != null)
        return false;
    } else if (!nome.equals(other.nome))
      return false;
    if (sexo == null) {
      if (other.sexo != null)
        return false;
    } else if (!sexo.equals(other.sexo))
      return false;
    if (idade != other.idade)
      return false;
    if (Float.floatToIntBits(peso) != Float.floatToIntBits(other.peso))
      return false;
    if (Float.floatToIntBits(altura) != Float.floatToIntBits(other.altura))
      return false;
    return true;
  }

  public float imc() {
    return (this.peso / (this.altura * this.altura));
  }

  public String getCpf() {
    return cpf;
  }
  public void setCpf(String cpf) {
    this.cpf = cpf;
  }
  public String getNome() {
    return nome;
  }
  public void setNome(String nome) {
    this.nome = nome;
  }
  public String getSexo() {
    return sexo;
  }
  public void setSexo(String sexo) {
    this.sexo = sexo;
  }
  public int getIdade() {
    return idade;
  }
  @Override
  public String toString() {
    return "Pessoa [cpf=" + cpf + ", nome=" + nome + ", sexo=" + sexo + ", idade=" + idade + ", peso=" + peso
        + ", altura=" + altura + ", imc=" + this.imc() + "]";
  }

  public void setIdade(int idade) {
    this.idade = idade;
  }
  public float getPeso() {
    return peso;
  }
  public void setPeso(float peso) {
    this.peso = peso;
  }
  public float getAltura() {
    return altura;
  }
  public void setAltura(float altura) {
    this.altura = altura;
  }
}


public class Question32 {
  static Scanner scan = new Scanner(System.in);
  public static void main(String[] args) {
    System.out.print("Quantas pessoas deseja cadastrar: ");
    int quantidade = scan.nextInt();

    List<Object> pessoas = new ArrayList<Object>(quantidade);

    for (int i = 0; i < quantidade; i++) {
      Pessoa pessoa = new Pessoa();
      scan.nextLine();
      System.out.println("Pessoa: " + (i + 1));
      System.out.println("Digite seu nome");
      String nome = scan.nextLine();
      pessoa.setNome(nome);

      scan.nextLine();

      System.out.println("Digite seu altura");
      float altura = scan.nextFloat();
      pessoa.setAltura(altura);

      scan.nextLine();

      System.out.println("Digite seu peso");
      float peso = scan.nextFloat();
      pessoa.setPeso(peso);

      scan.nextLine();
      System.out.println("Digite seu cpf");
      String cpf = scan.nextLine();
      pessoa.setCpf(cpf);

      scan.nextLine();

      System.out.println("Digite seu idade");
      int idade = scan.nextInt();
      pessoa.setIdade(idade);

      scan.nextLine();
      System.out.println("Digite seu sexo");
      String sexo = scan.nextLine();
      pessoa.setSexo(sexo);

      pessoas.add(pessoa);
    }

    String path = "pessoas.dat";

    try {
      writer(path, pessoas);
    } catch(IOException e) {
      System.out.println("Erro no arquivo");
      e.printStackTrace();
    }
    

    try {
      List<Object> outPut = reader(path);

      for (Object object : outPut) {
        Pessoa pessoa = (Pessoa) object;
        System.out.println(pessoa.toString());
      } 
    } catch(IOException e) {
      System.out.println("Erro na leitura: IOException");
      e.printStackTrace();
    }catch (ClassNotFoundException e) {
      System.out.println("Erro na leitura: ClassNotFoundException");
      e.printStackTrace();
    }
  }

  public static void writer(String path, List<Object> list) throws IOException 
  {
    File file = new File(path);
    file.delete();
    file.createNewFile();

    ObjectOutputStream objOutPut = new ObjectOutputStream(new FileOutputStream(file));

    objOutPut.writeObject(list);
    objOutPut.close();
  }

  @SuppressWarnings("unchecked")
  public static List<Object> reader(String path) throws IOException, ClassNotFoundException
  {
    File file = new File(path);
    List<Object> list = new ArrayList<Object>();

    if (file.exists())
    {
      ObjectInputStream objInput = new ObjectInputStream(new FileInputStream(file));

      list = (List<Object>) objInput.readObject();
      objInput.close();      
    }

    return list;
  }
}
