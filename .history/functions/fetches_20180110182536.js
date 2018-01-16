export const  getThoughts = (fb, callback, num = 5) => {
    fb
        .database()
        .ref("thoughts/")
        .limitToLast(num)
        .once("value", (snapshot) => {
            let thoughts = [];
            const snap = snapshot.val();
            
            Object.entries(snap).foreach(ent=>{
                thoughts.push(snap[ent])
                console.log("..",ent, "|",snap[ent])
            })

            callback(thoughts)
        })
}