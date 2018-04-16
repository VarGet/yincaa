<template>
	<div>
		<el-main height="80px" class="minwh">
		    <!-- Main content -->
		    <el-row :gutter="10">
			<template v-for="basis in basis">
			    <el-col :span="4">
			        <!-- content -->
			        <div class="basis-data-list">
			        	<a href="#" :class="basis.icon">
				        	<span>{{ basis.title }}<i>{{ basis.number }} </i> {{ basis.unit }}</span>	
			        	</a>
			        </div>
			    </el-col>
		    </template>
			</el-row>
			<br>
			<br>
			<el-row :gutter="10">
			    <el-col :span="12">
			        <!-- content -->
			        <h3 class="mian-title">车辆在线统计(<i class="datatime">统计时间：{{ datatime }}</i>)</h3>
					<chart :options="carPolar" ></chart>
			    </el-col>
			    <el-col :span="12">
			        <!-- content -->
			       	<h3 class="mian-title">车辆分布图</h3>
			        <mapchart></mapchart>
			    </el-col>
			</el-row>
			<br>
			<br>
			<el-row :gutter="20">
			    <el-col :span="16">
			        <!-- content -->
			        <h3 class="mian-title">车辆数据监控</h3>
					<tables :tableData="tableData" :tableKey="tableKey"></tables>
			    </el-col>
			    <el-col :span="8">
			        <!-- content -->
			        <h3 class="mian-title">系统消息</h3>
			        <ul class="mian-sys-list" >
			        	<li v-for="item in sysL" ><a :href="item.url">{{ item.title }}<i>{{ item.time }}</i></a></li>
			        </ul>
			    </el-col>
			</el-row>
		</el-main>
		
	</div>
</template>

<script type="ecmascript-6">
	import chart from '@/components/ECharts.vue'
	import mapchart from '@/components/mapEchart.vue'
	import moment from 'moment'
	import tables from '@/components/table.vue'

	export default {
		components:{
			chart,
			mapchart,
			tables
		},
		data(){ 

	        moment.locale('zh-cn');
	        let data = moment().format('LLL');
	        let daydata = moment().format('L');

			return {
				basis:[
					{
						title:"组织结构",
						number:12,
						unit:"个",
						icon:"organization"
					},
					{
						title:"入网车辆",
						number:789,
						unit:"辆",
						icon:"car"
					},
					{
						title:"司机总数",
						number:356,
						unit:"个",
						icon:"driver"
					},
					{
						title:"用户总数",
						number:369,
						unit:"个",
						icon:"usersing"
					},
					{
						title:"设备总数",
						number:626,
						unit:"个",
						icon:"equipment"
					},
					{
						title:"外设总数",
						number:12,
						unit:"个",
						icon:"peripherals"
					}

				],
				carPolar: {
			        color: ['#3398DB'],
				    tooltip : {
				        trigger: 'axis',
				        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				        }
				    },
				    grid: {
				        left: '3%',
				        right: '4%',
				        bottom: '3%',
				        containLabel: true
				    },
				    xAxis : [
				        {
				            type : 'category',
				            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
				            axisTick: {
				                alignWithLabel: true
				            }
				        }
				    ],
				    yAxis : [
				        {
				            type : 'value'
				        }
				    ],
				    series : [
				        {
				            name:'在线率',
				            type:'bar',
				            barWidth: '60%',
				            data:[10, 52, 200, 334, 390, 330, 220]
				        }
				    ],
			        animationDuration: 2000
			    },
			    datatime:data,
			    tableKey:[
			    	{
			    		value:'licensePlate',
			    		name:'车牌号码',
			    		widthStyle:'100'
			    	},
			    	{
			    		value:'name',
			    		name:'车队名称',
			    		widthStyle:'150'
			    	},
			    	{
			    		value:'position',
			    		name:'当前位置',
			    		widthStyle:'450'
			    	},
			    	{
			    		value:'status',
			    		name:'状态',
			    		widthStyle:'100'
			    	},
			    	{
			    		value:'mileage',
			    		name:'当天里程(km)',
			    		widthStyle:'180'
			    	},
			    	{
			    		value:'timeOnline',
			    		name:'上线时间',
			    		widthStyle:'180'
			    	}
			    ],
			    tableData: [{
		          licensePlate: '粤·A88989',
		          name: '王小虎',
		          position: '上海市普陀区金沙江路 1518 弄',
		          status:'上线',
		          mileage:'200',
		          timeOnline:'2018.4.11 12时01分'

		        }, {
		          licensePlate: '粤·A88989',
		          name: '王小虎',
		          position: '上海市普陀区金沙江路 1518 弄',
		          status:'上线',
		          mileage:'200',
		          timeOnline:'2018.4.11 12时01分'
		        }, {
		          licensePlate: '粤·A88989',
		          name: '王小虎',
		          position: '上海市普陀区金沙江路 1518 弄',
		          status:'上线',
		          mileage:'200',
		          timeOnline:'2018.4.11 12时01分'
		        }, {
		          licensePlate: '粤·A88989',
		          name: '王小虎',
		          position: '上海市普陀区金沙江路 1518 弄',
		          status:'上线',
		          mileage:'200',
		          timeOnline:'2018.4.11 12时01分'
		        }],
		        sysL:[
		        	{
		        		title:'危险时刻,鹰瞰真·ADAS提醒你该踩刹车了!',
		        		time:daydata,
		        		url:'#'
		        	},
		        	{
		        		title:'危险时刻,鹰瞰真·ADAS提醒你该踩刹车了!',
		        		time:daydata,
		        		url:'#'
		        	},
		        	{
		        		title:'危险时刻,鹰瞰真·ADAS提醒你该踩刹车了!',
		        		time:daydata,
		        		url:'#'
		        	},
		        	{
		        		title:'危险时刻,鹰瞰真·ADAS提醒你该踩刹车了!',
		        		time:daydata,
		        		url:'#'
		        	},
		        	{
		        		title:'危险时刻,鹰瞰真·ADAS提醒你该踩刹车了!',
		        		time:daydata,
		        		url:'#'
		        	}
		        ]

			}
		},
		methods:{

		}
	}
