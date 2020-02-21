var LineStyle;
(function (LineStyle) {
    LineStyle[LineStyle["SINGLE"] = 0] = "SINGLE";
    LineStyle[LineStyle["DOUBLE"] = 1] = "DOUBLE";
})(LineStyle || (LineStyle = {}));
;
function drawLine(style) {
    if (style == LineStyle.DOUBLE) {
        console.log("==========================");
    }
    else if (style == LineStyle.SINGLE) {
        console.log("--------------------------");
    }
}
console.log("trying different style!");
drawLine(LineStyle.SINGLE);
