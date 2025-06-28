<template>
  <div class="vehicle-log-container">
     <header class="top-bar">
       <h2>게시글 작성</h2>
       <button class="back-btn" @click="$router.back()">뒤로가기</button>
     </header>
     <div>
      <h1>게시글 수정</h1>
      <div v-if="loading">로딩 중...</div>
      <div v-else-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <div v-else-if="post && post.id">
        <form @submit.prevent="updatePost">
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
          <button type="submit">수정 완료</button>
        </form>
      </div>
      <div v-else>
        수정할 게시글이 없습니다.
      </div>
    </div>
  </div>
    
</template>


<script>
import axios from 'axios';

// 환경 변수에서 API 기본 URL 가져오기
const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

export default {
  name: 'PostEditPage',
  data() {
    return {
      post: { // 수정할 게시글 데이터를 저장할 객체
        id: null,
        title: '',
        content: '',
        author: ''
      },
      loading: true, // 로딩 상태
      errorMessage: '' // 에러 메시지
    };
  },
  async mounted() {
    const postId = this.$route.params.id; // URL에서 게시글 ID 가져오기
    if (postId) {
      try {
        // 기존 게시글 정보 불러오기
        const response = await axios.get(`${API_BASE_URL}/posts/${postId}`);
        this.post = response.data; // 불러온 데이터를 post 객체에 저장
      } catch (error) {
        console.error('게시글 정보를 불러오는 중 오류 발생:', error);
        this.errorMessage = '게시글을 불러올 수 없습니다.';
      } finally {
        this.loading = false;
      }
    } else {
      this.errorMessage = '게시글 ID가 제공되지 않았습니다.';
      this.loading = false;
    }
  },
  methods: {
    async updatePost() {
      this.errorMessage = ''; // 에러 메시지 초기화
      try {
        // 필수 필드 유효성 검사 (간단하게)
        if (!this.post.title || !this.post.content || !this.post.author) {
          this.errorMessage = '모든 필드를 입력해주세요.';
          return;
        }

        // 백엔드 API 호출 (PUT 요청)
        // this.post 객체에 id가 이미 포함되어 있으므로 URL에 id를 명시하고
        // 본문에는 post 객체 전체를 보냄 (백엔드에서 id와 createdAt/updatedAt은 무시하고 처리)
        const response = await axios.put(`${API_BASE_URL}/posts/${this.post.id}`, this.post);
        console.log('게시글 수정 성공:', response.data);

        // 수정 성공 후 게시글 상세 페이지로 이동
        // Vue 2: this.$router.push(`/posts/${this.post.id}`);
        // Vue 3: this.$router.push(`/posts/${this.post.id}`);
        this.$router.push(`/posts/${this.post.id}`);

      } catch (error) {
        console.error('게시글 수정 중 오류 발생:', error);
        if (error.response && error.response.data && error.response.data.message) {
          this.errorMessage = `오류: ${error.response.data.message}`;
        } else if (error.response && error.response.status === 404) {
          this.errorMessage = '수정할 게시글을 찾을 수 없습니다.';
        } else {
          this.errorMessage = '게시글 수정 중 알 수 없는 오류가 발생했습니다.';
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

/* PostCreatePage.vue의 스타일과 유사하게 */
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
  box-sizing: border-box;
}
textarea {
  resize: vertical;
}
button {
  padding: 10px 15px;
  background-color: #28a745; /* 수정 버튼 색상 */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
}
button:hover {
  background-color: #218838;
}
.error-message {
  color: red;
  margin-top: 10px;
}
</style>