const locations = require("../database/locations");

const search = {};

search.handleRequest = function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    let searchQuery = req.query.query;
    let page = req.query.page;
    
    if (!searchQuery) {
        return res.json({
            "error": "Please enter a query"
        });
    }

    page = (page && !isNaN(page)) ? parseInt(page) : 0;

    locations.search(searchQuery, page).then(data => {
        if (data) return res.json(data);
        return res.json([]);
    }).catch(e => {
        console.log(e);
        res.json({
            "error": "An error occurred"
        });
    })
}

module.exports = search;