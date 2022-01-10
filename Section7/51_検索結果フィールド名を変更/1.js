db.books.aggregate(
    [
        {
            $group: {
                _id: "$publisher",
                count: {
                    $sum: 1
                }
            }
        }
    ]
)
