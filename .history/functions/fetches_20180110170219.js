export const getThoughts = (fb, num = 5) => {
    fb.database().ref("thoughts/").limitToLast(num).once("value",(snapshot)=>{
        console.log(snapshot)
        return snapshot
    })
}