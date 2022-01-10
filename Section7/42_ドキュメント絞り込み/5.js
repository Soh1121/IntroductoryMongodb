db.books.aggregate(
    [
            { $match: { publisher: /社/g } }
    ]
)
