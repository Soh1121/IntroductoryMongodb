db.books.aggregate(
    [
        {
            $project: {
                _id: 0,
                title: 1,
                status: {
                    $cond: {
                        if: {
                            $gte: [
                                {
                                    $size: "$reviews"
                                },
                                2
                            ]
                        },
                        then: "注目",
                        else: ""
                    }
                }
            }
        }
    ]
)
