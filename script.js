let turn = 'X';
// let square = document.querySelectorAll("#square");
let title = document.querySelector(".title");

function end(num1, num2, num3){
    title.innerHTML=`${squares[num1]} Winner`;
    document.getElementById('item'+num1).style.background = 'green';
    document.getElementById('item'+num2).style.background = 'green';
    document.getElementById('item'+num3).style.background = 'green';

    setInterval(() => {
        title.innerHTML += '.'
    }, 1000);
    setTimeout(()=>{location.reload()}, 4000);
}
let squares =[];
function winner(){
 for(let i=1; i<10; ++i){
   squares[i]= document.getElementById('item' +i).innerHTML;
 }

 if( squares[1] == squares[2] && squares[2] == squares[3] && squares[2]!=''){
    end(1, 2, 3);
 }
 
 else if( squares[4] == squares[5] && squares[5] == squares[6] && squares[4]!=''){
    end(4, 5, 6);

 }

 else if( squares[7] == squares[8] && squares[8] == squares[9] && squares[7]!=''){
    end(7, 8, 9);

 }

 else if( squares[1] == squares[4] && squares[4] == squares[7] && squares[7]!=''){
    end(1, 4, 5);

 }
 else if( squares[3] == squares[6] && squares[6] == squares[9] && squares[6]!=''){
    end(3, 6, 9);

 }
 else if( squares[2] == squares[5] && squares[8] == squares[5] && squares[5]!=''){
    end(2, 5, 8);

 }

 else if( squares[1] == squares[5] && squares[5] == squares[9] && squares[5]!=''){
    end(1, 5, 9);

 }
 else if( squares[3] == squares[5] && squares[7] == squares[5] && squares[5]!=''){
    end(3, 5, 7);
 }
//  }else{
//     setInterval(() => {
//         title.innerHTML += '.'
//     }, 1000);
//     setTimeout(()=>{location.reload()}, 4000);
//  }

}

function game(id){
    let element = document.getElementById(id);

        if(turn === 'X' && element.innerHTML == ''){
            element.innerHTML = 'X';
            turn='O';
            title.innerHTML='O';
    }else if(turn === 'O' && element.innerHTML == ''){
            element.innerHTML = 'O';
            turn='X';
            title.innerHTML='X';
    }
    winner()
}