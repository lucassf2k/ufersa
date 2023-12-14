import readline from 'node:readline'

export const cin = (text: string) => {
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