<template>
    <div class="login">
        <section>
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" labelPosition="top" label-width="100px" class="demo-ruleForm">
                <el-form-item label="账号" prop="user_name">
                    <el-input type="text" v-model="ruleForm2.user_name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm2')" round>登陆</el-button>
                    <el-button type="danger" @click="resetForm('ruleForm2')" round>重置</el-button>
                </el-form-item>
            </el-form>
        </section>
    </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm2: {
        user_name: "ivanyb",
        password: ""
      },
      rules2: {
        user_name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    login() {
      this.$http.post(this.$api.login, this.ruleForm2).then(res => {
        if (res.data.status == 0) {
          this.$alert("登陆成功", "提示", {
            callback: () => {
              //保存用户姓名
              localStorage.setItem('user_name',res.data.message.user_name);
              let nextPage = this.$route.query.next || 'goods/list';
              this.$router.push({ path: nextPage });
            }
          });
        } else {
          this.$alert(res.data.message);
        }
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.login();
        } else {
          this.$alert("账号或密码不合格!");
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped lang="less">
.login {
  height: 100%;
  background-color: skyblue;
}
section {
  width: 400px;
  height: 300px;
  border: 3px solid #fff;
  margin: 0 auto;
  padding: 15px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 5px;
}
</style>