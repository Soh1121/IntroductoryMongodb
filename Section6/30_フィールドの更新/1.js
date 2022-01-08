db.authors.update({ name: "与謝野 晶子" },
    { $set: {
        dob: ISODate("1878-12-07T00:00:00+09:00")
    } }
)
