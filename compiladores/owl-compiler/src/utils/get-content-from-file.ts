import * as fs from 'node:fs'

export const getContentFromFile = (path: string): string => {
  return fs.readFileSync(path, 'utf-8')
}
