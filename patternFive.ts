const patternFive = (n:number): void => {
    for (let i = n; i > 0; i--){
        let row: String = "";
        for (let j = 0; j < i; j++){
            row += "* ";
        }
        console.log(row.trim());
    }
    
}

patternFive(5)