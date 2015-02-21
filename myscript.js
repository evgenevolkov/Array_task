// output function - BEGIN
var outputArr = [];
var outputLine = 0;
var outputF = function (outputItem) {
    outputArr [outputLine]=(outputItem);
    outputLine = outputLine + 1;
    $("#outputF").text(outputArr.join(" - "));
};
// output function - END
outputF ("Hello")

var dataArray = [1, 8, 7, [ 4, 65, 1, [ 2, 7 ], 45, [ 6, 4], 6 ], 4, 8]
 
//subArrayInsert function - BEGIN

var subArrayInsert =function (place) {
    var subArray=dataArray[place]    
    dataArray.splice(place,1)
    while (subArray.length>0) {
        dataArray.splice(place,0,subArray.pop())    
    };
};

//subArrayInsert function - END

//Array output function - BEGIN
var arrayOutput = function () {
    outputF ("ARRAY OUTPUT")
    for (i=0; i<dataArray.length; i++) {
        outputF ("#"+i+"     "+dataArray[i]+" ================================================")
    };
};

//Array output function - END

// Main code - BEGIN

for (x=0; x<dataArray.length; x++) 
{
	var check = typeof dataArray[x]
    if (check==="object") {
 
    subArrayInsert(x);
         
	}
}

arrayOutput()

outputF ("end")

