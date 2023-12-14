import { PainelProtocol } from './protocols/painel-protocol'

export async function painel({ cin, mooLexerManager }: PainelProtocol.Input) {
  console.log('\n======= Análise léxica =======\n')
  let condition = true
  while (condition) {
    console.log(
      `Escolha uma opção:
        1 - Mostrar somentes os tokens 
        2 - Mostrar tokens e sua quantidade
        3 - Mostrar tokens e lexemas
        4 - Mais opções
        5 - Sair
      `
    )
    const option = await cin('Opção: ')
    console.log()
    switch (Number(option)) {
      case 1: {
        console.log(mooLexerManager.getTokens())
        break
      }
      case 2: {
        console.log(mooLexerManager.getQuantityByToken())
        break
      }
      case 3: {
        mooLexerManager.showTokens()
        break
      }
      case 4: {
        let condition2 = true
        do {
          const input = await cin(
            `
            Buscar por: 
            1 - class
            2 - property
            3 - type
            4 - individual
            5 - symbol
            6 - cardinality
            7 - Reserved
            8 - Sair
            Opção: 
            `
          )
          console.log()
          switch(Number(input)) {
            case 1: {
              console.log(mooLexerManager.getBy('class'))
              break
            }
            case 2: {
              console.log(mooLexerManager.getBy('property'))
              break
            }
            case 3: {
              console.log(mooLexerManager.getBy('type'))
              break
            }
            case 4: {
              console.log(mooLexerManager.getBy('individual'))
              break
            }
            case 5: {
              console.log(mooLexerManager.getBy('symbol'))
              break
            }
            case 6: {
              console.log(mooLexerManager.getBy('cardinality'))
              break
            }
            case 7: {
              console.log(mooLexerManager.getBy('reserved'))
            }
            case 8: {
              condition2 = false
              break
            }
          }
        } while (condition2)
      }
      default: {
        condition = false
      }
    }
  }
}