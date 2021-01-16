// Firebase SDK
// Key is confidential and not available in public repos
const admin = require("firebase-admin");
const serviceAccount = require("./pwServiceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://personal-website-8e2e7.firebaseio.com"
});
const db = admin.firestore();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT);

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("pages/index.ejs"));

app.get("/courses", (req, res) => res.render("pages/courses.ejs"));

app.get("/projects", (req, res) => {
    res.render("pages/projects.ejs");
});

app.get("/comments", async (req, res) => {
    let comments = [];

    await db.collection("comments").get().then(function(snap){
        snap.forEach(function(doc) {
            if (doc.data().comment != undefined) {
                comments.push(doc.data().comment);
            }
        });
    })

    res.render("pages/comments.ejs", {
        items: comments
    });
});

app.post("/postComment", (req, res) => {
    let data = req.body.comment;

    if (data.trim() != "") {
        async function postComment() {
            await db.collection("comments").add({
                comment: data
            })
            res.send({
                success: true
            });
        }
        postComment();
    }
});