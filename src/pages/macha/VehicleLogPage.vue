<template>
    <div class="vehicle-log-container">
      <header class="top-bar">
        <h2>차량일지 관리</h2>
        <button class="back-btn" @click="$router.back()">뒤로가기</button>
      </header>
  
      <div class="filters">
        <select>
          <option>전체</option>
          <option>12가1123(모닝)</option>
          <option>71나1150(스타렉스)</option>
        </select>
        <input type="date" />
        <span>~</span>
        <input type="date" />
        <input type="text" placeholder="검색어 입력" />
        <button>검색</button>
      </div>
  
      <div class="action-buttons">
        <button>차량일지 인쇄</button>
        <button>유류수불대장 인쇄</button>
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
      </div>
    </div>
  </template>
  
  <script>
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
  </style>
  