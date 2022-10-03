    dineroJhorman = prompt ("Cuanto dinero traes Jhorman");
    dineroEliana = prompt ("Cuanto dinero traes Eliana");
    dineroKika = prompt("Cuanto dinero traes Kika");

    dineroJhorman = parseInt(dineroJhorman);
    

    if (dineroJhorman <= 2000){
        alert("Sos pobre, no comes nada Jhorman");
        alert("y te sobra"+ (dineroJhorman - 2000));
    }
    else if (dineroJhorman >= 2000 && dineroJhorman < 3000){
        alert("Podes comerte una arepa con queso Jhorman");
        alert("y te sobra "+ (dineroJhorman - 3000));
    }
    else if (dineroJhorman >= 4000 && dineroJhorman < 7000){
        alert ("Podes comerte un Chorizo Jhorman");
        alert("y te sobra "+ (dineroJhorman - 4000));
    }
    else if (dineroJhorman >= 7000){
        alert("Podes comerte un chuzo Jhorman");
        alert("y te sobra "+ (dineroJhorman - 7000));
    }

    if (dineroEliana <= 2000){
        alert("Sos pobre, no comes nada Eliana");
        alert("y te sobra"+ (dineroEliana - 2000));
    }
    else if (dineroEliana >= 2000 && dineroEliana < 3000){
        alert("Podes comerte una arepa con queso Eliana");
        alert("y te sobra "+ (dineroEliana - 3000));
    }
    else if (dineroEliana >= 4000 && dineroEliana < 7000){
        alert ("Podes comerte un Chorizo Eliana");
        alert("y te sobra "+ (dineroEliana - 4000));
    }
    else if (dineroEliana >= 7000){
        alert("Podes comerte un chuzo Eliana");
        alert("y te sobra "+ (dineroEliana - 7000));
    }

    if (dineroKika <= 2000){
        alert("Sos pobre, no comes nada Kika");
        alert("y te sobra"+ (dineroKika - 2000));
    }
    else if (dineroKika >= 2000 && dineroJhorman < 3000){
        alert("Podes comerte una arepa con queso Kika");
        alert("y te sobra "+ (dineroKika - 3000));
    }
    else if (dineroKika >= 4000 && dineroJhorman < 7000){
        alert ("Podes comerte un Chorizo Kika");
        alert("y te sobra "+ (dineroKika - 4000));
    }
    else if (dineroKika >= 7000){
        alert("Podes comerte un chuzo Kika");
        alert("y te sobra "+ (dineroKika - 7000));
    }