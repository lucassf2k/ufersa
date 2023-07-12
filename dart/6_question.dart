import 'dart:io';

void main() {
  print('Digite um número inicial: ');
  int n1 = int.parse(stdin.readLineSync().toString());
  print('Digite um número inicial: ');
  int n2 = int.parse(stdin.readLineSync().toString());
  print('iteração com while');
  int nWhile = n1;
  while (nWhile <= n2) {
    print(nWhile++);
  }
  print('iteração com do-while');
  int nDoWhile = n1;
  do {
    print(nDoWhile++);
  } while (nDoWhile <= n2);
  print('iteração com o for');
  for (var i = n1; i <= n2; i++) {
    print(i);
  }
}
