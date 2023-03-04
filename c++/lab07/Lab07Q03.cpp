#include <iostream>

using namespace std;

int bitsBaixos(unsigned int);

int main(void)
{
	cout << "Digite um valor inteiro: ";
	unsigned int num;
	cin >> num;

	cout << "Os 16 bits mais baixos desse valor correspodem ao numero " << bitsBaixos(num);

	return 0;
}

int bitsBaixos(unsigned int valor)
{
	unsigned int mascara = 65535;

	return valor & mascara;
}
