import 'dart:io';
import 'dart:math';

void main() {
  print('Degite a medida de um raio: ');
  double? raio = double.parse(stdin.readLineSync()!);
  if (raio >= 0) {
    double areaCircle = (pi * pow(raio, 2));
    print(
        'A área de circulo baseado no seu raio que foi $raio é ${areaCircle.toStringAsFixed(2)}');
  } else {
    print('raio não pode ser negativo!');
  }
}
