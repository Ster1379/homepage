
        function shuffle(arra1){
        let ctr = arra1.length, temp, index;
        while(ctr > 0){
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = arra1[ctr];
            arra1[ctr] = arra1[index];
            arra1[index] = temp;
        }
        return arra1;
    }
    
    
    let data = localStorage.getItem("playlist");
    let list = data.split(",");
    
    let temp1 = list.map((x) => x);
    let temp2 = list.map((x) => x);
    let temp3 = list.map((x) => x);
    let gameOne = shuffle(temp1);
    let gameTwo = shuffle(temp2);
    let gameThree = shuffle(temp3);
    console.log('gameOne',gameOne);
    console.log('gameTwo',gameTwo);
    console.log('gameThree',gameThree);
    let temp4 = gameOne.concat(gameTwo,gameThree);
    let listofPlayers = temp4;
    console.log('shuffle list',listofPlayers);
    for (let i=0; i < list.length; i++){
        let num = i + 1;
        let n = num.toString()
        let playernum = "p"+n;
        let playnum = "Player "+n+" - "+listofPlayers[i];
        document.getElementById(playernum).innerHTML = playnum;
    }
    
    let gameName = ["G1R1","G1R2","G2R1","G2R2","G3R1","G3R2","G4R1","G4R2","G5R1","G5R2"];
    for (let i=0; i < (listofPlayers.length/4)*3; i++){

        let nn = i.toString()

        let gg = "gName"+nn;
        document.getElementById(gg).innerHTML = gameName[i];
    for (let g=0; g < (listofPlayers.length/4); g++){
        console.log('rows of games', g);
        let nn = g.toString()
       // let gg = "gName"+nn;
       // document.getElementById(gg).innerHTML = gameName[g];
        let gamePlayers = listofPlayers[0+g*4]+" + "+listofPlayers[1+g*4]+"  vs  "+listofPlayers[2+g*4]+" + "+listofPlayers[3+g*4];
        document.getElementById(gameName[g]).innerHTML = gamePlayers;


    }
    
}
            
    
