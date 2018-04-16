<router-view></router-view><template>
	<div>
		<div class="header">
			<el-row :gutter="10" class="header-top">
			    <el-col :span="4" >
			        <!-- content -->
			        <h1 class="logo">
						<a href="#">YINCAA·ADAS</a>
					</h1>
			    </el-col>
			    <el-col :span="16">
			        <!-- content -->
			        <nav>
						<el-menu :default-active="activeIndex" class="el-menu-demo nav" id="navliasts" mode="horizontal" @select="handleSelect" background-color="#444" text-color="#fff"  active-text-color="#ffd04b">
				        	<template v-for="item in items">
				        		<template v-if="item.subs">
				        			<el-submenu :index="item.index">
				        				<template slot="title"><i :class="item.icon"></i><span>{{ item.name }}</span></template>
				        				<template v-for="itemsubs in item.subs">
				        					<template v-if="itemsubs.chl">
					        					<el-submenu :index="itemsubs.index">
					        						<template slot="title">{{ itemsubs.name }}</template>
					        						<template v-for="itemchl in itemsubs.chl">
					        							
					        								<router-link :to="itemchl.rlink"><el-menu-item :index="itemchl.index" >{{ itemchl.name }}</el-menu-item></router-link>
					        							
					        						</template>
					        					</el-submenu>
				        					</template>
				        					<template v-else>
				        							<router-link :to="itemsubs.rlink"><el-menu-item :index="itemsubs.index">{{ itemsubs.name }}</el-menu-item></router-link>
				        						
				        					</template>
				        				</template>
				        			</el-submenu>
				        		</template>
				        		<template v-else >
				        			
										<el-menu-item :index="item.index" class="index"><router-link :to="item.rlink"><i :class="item.icon"></i><span>{{ item.name }}</span></router-link>
										</el-menu-item>
									
								</template>
				        	</template>
				        	
						</el-menu>
					</nav>
			    </el-col>
			    <el-col :span="4" class="header-right-content">
			        <!-- content -->
			        <el-dropdown trigger="click" @command="">
			            <span class="header-uers">
			            	 {{ uersID }} 
			                <i class="el-icon-arrow-down el-icon--right"></i>
			            </span>
			            <el-dropdown-menu slot="dropdown">
			                <el-dropdown-item v-for="item in uersList":key="item.key" :command="item.command">
			                    {{item.title}}
			                </el-dropdown-item>
			            </el-dropdown-menu>
			        </el-dropdown>
			        <el-button type="danger" size="mini" class="uese-out" offset="10">退出登录</el-button>
			    </el-col>
			</el-row>
		</div>
		
		<el-main :height="fullHeight+'px'" class="minwh" >
		    <!-- Main content -->

		    <keep-alive>
		    	<transition name="fade">
					<router-view></router-view>	
				</transition>
			</keep-alive>
		</el-main>
	</div>
</template>

