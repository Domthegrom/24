export const getThoughts = (fb, callback, num = 5) => {
    fb
        .database()
        .ref("thoughts/")
        .limitToLast(num)
        .once("value", (snapshot) => {
            let thoughts = [];
            snapshot.forEach((element) => {
                console.log(element)
                thoughts.push(element)
            });
            console.log(thoughts)
            callback(thoughts)
        })
}