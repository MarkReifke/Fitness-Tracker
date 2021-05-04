const router = require("express").Router();
const path = require("path");
const viewDirect = path.join(__dirname, "../views")

router.get("/", function(req, res){
    res.sendFile(path.join(viewDirect, "index.html"));
});

router.get("/exercise", function(req, res){
    res.sendFile(path.join(viewDirect, "exercise.html"));
});

router.get("/stats", function(req, res){
    res.sendFile(path.join(viewDirect, "stats.html"));
});


module.exports = router;