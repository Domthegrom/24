export const getThoughts = (fb, num = 5) => {
    fb.database().ref("thoughts/").limitToLast(num).once("value",(snapshot)=>{
        console.log(snapshot)
        snapshot.forEach(element => {
            console.log(element)
        });
        return snapshot
    })
}