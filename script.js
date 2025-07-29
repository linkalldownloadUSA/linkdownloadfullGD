// Chọn nút dark mode và body
const toggleBtn = document.querySelector('.toggle-mode');
const body = document.body;

// Kiểm tra và áp dụng dark mode khi tải trang nếu đã bật trước đó
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
}

// Hàm bật/tắt dark mode
function toggleDarkMode() {
  body.classList.toggle('dark-mode');
  // Lưu trạng thái dark mode vào localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.removeItem('darkMode');
  }
}

// Hàm hiển thị thông báo đơn giản khi người dùng click vào link tải
function notify(platform) {
  // Tạo popup thông báo
  const notification = document.createElement('div');
  notification.textContent = `Bạn đang tải về: ${platform}`;
  notification.style.position = 'fixed';
  notification.style.bottom = '1rem';
  notification.style.right = '1rem';
  notification.style.backgroundColor = 'rgba(59, 130, 246, 0.9)';
  notification.style.color = '#fff';
  notification.style.padding = '0.6rem 1rem';
  notification.style.borderRadius = '6px';
  notification.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';
  notification.style.fontSize = '1rem';
  notification.style.zIndex = '10000';
  notification.style.opacity = '0';
  notification.style.transition = 'opacity 0.3s ease';

  document.body.appendChild(notification);

  // Fade in
  requestAnimationFrame(() => {
    notification.style.opacity = '1';
  });

  // 2 giây sau fade out và remove
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.addEventListener('transitionend', () => {
      notification.remove();
    });
  }, 2000);
}

// Hàm hiển thị popup mẹo cài đặt Geode an toàn (nếu bạn muốn thêm)
function showPopup() {
  alert('Mẹo: Đảm bảo tải Geode từ nguồn chính thức để tránh rủi ro bảo mật!');
}

// Đưa các hàm ra ngoài để HTML gọi được
window.toggleDarkMode = toggleDarkMode;
window.notify = notify;
window.showPopup = showPopup;
