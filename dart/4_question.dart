import 'dart:io';
import 'dart:math';

num getDelta({required int a, required int b, required int c}) {
  return pow(b, 2) - (4 * a * c);
}

void calculateRaizes({required num delta, required int a, required int b}) {
  if (delta > 0) {
    print('Delta maior que zero. Existiram duas raízes diferentes');
    var x1 = ((-b) + sqrt(delta)) / (2 * a);
    var x2 = ((-b) - sqrt(delta)) / (2 * a);
    print('x1: ${x1.toStringAsFixed(4)}');
    print('x2: ${x2.toStringAsFixed(4)}');
  } else if (delta == 0) {
    print('Delta igual a zero. Existem duas raízes iguais');
    var x = (-b) / (2 * a);
    print('x: ${x.toStringAsFixed(4)}');
  } else {
    print('Nenhuma raiz real!');
  }
}

void main() {
  print('Digite o valor da a: ');
  int a = int.parse(stdin.readLineSync().toString());
  print('Digite o valor de b:');
  int b = int.parse(stdin.readLineSync().toString());
  print('Digite o valor de c: ');
  int c = int.parse(stdin.readLineSync().toString());
  var delta = getDelta(a: a, b: b, c: c);
  calculateRaizes(delta: delta, a: a, b: b);
}
