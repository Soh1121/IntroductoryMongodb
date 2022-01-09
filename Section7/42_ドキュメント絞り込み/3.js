db.books.aggregate(
    [
            { $match: { price: { $gt: 500 } } }
    ]
)
