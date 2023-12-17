import moo from 'moo'

export const lexer = moo.compile({
    TYPE: /[a-z]+:[a-z]+/,
    RESERVED: /some|all|value|min|max|exactly|that|not|and|or|only|SOME|ALL|VALUE|MIN|MAX|EXACTLY|THAT|NOT|AND|OR|ONLY|(?:[A-Z][a-z]+)*:/,
    PROPERTY:  /[a-z]+(?:[A-Z][a-z]+)*|[a-z]+/,
    INDIVIDUAL: /[A-Z][a-z]+[0-9]+/,
    CLASS: /[A-Z][a-z]+(?:[A-Z][a-z]+)*|_[A-Z][a-z]+/,
    CARDINALITY: /[0-9]+/,
    WHITESPACE: { match: /[\s\t]+/, lineBreaks: true },
    RELOP: /<=|>=|[()<>"\[\],{}]/,
    UNKNOWN: moo.error,
})

