import 'dart:io';

void main() {
  print('Digite um número: ');
  int n = int.parse(stdin.readLineSync().toString());
  switch (n) {
    case 1:
      print('um');
      break;
    case 2:
      print('dois');
      break;
    case 3:
      print('três');
      break;
    case 4:
      print('quatro');
      break;
    case 5:
      print('cinco');
      break;
    default:
      print('valor inválido!');
  }
}
