module.exports = function (app) {
    app.get("/api/user/:id", function (req, res) {
        res.json({
            firstName: "Mai",
            lastName: "Hoa"
        })
    })
    app.post("/api/user/", function (req, res) {

    })
    app.put("/api/user/", function (req, res) {

    })
    app.delete("/api/user/:id", function (req, res) {

    })
}