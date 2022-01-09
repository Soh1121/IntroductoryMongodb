db.users.update(
    { name: "田中 剛" },
    { $push:
        {
            bookshelf: {
                $each: [
                    { book: "書籍X", registered: ISODate("2018-08-01T12:00:00+09:00") }
                ],
                $position: 0
            }
        }
    }
)
