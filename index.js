let imges = [
    {fontImg: "img/story/1.jpg", backImg: "img/story/1.jpg"},
    {fontImg: "img/story/2.jpg", backImg: "img/story/2.jpg"},
    {fontImg: "img/story/3.jpg", backImg: "img/story/3.jpg"},
    {fontImg: "img/story/4.jpg", backImg: "img/story/4.jpg"},
    {fontImg: "img/story/5.jpg", backImg: "img/story/5.jpg"},
    {fontImg: "img/story/6.jpg", backImg: "img/story/6.jpg"},
];

let sum = document.querySelector(".card-margin");

// let showImg = document.querySelector(".card-back-img");

let newValue = ""

 imges.forEach((elm, index) => {
    newValue += ` <div class="card-story">
    <img src="${elm.fontImg}" alt="" id = "${index}">
</div>`
 })

 sum.innerHTML = newValue;


 sum.addEventListener("click", (dets) => {
     document.querySelector(".card-back-img").style.display = "block";
     
   console.log();

     document.querySelector(".card-back-img").style.backgroundImage = `url(${imges[dets.target.id].backImg})`;

     setTimeout(() => {
        document.querySelector(".card-back-img").style.display = "none";
     }, 5000);
 });
 