const patternOneA = (): void => {
    for (let i = 0; i < 4; i++){
        let row: string = "";
        for (let j = 0; j < 4; j++){
            row += "* ";
        }
        console.log(row.trim());
    }
}
patternOneA();
