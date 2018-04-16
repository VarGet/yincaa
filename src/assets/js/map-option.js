//map-option.js

export default {
  tooltip : {
      trigger: 'item'
  },
  legend: {
      orient: 'vertical',
      x:'center',
      text:['车辆数']
  },
  dataRange: {
      min: 0,
      max: 2500,
      x: 'left',
      y: 'bottom',
      text:['高','低'],           
      calculable : true
  },
  toolbox: {
      show: true,
      orient : 'vertical',
      x: 'right',
      y: 'center',
      feature : {
          mark : {show: true},
          dataView : {show: true, readOnly: false},
          restore : {show: true},
          saveAsImage : {show: true}
      }
  },
  roamController: {
      show: true,
      x: 'right',
      mapTypeControl: {
          'china': true
      }
  },
  animation: true,
  animationDurationUpdate: 1000,
  animationEasingUpdate: 'cubicInOut',
  series : [
      {
          name: '车辆数',
            type: 'map',
            mapType: 'china',
            roam: true,
            label: {
              normal: {
                show: true,
                formatter: function(params) {
                  var icon = params.data.value[1] ? 'up' : 'down';
                  var valueType = params.data.value[1] ? 'valueUp' : 'valueDown';
                  return params.name +
                    '：{' + valueType + '|' + params.value + '} {' + icon + '|}';
                },
                position: 'inside',
                backgroundColor: '#fff',
                padding: [4, 5],
                borderRadius: 3,
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,0.5)',
                color: '#777',
                rich: {
                  valueUp: {
                    color: '#019D2D',
                    fontSize: 14
                  },
                  valueDown: {
                    color: 'red',
                    fontSize: 14
                  }
                }
              },
              emphasis: {
                show: true
              }
            },
          data:[
              {name: '北京',value: Math.round(Math.random()*1000)},
              {name: '天津',value: Math.round(Math.random()*1000)},
              {name: '上海',value: Math.round(Math.random()*1000)},
              {name: '重庆',value: Math.round(Math.random()*1000)},
              {name: '河北',value: Math.round(Math.random()*1000)},
              {name: '河南',value: Math.round(Math.random()*1000)},
              {name: '云南',value: Math.round(Math.random()*1000)},
              {name: '辽宁',value: Math.round(Math.random()*1000)},
              {name: '黑龙江',value: Math.round(Math.random()*1000)},
              {name: '湖南',value: Math.round(Math.random()*1000)},
              {name: '安徽',value: Math.round(Math.random()*1000)},
              {name: '山东',value: Math.round(Math.random()*1000)},
              {name: '新疆',value: Math.round(Math.random()*1000)},
              {name: '江苏',value: Math.round(Math.random()*1000)},
              {name: '浙江',value: Math.round(Math.random()*1000)},
              {name: '江西',value: Math.round(Math.random()*1000)},
              {name: '湖北',value: Math.round(Math.random()*1000)},
              {name: '广西',value: Math.round(Math.random()*1000)},
              {name: '甘肃',value: Math.round(Math.random()*1000)},
              {name: '山西',value: Math.round(Math.random()*1000)},
              {name: '内蒙古',value: Math.round(Math.random()*1000)},
              {name: '陕西',value: Math.round(Math.random()*1000)},
              {name: '吉林',value: Math.round(Math.random()*1000)},
              {name: '福建',value: Math.round(Math.random()*1000)},
              {name: '贵州',value: Math.round(Math.random()*1000)},
              {name: '广东',value: Math.round(Math.random()*1000)},
              {name: '青海',value: Math.round(Math.random()*1000)},
              {name: '西藏',value: Math.round(Math.random()*1000)},
              {name: '四川',value: Math.round(Math.random()*1000)},
              {name: '宁夏',value: Math.round(Math.random()*1000)},
              {name: '海南',value: Math.round(Math.random()*1000)},
              {name: '台湾',value: Math.round(Math.random()*1000)},
              {name: '香港',value: Math.round(Math.random()*1000)},
              {name: '澳门',value: Math.round(Math.random()*1000)}
          ]
      }
  ]
};