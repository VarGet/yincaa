<template>          
    <div>
        <div id="mapContainer" style="width:100%;height:500px;"></div>
    </div>
</template>
        
<script>
	import echarts from 'echarts/lib/echarts';
	import option from '../assets/js/map-option'  //引入配置项
    require('../assets/js/china')  //引入china.js地图文件

    export default {
        name: '',
        data () {
          return {  
          
          }
        },
        methods: {
          drawChinaMap() {
            var myChart = this.$echarts.init(document.getElementById('mapContainer'));
            myChart.setOption(option);
          }
        },
        mounted() {
          this.drawChinaMap();
        }
    }
</script>
        
<style scoped>
       
</style>