db.books.aggregate(
    [
        {
            $project: {
                _id: 0,
                title: 1,
                price: 1
            }
        },
        {
            $sort: {
                price: 1
            }
        }
    ]
)
