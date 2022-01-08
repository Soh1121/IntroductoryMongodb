db.reviews.update(
    {},
    {
        $mul: {
            score: 2
        }
    },
    {
        multi: true
    }
)
