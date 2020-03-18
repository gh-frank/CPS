<template>
  <div class="page">
    SmartMeter智能电能表
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
          <div>
            <a-table :columns="columns" :dataSource="data">
              <a slot="name" slot-scope="text">{{text}}</a>
              <span slot="customTitle">
                <a-icon type="smile-o" />Name
              </span>
              <span slot="tags" slot-scope="tags">
                <a-tag
                  v-for="tag in tags"
                  :color="tag==='loser' ? 'volcano' : (tag.length > 5 ? 'geekblue' : 'green')"
                  :key="tag"
                >{{tag.toUpperCase()}}</a-tag>
              </span>
              <span slot="action" slot-scope="text, record">
                <a>Invite 一 {{record.name}}</a>
                <a-divider type="vertical" />
                <a>Delete</a>
                <a-divider type="vertical" />
                <a class="ant-dropdown-link">
                  More actions
                  <a-icon type="down" />
                </a>
              </span>
            </a-table>
          </div>
        </a-col>
        <a-col :span="8">
          <div>
            <a-button type="primary" @click="shengcheng">生成图表</a-button>
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

    <!-- <div>
      <a-button type="primary" @click="shengcheng">生成图表</a-button>
    </div>
    <div class="ch" ref="main2"></div>
    <div class="ch" ref="main"></div>-->
  </div>
</template>
<script>
const columns = [
  {
    dataIndex: "name",
    key: "name",
    slots: { title: "customTitle" },
    scopedSlots: { customRender: "name" }
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    scopedSlots: { customRender: "tags" }
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" }
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"]
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  }
];
export default {
  data() {
    return {
      data,
      columns
    };
  },
  methods: {
    shengcheng() {
      this.bingtu();
      this.zhexiantu();
    },
    bingtu() {
      var echarts = require("echarts");
      var myChart = echarts.init(this.$refs.main2);
      //   var myChart = echarts.init(this.$refs['main']);
      myChart.setOption({
        title: {
          text: "某站点用户访问来源",
          subtext: "纯属虚构",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
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
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "视频广告",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410]
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
  padding: 40px 40px 40px 40px;
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

.ch {
  height: 400px;
}
</style>