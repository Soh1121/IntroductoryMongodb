db.books.aggregate(
    [
        {
            $group: {
                _id: "$publisher",
                max: {
                    $max: "$price"
                },
                min: {
                    $min: "$price"
                }
            }
        }
    ]
)
