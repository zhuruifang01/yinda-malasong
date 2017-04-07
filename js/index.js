//时间日期：
function currentTime(){
    var d=new Date(),str='';
    str+=d.getFullYear()+'.';
    str+=d.getMonth() + 1+'.';
    str+=d.getDate()+'  ';
    str+=d.getHours()+':';
    str+=d.getMinutes()+':';
    str+= d.getSeconds()+'';
    return str;
}
setInterval(function(){$('#show').html(currentTime)},1000);
//客流来源柱状图：
$(function () {
    // Create the chart
    Highcharts.chart('container1', {
        chart: {
            type: 'column',
            backgroundColor: '#0c3ac1'
        },
        credits:{
            enabled:false
        },
        xAxis: {
            type: 'category',
            labels: {
                y: 10, //x轴刻度往下移动20px
                style: {
                    color: '#fff',//颜色
                    fontSize:'12px'  //字体
                }
            },
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y}'
                },
                pointWidth: 20
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}人</b>'
        },
        series: [{
            name: '参赛人数:',
            colorByPoint: true,
            Width: 5,
            data: [{
                name: '北京',
                y: 100,
                color:"#C02A2C"
            }, {
                name: '河南',
                y: 200,
                color:"#B1C04E"
            }, {
                name: '北京3',
                y: 100,
                color:"#F9CC35"
            }, {
                name: '北京4',
                y: 300,
                color:"#4290538"
            }, {
                name: '北京5',
                y: 100,
                color:"#1F8275"
            }, {
                name: '北京7',
                y: 100,
                color:"#FC8586"
            }, {
                name: '北京8',
                y: 100,
                color:"#8A7AA7"
            }, {
                name: '北京9',
                y: 100,
                color:"#864CB0"
            }, {
                name: '北京6',
                y: 100,
                color:"#8854AB"
            }]
        }]
    });
});
//2.TOP5饼状图：
$(function () {
    $('#container2').highcharts({
        chart: {
            backgroundColor: '#0c3ac1',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        credits: {
            enabled: false
        },
        tooltip: {
            pointFormat: '{point.name}<b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled:true,
                    format: '<b>{point.name}</b>',
                    style : {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            size: '100%',
            data: [
                ['百度',   45.0],
                ['爱奇艺',       26.8],
                {
                    name: '网易',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['CCTV',    8.5],
                ['淘宝',     6.2]
            ]
        }]
    });
});
// 3.客流监控：
$(function () {
    $('#container4').highcharts({
        chart: {
            type: 'area',
            backgroundColor: '#0c3ac1',
        },
        credits: {
            enabled: false
        },
        xAxis: {
            categories: ['10:00', '11:00', '11:30', '12:00'],
            // tickmarkPlacement: 'on',
            title: {
                enabled: false
            },
            labels: {
                y: 20, //x轴刻度往下移动20px
                style: {
                    color: '#fff',//颜色
                    fontSize:'16px'  //字体
                }
            },
            title: {
                enabled: false
            }
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                size: '100%',
                lineWidth: 1,
                marker: {
                     lineWidth: 1,
                     lineColor: '#666666'
                }
            }
        },
        series: [{
            name: '起点',
            color:"#F8DEC4",
            data: [502, 635, 809, 947]
        }, {
            name: '终点',
            color:"#C4EEF8",
            data: [106, 107, 111,100]
        }, {
            name: '半程终点',
            color:"#AE8BF2",
            data: [163, 203, 276]
        }, {
            name: '迷你程终点',
            color:"#6DC36F",
            data: [18, 31, 54, 15]
        }, {
            name: '组委会',
            color:"#5647B4",
            data: [547, 729, 628,100]
        }, {
            name: '新闻中心',
            color:"#C952F5",
            data: [ 339, 818, 1201,2302]
        }, {
            name: '郑开路段',
            color:"#5E0180",
            data: [203, 276, 408, 2761]
        }, {
            name: '中心路段',
            color:"#0D26A2",
            data: [2, 2,6,10]
        }]
    });
});
//4.活动现场人数
window.onload=function(){
    var options = {
        useEasing : true,
        easingFn : null,
        useGrouping : false,
    }
    var demo = new CountUp("myTargetElement", 000001, 125356, 0, 2, options);
    demo.start();
}