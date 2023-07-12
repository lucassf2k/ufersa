import 'dart:io';
import 'dart:math';

void main() {
  // weight / (height)^2
  print('Calculando IMC.');
  print('Digite seu peso: ');
  double? weight = double.parse(stdin.readLineSync()!);
  print('Digite sua altura: ');
  double? height = double.parse(stdin.readLineSync()!);
  if (height != 0 || height < 0) {
    double imc = weight / pow(height, 2);
    print('Seu imc ${imc.toStringAsFixed(2)}');
  } else {
    print('Divisão por zero!');
  }
}
