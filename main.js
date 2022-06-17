






let InputId = document.getElementById("test")
function show() {
    console.log(InputId.value)
}
const playButton = document.getElementById("play")
const OutputId = document.getElementById("idOutput")



let id = ""
let d0S = 0   
 let reS = 0 
 let miS = 0   
 let faS = 0   
 let solS = 0  
 let lyaS = 0
 let siS = 0
//  let InputId = document.getElementById("SongId")
//  function test() {
//      console.log(InputId.value)
//  }
 
const d0 = document.getElementById("do");
    const doB = document.getElementById("doB");  
    const re = document.getElementById("re");
    const reB = document.getElementById("reB");  
    const mi = document.getElementById("mi");
    const miB = document.getElementById("miB");  
    const fa = document.getElementById("fa");
    const faB = document.getElementById("faB");  
    const sol = document.getElementById("sol");
    const solB = document.getElementById("solB");  
    const lya = document.getElementById("lya");
    const lyaB = document.getElementById("lyaB");  
    const si = document.getElementById("si");
    const siB = document.getElementById("siB");  
    let recordTime = document.getElementById("recordTime")
    doB.addEventListener("click", function(){ d0.play(); d0S = 1});   
    reB.addEventListener("click", function(){ re.play(); reS = 1});   
    miB.addEventListener("click", function(){ mi.play();  miS = 1});   
    faB.addEventListener("click", function(){ fa.play(); faS = 1});   
    solB.addEventListener("click", function(){ sol.play();  solS = 1});   
    lyaB.addEventListener("click", function(){ lya.play();  lyaS = 1});   
    siB.addEventListener("click", function(){ si.play();  siS = 1}); 
    
    // console.log(recordTime.value)
function noteCheck() {
    
    if (d0S === 1) {
        id = id + "1"
        
    }else if (reS === 1) {
        id = id + "2"
        
    }else if (miS === 1) {
        id = id + "3"
        
    }else if (faS === 1) {
        id = id + "4"
       
    }else if (solS === 1) {
        id = id + "5"
        
    }else if (lyaS === 1) {
        id = id + "6"
        
    }else if (siS === 1) {
        id = id + "7"
        
    }else {
        id = id + "0"
    }
    
    d0S = 0
    reS = 0
    miS = 0
    faS = 0
    solS = 0
    lyaS = 0
    siS = 0
    OutputId.innerHTML = `id: ${id}`

}

function record() {
    d0S = 0
    reS = 0
    miS = 0
    faS = 0
    solS = 0
    lyaS = 0
    siS = 0
    id = ""
    //console.log("works")
    for (let i = 0; i < Number(recordTime.value) * 10; i++) {
            //console.log(Number(recordTime.value) *10)
            //console.log(typeof Number(recordTime.value))
            setTimeout(noteCheck,100 * i)
            
    }
     function delay() {
        //console.log("delay works")
        console.log(id)
    }
    setTimeout(delay(),1000 * Number(recordTime.value))
    //console.log("past timeout")
   console.log(Number(recordTime.value))
   id = id + "0"
}

//noteCheck()

playButton.addEventListener("click",function(){
    id = InputId.value
    id = id.split(''); 
   let d0note = () => {d0.play(); console.log(1)};
   let renote = () => {re.play();console.log(2)};
   let minote = () => {mi.play();console.log(3)};
   let fanote = () => {fa.play();console.log(4)};
   let solnote = () => {sol.play();console.log(5)};
   let lyanote = () => {lya.play();console.log(6)};
   let sinote = () => {si.play();console.log(7)};
             if (InputId.value === null) {
                InputId.value = 0
            }
           //console.log(InputId.nodeValue)
           for (let j = 0; j < id.length; j++) {
             console.log(id[j])
           }
           
            for (let i = 0; i < InputId.value.length; i++) {
                console.log(id)
                switch (Number(id[i])) {
                    case 1:
                        setTimeout(d0note,100*i);
                        break;
                        case 2:
                            setTimeout(renote,100*i);
                            break;
                            case 3:
                        setTimeout(minote,100*i);
                        break;
                        case 4:
                        setTimeout(fanote,100*i);
                        break;
                        case 5:
                        setTimeout(solnote,100*i);
                        break;
                        case 6:
                        setTimeout(lyanote,100*i);
                        break;
                        case 7:
                        setTimeout(sinote,100*i);
                        break;
                    default:
                        break;
                }

                // console.log(Number(recordTime.value) *10)
                // console.log(typeof Number(recordTime.value))
}})

// function play() {
//     if (InputId.value === null) {
//         InputId.value = 0
//     }
//    console.log(InputId.nodeValue)
//     for (let i = 0; i < InputId.value.length; i++) {
//         // console.log(Number(recordTime.value) *10)
//         // console.log(typeof Number(recordTime.value))
       
        
//          setTimeout(noteplay,100 * i)
        
// }
// }

//console.log("hello"[1])

//button =>
//play() {noteplay() }
//noteplay {
//if (InputId.value[i] == 1)
//play sound DO
//}
//
//
/////
//