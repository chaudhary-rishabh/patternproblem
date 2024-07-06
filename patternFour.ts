const patternFour = (n:number): void => {
    for (let i = 0; i < n; i++){
        let row: String = "";
        for (let j = 0; j < i; j++){
            row += i.toString();
        }
        console.log(row.trim());
    }
    
}

patternFour(5)