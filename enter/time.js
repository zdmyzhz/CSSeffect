
var together = new Date();
    together.setFullYear(2017, 3, 30); 			//时间年月日,月要减一
    together.setHours(2);						//小时	
    together.setMinutes(5);					    //分钟
    together.setSeconds(0);					    //秒前一位
    // together.setMilliseconds(2);		        //秒第二位

function timeElapse() {
    var current = Date();
    var seconds = (Date.parse(current) - Date.parse(together)) / 1000;
    var days = Math.floor(seconds / (3600 * 24));
    seconds = seconds % (3600 * 24);
    var hours = Math.floor(seconds / 3600);
    if (hours < 10) {
        hours = "0" + hours;
    }
    seconds = seconds % 3600;
    var minutes = Math.floor(seconds / 60);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    seconds = seconds % 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var result = "第 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + seconds + "</span> 秒";
    document.getElementById("clock").innerHTML = result;
    // setInterval(timeElapse, 1000);不能放在这里，会递归卡死。
}



// 切换需要执行的函数
function change(){
    document.getElementById("liker").style.visibility = "hidden";
    document.querySelector(".body_left").style.visibility = "hidden";
    document.querySelector(".footer").style.visibility = "hidden";
    document.getElementById("canvas").style.visibility = "visible";
    document.querySelector(".content").style.visibility = "visible";
    var autoType = new AutoType("#content", arr);
    autoType.once("end", function () {
        addClass(content, 'end'), document.querySelector('#clock-box').classList.add('clock-show')
    })
    setInterval(timeElapse, 1000);
}