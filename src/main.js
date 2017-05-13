import environment from './environment';
import Backend from 'i18next-xhr-backend';

Promise.config({
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  //register the plugin
  aurelia.use.plugin('aurelia-i18n', (instance) => {
    // register backend plugin
    instance.i18next.use(Backend);

    return instance.setup({
      backend: {
        loadPath: './locales/{{lng}}/{{ns}}.json',
      },
      lng : 'es',
      attributes : ['t','i18n'],
      fallbackLng : 'en',
      debug : false
    });
  });

  aurelia.start().then(() => aurelia.setRoot());
}