</script>

<style rel="stylesheet" scoped>
	#app.is-component{
		overflow-y: hidden;
	}
	#app.is-component .main-cnt .minwh{
		padding: 0;
	    margin-top: 0;
	    height: 100%;
	    min-height: auto;
	}
	.minwh{
		min-width: 1450px;
	    box-sizing: border-box;
	    min-height: 100%;
	}
	.basis-data-list{
		text-align: center;
		display: table-cell;
	    margin-bottom: 20px;
	    width: 0.5%;
	    height: 100px;
	    background: #eee;
	    padding: 10px;
	    -moz-border-radius: 2px;
	    -webkit-border-radius: 2px;
	    border-radius: 2px;
	    position: relative;
	    -moz-box-shadow: inset 1px 1px 2px #ccc;
	    -webkit-box-shadow: 3px 3px 5px 0px #ccc;
	    box-shadow: 3px 3px 5px 0px #ccc;
	}
	.basis-data-list span{
		padding-top: 70px;
		display: block;
	}
	.basis-data-list span i{
		color: rgb(255, 208, 75);
		font-style: normal;
		font-weight: bold;
	}
	.basis-data-list a{
		width: 100%;
	    height: 98px;
	    display: block;
	    background-color: #fbfbfb;
	    background-repeat: no-repeat;
	    background-position: center 10px;
	    border: 1px solid #fff;
	    -moz-border-radius: 2px;
	    -webkit-border-radius: 2px;
	    border-radius: 2px;
	    color: #333;
	}
	.basis-data-list a:hover{
		border-color: rgb(255, 208, 75);
    	text-decoration: none;
	}
	.basis-data-list a.car{
		background-image: url('../assets/64/cars.png');
	}
	.basis-data-list a.organization{
		background-image: url('../assets/64/organization.png');
	}
	.basis-data-list a.driver{
		background-image: url('../assets/64/driver.png');
	}
	.basis-data-list a.usersing{
		background-image: url('../assets/64/usersing.png');
	}
	.basis-data-list a.equipment{
		background-image: url('../assets/64/equipment.png');
	}
	.basis-data-list a.peripherals{
		background-image: url('../assets/64/peripherals.png');
	}
	.echarts {
		width: 100%;
  		height: 500px;
	}
	.mian-title{
		margin: 20px 0;
	    border-bottom: 2px solid #FB9337;
	    padding-bottom: 20px;
	    padding-right: 20px;
	    display: inline-block;
	    font-size: 18px;
	    color: #333;
	}
	.datatime{
		font-style: normal;
		font-size: 14px;
		font-weight: normal;
	}
	.mian-sys-list li{
		padding: 16px 0;
		border-bottom: 1px solid #ebeef5;
	}
	.mian-sys-list li a{
		font-size: 14px;
		color: #606266;
	}
	.mian-sys-list li a i{
		font-style: normal;
		float: right;
		color: #666;
	}
</style>