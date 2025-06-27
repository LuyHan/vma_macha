<template>
    <div class="vehicle-log-container">
     <header class="top-bar">
       <h2>게시글 작성</h2>
       <button class="back-btn" @click="$router.back()">뒤로가기</button>
     </header>
     <form @submit.prevent="createPost"> <!-- 폼 제출 시 createPost 메서드 호출, 기본 제출 동작 방지 -->
      <div>
        <label for="title">제목:</label>
        <input type="text" id="title" v-model="post.title" required>
      </div>
      <div>
        <label for="author">작성자:</label>
        <input type="text" id="author" v-model="post.author" required>
      </div>
      <div>
        <label for="content">내용:</label>
        <textarea id="content" v-model="post.content" rows="10" required></textarea>
      </div>
      <button type="submit">작성</button>
    </form>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
   </div>
</template>

<!-- src/components/PostCreatePage.vue -->
<script>
import axios from 'axios';

// 환경 변수에서 API 기본 URL 가져오기 (PostListPage.vue에서 사용했던 것과 동일)
// Vite: import.meta.env.VITE_APP_API_BASE_URL
// Vue CLI: process.env.VUE_APP_API_BASE_URL
const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

export default {
  name: 'PostCreatePage',
  data() {
    return {
      post: { // 새로운 게시글 데이터를 저장할 객체
        title: '',
        content: '',
        author: ''
      },
      errorMessage: '' // 에러 메시지를 표시할 변수
    };
  },
  methods: {
    async createPost() {
      this.errorMessage = ''; // 에러 메시지 초기화
      try {
        // 필수 필드 유효성 검사 (간단하게)
        if (!this.post.title || !this.post.content || !this.post.author) {
          this.errorMessage = '모든 필드를 입력해주세요.';
          return;
        }

        // 백엔드 API 호출 (POST 요청)
        const response = await axios.post(`${API_BASE_URL}/posts`, this.post);
        //console.log('게시글 작성 성공:', response.data);

        // 작성 성공 후 게시글 목록 페이지로 이동
        // Vue 2: this.$router.push('/');
        // Vue 3: this.$router.push('/');
        this.$router.push('/vehicle-access');

      } catch (error) {
        console.error('게시글 작성 중 오류 발생:', error);
        if (error.response && error.response.data && error.response.data.message) {
          this.errorMessage = `오류: ${error.response.data.message}`;
        } else {
          this.errorMessage = '게시글 작성 중 알 수 없는 오류가 발생했습니다.';
        }
      }
    }
  }
};
</script>


<style scoped>
.vehicle-log-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 24px;
}
.top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.back-btn {
    padding: 6px 12px;
    background-color: #00c17d;
    color: white;
    border: none;
    border-radius: 6px;
}

form div {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}
input[type="text"],
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box; /* 패딩이 너비에 포함되도록 */
}
textarea {
  resize: vertical; /* 세로 크기 조절 가능 */
}
button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
.error-message {
  color: red;
  margin-top: 10px;
}
</style>