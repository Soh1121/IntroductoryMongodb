db.authors.find({
    $and: [
        { dob: { $exists: true } },
        { dob: { $not : { $type: "date" } } }
    ]
})
