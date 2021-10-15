const base64  = require('base-64')
const base32  = require('base32')

const Base = (type, text) => new Promise((resolve, reject) => {
    switch (type) {
        case 'enc64':
            const data1 = base64.encode(text)
            resolve({
                code: 200,
                message: 'success',
                coder: '@ariasu.xyz',
                result: [{
                   string: text,
                   encode: data1
                }]
            })
            break
        case 'dec64':
            const data2 = base64.decode(text)
            resolve({
                code: 200,
                message: 'success',
                coder: '@ariasu.xyz',
                result: [{
                   enc: text,
                   encode: data2
                }]
            })
            break
        case 'enc32':
            const data3 = base32.encode(text)
            resolve({
                code: 200,
                message: 'success',
                coder: '@ariasu.xyz',
                result: [{
                   string: text,
                   encode: data3
                }]
            })
            break
        case 'dec32':
            const data4 = base32.decode(text)
            resolve({
                code: 200,
                message: 'success',
                coder: '@ariasu.xyz',
                result: [{
                   enc: text,
                   encode: data4
                }]
            })
            break
        default:
            break
    }
})

module.exports.Base = Base