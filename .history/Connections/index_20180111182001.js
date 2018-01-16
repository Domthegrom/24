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
                })

            callback(thoughts)
        })
}

export const postThought = (fb, text, callback = () => {}) => {
    fb
        .database()
        .ref("thoughts/")
        .push({
            // author: fb.user, //TODO: (baruch) add user information once login and register are ready
             thought: text})
}

export const getUserInfo = (fb) => {



}