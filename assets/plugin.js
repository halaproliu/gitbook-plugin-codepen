"use strict";

var _gitbook = _interopRequireDefault(require("gitbook"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var loadScript = function loadScript(url) {
  var script = document.createElement('script');
  script.src = url;
  script.async = 1;
  document.getElementsByTagName('head')[0].appendChild(script);
};

_gitbook["default"].events.bind('start', function (e, config) {
  var pluginConfig = config.codepen;

  if (pluginConfig) {
    var url = 'https://static.codepen.io/assets/embed/ei.js';
    loadScript(url);
  }
});