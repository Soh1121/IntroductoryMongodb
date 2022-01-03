db.books.find({ publisher: "新朝社" }).sort({ launch: -1 }).pretty()
