exports.isFunction = isFunction

function isFunction(func) {
  return func && typeof(func) === 'function'
}