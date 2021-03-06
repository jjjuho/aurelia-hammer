define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.configure = configure;

  function configure(frameworkConfig) {
    frameworkConfig.globalResources([PLATFORM.moduleName('./hammer-swipe')]);
    frameworkConfig.globalResources([PLATFORM.moduleName('./hammer-tap')]);
    frameworkConfig.globalResources([PLATFORM.moduleName('./hammer-press')]);
    frameworkConfig.globalResources([PLATFORM.moduleName('./hammer-hold')]);
  }
});