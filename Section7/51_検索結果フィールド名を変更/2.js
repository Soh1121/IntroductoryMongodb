db.books.aggregate(
    [
        {
            $group: {
                _id: "$publisher",
                count: {
                    $sum: 1
                }
            }
        },
        {
            $project: {
                _id: 0,
                publisher: "$_id",
                count: 1
            }
        }
    ]
)
