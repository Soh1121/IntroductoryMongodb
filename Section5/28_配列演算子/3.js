db.books.find({
    categories: { $size: 3 }
})
