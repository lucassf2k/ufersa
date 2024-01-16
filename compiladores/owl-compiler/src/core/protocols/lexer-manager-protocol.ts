import { type Lexer, type Token } from 'moo'
export namespace LexerManager {
  export interface Protocol {
    getQuantityByToken: () => Record<string, number>
    getTokens: () => Set<string>
    showTokens: () => InfosType[]
    getBy: (input: SearchType) => string[]
  }
  export type TokenType = Token | undefined
  export interface InfosType { token: string | undefined, lexeme: string }
  export type MooLexer = Lexer
  export interface QuantityTokenOutput { token: string, quantity: number }
  export type SearchType = 'CLASS' | 'PROPERTY' | 'RESERVED' | 'RELOP' | 'INDIVIDUAL' | 'TYPE' | 'CARDINALITY'
}
