const data = require('./data')

// order matters
const regs = [
  [/tteur$/, 'tteuse'],
  [/pteur$/, 'pteuse'],
  [/eteur$/, 'eteuse'],
  [/lleur$/, 'lleuse'],
  [/rteur$/, 'rteuse'],
  [/reau$/, 'relle'],
  [/ceau$/, 'celle'],
  [/veau$/, 'velle'],
  [/neur$/, 'neuse'],
  [/teur$/, 'trice'],
  [/tien$/, 'tienne'],
  [/cien$/, 'cienne'],
  [/cher$/, 'chère'],
  [/jeur$/, 'jeure'],
  [/être$/, 'êtresse'],
  [/gre$/, 'gresse'],
  [/ger$/, 'gère'],
  [/éen$/, 'éenne'],
  [/eur$/, 'euse'],
  [/ier$/, 'ière'],
  [/ien$/, 'ienne'],
  [/san$/, 'sanne'],
  [/vot$/, 'vot'],
  [/eil$/, 'eille'],
  [/euf$/, 'euve'],
  [/oup$/, 'ouve'],
  [/ète$/, 'étesse'],
  [/dou$/, 'doue'],
  [/mte$/, 'mtesse'],
  [/if$/, 'ive'],
  [/ot$/, 'otte'],
  [/at$/, 'atte'],
  [/on$/, 'onne'],
  [/ou$/, 'ouse'],
  [/ec$/, 'ecque'],
  [/uc$/, 'uchesse'],
  [/el$/, 'elle'],
  [/en$/, 'enne'],
  [/rc$/, 'rque'],
  [/bé$/, 'bésse'],
]
const toFemme = function (str) {
  // try each replacement
  for (let i = 0; i < regs.length; i += 1) {
    let reg = regs[i][0]
    if (str.match(reg)) {
      return str.replace(reg, regs[i][1])
    }
  }
  // otherwise...
  str += 'e'
  return str
}

const irregs = {}
let count = 0
data.forEach((a) => {
  let from = a[0]
  let want = a[1]
  let w = toFemme(from)
  if (w === want) {
    count += 1
  } else {
    // if (from.endsWith('eur')) {
    irregs[from] = want
    console.log(from + ' ➔ ' + w + '  (' + want + ')')
    // }
  }
})
console.log(count)
console.log(count / data.length)
console.log(JSON.stringify(irregs, null, 2))
