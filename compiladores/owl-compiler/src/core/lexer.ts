import moo from 'moo'

const letterRegex = '[a-zA-Z]'
const uLetterRegex = '[A-Z]'
const lLetterRegex = '[a-z]'
const digitRegex = '[0-9]'
const reserved2Regex = new RegExp('some|all|value|min|max|exactly|that|not|and|or|only|SOME|ALL|VALUE|MIN|MAX|EXACTLY|THAT|NOT|AND|OR|ONLY|(?:[A-Z][a-z]+)*:')
const typeRegex = new RegExp(`${lLetterRegex}+:${lLetterRegex}+`)
const individualRegex = new RegExp(`${uLetterRegex}${lLetterRegex}+${digitRegex}+`)
// const reservedRegex = new RegExp(`some|all|value|min|max|exactly|that|not|and|or|only|SOME|ALL|VALUE|MIN|MAX|EXACTLY|THAT|NOT|AND|OR|ONLY`)
// const propertyRegex = new RegExp(`has${letterRegex}+|is${letterRegex}+Of`)
const propertyRegex = new RegExp(`ssn|${lLetterRegex}+${uLetterRegex}${lLetterRegex}+`)
// const propertyRegex = new RegExp(`(?:${lLetterRegex}+${uLetterRegex}${lLetterRegex}+)`)
const cardinalityRegex = new RegExp(`${digitRegex}+`)
const classRegex = new RegExp(`${uLetterRegex}${letterRegex}+(?:_${uLetterRegex}${letterRegex}+)*`)

export const lexer = moo.compile({
    type: typeRegex,
    reserved: reserved2Regex,
    individual: individualRegex,
    property:  propertyRegex,
    class: classRegex,
    cardinality: cardinalityRegex,
    whitespace: { match: /[\s\t]+/, lineBreaks: true },
    symbol: /<=|>=|[():<>"\[\],{}]/,
    un: moo.error,
})
