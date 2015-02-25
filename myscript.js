var dataArray = [1, 8, 7, [4, 65, 1, [2, 7], 45, [6, 4], 6], 4, 8];

var jenyaFlatternArray = function (inputArray) {
    var flattering = function (mlArray) {
        for (var i = 0; i < mlArray.length; i++) {
            var mlArrayI = mlArray[i];
            if (typeof mlArrayI === "object") {
                flattering(mlArrayI);
            } else {
                outputArray.push(mlArrayI);
            }
        }
    };
    var outputArray = [];
    flattering(inputArray);
    return outputArray;
};


console.log(jenyaFlatternArray(dataArray));
