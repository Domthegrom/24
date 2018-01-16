export const  getThoughts = (fb, callback, num = 5) => {
    fb
        .database()
        .ref("thoughts/")
        .limitToLast(num)
        .once("value", (snapshot) => {
            let thoughts = [];
            const snap = snapshot.val();
            snap.forEach((element) => {
                thoughts.push(element)
            });
            callback(thoughts)
        })
}