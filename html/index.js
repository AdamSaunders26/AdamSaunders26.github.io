

const button = document.querySelectorAll('button')


const tracker = new Array(9);







function toggleButton(index) 
{
console.dir(button)


let text = button[index].innerText



switch (text) {

case 'X': button[index].innerText = 'O'
tracker[index] = 2

 break
case 'O': button[index].innerText = ' ‎   ‎   ‎    '
tracker[index] = 0

break

default: button[index].innerText = 'X'
tracker[index] = 1

break
}



let winCon = null;


switch(true) {

case tracker[0] === tracker[1] && tracker[0] === tracker[2]:
case tracker[3] === tracker[4] && tracker[3] === tracker[5]:
case tracker[6] === tracker[7] && tracker[6] === tracker[8]:
 
case tracker[0] === tracker[3] && tracker[0] === tracker[6]:
case tracker[1] === tracker[4] && tracker[1] === tracker[7]:
case tracker[2] === tracker[5] && tracker[2] === tracker[8]:   


case tracker[2] === tracker[4] && tracker[2] === tracker[6]:
case tracker[0] === tracker[4] && tracker[0] === tracker[8]:
console.log('winner')


}


console.log(tracker)

}




