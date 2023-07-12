import 'dart:io';

void main() {
  print('Digite um número: ');
  int n = int.parse(stdin.readLineSync().toString());
  int count = 0;
  for (var i = n; i > 1; i--) {
    if (n % i == 0) {
      count++;
    }
  }
  if (count == 1) {
    print('Número é PRIMO');
  } else {
    print('Número não é PRIMO');
  }
}
