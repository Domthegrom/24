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
            // author: fb.user, //TODO: (baruch) add user information once login and
            // register are ready
            thought: text
        })
}

export const registerUser = (fb, user, callback = () => {}) => {
    fb
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        //TODO: add a then here to add some meta data to user on registration!
        .catch(function (error) {
            console.log(error)
        })
}

export const loginUser = (fb, user, callback = () => {}) => {
    fb
        .auth()
        .signInWithEmailAndPassword(user.email, user.pass)
        .catch(error => {
            console.log(error)
        })
}

export const loginAnon = () => {
    fb
        .auth()
        .signInAnonymously()
        .catch(err => {
            console.log(err)
        })
}

export const registerAuthListener = (fb) => {
    fb
        .auth()
        .onAuthStateChanged(user => {
            if (user) {
                //user signed in fetch some meta data?
                var userData = {
                    isAnon: user.isAnonymous,
                    uid: user.uid
                }
                console.log(user)
            } else {
                //user signed out

            }
        })
}

export const getUserInfo = (fb) => {}