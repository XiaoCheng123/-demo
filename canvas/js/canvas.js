window.onload = function () {
    //矩形实现
    var drawing1 = document.getElementById('drawing1');
    var drawing2 = document.getElementById('drawing2');
    var drawing3 = document.getElementById('drawing3');
    var drawing4 = document.getElementById('drawing4');
    var drawing5 = document.getElementById('drawing5');
    var drawing6 = document.getElementById('drawing6');
    var drawing7 = document.getElementById('drawing7');
    if(drawing1.getContext) {
        var context1 = drawing1.getContext('2d');
        //绘制红色矩形
        context1.fillStyle = "#ff0000";
        context1.fillRect(10, 10, 50, 50);
        //绘制半透明的蓝色矩形
        context1.fillStyle = "rgba(0, 0, 255, 0.5)";
        context1.fillRect(30, 30, 50, 50);

        var context2 = drawing2.getContext('2d');
        //绘制红色描边矩形
        context2.strokeStyle = "#ff0000";
        context2.strokeRect(10, 10, 50, 50);
        //绘制描边半透明的蓝色矩形
        context2.strokeStyle = "rgba(0, 0, 255, 0.5)";
        context2.strokeRect(30, 30, 50, 50);

        var context3 = drawing3.getContext('2d');
        //绘制红色描边矩形
        context3.fillStyle = "#ff0000";
        context3.fillRect(10, 10, 50, 50);
        //绘制描边半透明的蓝色矩形
        context3.fillStyle = "rgba(0, 0, 255, 0.5)";
        context3.fillRect(30, 30, 50, 50);
        //在矩形之前清除一个矩形
        context3.clearRect(40, 40, 10, 10);

        var context4 = drawing4.getContext('2d');
        //设置阴影
        context4.shadowOffsetX = 5;
        context4.shadowOffsetY = 5;
        context4.shadowBlur = 4;
        context4.shadowColor = "rgba(0, 0, 0, 0.5)";
        //绘制红色矩形
        context4.fillStyle = "#ff0000";
        context4.fillRect(10, 10, 50, 50);
        //绘制半透明的蓝色矩形
        context4.fillStyle = "rgba(0, 0, 255, 0.5)";
        context4.fillRect(30, 30, 50, 50);

        var context5 = drawing5.getContext('2d');
        var gradient = context5.createLinearGradient(30, 30, 70, 70);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "blue");
        //绘制红色矩形
        context5.fillStyle = "#ff0000";
        context5.fillRect(10, 10, 50, 50);
        //绘制渐变矩形
        context5.fillStyle = gradient;
        context5.fillRect(30, 30, 50, 50);

        var context6 = drawing6.getContext('2d');
        var gradient = context6.createRadialGradient(55, 55, 10, 55, 55, 30);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "blue");
        //绘制红色矩形
        context6.fillStyle = "#ff0000";
        context6.fillRect(10, 10, 50, 50);
        //绘制渐变矩形
        context6.fillStyle = gradient;
        context6.fillRect(30, 30, 50, 50);
    }

    //绘制路径
    if(drawing7.getContext) {
        var context7 = drawing7.getContext('2d');
        //开始路径
        context7.beginPath();
        //绘制外圆
        context7.arc(100, 100, 99, 0, 2 *Math.PI, false);
        //绘制内圆
        context7.moveTo(194 , 100);     //把绘图游标移到图形上，不然会出现其他线段
        context7.arc(100, 100, 94, 0, 2 *Math.PI, false);
        //绘制分钟
        context7.moveTo(100, 100);
        context7.lineTo(100, 15);
        //绘制时钟
        context7.moveTo(100, 100);
        context7.lineTo(35, 100);

        //描边路径
        context7.stroke();

        //绘制文本
        context7.font = "bold 14px Arial";
        context7.textAlign = "middle";  //这里的用法和context4.textAlign = "start"结果一样，疑问？？？？
        context7.textBaseLine = "middle";
        context7.fillText("12", 94, 20);
    }


}