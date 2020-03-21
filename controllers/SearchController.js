require('dotenv').config();
const searchRepository = require('../repositories/SearchRepository');

exports.searchCitizenByUsername = function (req, res) {
	console.log(req.body.context);
	console.log(req.body.searchText);
	let callback = (docs) => {

		try {
			let responseObject = {
				data: docs,
			};
			res.status(200).json(responseObject);
		}
		catch (e) {
			console.log(e);
		}
	};
	if(req.body.context=="citizens")
	{
		console.log("citizens detected");

		searchRepository.searchCitizenByUsername(req.body.searchText,callback);
	}
	else
	{
		console.log("Problems detecting citizens");
	}


};