db.books.aggregate(
    [
        {
            $group: {
                _id: "$publisher",
                cost: {
                    $sum: "$price"
                },
                page: {
                    $sum: "$pages"
                }
            }
        }
    ]
)
