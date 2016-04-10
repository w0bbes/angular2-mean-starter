var appModel = require('../models/app-model');

module.exports = function(app) {

  app.get("*", function(req, res) {
    res.sendFile('public/index.html', {'root': './'});
  });

  // Use your model on the others routes
};
