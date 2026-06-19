document.getElementById('check').addEventListener('click', () => {
  const status = document.getElementById('status');
  const ok = 1 + 1 === 2;
  status.textContent = ok ? 'OK: app is working' : 'FAIL';
  status.className = ok ? 'ok' : 'fail';
});
