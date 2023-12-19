import readline from 'node:readline'

export const cin = async (text: string): Promise<string> => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  return new Promise(resolve => {
    rl.question(text, answer => {
      resolve(answer)
      rl.close()
    })
  })
}
