db.books.find({
    $expr: {
        $gt: [{$size: "$categories"}, 1]
    }
})
