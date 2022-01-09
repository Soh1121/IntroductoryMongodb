db.users.update(
    { name: "田中 剛" },
    { $push:
        {
            bookshelf: {
                $each: [
                    { book: "組み合わせ書籍（上）", registered: ISODate("2018-07-31T12:00:00+09:00") },
                    { book: "組み合わせ書籍（下）", registered: ISODate("2018-07-31T12:00:00+09:00") }
                ],
                $sort: {
                    registered: -1
                },
                $slice: 5
            }
        }
    }
)
