/* global module */
module.exports = new Proxy({}, {
    get: (_target, prop) => String(prop)
})
