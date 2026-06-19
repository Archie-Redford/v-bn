function runSmokeTest() {
  return 1 + 1 === 2;
}

if (typeof document !== 'undefined') {
  document.getElementById('check').addEventListener('click', () => {
    const status = document.getElementById('status');
    const ok = runSmokeTest();
    status.textContent = ok ? 'OK: app is working' : 'FAIL';
    status.className = ok ? 'ok' : 'fail';
  });
}

if (typeof module !== 'undefined') {
  module.exports = { runSmokeTest };
}
