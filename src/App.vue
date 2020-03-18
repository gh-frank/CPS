<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">主页</router-link> |
      <router-link to="/testLogin">登录测试</router-link> |
      <router-link to="/login">登录</router-link> |
      <router-link to="/about">关于</router-link> |
      <router-link to="/test">测试</router-link> |
      <router-link to="/dataPicker">日期选择</router-link> |
      <router-link to="/zhDataPicker">中文日期选择</router-link> |
      <router-link to="/tabs">标签</router-link> |
      <router-link to="/layout">页面布局</router-link> |
      <router-link to="/notification">通知提醒框</router-link> |
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
// body {
//     font-family: 'Avenir', Helvetica, Arial, sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
// }
// li, ul, p, div, body, html, table {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
// }
// html, body {
//     height: 100%;
//     /* overflow: hidden; */
// }
// li {
//     list-style: none;
// }
// #app {
//     height: 100%;
// }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
