function formatMessage(message, params) {
    if (typeof message === 'string' && typeof params === 'object' && params !== null) {
        return message.replace(/\${(.*?)}/g, (match, key) => params[key] || match);
    }
    return message;
}
  
module.exports = { formatMessage };