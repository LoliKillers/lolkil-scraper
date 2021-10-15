const lower = /[aiueo]/g
const upper = /[AIUEO]/g

const Halah = (vokal) => new Promise((resolve, reject) => {
  const output = vokal.replace(lower, 'a').replace(upper, 'A')
  resolve({
    code: 200,
    message: 'success',
    coded_by: '@ariasu.xyz',
    result: output
  })
})

module.exports.Halah = Halah