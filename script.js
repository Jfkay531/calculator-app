

let input= document.querySelector (".input")
let output=document.querySelector(".output")

buttons= Array.from(document.querySelectorAll('button'))
// console.log(buttons);


buttons.map(button => {
  button.addEventListener("click",
(e) => {

  switch(e.target.innerText){

    case "C":
    if (input.innerText){
      input.innerText=input.innerText.slice(0,-1)
    }
    break;

    case "CL":
    output.innerText =" ";
    input.innerText= " ";
    break
    //

    case "=":

        try {
          output.innerText= eval(input.innerText);
        } catch (e) {
          // if (e instanceof SyntaxError ){
          ouput.innerText = "Error-----"
          // }
        }
        break;

    default:
    input.innerText += e.target.innerText;
    break;

  }
})
})