<script>
	
	
	export default {
		data() {
	      return {
	      	items:[
	      		{
	      			index:"1",
	      			name:"首页",
	      			icon:"el-icon-nav-shouye",
	      			rlink:'/'
	      		},
	      		{
	      			index:"2",
	      			name:"基础功能",
	      			icon:"el-icon-nav-xiangmuguanli",
	      			subs:[
	      				{
	      					index:"2-1",
	      					name:"基础数据管理",
	      					chl:[
	      						{
	      							index:"2-1-1",
	      							name:"车辆管理",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"2-1-2",
	      							name:"终端管理",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"2-1-3",
	      							name:"从业人员管理",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"2-1-4",
	      							name:"SIM卡管理",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"2-1-5",
	      							name:"组织架构管理",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"2-1-6",
	      							name:"用户角色管理",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"2-1-7",
	      							name:"外设管理",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"2-1-8",
	      							name:"上报平台车辆管理",
	      							rlink:'/VehicleManagement'
	      						}

	      					]
	      				},
	      				{
	      					index:"2-2",
	      					name:"高级功能管理",
	      					chl:[
	      						{
	      							index:"2-2-1",
	      							name:"数据字典管理",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"2-2-2",
	      							name:"服务器节点管理",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"2-2-3",
	      							name:"服务器车组绑定",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"2-2-4",
	      							name:"数据备份还原",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"2-2-5",
	      							name:"媒体服务器车组绑定",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"2-2-6",
	      							name:"数据服务器车组绑定",
	      							rlink:'/VehicleManagement'
	      						}
	      					]
	      				},
	      				{
	      					index:"2-3",
	      					name:"道路安全管理",
	      					chl:[
	      						{
	      							index:"2-3-1",
	      							name:"保险管理",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"2-3-2",
	      							name:"道路运输证管理",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"2-3-3",
	      							name:"行驶证管理",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"2-3-4",
	      							name:"报警配置",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"2-3-5",
	      							name:"危险货物运输趟次管理",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"2-3-6",
	      							name:"旅游客车车程管理",
	      							rlink:'/VehicleManagement'
	      						}
	      					]
	      				},
	      				{
	      					index:"2-4",
	      					name:"安装及维护管理",
	      					chl:[
	      						{
	      							index:"2-4-1",
	      							name:"车辆运维管理",
	      							rlink:'/VehicleManagement'
	      						}
	      					]
	      				}
	      			]
	      		},
	      		{
	      			index:"3",
	      			name:"报警管理",
	      			icon:"el-icon-nav-baojing",
	      			subs:[
	      				{
	      					index:"3-1",
	      					name:"报警统计",
	      					chl:[
	      						{
	      							index:"3-1-1",
	      							name:"报警统计表",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"3-1-2",
	      							name:"报警处理报表",
	      							rlink:'/VehicleManagement'
	      						}
	      					]
	      				},
	      				{
	      					index:"3-2",
	      					name:"车辆紧急报警",
	      					chl:[
	      						{
	      							index:"3-2-1",
	      							name:"紧急报警",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"3-2-2",
	      							name:"碰撞报警",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"3-2-3",
	      							name:"侧翻报警",
	      							rlink:'/VehicleManagement'
	      						}
	      					]
	      				},
	      				{
	      					index:"3-3",
	      					name:"异常驾驶行为报警",
	      					chl:[
	      						{
	      							index:"3-3-1",
	      							name:"司机打电话报警",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"3-3-2",
	      							name:"进出区域报警",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"3-3-3",
	      							name:"线路偏移报警",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"3-3-4",
	      							name:"平台夜间行驶报警",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"3-3-5",
	      							name:"道路偏离报警",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"3-3-6",
	      							name:"超时疲劳驾驶报警",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"3-3-7",
	      							name:"超时报警",
	      							rlink:'/VehicleManagement'
	      						}
	      					]
	      				},
	      				{
	      					index:"3-4",
	      					name:"故障类报警",
	      					chl:[
	      						{
	      							index:"3-4-1",
	      							name:"设备故障报警",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"3-4-2",
	      							name:"存储故障报警",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"3-4-3",
	      							name:"车辆故障报警",
	      							rlink:'/VehicleManagement'
	      						}
	      					]
	      				}
	      			]
	      		},
	      		{
	      			index:"4",
	      			name:"运营管理",
	      			icon:"el-icon-nav-yunying",
	      			subs:[
	      				{
	      					index:"4-1",
	      					name:"状态统计",
	      					chl:[
	      						{
	      							index:"4-1-1",
	      							name:"GPS巡检报表",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"4-1-2",
	      							name:"行驶里程统计报表",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"4-1-3",
	      							name:"定位状态查询",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"4-1-4",
	      							name:"持续一段时间不在线",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"4-1-5",
	      							name:"查岗统计",
	      							rlink:'/VehicleManagement'
	      						}
	      					]
	      				},
	      				{
	      					index:"4-2",
	      					name:"运营类统计",
	      					chl:[
	      						{
	      							index:"4-2-1",
	      							name:"车辆视频统计",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"4-2-2",
	      							name:"车辆上下线明细报表",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"4-2-3",
	      							name:"在线率统计",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"4-2-4",
	      							name:"运输证IC卡记录",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"4-2-5",
	      							name:"车辆信息",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"4-2-6",
	      							name:"监控台账统计",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"4-2-7",
	      							name:"车辆调度信息统计",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"4-2-8",
	      							name:"车辆维修情况统计",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"4-2-9",
	      							name:"车载视频安装情况统计",
	      							rlink:'/VehicleManagement'
	      						}
	      					]
	      				},
	      				{
	      					index:"4-3",
	      					name:"用户管理",
	      					chl:[
	      						{
	      							index:"4-3-1",
	      							name:"用户操作日志",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"4-3-2",
	      							name:"车辆操作日志报表",
	      							rlink:'/VehicleManagement'
	      						}
	      					]
	      				},
	      				{
	      					index:"4-4",
	      					name:"图片类报表",
	      					chl:[
	      						{
	      							index:"4-4-1",
	      							name:"图片上传统计报表",
	      							rlink:'/VehicleManagement'
	      						},
	      						{
	      							index:"4-4-2",
	      							name:"809上报图标报表",
	      							rlink:'/VehicleManagement'
	      						}
	      					]
	      				}
	      			]
	      		},
	      		{
	      			index:"5",
	      			name:"主动安全",
	      			icon:"el-icon-nav-anquan",
	      			subs:[
	      				{
	      					index:"5-1",
	      					name:"主动安全报警",
	      							rlink:'/VehicleManagement'
	      				},
	      				{
	      					index:"5-2",
	      					name:"报警联动配置",
	      							rlink:'/VehicleManagement'
	      				},
	      				{
	      					index:"5-3",
	      					name:"驾驶员分类管理",
	      							rlink:'/VehicleManagement'
	      				},
	      				{
	      					index:"5-4",
	      					name:"驾驶员识别",
	      							rlink:'/VehicleManagement'
	      				}
	      			]
	      		},
	      		{
	      			index:"6",
	      			name:"绿色驾驶",
	      			icon:"el-icon-nav-wurenjiashi",
	      			subs:[
	      				{
	      					index:"6-1",
	      					name:"看板",
	      							rlink:'/VehicleManagement'
	      				},
	      				{
	      					index:"6-2",
	      					name:"OBD标定升级",
	      							rlink:'/VehicleManagement'
	      				},
	      				{
	      					index:"6-3",
	      					name:"GDS参数配置",
	      							rlink:'/VehicleManagement'
	      				}
	      			]
	      		}
	      	],
	      	uersList:[
	      		{
	      			title:"个人中心",
	      			command:""
	      		},
	      		{
	      			title:"退出登录",
	      			command:""
	      		}
	      	],
	      	uersID:"鹰瞰信息科技",
	        activeIndex: '1',
	        activeIndex2: '1',
	        fullHeight:'800'
	      };
	    },
	    mounted() {
	      
	    }
	}
