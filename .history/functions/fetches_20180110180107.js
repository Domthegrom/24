export const  getThoughts = (fb, callback, num = 5) => {
    fb
        .database()
        .ref("thoughts/")
        .limitToLast(num)
        .once("value", (snapshot) => {
            let thoughts = [];
            console.log( snapshot.val())
            snapshot.forEach((element) => {
                thoughts.push(element)
            });
            callback(thoughts)
        })
}