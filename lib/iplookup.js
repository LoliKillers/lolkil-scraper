const needle = require('needle')

const url = 'http://ip-api.com/json/'

const IpLookup = (ip) => new Promise((resolve, reject) => {
  needle(url + encodeURIComponent(ip), (error, resp, body) => {
    const { isp, regionName, status, message, query, country, region, lat, lon, timezone, org, as, city, countryCode, zip } = body
    if (status == 'fail' || message == 'invalid query') {
      reject({
        message: `only ipv6, ${message}`
      })
    } else {
      resolve({
        code: 200,
        status: status,
        country: country,
        country_code: countryCode,
        region: region,
        region_name: regionName,
        city: city,
        zip: zip,
        lat: lat,
        lon: lon,
        timezone: timezone,
        isp: isp,
        org: org,
        as: as,
        ip: query,
        maps: 'https://www.google.com/maps/@' + lat + ',' + lon,
        coded_by: '@ariasu.xyz'
      })
    }
  })
})

module.exports.IpLookup = IpLookup
