db.books.aggregate(
    [
        {
            $unwind: "$categories"
        },
        {
            $group: {
                _id: "$categories",
                count: {
                    $sum: 1
                },
                books: {
                    $push: "$title"
                }
            }
        }
    ]
)
