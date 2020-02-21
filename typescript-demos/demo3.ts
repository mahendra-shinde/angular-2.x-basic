enum LineStyle { SINGLE = 0, DOUBLE = 1};

function drawLine(style: LineStyle){
    if(style == LineStyle.DOUBLE){
        console.log("==========================");
    }else if(style == LineStyle.SINGLE){
        console.log("--------------------------");
    }
}

console.log("trying single style!")
drawLine(LineStyle.SINGLE);

console.log("trying double style!")
drawLine(LineStyle.DOUBLE);

