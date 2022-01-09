db.reviews.update(
    {},
    {
        $inc: {
            score: -1
        }
    },
    {
        multi: true
    }
)
