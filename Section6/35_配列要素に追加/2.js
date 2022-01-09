db.users.update(
    { name: "田中 剛" },
    { $push:
        {
            bookshelf: {
                $each: [
                    {
                        book: "書籍２",
                        registered: ISODate("2018-07-12T12:00:00+09:00")
                    },
                    {
                        book: "書籍３",
                        registered: ISODate("2018-06-28T12:00:00+09:00")
                    }
                ]
            }
        }
    }
)
