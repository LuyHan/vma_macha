<template>
    <div class="vehicle-log-container">
      <header class="top-bar">
        <h2>게시글 목록</h2>
        <button class="back-btn" @click="$router.back()">뒤로가기</button>
      </header>
      <hr>
      <div class="write-btn">
        <router-link to="/posts/new">새 글 작성</router-link>
      </div>
      <table class="log-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id">
            <td><input type="checkbox" /></td>
            
            <td>
              <router-link :to="`/posts/${post.id}`">
              {{ post.title }}
              </router-link>
            </td>
            <td>{{ post.author }}</td>
          </tr>
        </tbody>
      </table> 
  
      
    </div>  



    <!-- 
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }} - 작성자: {{ post.author }}
      </li>
    </ul>
    
    기존 sampleLogs도 필요하다면 그대로 유지 
    <h2>샘플 로그 (기존 데이터)</h2>
    <ul>
      <li v-for="(log, index) in sampleLogs" :key="index">
        {{ log.date }} - {{ log.number }} - {{ log.driver }}
      </li>
    </ul>
  </div>
  -->

  <!-- <div class="filters">
        <input type="date" />
        <span>~</span>
        <input type="date" />
        <input type="text" placeholder="검색어 입력" />
        <button>검색</button>
      </div>
  
      <div class="action-buttons">
        <button>일지 인쇄</button>
        <button>일지 관리</button>
      </div> 
      
      <table class="log-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>배차일자</th>
            <th>차량번호</th>
            <th>운전자</th>
            <th>용도</th>
            <th>시간</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(log, index) in sampleLogs" :key="index">
            <td><input type="checkbox" /></td>
            <td>{{ log.date }}</td>
            <td>{{ log.number }}</td>
            <td>{{ log.driver }}</td>
            <td>{{ log.purpose }}</td>
            <td>{{ log.time }}</td>
          </tr>
        </tbody>
      </table> 
      
      <div class="pagination">
        <button>&lt;&lt;</button>
        <button>&lt;</button>
        <button class="active">1</button>
        <button>&gt;</button>
        <button>&gt;&gt;</button>
      </div> -->


</template>




<script>
import axios from 'axios'; // <-- 1. axios 임포트 (script 태그 바로 아래)
const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL; 

export default {
  name: 'VehicleLogPage',
  data() {
    return {
      sampleLogs: [
        { date: '2025-03-12', number: '71나1150', driver: '이상현', purpose: 'test', time: '22:30~22:35' },
        { date: '2024-11-12', number: '12가1123', driver: '김종훈', purpose: '귀가', time: '12:30~13:00' },
        { date: '2024-10-30', number: '12가1123', driver: '서성희', purpose: 'test', time: '14:39~14:44' },
        { date: '2024-08-27', number: '12가1123', driver: '이미자', purpose: '30분', time: '01:10~01:40' },
        { date: '2024-08-27', number: '12가1123', driver: '김종훈', purpose: '10분', time: '01:00~01:10' },
        ],
        // 백엔드에서 가져올 게시글 데이터를 저장할 변수 추가
        posts: [] // <-- 2. posts 데이터 속성 추가
    };
  },
  // <-- 3. mounted() 라이프사이클 훅 추가
  mounted() {
    // 컴포넌트가 DOM에 마운트된 직후에 이 코드가 실행됨
    this.fetchPosts(); // 게시글을 가져오는 메서드 호출
  },
  methods: { // <-- 4. API 호출 로직을 메서드로 분리 (선택 사항이지만 추천!)
    async fetchPosts() {
      try {
        // 백엔드 API 호출!
        // 로컬에서 Spring Boot 백엔드가 실행 중이라면 http://localhost:8080/api/posts
        // EC2에 배포된 백엔드라면 http://[EC2_IP_또는_도메인]/api/posts
        const response = await axios.get(`${API_BASE_URL}/posts`); // <-- 여기에 백엔드 API 주소 입력!
        this.posts = response.data; // API 응답 데이터(게시글 목록)를 posts 변수에 저장
        console.log('게시글 목록:', this.posts); // 콘솔에 데이터 출력해서 확인
      } catch (error) {
        console.error('게시글 목록을 가져오는 중 오류 발생:', error); // 오류 발생 시 콘솔에 출력
      }
    }
  }
};
</script>




  
  <!-- <script>
  import axios from 'axios';

  export default {
    name: 'VehicleLogPage',
    data() {
      return {
        sampleLogs: [
          { date: '2025-03-12', number: '71나1150', driver: '이상현', purpose: 'test', time: '22:30~22:35' },
          { date: '2024-11-12', number: '12가1123', driver: '김종훈', purpose: '귀가', time: '12:30~13:00' },
          { date: '2024-10-30', number: '12가1123', driver: '서성희', purpose: 'test', time: '14:39~14:44' },
          { date: '2024-08-27', number: '12가1123', driver: '이미자', purpose: '30분', time: '01:10~01:40' },
          { date: '2024-08-27', number: '12가1123', driver: '김종훈', purpose: '10분', time: '01:00~01:10' },
        ]
      };
    }
  };
  </script> -->
  
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
  .filters {
    display: block;
    text-align: right;
    gap: 10px;
    margin: 12px 0;
  }
  .action-buttons {
    display: flex;
    gap: 10px;
    margin: 12px 0;
  }
  .log-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 16px;
  }
  .log-table th, .log-table td {
    padding: 12px;
    border: 1px solid #ddd;
    text-align: center;
  }
  .log-table thead {
    background-color: #00c17d;
    color: white;
  }
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 6px;
  }
  .pagination button {
    padding: 6px 10px;
    border: 1px solid #ccc;
    background-color: white;
  }
  .pagination .active {
    background-color: #00c17d;
    color: white;
  }
  a {
    text-decoration-line: none;
    color:black;
  }
  a:hover {
    color: #00c17d;
  }
  .write-btn {
    width: 72px;
    border: 1px solid;
    padding: 3px 5px;
    border-radius: 5px;
    border-color: #00c17d;
    background-color: #00c17d;
    float: right;
  }
  .write-btn a {
    text-align: center;
    color: white;
  }
  .write-btn a:hover {
    color: black;
  }
  </style>
  