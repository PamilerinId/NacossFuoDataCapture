/* global Idcards */
Idcards = new Mongo.Collection('idcards');


if (Meteor.isServer) {
  Idcards.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });

 /* Idcards.deny({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });*/
}
Idcards.attachSchema (new SimpleSchema({
    picture:{
        type: String,
        label: "Picture"
    },
    firstname:{
        type:String,
        label: "First Name",
        max: 100
    },
    midname:{
        type:String,
        label: "Middle Name",
        max:100
    },
    lastname:{
        type:String,
        label: "Last Name",
        max: 100
    },
    matricno:{
        type:String,
        label: "Matric. No.",
        max:10
    },
    level:{
        type:String,
        label: "Curent Level",
        allowedValues: ['100 Level','200 Level','300 Level','400 Level'],
    }
}));