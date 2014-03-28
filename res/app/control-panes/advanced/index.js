require('./advanced.css')

module.exports = angular.module('stf.advanced', [
  require('./input').name,
  require('./run-js').name,
  require('./usb').name
])
  .run(["$templateCache", function ($templateCache) {
    $templateCache.put('control-panes/advanced/advanced.jade',
      require('./advanced.jade')
    )
  }])
  .controller('AdvancedCtrl', require('./advanced-controller'))
