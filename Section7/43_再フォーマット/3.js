db.books.aggregate(
    [
        {
            $match: {
                publisher: "講話社"
            }
        },
        {
            $project: {
                _id: 0,
                title: 0
            }
        }
    ]
)
