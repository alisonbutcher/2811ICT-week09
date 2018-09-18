module.exports = {
  createCapped: (db, name, callback) => {
    db.createCollection(name, { "capped": true, "size": 100000, "max": 5000},
      function(err, results) {
        console.log("Created a collection named " + name);
        callback();
      }
    );
  }
}