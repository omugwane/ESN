const searchCriteriaExecutor = require('../lib/CriteriaExecutor')
const Criteria = require('../lib/Criteria')

exports.search = function (req, res) {

    let context = req.body.context;
    let target = req.body.criteria;
    let value = req.body.searchText;

    let criteria = new Criteria(context, target, value);

    searchCriteriaExecutor.execute(criteria, (results) => {
        if (results)
            res.status(200).json({data: results});
        else
            res.status(500).json({data: results});
    });
};