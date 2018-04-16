//table.vue
<template>
    <el-table :data="tableData" stripe>
        <template v-for="(item,key) in tableKey">
            <template v-if="key===0">
                <el-table-column type="index"></el-table-column>
            </template>
            <el-table-column  
            :prop="item.value"
            :label="item.name"
            :width="item.widthStyle"
            ></el-table-column>
            </template>
    </el-table>
</template>
<script>
export default{
    name: 'table',
    data(){
        return{
            
        }
    },
    props:['tableData','tableKey'],
}
</script>

