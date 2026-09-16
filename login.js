/**
 * Hàm kiểm tra đăng nhập đơn giản.
 * Trả về true nếu username = 'admin' và password = '123'
 * Trả về false trong các trường hợp còn lại.
 */
function checkLogin(username, password) {
  return username === 'admin' && password === '123';
}

// Xử lý sự kiện submit form trên trình duyệt (nếu chạy trong môi trường có DOM)
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const messageEl = document.getElementById('message');

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const isValid = checkLogin(username, password);

        if (isValid) {
          messageEl.textContent = 'Đăng nhập thành công!';
          messageEl.style.color = 'green';
        } else {
          messageEl.textContent = 'Sai tên đăng nhập hoặc mật khẩu!';
          messageEl.style.color = 'red';
        }
      });
    }
  });
}

// Xuất hàm để dùng trong Node.js / Jest (nếu module.exports tồn tại)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { checkLogin };
}
