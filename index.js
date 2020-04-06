const mongoose = require("mongoose");
let paginator = async (collection, page, perpage, definedConditions) => {

  var perPage = perpage || 2
  var page = page || 1;
  var skipMath = (perPage * page) - perPage;

  let conditions = [];
  definedConditions.forEach(query => {

    let sortedQuery = Object.entries(query).sort((a, b) => b[0].localeCompare(a[0])); // Emmmm i actually did this for proper ordering.Js can be funny atimes
    for (let [key, value] of sortedQuery) {
      if (key) {
        conditions = [...conditions,
          {
            [key]: value
          }

        ];
      }
    }
  });

  let findConditions = {};

  if (conditions.length > 0) {
    findConditions = {
      $or: conditions
    };
  }

  let response = await collection.find(findConditions).skip(skipMath).limit(perPage);
  let count = await collection.countDocuments();
  return data = {
    data: response,
    current: page,
    perpage: perPage,
    pages: Math.ceil(count / perPage)
  }
}
module.exports = {
  paginator
};