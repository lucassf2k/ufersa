package unidade1;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

class Pessoa {
  private String cpf;
  private String nome;
  private String sexo;
  private int idade;
  private float peso;
  private float altura;

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


public class Question31 {
  static Scanner scan = new Scanner(System.in);
  public static void main(String[] args) {
    System.out.print("Quantas pessoas deseja cadastrar: ");
    int quantidade = scan.nextInt();

    List<Pessoa> pessoas = new ArrayList<Pessoa>(quantidade);

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

    for (Pessoa p : pessoas) {
      System.out.println(p.toString());
    }
  }
}
