const Wreck = require('@hapi/wreck')
const { serverConfig } = require('../config')

const validateToken = async (decoded, request, _h) => {
  const { payload } = await Wreck.post(`${serverConfig.privateGatewayHost}/auth/validate`, {
    payload: {
      token: decoded
    },
    json: true
  })
  return payload
}

module.exports = {
  validateToken
}
