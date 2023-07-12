import 'dart:io';

void main() {
  print('Digite um número para a tabuada: ');
  int n = int.parse(stdin.readLineSync().toString());
  for (var i = 0; i <= 9; i++) {
    print('$i + $n = ${i + n}');
  }
}
