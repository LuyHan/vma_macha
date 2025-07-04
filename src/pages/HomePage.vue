<!-- src/pages/HomePage.vue -->
<template>
    <div class="portfolio-container">
      <header class="hero-section">
        <h1>안녕하세요, <span class="highlight">우한결의 포트폴리오</span>입니다.</h1>
        <p class="tagline">클라우드 기반의 풀스택 웹 서비스 개발에 열정을 가진 개발자 우한결입니다.</p>
        <div class="contact-info">
          <a href="mailto:your.email@example.com" class="contact-button">이메일 문의</a>
          <a href="https://github.com/LuyHan" target="_blank" class="contact-button github-button">GitHub 프로필</a>
        </div>
      </header>
  
      <section class="section about-me-section">
        <h2>자기소개</h2>
        <p>사용자에게 가치를 제공하는 서비스를 만드는 것에 흥미를 느끼며, 개발 과정의 효율성과 안정성을 중요하게 생각합니다. 문제 해결 능력을 바탕으로 끊임없이 배우고 성장하며, 기술적인 도전을 즐깁니다.</p>
      </section>
  
      <section class="section tech-stack-section">
        <h2>기술 스택</h2>
        <div class="tech-grid">
          <div class="tech-item"><img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" alt="Java Icon"><span>Java 21</span></div>
          <div class="tech-item"><img src="https://img.icons8.com/color/48/000000/spring-logo.png" alt="Spring Icon"><span>Spring Boot</span></div>
          <div class="tech-item"><img src="https://img.icons8.com/color/48/000000/spring-logo.png" alt="Spring Framework Icon"><span>Spring Framework</span></div>
          <div class="tech-item"><img src="https://img.icons8.com/color/48/000000/vue-js.png" alt="Vue.js Icon"><span>Vue.js 3</span></div>
          <div class="tech-item"><img src="https://img.icons8.com/color/48/000000/postgreesql.png" alt="PostgreSQL Icon"><span>PostgreSQL</span></div>
          <div class="tech-item"><img src="https://img.icons8.com/color/48/000000/mariadb.png" alt="MariaDB Icon"><span>MariaDB</span></div>
          <div class="tech-item"><img src="https://img.icons8.com/color/48/000000/amazon-web-services.png" alt="AWS Icon"><span>AWS (EC2, RDS)</span></div>
          <div class="tech-item"><img src="https://img.icons8.com/color/48/000000/github.png" alt="GitHub Icon"><span>GitHub Actions</span></div>
        </div>
      </section>
  
      <section class="section architecture-section">
      <h2>아키텍처 (클라우드 기반 풀스택 웹 서비스)</h2>
      <!-- data-mermaid 속성 추가 -->
      <pre class="mermaid">
        graph TD
            User[사용자] -->|웹 브라우저| Frontend(Vue.js App)
            Frontend -->|HTTP 요청| Nginx[Nginx Web Server]
            Nginx -->|정적 파일 서비스| Frontend
            Nginx -->|API 프록시| Backend(Spring Boot App)
            Backend -->|JDBC| RDS[PostgreSQL DB]
            subgraph AWS EC2 Instance
                Nginx --- Backend
            end
            subgraph AWS Cloud
                EC2(EC2 Instance) --- RDS
            end
            subgraph Development & Deployment
                Developer[개발자] -->|git push| GitHub[GitHub Repository]
                GitHub -->|GitHub Actions Workflow| GitHubActions(GitHub Actions)
                GitHubActions -->|SSH/SCP| EC2
            end
      </pre>
    </section>
  
      <section class="section projects-section">
        <h2>주요 프로젝트</h2>
  
        <div class="project-card">
          <h3>1. Spring Boot & Vue.js AWS 게시판</h3>
          <p>클라우드 기반의 풀스택 웹 서비스 개발 및 CI/CD(지속적 통합/지속적 배포)를 통한 자동 배포 시스템까지 구축해본 게시판 프로젝트. 사용자에게 직관적인 게시글 관리 경험을 제공하고, 개발 과정의 효율성을 극대화하는 데 중점을 두었습니다.</p>
          <ul>
            <li>사용 기술: Java 21, Spring Boot 3.x, Spring Data JPA, PostgreSQL (AWS RDS), Vue.js 3 (Vite), Axios, Vue Router, AWS EC2, AWS RDS, Nginx, Git, GitHub Actions, Maven, SSH, SCP</li>
            <li>주요 기능: 게시글 CRUD, 정렬, 날짜 포맷팅, 수정 상태 표시.</li>
            <li>배운 점: 풀스택 개발 흐름, 클라우드 인프라 구축, CI/CD 자동화, 문제 해결 능력.</li>
          </ul>
          <router-link to="/board/posts" class="project-button">게시판 바로가기</router-link>
          <a href="https://github.com/LuyHan/vma_macha_backend" target="_blank" class="project-button github-button">백엔드 GitHub</a>
          <a href="https://github.com/LuyHan/vma_macha" target="_blank" class="project-button github-button">프론트엔드 GitHub</a>
        </div>
  
        <div class="project-card">
          <h3>2. 마차</h3>
          <p>사회복지시설의 차량 관리를 디지털화하여 업무 효율을 높인 웹 서비스 개발 및 운영.</p>
          <ul>
            <li>회사명: 스마트차량관리시스템 SC</li>
            <li>역할: 애플리케이션 운영 및 개발 담당</li>
            <li>기간: 2024.03 - 2024.09 (6개월)</li>
            <li>주요 업무: Java, Spring Framework 기반 백엔드, MariaDB 설계, 카페24 웹 호스팅 배포, Java Mail API</li>
            <li>주요 성과: 업무 시간 40% 단축, 플러그인 방식 맞춤형 양식으로 유연한 시스템 확장성 확보, 직관적인 UI/UX로 사용자 만족도 상승.</li>
          </ul>
          <!-- (선택 사항) 회사 프로젝트 관련 외부 공개 자료 링크 (있을 경우) -->
          <!-- <a href="[마차 프로젝트 관련 외부 공개 자료 링크 (있을 경우)]" target="_blank" class="project-button">자세히 보기</a> -->
        </div>

        <div class="project-card">
            <h3>3. elmPOCKET</h3>
            <p>Tomcat 서버 기반의 웹 기반 파일관리 시스템을 운영하며 사용자 친화적인 웹 뷰어 디자인 개선 및 대용량 폴더 업로드 문제를 해결한 프로젝트.</p>
            <ul>
              <li>회사명: 앨엠캐드</li>
              <li>역할: 애플리케이션 운영 및 개발</li>
              <li>기간: 2022.09 - 2022.12 (4개월)</li>
              <li>주요 업무: Tomcat 서버 운영/배포, Vanilla JS 웹 뷰어 디자인 개선, Java Locale 다국어 설정</li>
              <li>핵심 문제 해결: 대량 폴더 업로드 시 순서 뒤바뀜 문제 (강제 지연/스레드 처리로 해결).</li>
              <li>주요 성과: 간트차트 보완으로 프로젝트 관리 기능 강화를 통한 업무 효율 30% 증가, 웹 뷰어 디자인 개선으로 사용 편의성 향상.</li>
              </ul>
            <!-- (선택 사항) 엘앰캐드 관련 외부 공개 자료 링크 (있을 경우) -->
            <!-- <a href="[엘앰캐드 관련 외부 공개 자료 링크 (있을 경우)]" target="_blank" class="project-button">자세히 보기</a> -->
        </div>
      </section>
  
      <section class="section problem-solving-section">
        <h2>문제 해결 경험</h2>
        <p>프로젝트를 진행하며 다양한 기술적 난관에 부딪혔지만, 끈기 있게 문제를 분석하고 해결하며 많은 것을 배웠습니다. 이는 저의 문제 해결 능력을 보여주는 중요한 경험입니다.</p>
        <ul>
          <li>CORS (Cross-Origin Resource Sharing) 에러 해결: 프론트엔드와 백엔드 간 통신 문제 해결.</li>
          <li>`502 Bad Gateway` 에러 진단 및 해결: Nginx와 백엔드 간 통신 문제 및 `nohup` 명령어 백그라운드 분리 이슈 해결.</li>
          <li>`not-null property` 및 시간대 불일치 문제 해결: JPA 엔티티 자동 시간 생성(`@CreationTimestamp`) 및 JDBC URL 시간대 설정 통일.</li>
          <li>JAR 파일 크기 최적화 및 배포 시간 단축: 큰 JAR 파일 전송 지연 문제 진단 및 Jetty 웹 서버 교체 시도, Spring Boot 애플리케이션 시작 시간 분석.</li>
          <li>SSH `Permission denied (publickey)` 에러 해결: GitHub Actions SSH Private Key 설정 오류 진단 및 정확한 Secret 값 업데이트.</li>
          <li>Git `non-fast-forward` 에러 해결: 로컬/원격 커밋 이력 불일치 문제(`git pull`) 해결.</li>
          <li>Git 자동화 스크립트 `Ctrl+D` 입력 문제: 쉘 환경의 `read` 명령어 동작 방식 이해 및 스크립트 개선.</li>
        </ul>
      </section>
  
      <section class="section achievements-section">
        <h2>성과 및 배운 점</h2>
        <ul>
          <li>풀스택 개발 능력: Spring Boot와 Vue.js를 이용한 웹 서비스 개발 및 배포 능력.</li>
          <li>클라우드 인프라: AWS EC2, RDS, Nginx 등 클라우드 인프라 구축 및 운영 능력.</li>
          <li>DevOps 실무: GitHub Actions를 활용한 CI/CD 파이프라인 구축 및 자동화된 배포 프로세스 이해.</li>
          <li>버전 관리: Git/GitHub의 고급 활용 및 Git 명령어 스크립트 자동화 경험.</li>
          <li>문제 해결: 다양한 기술적 문제(네트워크, 데이터베이스, 환경 설정, 배포 등)를 분석하고 해결하는 실전 능력 향상.</li>
          <li>로그 분석: 오류 로그를 읽고 원인을 파악하며 해결책을 찾아내는 역량 강화.</li>
        </ul>
        <p>이 프로젝트들은 저에게 개발자로서의 큰 자신감과 성장을 안겨주었습니다. 앞으로도 꾸준히 학습하고 발전하며 더 복잡하고 흥미로운 프로젝트에 도전하고 싶습니다.</p>
      </section>
  
      <footer class="footer">
        <!-- <p>&copy; 2024 우한결. All rights reserved.</p>
        <p>본 포트폴리오 페이지는 우한결가 직접 개발한 것입니다.</p> -->
      </footer>
    </div>
  </template>
  
  <script>
  export default {
  name: 'HomePage',
}
  </script>
  
  <style scoped>
  /* 기본 스타일 */
  .portfolio-container {
    max-width: 1024px; /* 최대 너비 설정 */
    margin: 0 auto; /* 가운데 정렬 */
    padding: 20px;
    font-family: 'Noto Sans KR', sans-serif; /* 웹 폰트 사용 */
    color: #333;
    line-height: 1.6;
    background-color: #ffffff;
  }
  
  /* 헤더/히어로 섹션 */
  .hero-section {
    text-align: center;
    padding: 80px 20px;
    background: linear-gradient(135deg, #e0f2f7 0%, #bbdefb 100%); /* 그라데이션 배경 */
    border-radius: 15px;
    margin-bottom: 40px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  }
  .hero-section h1 {
    font-size: 3.5em;
    color: #2c3e50;
    margin-bottom: 20px;
    font-weight: 700;
  }
  .hero-section .highlight {
    color: #0056b3; /* 강조 색상 */
    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
  }
  .hero-section .tagline {
    font-size: 1.4em;
    color: #4a6c8c;
    margin-bottom: 40px;
    font-weight: 400;
  }
  .contact-info {
    margin-top: 20px;
  }
  .contact-button {
    display: inline-block;
    padding: 15px 30px;
    margin: 0 15px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 30px; /* 둥근 버튼 */
    transition: all 0.3s ease;
    font-weight: bold;
    font-size: 1.1em;
    box-shadow: 0 4px 10px rgba(0,123,255,0.3);
  }
  .contact-button:hover {
    background-color: #0056b3;
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0,123,255,0.4);
  }
  .github-button {
    background-color: #333;
    box-shadow: 0 4px 10px rgba(51,51,51,0.3);
  }
  .github-button:hover {
    background-color: #555;
    box-shadow: 0 6px 15px rgba(51,51,51,0.4);
  }
  
  /* 공통 섹션 스타일 */
  .section {
    padding: 60px 20px;
    margin-bottom: 30px;
    background-color: #f8f9fa;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  }
  .section h2 {
    font-size: 2.5em;
    color: #2c3e50;
    text-align: center;
    margin-bottom: 40px;
    position: relative;
    font-weight: 700;
  }
  .section h2::after { /* 제목 아래 밑줄 */
    content: '';
    display: block;
    width: 80px;
    height: 5px;
    background-color: #007bff;
    margin: 15px auto 0;
    border-radius: 3px;
  }
  
  /* 자기소개 섹션 */
  .about-me-section p {
    font-size: 1.15em;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    color: #555;
  }
  
  /* 기술 스택 섹션 */
  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 25px;
    justify-items: center;
    align-items: center;
    padding: 20px;
  }
  .tech-item {
    text-align: center;
    padding: 20px;
    border: 1px solid #eee;
    border-radius: 12px;
    background-color: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .tech-item:hover {
    transform: translateY(-7px);
    box-shadow: 0 6px 15px rgba(0,0,0,0.15);
  }
  .tech-item img {
    width: 55px;
    height: 55px;
    margin-bottom: 15px;
  }
  .tech-item span {
    font-weight: bold;
    color: #444;
    font-size: 1.1em;
  }
  
  /* 아키텍처 섹션 */
  .architecture-section .mermaid-diagram {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    overflow-x: auto; /* 다이어그램이 길 경우 스크롤 */
    text-align: center; /* 다이어그램 중앙 정렬 */
  }
  
  /* 프로젝트 섹션 */
  .projects-section .project-card {
    border: 1px solid #ddd;
    padding: 30px;
    margin: 0 auto 40px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
    background-color: white;
    text-align: left;
  }
  .projects-section .project-card h3 {
    font-size: 2em;
    color: #007bff;
    margin-bottom: 20px;
    font-weight: 700;
  }
  .projects-section .project-card p {
    font-size: 1.1em;
    line-height: 1.7;
    margin-bottom: 15px;
    color: #555;
  }
  .projects-section .project-card ul {
    list-style-type: disc;
    margin-left: 25px;
    margin-bottom: 25px;
    color: #666;
  }
  .projects-section .project-card ul li {
    margin-bottom: 8px;
  }
  .project-button {
    display: inline-block;
    padding: 12px 25px;
    margin-right: 15px;
    background-color: #28a745;
    color: white;
    text-decoration: none;
    border-radius: 25px;
    transition: all 0.3s ease;
    font-weight: bold;
    box-shadow: 0 3px 8px rgba(40,167,69,0.3);
  }
  .project-button:hover {
    background-color: #218838;
    transform: translateY(-2px);
    box-shadow: 0 5px 12px rgba(40,167,69,0.4);
  }
  .project-button.github-button {
    background-color: #6a737d; /* GitHub 그레이 */
    box-shadow: 0 3px 8px rgba(106,115,125,0.3);
  }
  .project-button.github-button:hover {
    background-color: #586069;
    box-shadow: 0 5px 12px rgba(106,115,125,0.4);
  }
  
  /* 문제 해결 경험 섹션 */
  .problem-solving-section ul {
    list-style-type: disc;
    margin-left: 25px;
    color: #555;
  }
  .problem-solving-section ul li {
    margin-bottom: 10px;
    font-size: 1.05em;
  }
  .problem-solving-section ul li strong {
    color: #007bff;
  }
  
  /* 성과 및 배운 점 섹션 */
  .achievements-section ul {
    list-style-type: disc;
    margin-left: 25px;
    color: #555;
  }
  .achievements-section ul li {
    margin-bottom: 10px;
    font-size: 1.05em;
  }
  .achievements-section p {
    font-size: 1.1em;
    text-align: center;
    max-width: 800px;
    margin: 20px auto 0;
    color: #555;
  }
  
  /* 푸터 */
  .footer {
    text-align: center;
    padding: 40px 0;
    margin-top: 50px;
    border-top: 1px solid #eee;
    color: #777;
    font-size: 0.95em;
  }

  pre {
    text-align: center;
  }
  
  /* 반응형 디자인 */
  @media (max-width: 768px) {
    .hero-section { padding: 60px 15px; }
    .hero-section h1 { font-size: 2.8em; }
    .hero-section .tagline { font-size: 1.2em; }
    .contact-button { margin: 10px 8px; padding: 12px 20px; font-size: 1em; }
    .section { padding: 40px 15px; }
    .section h2 { font-size: 2em; margin-bottom: 30px; }
    .tech-grid { grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 15px; }
    .tech-item img { width: 45px; height: 45px; margin-bottom: 10px; }
    .tech-item span { font-size: 0.95em; }
    .projects-section .project-card { padding: 20px; }
    .projects-section .project-card h3 { font-size: 1.8em; }
    .projects-section .project-card p, .projects-section .project-card ul { font-size: 1em; }
    .project-button { padding: 10px 18px; font-size: 0.95em; }
  }
  
  @media (max-width: 480px) {
    .hero-section h1 { font-size: 2.2em; }
    .hero-section .tagline { font-size: 1em; }
    .contact-button { display: block; margin: 10px auto; }
    .section h2 { font-size: 1.8em; }
    .tech-grid { grid-template-columns: repeat(auto-fit, minmax(80px, 1fr)); }
    .tech-item { padding: 10px; }
    .tech-item img { width: 40px; height: 40px; }
    .tech-item span { font-size: 0.85em; }
    .projects-section .project-card h3 { font-size: 1.5em; }
    .projects-section .project-card p, .projects-section .project-card ul { font-size: 0.9em; }
  }
  </style>