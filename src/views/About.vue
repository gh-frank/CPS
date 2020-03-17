<template>
  <div class="about">
    <h1>This is an about page</h1>
    <a-button @click="test" type="danger">Danger</a-button>
  </div>
</template>
<script>
// import mockData from '../mock/mock';
import axios from 'axios';
export default {
  methods: {
    test() {
      axios.get("/cart/getCartList").then(res => {
        console.log(res);
      }).catch(error=>{
        console.log(error);
      });
      // axios({
      //   method: "get",
      //   url: "/goods/list",
      //   //url: "/mocktest",
      // }).then(res => {
      //   alert(res)
      //   var r;
      //   if (res.data === undefined) {
      //     r = res;
      //   } else {
      //     r = res.data;
      //   }
      //   console.log(r);
      //   if (r.msg == "" || r.msg == undefined) {
      //     this.isShowLoading = true;
      //     // 登陆成功 设置用户信息,将信息存入缓存中
      //     localStorage.setItem("userName", r.user.user_name);
      //     // 登陆成功 假设这里是后台返回的 token
      //     localStorage.setItem("token", r.token);
      //     this.getmenu(r.user);
      //   } else {
      //     this.$Message.error(r.msg, 5);
      //     this.userid = "";
      //     this.userpassword = "";
      //   }
      // });
    }
  }
};
</script>
