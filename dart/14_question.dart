import 'dart:io';
import 'dart:math';

num pot(num n) {
  return pow(n, 2);
}

num raiz(num n) {
  return sqrt(n);
}

num fatorial(num n) {
  int result = 1;
  for (var i = 1; i <= n; i++) {
    result *= i;
  }
  if (n == 0) {
    return 1;
  } else {
    return result;
  }
}

void main() {
  bool control = true;
  do {
    print('Digite umas das opções');
    print('1 - Potenciação');
    print('2 - Raiz quadrada');
    print('3 - Fatorial');
    print('0 - Sair');
    int option = int.parse(stdin.readLineSync().toString());
    print('Agora escolha um número: ');
    num numero = num.parse(stdin.readLineSync().toString());
    switch (option) {
      case 1:
        print(pot(numero));
        break;
      case 2:
        print(raiz(numero));
        break;
      case 3:
        print(fatorial(numero));
        break;
      case 0:
        control = false;
        break;
      default:
        control = false;
    }
  } while (control);
}
