import 'dart:io';

void main() {
  print('Digite um número: ');
  int n = int.parse(stdin.readLineSync().toString());
  int fatorial = 1;
  for (var i = 1; i <= n; i++) {
    fatorial *= i;
  }
  if (n == 0) {
    print('O fatotial de $n é 1');
  } else {
    print('O fatorial de $n é $fatorial');
  }
}
