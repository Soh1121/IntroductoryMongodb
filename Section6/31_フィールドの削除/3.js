db.authors.update({ name: "正岡 子規" },
    {$unset: { dob: "" }})
