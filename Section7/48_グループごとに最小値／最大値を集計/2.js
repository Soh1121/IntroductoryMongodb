db.books.aggregate(
    [
        {
            $group: {
                _id: {
                    year: {
                        $year: "$launch"
                    },
                    month: {
                        $month: "$launch"
                    }
                },
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
