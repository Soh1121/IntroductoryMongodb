db.books.find(
    {
        publisher: { $regex: /社/g }
    }
).pretty()
