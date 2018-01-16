export const  getThoughts = (fb, callback, num = 5) => {
    fb
        .database()
        .ref("thoughts/")
        .limitToLast(num)
        .once("value", (snapshot) => {
            let thoughts = [];
            const snap = snapshot.val();
            
            for(let n of snap){
                console.log("n ",n)
                thoughts.push(n)
            }

            callback(thoughts)
        })
}