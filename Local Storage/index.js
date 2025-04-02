let likeBtn = document.querySelector(".likeBtn")
let dislikeBtn = document.querySelector(".dislikeBtn")

let likeCount;
let dislikeCount;

if( localStorage.getItem("puppyLike")== null){
    likeCount = "0";
}
else {
    likeCount = localStorage.getItem("puppyLike");
}
document.querySelector(".likes").innerText = likeCount;  
likeFunction = () => {    
    likeCount++;  
    document.querySelector(".likes").innerText = likeCount;  
    localStorage.setItem("puppyLike", likeCount)
}

if(localStorage.getItem("puppyDislike") == null){
    dislikeCount = "0";
}
else{
    dislikeCount = localStorage.getItem("puppyDislike");
    document.querySelector(".dislike").innerText = dislikeCount;
}
dislikeFunction = () => {
    dislikeCount ++;
    document.querySelector(".dislike").innerText = dislikeCount;
    localStorage.setItem("puppyDislike", dislikeCount);
}
likeBtn.addEventListener("click", likeFunction);
dislikeBtn.addEventListener("click",dislikeFunction);
