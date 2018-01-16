getThoughts = (fb, num = 5) => {
    fb.database().ref("thoughts/").limitToLast(4).once("value",(snapshot)=>{
        console.log(snapshot)
    })
}