const problemTwo = (): void => {
    for (let i = 0; i < 5; i++){
        let row: String = "";
        for (let j = 0; j < i; j++) {
            row += "* ";
        }
        console.log(row.trim());
    }
}
problemTwo()