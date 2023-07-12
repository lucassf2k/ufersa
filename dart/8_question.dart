import 'dart:io';

void main() {
  print('resolvendo com while');
  late bool controle = true;
  while (controle) {
    print('Digite uma senha: ');
    String senha = stdin.readLineSync().toString();
    if (senha == 'senha correta') {
      controle = false;
    }
  }
  controle = true;
  print('resolvendo com do-while');
  do {
    print('Digite uma senha');
    String senha = stdin.readLineSync().toString();
    if (senha == 'senha correta') {
      controle = false;
    }
  } while (controle);
}
