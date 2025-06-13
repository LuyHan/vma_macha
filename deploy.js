// deploy.js
import { execSync } from 'child_process';

let input = '';

process.stdin.setEncoding('utf8');

console.log('📨 커밋 메시지를 입력하세요 (끝내려면 Ctrl+D 또는 Ctrl+Z → Enter):');

process.stdin.on('data', (chunk) => {
  input += chunk;
});

process.stdin.on('end', () => {
  const message = input.trim();

  if (!message) {
    console.error('❌ 커밋 메시지를 입력하지 않았습니다.');
    process.exit(1);
  }

  try {
    console.log('\n📦 변경사항 Git에 커밋 중...');
    execSync('git add .', { stdio: 'inherit' });
    execSync(`git commit -m "${message.replace(/\n/g, '" -m "')}"`, { stdio: 'inherit' }); // 여러 줄 처리
    execSync('git push origin main', { stdio: 'inherit' });

    console.log('\n🔧 빌드 중...');
    execSync('npm run build', { stdio: 'inherit' });

    console.log('\n🚀 GitHub Pages에 배포 중...');
    execSync('npm run deploy', { stdio: 'inherit' });

    console.log('\n✅ 배포 완료!');
  } catch (err) {
    console.error('❌ 오류 발생:', err.message);
  }
});
