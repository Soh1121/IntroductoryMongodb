db.users.update(
    {},
    {$rename: { sex: "gender" }},
    {multi: true}
)
