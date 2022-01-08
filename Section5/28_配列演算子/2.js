db.users.find({
    bookshelf: {
        $elemMatch: {
            status: { $eq: "読了" },
            readed: { $gte: ISODate("2018-02-01T00:00:00+09:00") }
        }
    }
}).pretty()
