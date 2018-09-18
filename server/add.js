const assert = require('assert'); 

module.exports = {
    insertDocuments: (documents, db, callback) => {
        // Get the documents collection
        const collection = db.collection('product');
        // Insert some documents
        collection.insertMany(docs, function(err, result) {
        assert.equal(err, null);
        assert.equal(5, result.result.n);
        assert.equal(5, result.ops.length);
        console.log("Inserted 5 documents into the collection");
        callback(result);
        });
    }
}