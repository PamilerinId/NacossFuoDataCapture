Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});


Router.route('idcards/id_create', {
  name: 'id_create',
  controller: 'IdcardsController',
  where: 'client'
});


Router.route('yearbook/create_profile', {
  name: 'create_profile',
  controller: 'YearbookController',
  where: 'client'
});