var dataArray = [1, 8, 7, [4, 65, 1, [2, 7], 45, [6, 4], 6], 4, 8];

var jenyaFlatternArrayModule = (function () {
    var outputArray = [];
    return {
        flatter: function (mlArray) {
            for (var i = 0; i < mlArray.length; i++) {
                var mlArrayI = mlArray[i];
                if (typeof mlArrayI === "object") {
                    this.flatter(mlArrayI);
                } else {
                    outputArray.push(mlArrayI);
                }
            }
            return outputArray;
        }
    }
})();


console.log(jenyaFlatternArrayModule.flatter(dataArray));
