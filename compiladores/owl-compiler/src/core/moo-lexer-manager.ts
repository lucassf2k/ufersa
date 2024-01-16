import type { LexerManager } from './protocols/lexer-manager-protocol'

export class MooLexertManager implements LexerManager.Protocol {
  private readonly _lexerLine: LexerManager.InfosType[] = []
  private readonly _tokensValids: LexerManager.InfosType[] = []

  constructor (lexer: LexerManager.MooLexer) {
    let token: LexerManager.TokenType
    while ((token = lexer.next()) != null) {
      this._lexerLine.push({ token: token.type, lexeme: token.text })
    }
    this._tokensValids = this._cleanWhitespace()
  }

  public getQuantityByToken(): Record<string, number> {
    const output: Record<string, number> = {}
    for (const tokenValid of this._tokensValids) {
      const key = String(tokenValid.token)
      if (output[key] !== undefined) output[key] = output[key] + 1
      else output[key] = 1
    }
    return output
  }

  public getTokens(): Set<string> {
    const tokens = new Set<string>()
    for (const tokenValid of this._tokensValids) {
      if (tokenValid.token !== 'WHITESPACE') tokens.add(String(tokenValid.token))
    }
    return tokens
  }

  public getBy(input: LexerManager.SearchType): string[] {
    const output: string[] = [] as const
    for (const tokenExisted of this._tokensValids) {
      if (input === String(tokenExisted.token)) output.push(tokenExisted.lexeme)
    }
    return output
  }

  public showTokens(): LexerManager.InfosType[] {
    return this._tokensValids
  }

  private _cleanWhitespace(): LexerManager.InfosType[] {
    return this._lexerLine.filter((info) => info.token !== 'WHITESPACE')
  }
}
