<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <a-row>
      <a-col :span="4"></a-col>
      <a-col :span="4"></a-col>
      <a-col :span="4" :offset="2">
        <div class="components-input-demo-presuffix">
          <a-input placeholder="用户名admin" v-model="userName" ref="userNameInput">
            <a-icon slot="prefix" type="user" />
            <a-tooltip slot="suffix" title="Extra information">
              <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
            </a-tooltip>
          </a-input>
          <br />
          <br />
          <a-input-password v-model="userPass" placeholder="密码admin">
            <a-icon slot="prefix" type="lock" />
          </a-input-password>
          <br />
          <br />记住密码
          <a-switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
          <br />
          <br />
          <a-button type="primary" @click="submit">登录</a-button>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "testLogin",
  data() {
    return {
      userName: "",
      userPass: ""
    };
  },
  methods: {
    emitEmpty() {
      this.$refs.userNameInput.focus();
      this.userName = "";
    },
    submit() {
      //this.$router.push('/layout')
      //this.$router.push({ path: '/layout' })
      if (this.userName === "" || this.userPass === "") {
        this.$notification["error"]({
          message: "警告",
          description: "用户名或密码为空"
        });
      } else {
        if (this.userName === "admin" || this.userPass === "admin") {
          this.$notification.open({
            message: "提示",
            description: "登录成功 跳转到主页",
            icon: <a-icon type="smile" style="color: #108ee9" />
          });
          this.$router.push("/layout");
        } else {
          this.$notification["error"]({
            message: "警告",
            description: "用户名或密码不正确"
          });
        }
      }
    }
  }
};
</script>