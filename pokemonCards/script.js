var h = document.getElementById("main");
let arr=[
   " https://tse3.mm.bing.net/th?id=OIP.YNkmSbA4388-Hq0i3httZwHaHB&pid=Api&P=0&h=180" ,
   
   " https://tse4.mm.bing.net/th?id=OIP.h-D3AAtIsaXGDc_7-hJ3IgHaHa&pid=Api&P=0&h=180 ",
   
    "https://tse1.mm.bing.net/th?id=OIP.OJXjQZ-hft32b72WzaoWvAHaIN&pid=Api&P=0&h=180 ",
   
   
    "https://tse1.explicit.bing.net/th?id=OIP.7a1QYwIs8LwPaahs-XFhZAHaI6&pid=Api&P=0&h=180 " ,

    "https://tse2.mm.bing.net/th?id=OIP.kuBDvLukbDjb-ll13VKx6wHaKB&pid=Api&P=0&h=180"
   ]

let s="";

for(let i=0; i<65;i++){

    let r=Math.floor(Math.random()*arr.length)
    s+=`<div class="card">
           <img src=${arr[r]}>
        </div>`;
}
main.innerHTML=s;
