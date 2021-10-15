const lower = /[aiueo]/g
const upper = /[AIUEO]/g

const Holoh = (vokal) => new Promise((resolve, reject) => {
  const output = vokal.replace(lower, 'o').replace(upper, 'O')
  resolve({
    code: 200,
    message: 'success',
    coded_by: '@ariasu.xyz',
    result: output
  })
})

module.exports.Holoh = Holoh