# Express-Mongo-Paginator

This is a simple package that paginates your mongodb collection.It uses the mongoose ORM behind the scene.

### Install
`npm install express-mongo-paginator`

### api
`const paginator = require("express-mongo-paginator")`

### paginator
This creates a new instance of `express-mongo-paginator`

### paginator.paginator(*collection*,*currentpage*,*perpage*,*filterConditions*)

#### Arguments
- `collection` :This is the collection you want to paginate
- `currentpage` : Current page;;
- `perpage` : Number of items in a collection to be displayed perpage;
- `filterConditions`: Add querys to your collection

### usage

```
const express = require('express');
const paginator = require("express-mongo-paginator");
const mongoose = require("mongoose")
const PORT = process.env.PORT || 5000;
const app = express();


app.get("/get-users", async (req, res) => {
    try {
        let data = await paginator.paginator(User, page, 2,[{
            name: req.query.name
        }]);
        res.status(200).json({data})
    } catch (err) {
        res.status(500).json(err)
    }
})
app.listen(PORT. () => {
    logger.info(`App is running on ${port}`)
})
```
