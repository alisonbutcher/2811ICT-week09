const assert = require('assert');
module.exports = {
    removeDocument: (db, callback) => {
        // Get the documents collection
        const collection = db.collection('product');
        // Delete document where the id is 3
        collection.deleteOne({
            id : 3
        }, function (err, result) {
            assert.equal(err, null);
            assert.equal(1, result.result.n);
            console.log("Removed the document with id of 3");
            callback(result);
        });
    }
}
