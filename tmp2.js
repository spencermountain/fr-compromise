import data from '/Users/spencer/mountain/fr-compromise/data/models/adjective/index.js'

let out = {}
Object.keys(data).forEach(k => {
  if (data[k][0] === data[k][3]) {
    out[k] = data[k]

  }
  data[k].forEach(str => {
    if (!str.startsWith(k.substr(0, 2))) {
      out[k] = data[k]
    }
  })
})

console.log(JSON.stringify(out, null, 2))