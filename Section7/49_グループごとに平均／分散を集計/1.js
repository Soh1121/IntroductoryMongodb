db.books.aggregate(
    [
        {
            $group: {
                _id: 0,
                avg: {
                    $avg: "$price"
                },
                std: {
                    $stdDevPop: "$price"
                }
            }
        }
    ]
)
