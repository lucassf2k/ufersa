import type { LexerManager } from '../../core/protocols/lexer-manager-protocol'

export namespace PainelProtocol {
  export interface Input {
    cin: (text: string) => Promise<string>
    mooLexerManager: LexerManager.Protocol
  }
}
