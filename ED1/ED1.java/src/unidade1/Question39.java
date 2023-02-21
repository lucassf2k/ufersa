package unidade1;

import java.util.ArrayList;
import java.util.List;

class CRUD <T> {
  private List<T> db = new ArrayList<T>();

  public void create(T obj) {
    db.add(obj);
  }

  public void read() {
    for (T obj: db) {
      System.out.println(obj);
    }
  }

  public void update(int index, T obj) {
    db.set(index, obj);
  }

  public Boolean delete(T obj) {
    return db.remove(obj);
  }

}

class Pessoa {
  private String name;
  private String cpf;

  public Pessoa() {
  }

  public Pessoa(String name, String cpf) {
    this.name = name;
    this.cpf = cpf;
  }
  
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  public String getCpf() {
    return cpf;
  }
  public void setCpf(String cpf) {
    this.cpf = cpf;
  }
}

public class Question39 {
  
  public static void main(String[] args) {
    Pessoa pessoa = new Pessoa("lucassf2k", "12238585478");

    CRUD<Pessoa> crud = new CRUD<Pessoa>();

    crud.create(pessoa);
    
    Pessoa updatePessoa = new Pessoa("lucassf2k", "12235845545");
    crud.update(0, updatePessoa);

    crud.read();

    crud.delete(updatePessoa);

  }
}
