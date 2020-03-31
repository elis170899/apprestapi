'use strict';

module.exports = funtion(app) {
    var jsonku = require('./controller')

    app.route('./')
    .get(jsonku.index);
}