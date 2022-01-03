db.books.find({
    publisher: {
        $not: {
            $gt: 500
        }
    }
})
