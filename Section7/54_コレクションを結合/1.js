db.books.aggregate(
    [
        {
            $match: {
                _id: ObjectId("5b6f03376c25c37f77e69177")
            }
        },
        {
            $lookup: {
                from: "reviews",
                localField: "_id",
                foreignField: "book",
                as: "reviews"
            }
        }
    ]
)
