const searchCriteriaExecutor = require('../lib/CriteriaExecutor');
const SearchCriteriaFactory = require('../lib/SearchCriteriaFactory');

exports.search = function (req, res) {

    let context = req.body.context;
    let target = req.body.criteria;
    let value = req.body.searchText;

    const factory = new SearchCriteriaFactory();

    let criteria = factory.createCriteria(context, target, value);

    console.log("Criteria from factory", criteria);
    if (criteria) {
        searchCriteriaExecutor.execute(criteria, (err, results) => {
            if (!err)
                res.status(200).json({data: results});
            else
                res.status(500).json({data: results, error: err});
        });
    } else
        res.status(500).json({data: [], error: 'Invalid data'});
};