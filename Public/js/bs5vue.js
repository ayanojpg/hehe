
const { createApp, ref } = Vue;

var serviceApp=createApp({
    data(){
        return{
            Services: []
        }
    }
}).mount("#showArt");


$.ajax({
    url:"/art",
    method:"get",
    dataType:"json",
    success: (result)=>{
        serviceApp.Services = result;
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
