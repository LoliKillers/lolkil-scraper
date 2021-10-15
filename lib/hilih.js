const lower = /[aiueo]/g
const upper = /[AIUEO]/g

const Hilih = (vokal) => new Promise((resolve, reject) => {
  const output = vokal.replace(lower, 'i').replace(upper, 'I')
  resolve({
    code: 200,
    message: 'success',
    coded_by: '@ariasu.xyz',
    result: output
  })
})

module.exports.Hilih = Hilih