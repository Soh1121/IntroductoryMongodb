db.reviews.update(
    {},
    {
        $mul: {
            score: 1 / 2
        }
    },
    {
        multi: true
    }
)
