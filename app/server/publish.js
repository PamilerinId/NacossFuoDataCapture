


Meteor.publish('idcards', function () {
  return Idcards.find();
});

Meteor.publish('yearbook', function () {
  return Yearbook.find();
});