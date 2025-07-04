<template>
    <div class="vehicle-log-container">
     <header class="top-bar">
       <h2>게시글 상세</h2>
       <button class="back-btn" @click="$router.push('/board/posts')">뒤로가기</button>
     </header>
       <div v-if="loading">로딩 중...</div>
       <div v-else-if="error" class="error-message">{{ error }}</div>
       <div v-else-if="post">
        <h2>{{ post.title }}</h2>
        <p><strong>작성자:</strong> {{ post.author }}</p>
        <p><strong>작성일:</strong> {{ post.createdAt }}</p>
        <p v-if="post.updatedAt && post.updatedAt !== post.createdAt">
          <strong>수정일:</strong> {{ post.updatedAt }}
        </p>
        <p class="content-text">{{ post.content }}</p>
        <router-link :to="`/board/posts/${post.id}/edit`" >
          <button class="edit-button">수정</button>
        </router-link>
        <button @click="deletePost" class="delete-button">삭제</button>
       </div>
       <div v-else>
       게시글 정보를 불러올 수 없습니다.
       </div>
   </div>


</template>


<script>
import axios from 'axios'; // axios 임포트
const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL; 

export default {
  name: 'PostDetailPage',
  data() {
    return {
      post: null, // 게시글 상세 정보를 저장할 변수
      loading: true, // 로딩 상태를 나타내는 변수
      error: null // 에러 메시지를 저장할 변수
    };
  },
  // 컴포넌트가 DOM에 마운트된 직후에 실행됨
  async mounted() {
    // URL에서 게시글 ID 가져오기
    // Vue 2: this.$route.params.id
    // Vue 3: this.$route.params.id (setup 스크립트가 아니므로 this.$route 사용)
    const postId = this.$route.params.id;

    if (postId) {
      try {
        // 백엔드 API 호출! (특정 ID의 게시글 조회)
        const response = await axios.get(`${API_BASE_URL}/posts/${postId}`); // <-- 여기에 백엔드 API 주소 입력!
        this.post = response.data; // API 응답 데이터를 post 변수에 저장
        //console.log('게시글 상세:', this.post); // 콘솔에 데이터 출력해서 확인
      } catch (error) {
        console.error('게시글 상세 정보를 가져오는 중 오류 발생:', error);
        if (error.response && error.response.status === 404) {
          this.error = '해당 게시글을 찾을 수 없습니다.';
        } else {
          this.error = '게시글을 가져오는 중 오류가 발생했습니다.';
        }
      } finally {
        this.loading = false; // 로딩 완료
      }
    } else {
      this.error = '게시글 ID가 제공되지 않았습니다.';
      this.loading = false;
    }
  },
  methods: {
    async deletePost() { // <-- 삭제 메서드 추가
      // 사용자에게 삭제 확인 메시지 띄우기
      if (confirm('정말로 이 게시글을 삭제하시겠습니까?')) {
        try {
          // 백엔드 API 호출 (DELETE 요청)
          await axios.delete(`${API_BASE_URL}/posts/${this.post.id}`);
          //console.log('게시글 삭제 성공');

          // 삭제 성공 후 게시글 목록 페이지로 이동
          this.$router.push('/board/posts');

        } catch (error) {
          console.error('게시글 삭제 중 오류 발생:', error);
          if (error.response && error.response.status === 404) {
            alert('삭제할 게시글을 찾을 수 없습니다.');
          } else {
            alert('게시글 삭제 중 오류가 발생했습니다.');
          }
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

.error-message {
  color: red;
  font-weight: bold;
}

.content-text {
  border: 1px solid;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
  /* 줄바꿈 처리 */
  white-space: pre-wrap;
  word-wrap: break-word;
}

.edit-button {
  padding: 10px 15px;
  background-color: #28a745; /* 수정 버튼 색상 */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px; /* 버튼 간 간격 */
}
.edit-button:hover {
  background-color: #218838;
}

.delete-button { /* 삭제 버튼 스타일 추가 */
  padding: 10px 15px;
  background-color: #dc3545; /* 삭제 버튼 색상 (빨강) */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.delete-button:hover {
  background-color: #c82333;
}
</style>