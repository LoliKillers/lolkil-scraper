const needle = require('needle');

const url = 'https://api.getproxylist.com/proxy'

const Proxy = () => new Promise((resolve, reject) => {
  needle(url, (err, res, body) => {
    if (!err) {
      const { secondsToFirstByte, allowsCookies, allowsCustomHeaders, allowsUserAgentHeader, allowsRefererHeader, lastTested, anonymity, _links, ip, port, protocol, country, allowsPost, allowsHttps, connectTime, downloadSpeed, uptime } = body
      resolve({
        code: 200,
        message: 'success',
        _links: {
          _self: _links._self,
          _perent: _links._parent
        },
        ip: ip,
        port: port,
        protocol: protocol,
        anonymity: anonymity,
        lastTested: lastTested,
        allowsRefererHeader: allowsRefererHeader,
        allowsUserAgentHeader: allowsUserAgentHeader,
        allowsCustomHeaders: allowsCustomHeaders,
        allowsCookies: allowsCookies,
        allowPost: allowsPost,
        allowHttps: allowsHttps,
        country: country,
        connectTime: connectTime,
        downloadSpeed: downloadSpeed,
        uptime: uptime,
        secondsToFirstByte: secondsToFirstByte,
			  coded_by: '@ariasu.xyz'
      })
    } else {
      reject({
        message: "Error"
      })
    }
  })
})

module.exports.Proxy = Proxy
