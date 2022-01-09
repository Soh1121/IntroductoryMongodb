db.books.aggregate(
    [
            { $match: { ublisher: { $ne: "講話社" } } }
    ]
)
