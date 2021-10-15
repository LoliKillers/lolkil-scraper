const lower = /[aiueo]/g
const upper = /[AIUEO]/g

const Huluh = (vokal) => new Promise((resolve, reject) => {
  const output = vokal.replace(lower, 'u').replace(upper, 'U')
  resolve({
    code: 200,
    message: 'success',
    coded_by: '@ariasu.xyz',
    result: output
  })
})

module.exports.Huluh = Huluh