</script>

<style>
	/* 
html5doctor.com Reset Stylesheet
v1.4.1 
2010-03-01
Author: Richard Clark - http://richclarkdesign.com
*/

html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

body {
    line-height:1;
}

:focus {
	outline: 1;
}

article,aside,canvas,details,figcaption,figure,
footer,header,hgroup,menu,nav,section,summary { 
    display:block;
}

nav ul {
    list-style:none;
}

blockquote, q {
    quotes:none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content:'';
    content:none;
}

a {
    margin:0;
    padding:0;
    border:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
    text-decoration: none;
}
ul li{
	list-style: none;
}
ins {
    background-color:#ff9;
    color:#000;
    text-decoration:none;
}

mark {
    background-color:#ff9;
    color:#000; 
    font-style:italic;
    font-weight:bold;
}

del {
    text-decoration: line-through;
}

abbr[title], dfn[title] {
    border-bottom:1px dotted #000;
    cursor:help;
}

table {
    border-collapse:collapse;
    border-spacing:0;
}

hr {
    display:block;
    height:1px;
    border:0;   
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
}

input, select {
    vertical-align:middle;
}
/* header */
.header{
	width: 100%;
	height: 80px;
	overflow: hidden;
}
.minwh,.header{
	min-width: 1450px;
}
.header-right-content{
	text-align: right;

	padding-right: 20px;
}
.header-top{
	background-color: #444;
}
.header-uers{
	height: 80px;
	line-height: 80px;
	color: #fff;
}
.uese-out{
	margin-left: 20px;
}
.nav-bg-colr{
	background-color: #444;
	color: #fff;
}
.el-button--danger{
	border-color: #313131;
	background-color: #888;
	margin-right: 20px;
}
.el-menu--horizontal{
	border: none;
}
.el-menu--horizontal>.el-menu-item,.el-menu--horizontal>.el-submenu .el-submenu__title{
	height: 80px;
	line-height: 80px;
}
.el-menu--horizontal>.el-menu-item.is-active,.el-menu--horizontal>.el-submenu.is-active .el-submenu__title{
	border-color: #009dac;
}
.logo{
	height: 80px;
	line-height: 80px;
	text-align: center;
}
.logo>a{
	text-decoration: none;
	color: #fff;
	font-size: 26px;
	font-weight: normal;
}
.el-menu-item [class^=el-icon-],.el-submenu [class^=el-icon-]{
	margin-right: 16px;
	font-size: 24px;
}
.el-menu-item span,.el-submenu span{
	font-size: 16px;
}
.header-uers:hover{
	cursor: pointer;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.el-submenu .el-menu-item a{
    float: none;
    height: 36px;
    line-height: 36px;
    padding: 0 10px;
    color: #fff;
}
.index a{
	display: table;
}
</style>