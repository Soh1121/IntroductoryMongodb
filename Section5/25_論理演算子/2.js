db.books.find({
    $or: [
        { publisher: "講話社" },
        { publisher: "角河書店" }
    ]
})
