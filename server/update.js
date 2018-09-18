const assert = require('assert');
module.exports = {
    updateDocument: (db, callback) => {
        // Get the documents collection
        const collection = db.collection('product');
        // Update document where id is 2, change product description 
        collection.updateOne({ id : 1 }
          , { $set: { description : "Use it to hammer in your nails" } }, function(err, result) {
          assert.equal(err, null);
          assert.equal(1, result.result.n);
          console.log("updated description for the hammer product");
          callback(result);
        });  
    }
}
