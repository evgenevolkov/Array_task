
var dataArray = [1, 8, 7, [ 4, 65, 1, [ 2, 7 ], 45, [ 6, 4], 6 ], 4, 8]

var jenyaFlatternArray = function (Array) {
    var flattering = function (mlArray) {
        for (var i = 0; i < mlArray.length; i++) {
            var check = typeof mlArray[i];
            if (check === "object") {
                flattering(mlArray[i]);
            } else {
                outputArray.push(mlArray[i]);
            }
        }
    }
    var outputArray = [];
    flattering(Array);
    return outputArray;
};


console.log(jenyaFlatternArray(dataArray));
