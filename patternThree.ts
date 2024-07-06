const patternThree = (n:number): void => {
    for (let i = 1; i < n; i++){
        let row: String = "";
        for (let j = 1; j < i; j++){
            row += j.toString();
        }
        console.log(row.trim());
    }
}

patternThree(6)