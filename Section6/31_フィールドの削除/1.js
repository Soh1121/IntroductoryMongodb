db.authors.update({ name: "正岡 子規"},
    { $set: { dob: ISODate("1867-10-14T00:00:00+09:00") } })
