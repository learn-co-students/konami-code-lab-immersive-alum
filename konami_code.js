const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];


function init() {
let index = 0;
  document.body.addEventListener('keydown',(e) => {
    const keyName = e.key
    console.log('keydown event\n\n' + 'key: ' + keyName);
    console.log(index)
    console.log(codes[index])
    console.log(codes.length-1)

    if(keyName === codes[index]){

        if(index === codes.length-1){
          window.alert("Hurray!")
          console.log('hellooooooooo')
           index = 0;
        }
          index++
    }
    else {
      console.log("booo")
      index= 0;
    }


  })
}
