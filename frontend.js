const response = await fetch("https://examle.org/post",{
    method: "POST",
    body: JSON.stringify({ username: "tom_1"}),
    headers: {
        "Content-Type": "appication/json",
    },
})