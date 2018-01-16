export const getThoughts = (fb, num = 5) => {
    fb.database().ref("thoughts/").limitToLast(num).once("value",(snapshot)=>{
        let thoughts =[];
        snapshot.forEach((key,element) => {
            let temp = {id:key,thought:element.thought}
            console.log(temp)
            thoughts.push(temp)
        });
        return thoughts
    })
}