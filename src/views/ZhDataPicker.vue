<template>
  <a-locale-provider :locale="zh_CN">
    <div>
        <a-date-picker @change="onChange">
        <a-icon slot="suffixIcon" type="smile" />
        </a-date-picker>
        <br />
        <a-month-picker @change="onChange" placeholder="选择月份">
        <a-icon slot="suffixIcon" type="smile" />
        </a-month-picker>
        <br />
        <a-range-picker @change="onChange">
        <a-icon slot="suffixIcon" type="smile" />
        </a-range-picker>
        <br />
        <a-week-picker @change="onChange" placeholder="选择星期">
        <a-icon slot="suffixIcon" type="smile" />
        </a-week-picker>
        <br />
        <a-date-picker suffixIcon="ab" @change="onChange" />
        <br />
        <a-month-picker suffixIcon="ab" @change="onChange" placeholder="选择月份" />
        <br />
        <a-range-picker suffixIcon="ab" @change="onChange" />
        <br />
        <a-week-picker suffixIcon="ab" @change="onChange" placeholder="选择星期" />
    </div>
  </a-locale-provider>
</template>
<script>
  import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
  import moment from 'moment';
  import 'moment/locale/zh-cn';

  moment.locale('zh-cn');
  export default {
    data() {
      return {
        zh_CN,
      };
    },
    methods: {
      onChange(date, dateString) {
        console.log(date, dateString);
      },
    },
  };
</script>