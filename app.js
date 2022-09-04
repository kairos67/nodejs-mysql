const express = require("express");
const app = express();

app.get("/", function(req, responses) {
    responses.send("여기는 root 입니다.");
});

app.listen(3000, function () {
    console.log("listening on port 3000...");
})