const moment = require('moment')
module.exports = {
  func: function (diff) {
    const now = moment().subtract(diff, 'day').format()
    return JSON.stringify(now);
  }
};