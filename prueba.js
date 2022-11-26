const isParable = (str) => {
    let isParable = false;
    let array = str.split(',');
    for (let index = 0; index < array.length; index++) {
        if (array.length >= 3 && index > 0) {

            isParable = array[index] > array[index - 1] && array[index] > array[index + 1];

            break;
        }

    }
    return isParable;
};
const sheeps = ['Noah,blue', 'Euge,red', 'Ki Na Ma,red'];
const countSheeps = (amount, sheeps) => {

    sheeps.forEach(sheep => {
        const [name, color] = sheep.split(',');
        if (color === "red" && ((name.includes('a') || name.includes('A')) && (name.includes('n') || name.includes('N')))) {
            console.log(name);
        }
    });


};
countSheeps(3, sheeps);