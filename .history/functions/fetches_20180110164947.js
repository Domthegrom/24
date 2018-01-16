getThoughts = (fb, num = 5) => {
    fb.database().ref("thoughts/").once("value",(snapshot)=>{
        console.log(snapshot)
    })
}