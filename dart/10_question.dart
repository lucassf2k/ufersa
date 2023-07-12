import 'dart:io';

void main() {
  print('Digite seu investimento inicial: ');
  double initialInvestiment = double.parse(stdin.readLineSync().toString());
  print('Digite seu investimento mensal: ');
  double monthlyInvestiment = double.parse(stdin.readLineSync().toString());
  print('Quantos meses deseja investir? ');
  int months = int.parse(stdin.readLineSync().toString());
  print('Digite a taxa mensal (ex.: 10 -> 10%): ');
  double taxaMensal = double.parse(stdin.readLineSync().toString());
  double saldo = initialInvestiment;
  double rendimentoMensal = 0.0;
  for (var i = 0; i < months; i++) {
    saldo = saldo + monthlyInvestiment;
    rendimentoMensal = (saldo) * (taxaMensal / 100);
    saldo = saldo + rendimentoMensal;
  }
  print('Saldo acumulado: ${saldo.toStringAsFixed(2)}');
  print('Rendimento mensal: ${rendimentoMensal.toStringAsFixed(2)}');
}
