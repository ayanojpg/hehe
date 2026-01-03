
<<<<<<< HEAD:Public/js/shitshitvue.js
// var myObject=new Vue({
//     el: "#portfolio",
//     data: {Portfolio: []}
//     })
//     $.ajax({
//         url:"/portfolio",
//         method: "get",
//         dataType: "json",
//         success: function(data){
//             myObject.Portfolio = data;
//         }
//     })

//     var vueUeue = new Vue({
//         el: "#ueue",
//         data: {ueue:[
//            {icon:'fa-shopping-cart', title:'E-Commerce', text:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur porro laborum fuga repellat necessitatibus corporis nulla, in ex velit recusandae obcaecati maiores, doloremque quisquam similique, tempora aspernatur eligendi delectus! Rem.'},
//            {icon:'fa-laptop', title:'Responsive Design', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'},
//            {icon:'fa-lock', title:'Web Security', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'}
//         ]}
//     })
=======
>>>>>>> 332c0bf044bd74232cabe3e86165110d3bd5d3ca:Public/js/bs5vue.js
const { createApp, ref } = Vue;

var ueueApp=createApp({
    data(){
        return{
            ueue: []
        }
    }
<<<<<<< HEAD:Public/js/shitshitvue.js
}).mount("#ueue");

//req ueue data fromm server
$.ajax({
    url:"/ueue",
=======
}).mount("#showArt");


$.ajax({
    url:"/art",
>>>>>>> 332c0bf044bd74232cabe3e86165110d3bd5d3ca:Public/js/bs5vue.js
    method:"get",
    dataType:"json",
    success: (result)=>{
        ueueApp.ueue = result;
    }
})



var portfolioApp=createApp({
    setup(){
        return{
            Portfolio: ref([])
        }
    }
}).mount("#aaaaa");

$.ajax({
    url:"/aaaaa",
    method:"get",
    dataType:"json",
    success: (result)=>{
        portfolioApp.Portfolio = result;
    }
})
