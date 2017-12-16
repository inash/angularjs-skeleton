export default {
  template: require('./auth.login.html'),
  controller: AuthLoginController
};

function AuthLoginController() {
  const vm = this;
  vm.name = 'Hello World!';
}
