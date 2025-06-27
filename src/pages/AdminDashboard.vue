<template>
    <div class="dashboard">
      <div class="header">
        <!-- <img src="@/assets/vue.svg" alt="로고" /> -->
        <h2>스마트 차량관리 시스템 <span class="highlight">마차</span></h2>
      </div>
      <div class="welcome-div">
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User Icon" class="user-icon" />
        <span class="welcome-message">관리자님 환영합니다.</span>
      </div>
      
  
      <div class="grid">
        <div class="column">
          <ActionButton text="AWS 게시글 관리" @click="goToVehicleAccess" />
          <ActionButton text="차량일지 관리" @click="goToVehicleLogs" />
          <ActionButton text="차량일지 작성" />
          <ActionButton text="차량 정보 관리" />
          <ActionButton text="결재함" :badge="0" />
          <ActionButton text="사용자 정보 관리" />
          <ActionButton text="업체 관리" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ActionButton from '../components/ActionButton.vue';
  import { useRouter } from 'vue-router';
  
  export default {
    components: { ActionButton },
    data() {
        const router = useRouter();
        const goToVehicleLogs = () => router.push('/vehicle-logs');
        const goToVehicleAccess = () => router.push('/vehicle-access');
        // return { goToVehicleLogs, goToVehicleAcess };
        return {
            goToVehicleLogs,
            goToVehicleAccess,
        };
    }
  };
  </script>
  
  <style scoped>
  .welcome-div {
    margin-bottom: 2rem;
  }
  .welcome-message {
    font-size: 20px;
    font-weight: bold;
    text-align: left;
  }
  .user-icon {
    width: 30px;
    height: 30px;
    border-radius: 50%; /* 동그랗게 */
    object-fit: cover;
    margin-right: 10px;
  }

  h2 {
    font-size: 16px;
  }
  
  .dashboard {
    margin: 0 auto;
    padding: 40px;
    max-width: 1200px;
  }
  .header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
  }
  .highlight {
    color: #00c17d;
  }
  /* .grid {
    display: flex;
    justify-content: center;
    gap: 80px;
    margin-top: 40px;
  } */
  .column {
    /* display: flex;
    flex-direction: column;
    gap: 20px; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  @media (max-width: 900px) {
    .column {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .column {
      grid-template-columns: 1fr;
    }
  }
  </style>
  