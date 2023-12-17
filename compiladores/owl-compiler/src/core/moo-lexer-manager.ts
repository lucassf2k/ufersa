import { LexerManager } from './protocols/lexer-manager-protocol'

export class MooLexertManager implements LexerManager.Protocol {
  private _lexerLine: LexerManager.InfosType[] = [] as const
  private _tokensValids: LexerManager.InfosType[] = [] as const

  constructor(lexer: LexerManager.MooLexer) {
    let token: LexerManager.TokenType
    while (token = lexer.next()) {
      this._lexerLine.push({ token: token.type, lexeme: token.text })
    }
    this._tokensValids = this._cleanWhitespace()
  }

  getQuantityByToken(): LexerManager.QuantityTokenOutput[] {
    const tokens = this.getTokens()
    let output: { token: string, quantity: number }[] = []
    tokens.forEach((item) => {
      let count = 0
      for (const tokenValid of this._tokensValids) {
        if (String(tokenValid.token) === item) count++
      }
      output.push({ token: String(item), quantity: count })
    })
    return output
  }

  getTokens(): Set<string> {
    const tokens = new Set<string>()
    for (const tokenValid of this._tokensValids) {
      if (tokenValid.token !== 'WHITESPACE') tokens.add(String(tokenValid.token))
    }
    return tokens
  }

  getBy(input: LexerManager.SearchType): string[] {
    let output: string[] = [] as const
    for (const tokenExisted of this._tokensValids) {
      if (input === String(tokenExisted.token)) output.push(tokenExisted.lexeme)
    }
    return output
  }

  showTokens(): LexerManager.InfosType[] {
    return this._tokensValids
  }

  private _cleanWhitespace(): LexerManager.InfosType[] {
    return this._lexerLine.filter((info) => info.token !== 'WHITESPACE')
  }
}