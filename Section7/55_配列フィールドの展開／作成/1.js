db.books.aggregate(
    [
        {
            $match: {
                _id: ObjectId("5b6f03376c25c37f77e69177")
            }
        },
        {
            $unwind: "$categories"
        }
    ]
)
