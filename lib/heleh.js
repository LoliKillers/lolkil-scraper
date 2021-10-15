const lower = /[aiueo]/g
const upper = /[AIUEO]/g

const Heleh = (vokal) => new Promise((resolve, reject) => {
  const output = vokal.replace(lower, 'e').replace(upper, 'E')
  resolve({
    code: 200,
    message: 'success',
    coded_by: '@ariasu.xyz',
    result: output
  })
})

module.exports.Heleh = Heleh