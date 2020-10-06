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

//Code review: Very cool way to do the typing effect!! I saw a way to do a similar effect using just CSS, but the Javascript version seems intuitive and makes more sense!
