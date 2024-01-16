import type { LexerManager } from '../core/protocols/lexer-manager-protocol'
import type { PainelProtocol } from './protocols/painel-protocol'

export async function painel(
  { cin, mooLexerManager }: PainelProtocol.Input
): Promise<void> {
  const showInfosByToken = (input: LexerManager.SearchType): void => {
    for (const token of mooLexerManager.getBy(input)) {
      console.log(` - ${token}`)
    }
  }
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
        for (const token of mooLexerManager.getTokens()) {
          console.log(` - ${token} `)
        }
        break
      }
      case 2: {
        console.log(mooLexerManager.getQuantityByToken())
        break
      }
      case 3: {
        for (const content of mooLexerManager.showTokens()) {
          console.log(` - Token: ${content.token}, Lexeme: ${content.lexeme}`)
        }
        break
      }
      case 4: {
        let condition2 = true
        do {
          const input = await cin(
            `Buscar por: 
              1 - class
              2 - property
              3 - type
              4 - individual
              5 - symbol
              6 - cardinality
              7 - Reserved
              8 - Sair
            Opção: `
          )
          console.log()
          switch (Number(input)) {
            case 1: {
              showInfosByToken('CLASS')
              break
            }
            case 2: {
              showInfosByToken('PROPERTY')
              break
            }
            case 3: {
              showInfosByToken('TYPE')
              break
            }
            case 4: {
              showInfosByToken('INDIVIDUAL')
              break
            }
            case 5: {
              showInfosByToken('RELOP')
              break
            }
            case 6: {
              showInfosByToken('CARDINALITY')
              break
            }
            case 7: {
              showInfosByToken('RESERVED')
              break
            }
            default: {
              condition2 = false
              break
            }
          }
        } while (condition2)
        break
      }
      default: {
        condition = false
      }
    }
  }
}
