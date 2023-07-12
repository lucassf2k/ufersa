// Por padrão o dart necessita de um entrypoint para rodar. Que no caso é a função main.

// TIPOS E ATRIBUIÇÔES
/// O dart em inferência de tipos
var name = 'Lucas';

/// Especificando o tipo
String name2 = 'Vinicius';

/// Agora criando uma constante
final fullName = '$name $name2';
//// ou
final String fullname = '$name $name2';
///// Esses $ ou ${} (para expressões mais complexas) servem para interpolar (concatenar) Strings.
///// Ser constante (final) quer dizer que a variável não pode ser reatribuida.

/// Por padrão quando o tipo não é especificado ou ele (compilador) não sabe é atribuído o tipo 'dynamic', ou seja, qualquer coisa.

/// criando uma variável sem inicializa-lá
late String username;

/// boolean
late bool isDart;

/// num é pai da classes int e double e ambas tem 8bytes

// Funções
/// deixando 'dynamic'
//// tanto no parametros quanto no retorno
sum(a, b) {
  return a + b;
}

//// uma forma simplificado para syntax de funções
mult(a, b) => a * b;

/// especificando os tipos
double div(double a, double b) {
  return a / b;
}

/// Um bom motivo de sempre especificar o tipo e não usar 'dynamic'
/// é ajuda do compilador para e sugestões com funções e atribuitos internos cada tipo

/// parametros obrigatorios
String getFullName(String name1, String name2) {
  return '$name1 $name2';
}

/// parametros opcionais
//// Por padrão o dart inicializa as variáveis (se não especificada o valor) com null
//// Para transformar um valor em null usa-se '?' antes do tipo ou atribui valor padrão "String name2 = 'Silva'"
String n1 = getFullName2('Lucas');
String getFullName2(String name1, [String? name2]) {
  var lastName = name2 ??
      'Silva'; // Sim for false ou null na expressão a esquerda o valor a direita será atribuido na variável
  return '$name1 $lastName';
}

/// parametros nomeados
// deixando os parametro nomeados como obrigatorios
double getSalary({required double salario, required double taxa}) {
  return salario * (taxa / 100);
}

var salary = getSalary(salario: 5900, taxa: 15);

/// outra função por parametro
void printFunction(Function func) {
  print(func());
}

/// Escopo de funções só vale no escopo aonde esla tá criada ou escopo abaixo dela

/// LISTS
List<int> list = [1, 2, 3];
var list2 = [1, 5, 8, 5];
Set<int> list3 = {
  4,
  5,
  8,
  6
}; // Set é mais compacto; sem ordenação; sem elemento duplicados
var list4 = {7, 8, 5, 6};
Map<int, String> map = {1: 'Carlos', 2: 'Vamos'};

// IMPORTS
/// import padrão
/// import 'dart:io';
/// import nomeado
/// import 'dart:io' as io
/// import o que só estar em uso
/// import 'dart:io' show sdtin;

// CLASS
//sealed // faz o que essa class não possa ser herdada
// default: publico
// para transformar em private só adicionar _ na frente do metodo ou atributo
class CarModel {
  final String marca;
  final String modelo;
  final String description;

  // constructor
  const CarModel(this.marca, this.modelo)
      : this.description =
            '$marca $modelo'; // faz parte do constructor mas não será passado no construtor no mesmo momento

  // constructor nomeado
  CarModel.formJson(Map json) : this(json['marca'], json['modelo']);

  // assincronicidade
  Future<void> save() async {
    await Future.delayed(Duration(seconds: 2));
  }
}

/// INTERFACE == ABSTRACT CLASS
/// pode extender ou implementar
abstract class UseCase {
  void getScore();
}

/// const no dart: Quando o construtor estar como const vc pode instanciar como const e se as duas instancias
/// tiverem os mesmo valores em seus atributos a instancia é aproveitada assim não criando outra
// void main() {
//   const car = CarModel('NISSAN', '370z');
//   const car2 = CarModel('NISSAN', '370z');
//   print(identical(car, car2));
// }

// ENUM
enum ValidationError {
  requiredField,
  invalidField,
}
// void main() {
//   var error = ValidationError.invalidField;
// }

// Extender class no dart
extension IntExtension on int {
  int squared() => this * this;
}

void main() {
  print(5.squared());
}
