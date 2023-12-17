import { Lexer, Token } from "moo"
export namespace LexerManager {
  export interface Protocol {
    getQuantityByToken(): { token: string, quantity: number }[]
    getTokens(): Set<string>
    showTokens(): InfosType[]
    getBy(input: SearchType): string[]
  }
  export type TokenType = Token | undefined
  export type InfosType = { token: string | undefined, lexeme: string }
  export type MooLexer = Lexer
  export type QuantityTokenOutput = { token: string, quantity: number }
  export type SearchType = 'CLASS' | 'PROPERTY' | 'RESERVED' | 'RELOP' | 'INDIVIDUAL' | 'TYPE' | 'CARDINALITY'
}