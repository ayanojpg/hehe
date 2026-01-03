var express = require("express");
var server = express();
var bodyParser = require("body-parser");
var fileUpload = require("express-fileupload");

server.set("view engine", 'ejs');
server.set("views", __dirname+"/view")



server.use(express.static(__dirname + "/Public"));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(fileUpload({limits:{fileSize:2*1024*1024}}))

var DB=require("nedb-promises");
var ueueDB = DB.create(__dirname+"/ueue.db");
var fuuckyouDB = DB.create(__dirname+"/fuuckyou.db");

<<<<<<< HEAD
 /*ueueDB.insert( [
         { ueueue: "img/IMG_0228.png"},
         { ueueue: "img/IMG_0236.png"},
         { ueueue: "img/IMG_0254.png"},
       { ueueue: "img/IMG_1755.png"},
       { ueueue: "img/IMG_1692.png"},
         { ueueue: "img/IMG_1589.png"}
     ])*/

server.get("/ueue", (req, res) => {
   
    ueueDB.find({},{_id:0}).then(results=>{
=======
server.get("/", (req, res) => {
    res.send("Hello world!");
})
server.get("/art", (req, res) => {
    //db 
    // var Services = [
    //     { icon: 'fa-shopping-cart', title: 'E-Commerce', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur porro laborum fuga repellat necessitatibus corporis nulla, in ex velit recusandae obcaecati maiores, doloremque quisquam similique, tempora aspernatur eligendi delectus! Rem.' },
    //     { icon: 'fa-laptop', title: 'Responsive Design', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.' },
    //     { icon: 'fa-lock', title: 'Web Security', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.' }
    // ]
    ArtDB.find({},{_id:0}).then(results=>{
>>>>>>> 332c0bf044bd74232cabe3e86165110d3bd5d3ca
       
        res.send(results);
    }).catch(error=>{

    })
    
})

<<<<<<< HEAD

/*server.get("/showueue",(req,res)=>{
    ueueDB.find({},{_id:0}).then(results=>{
       
        res.render("ueue",{ueue:results});
    }).catch(error=>{

=======
server.get("/aaaaa", (req, res) => {
    // var Portfolio = [
    //     { href: "#portfolioModal1", imgSrc: "img/portfolio/roundicons.png", title: "Round Icons", text: "Graphic Design" },
    //     { href: "#portfolioModal2", imgSrc: "img/portfolio/startup-framework.png", title: "Startup Framework", text: "Website Design" },
    //     { href: "#portfolioModal3", imgSrc: "img/portfolio/treehouse.png", title: "Treehouse", text: "Website Design" },
    //     { href: "#portfolioModal1", imgSrc: "img/portfolio/roundicons.png", title: "Round Icons", text: "Graphic Design" },
    //     { href: "#portfolioModal2", imgSrc: "img/portfolio/startup-framework.png", title: "Startup Framework", text: "Website Design" },
    //     { href: "#portfolioModal3", imgSrc: "img/portfolio/treehouse.png", title: "Treehouse", text: "Website Design" }
    // ]
    PorfolioDB.find({}).then(results=>{
        res.send(results);
    })
    
})


server.get("/showArt",(req,res)=>{
    ArtDB.find({},{_id:0}).then(results=>{
        res.send(results);
>>>>>>> 332c0bf044bd74232cabe3e86165110d3bd5d3ca
    })

}) */




server.post("/fuuckyou", (req, res) =>{
    console.log("耶比:", req.body);
    fuuckyouDB.insert(req.body).catch(err => console.log(err));

    if(req.files && req.files.myFile1){
        var upFile=req.files.myFile1;
        upFile.mv(__dirname+"/Public/upload/"+upFile.name, function(err){
            if(err){
                res.render("msg",{message:"呵呵失敗了: "+err});
            }else{
                res.render("msg",{message:"你真屌: "+upFile.name});
            }
        });
    }else{
        res.render("msg",{message:"你為什麼不傳檔案"});
    }
});



server.listen(8080)