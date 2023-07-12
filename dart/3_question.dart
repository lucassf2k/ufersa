import 'dart:io';

void main() {
  print('Digite sua primeria nota: ');
  double? nota1 = double.parse(stdin.readLineSync().toString());
  print('Digite sua segunda nota: ');
  double? nota2 = double.parse(stdin.readLineSync().toString());
  print('Digite sua terceira nota: ');
  double? nota3 = double.parse(stdin.readLineSync().toString());
  double media = ((nota1 + nota2 + nota3) / 3);
  if (media >= 7) {
    print('APROVADO! Com média $media');
  } else {
    print('Você está em recuperação.');
    print('Sua nota da prova final: ');
    double? nota4 = double.parse(stdin.readLineSync().toString());
    double mediaParaFinal = ((media * 6) + (nota4 * 4)) / 10;
    if (mediaParaFinal >= 5) {
      print('Você foi aprovado com média $mediaParaFinal');
    } else {
      print('Você foi reprovado! com média $mediaParaFinal');
    }
  }
}
