db.books.aggregate(
    [
        {
            $project: {
                _id: 0,
                title: {
                    $concat: ["$title", "（", "$publisher", "）"]
                }
            }
        }
    ]
)
