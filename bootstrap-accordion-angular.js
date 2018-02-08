<script>
angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('AccordionDemoCtrl', function ($scope) {
var vm = this;
vm.stepOpen = [true, false, false, false];
vm.reachedStep = 0;
});
</script>