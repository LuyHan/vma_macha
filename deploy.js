// deploy.js
import { execSync } from 'child_process';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('커밋 메시지를 입력하세요: ', (message) => {
  try {
    console.log('\n📦 변경사항 Git에 커밋 중...');
    execSync('git add .', { stdio: 'inherit' });
    execSync(`git commit -m "${message}"`, { stdio: 'inherit' });
    execSync('git push origin main', { stdio: 'inherit' });

    console.log('\n🔧 빌드 중...');
    execSync('npm run build', { stdio: 'inherit' });

    console.log('\n🚀 GitHub Pages에 배포 중...');
    execSync('npm run deploy', { stdio: 'inherit' });

    console.log('\n✅ 배포 완료!');
  } catch (err) {
    console.error('❌ 오류 발생:', err.message);
  } finally {
    rl.close();
  }
});
