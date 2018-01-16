export const getThoughts = (fb, callback, num = 5) => {
    fb
        .database()
        .ref("thoughts/")
        .limitToLast(num)
        .once("value", (snapshot) => {
            let thoughts = [];
            const snap = snapshot.val();

            Object
                .keys(snap)
                .forEach(ent => {
                    thoughts.push(snap[ent])
                    console.log("..", ent, "|", snap[ent])
                })

            callback(thoughts)
        })
}

export const postThought = (fb,text, callback = () => {}) => {
    fb.database().ref("thoughts/").push({id:"1231241245125",thought:"this is a test post! sent from the app"})
}