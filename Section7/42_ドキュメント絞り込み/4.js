db.books.aggregate(
    [
            { $match: { price: { $lt: 500 } } }
    ]
)
