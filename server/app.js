
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const cr = require('./create');
const add = require('./add');
const read = require('./read');
const upd = require('./update');
const del = require('./remove');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mydb';

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected to database server");

  const db = client.db(dbName);
  name = "product";


  // Create product collection
  cr.createCapped(db, name, () => {
    client.close();
  });

  // Add products to collection
  docs = [
    {id : 1, name : 'hammer', type : 'tool', description : 'Its for banging things'},
    {id : 2, name : 'barbeque', type : 'cooking', description : 'Use it to cook stuff'},
    {id : 3, name : 'deck chair', type : 'furniture', description : 'Essential sunbathing accessory'},
    {id : 4, name : 'screwdriver', type : 'tool', description : 'use it to tighten loose screws on the bbq'},
    {id : 5, name : 'spanner', type : 'tool', description : 'fix your car if you can'}]

  add.insertDocuments(docs, db, () => {
    client.close();
  });

  // Read items from collection
  read.findDocuments(db, () => {
    client.close();
  });

  // Update item in collection
  upd.updateDocument(db, () => {
    client.close;
  });

  // Remove item from collection
  del.removeDocument(db, () => {
    client.close();
  });

  console.log("Calling findDocuments again so that we can see the changes");
  read.findDocuments(db, () => {
    client.close();
  });


});
