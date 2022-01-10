db.books.aggregate(
    [
        {
            $group: {
                _id: "$publisher"
            }
        }
    ]
)
