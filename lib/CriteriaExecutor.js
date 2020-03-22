exports.execute = async (criteria, callback) => {
    criteria.execute((err, docs) => {
        callback(err, docs);
    });
};