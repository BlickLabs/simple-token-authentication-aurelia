define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  class App {
    constructor() {
      this.message = 'Hello World!';
    }
  }
  exports.App = App;
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment', 'i18next-xhr-backend'], function (exports, _environment, _i18nextXhrBackend) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  var _i18nextXhrBackend2 = _interopRequireDefault(_i18nextXhrBackend);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    //register the plugin
    aurelia.use.plugin('aurelia-i18n', instance => {
      // register backend plugin
      instance.i18next.use(_i18nextXhrBackend2.default);

      return instance.setup({
        backend: {
          loadPath: './locales/{{lng}}/{{ns}}.json'
        },
        lng: 'es',
        attributes: ['t', 'i18n'],
        fallbackLng: 'en',
        debug: false
      });
    });

    aurelia.start().then(() => aurelia.setRoot());
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {
    //config.globalResources([]);
  }
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <h1>${message}</h1>\n  <p i18n=\"hello\"></p>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map