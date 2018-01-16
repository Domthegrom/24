export const getThoughts = (fb, num = 5) => {
    return fb.database().ref("thoughts/").limitToLast(num).once("value",(snapshot)=>{
        let thoughts =[];
        snapshot.forEach((element) => {
            console.log(element)
            thoughts.push(element)
        });
        return thoughts
    })
}