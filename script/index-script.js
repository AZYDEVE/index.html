let i = 0;
let text = "Hello, I'm Alex Yang. Welcome to my web-page";

function typing(){
  if(i < text.length){
    document.querySelector(".hello").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}
    
typing();