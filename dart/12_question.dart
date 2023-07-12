import 'dart:io';

void main() {
  print('Digite um número: ');
  int a = int.parse(stdin.readLineSync().toString());
  print('Digite outro número: ');
  int b = int.parse(stdin.readLineSync().toString());
  int sum = 0;
  for (var i = a; i <= b; i++) {
    sum += i;
  }
  print('Somatório de $a + $b = $sum');
}
