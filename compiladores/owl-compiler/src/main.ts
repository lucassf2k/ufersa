import { lexer } from './core/lexer'
import { MooLexertManager } from './core/moo-lexer-manager'
import { getContentFromFile } from './utils/get-content-from-file'
import { cin } from './utils/cin'
import { painel } from './utils/painel'

async function main(): Promise<void> {
  try {
    const filename = await cin('Nome do arquivo: ')
    const PATH = `./resources/${filename}`
    const input = getContentFromFile(PATH)
    const mooLexerManager = new MooLexertManager(lexer.reset(input))
    painel({ cin, mooLexerManager })
  } catch (err) {
    if (err instanceof Error) console
      .log('Aconteceu algum erro! Tente novamente.')
  }
}

main()