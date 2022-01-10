db.authors.aggregate(
    [
        {
            $project: {
                _id: 0,
                name: {
                    $split: ["$name", " "]
                }
            }
        }
    ]
)
