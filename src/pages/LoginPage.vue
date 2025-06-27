<template>
  <div class="login-container">
    <div class="logo-section">
      <p class="subtext">사회복지시설/비영리법인 전문</p>
      <h1 class="logo">
        <span class="logo-icon">🔷</span>
        <span>스마트 <span class="highlight">차량관리 시스템</span> <strong class="matcha">마차</strong></span>
      </h1>
      <!-- <p class="version">V5.1</p> -->
    </div>

    <div class="form-box">
      <form @submit.prevent="login">
        <div class="input-group">
          <label for="id">아이디</label>
          <input type="text" id="id" v-model="userId" required />
        </div>

        <div class="input-group">
          <label for="password">비밀번호</label>
          <input type="password" id="password" v-model="password" required />
        </div>

        <div class="options">
          <label><input type="checkbox" v-model="autoLogin" /> 자동 로그인</label>
        </div>

        <button class="login-btn" type="submit">로그인</button>

        <div class="links">
          <a href="#">가입 요청</a>
          <span>|</span>
          <a href="#">Q&A</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: '',
      password: '',
      autoLogin: false
    };
  },
  methods: {
    login() {
      // alert(`로그인 시도: ${this.userId}`);
      // 실제 로그인 로직 연결
      this.$router.push('/dashboard');
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  text-align: center;
  font-family: 'Noto Sans KR', sans-serif;
}

.logo-section {
  margin-bottom: 20px;
}

.subtext {
  font-size: 14px;
  color: #555;
}

.logo {
  font-size: 20px;
  margin: 10px 0;
}

.logo-icon {
  font-size: 24px;
  margin-right: 5px;
}

.highlight {
  color: #00a087;
  font-weight: bold;
}

.matcha {
  color: #00c17d;
}

.version {
  font-size: 12px;
  color: #aaa;
  text-align: right;
  position: relative;
  top: -14px;
}

.form-box {
  background: #00c17d;
  border-radius: 16px;
  padding: 24px 20px;
}

.input-group {
  margin-bottom: 16px;
  text-align: left;
}

.input-group label {
  display: inline-block;
  width: 100px;
  margin-bottom: 4px;
  color: white;
  font-weight: bold;
  text-align: center;
}

.input-group input {
  width: calc(100% - 116px);
  padding: 8px;
  border: none;
  border-radius: 6px;
}

.options {
  text-align: right; 
  color: white;
  margin-bottom: 16px;
}

.login-btn {
  width: 100%;
  background: white;
  color: #00a087;
  font-weight: bold;
  padding: 10px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}

.links {
  margin-top: 16px;
  color: white;
}

.links a {
  color: white;
  text-decoration: none;
  margin: 0 8px;
}

.links span {
  color: #fff;
}
</style>

