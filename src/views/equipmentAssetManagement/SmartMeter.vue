<template>
  <div class="page">

    <div>
      <a-row>
        <a-col :span="16">
          <a-row>
            <a-col :span="5"></a-col>
            <a-col :span="5">
              <div class="meter-text">电表名称：</div>
              <a-input placeholder="输入电表名称" class="meter-input" />
            </a-col>
            <a-col :span="1"></a-col>
            <a-col :span="5">
              <div class="meter-text">电表编号：</div>
              <a-input placeholder="输入电表编号" class="meter-input" />
            </a-col>
            <a-col :span="1"></a-col>
            <a-col :span="4">
              <a-button type="primary">查询</a-button>
            </a-col>
          </a-row>
          <div class="sm-table">
            <a-table :columns="columns" :dataSource="data"></a-table>
            
          </div>
        </a-col>
        <a-col :span="8">
          <div>
            <!-- <a-button type="primary" @click="shengcheng">生成图表</a-button> -->
          </div>
          <a-row>
            <a-col :span="24">
              <div class="ch" ref="main2"></div>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24">
              <div class="ch" ref="main"></div>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
const columns = [
  {
    title:'电表名称',
    dataIndex: "name",
  },
  {
    title: "电表编号",
    dataIndex: "Id",
  },
  {
    title: "资产号",
    dataIndex: "assNo",
  },
  {
    title: "通讯方式",
    dataIndex: "tongxun",
  },
  {
    title: "接线方式",
    dataIndex: "jiexian",
  },
  {
    title:"安装位置",
    dataIndex:"azwz"
  }
];

const data = [
  {
    key: "1",
    name: "电表名",
    Id: "3734567",
    assNo: 24753685,
    tongxun: "4G",
    jiexian: "485",
    azwz: "合肥",
  },
  {
    key: "2",
    name: "电表名",
    Id: "3734567",
    assNo: 24753685,
    tongxun: "4G",
    jiexian: "485",
    azwz: "合肥",
  },
  {
    key: "3",
    name: "电表名",
    Id: "3734567",
    assNo: 24753685,
    tongxun: "4G",
    jiexian: "485",
    azwz: "合肥",
  },
  {
    key: "4",
    name: "电表名",
    Id: "3734567",
    assNo: 24753685,
    tongxun: "4G",
    jiexian: "485",
    azwz: "合肥",
  },
  {
    key: "5",
    name: "电表名",
    Id: "3734567",
    assNo: 24753685,
    tongxun: "4G",
    jiexian: "485",
    azwz: "合肥",
  },
  {
    key: "6",
    name: "电表名",
    Id: "3734567",
    assNo: 24753685,
    tongxun: "4G",
    jiexian: "485",
    azwz: "合肥",
  },
  {
    key: "7",
    name: "电表名",
    Id: "3734567",
    assNo: 24753685,
    tongxun: "4G",
    jiexian: "485",
    azwz: "合肥",
  },
  {
    key: "8",
    name: "电表名",
    Id: "3734567",
    assNo: 24753685,
    tongxun: "4G",
    jiexian: "485",
    azwz: "合肥",
  },
  {
    key: "9",
    name: "电表名",
    Id: "3734567",
    assNo: 24753685,
    tongxun: "4G",
    jiexian: "485",
    azwz: "合肥",
  },
  {
    key: "10",
    name: "电表名",
    Id: "3734567",
    assNo: 24753685,
    tongxun: "4G",
    jiexian: "485",
    azwz: "合肥",
  },
  {
    key: "11",
    name: "电表名",
    Id: "3734567",
    assNo: 24753685,
    tongxun: "4G",
    jiexian: "485",
    azwz: "合肥",
  },

];
export default {
  data() {
    return {
      data,
      columns
    };
  },
  mounted:function(){
      this.bingtu();
      this.zhexiantu();
  },
  methods: {
    bingtu() {
      var echarts = require("echarts");
      var myChart = echarts.init(this.$refs.main2);
      //   var myChart = echarts.init(this.$refs['main']);
      myChart.setOption({
        title: {
          text: "电能统计",
          // subtext: "纯属虚构",
          left: "right"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["空调", "电梯#1", "电梯#2", "办公室", "微波炉"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "空调" },
              { value: 310, name: "电梯#1" },
              { value: 234, name: "电梯#2" },
              { value: 135, name: "办公室" },
              { value: 1548, name: "微波炉" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    },
    zhexiantu() {
      var echarts = require("echarts");
      var myChart = echarts.init(this.$refs.main);
      //   var myChart = echarts.init(this.$refs['main']);
      myChart.setOption({
        title: {
          text: "电能预测",
          // subtext: "纯属虚构",
          left: "right"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["水", "气", "热"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "水",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90]
          },
          {
            name: "气",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290]
          },
          {
            name: "热",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190]
          }
        ]
      });
    }
  },
  dianji() {}
};
</script>
<style scoped>
.page {
  padding: 40px 40px 0px 40px;
}
.meter-text {
  width: 35%;
  float: left;
  font-size: 120%;
  margin-top: 5px;
}
.meter-input {
  width: 65%;
  float: right;
}
.sm-table{
  margin-top: 40px;
  margin-right: 60px;
}
.ch {
  height: 363px;
}
</style>