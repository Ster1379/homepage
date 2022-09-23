// - Randon game name generator

function myIndex(){
    let digit = [];
    let letter_numbers = ['a','b','c','d','e','f','g','h','j','k','m','n','p','q','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9'];
    for (var i = 0; i < 4; i++) {
        let num = Math.floor(Math.random()* 29);
        console.log('num',num);
        digit.push(letter_numbers[num]);
    }
    
    return digit[0].toUpperCase()+digit[1]+digit[2]+digit[3];
}
function counter(gp,gn) {
    let ctr = 0;
        for (let i=0; i < gp.length; i++)  {
            if (gp[i].gameName === gn) {
            ctr++;
          }
        }
return ctr;
}


