import { LexerManager } from '../../core/protocols/lexer-manager-protocol'

export namespace PainelProtocol {
  export type Input = {
    cin(text: string): Promise<unknown>
    mooLexerManager: LexerManager.Protocol
  }
}