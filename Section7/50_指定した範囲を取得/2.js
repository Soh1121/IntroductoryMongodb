db.books.aggregate(
    [
        {
            $project: {
                _id: 0,
                title: 1,
                launch: 1
            }
        },
        {
            $sort: {
                launch: -1
            }
        },
        {
            $skip: 2
        }
    ]
)
