// Thông báo tải về nền tảng nào
const notify = platform => alert(`👉 Bạn đang tải: ${platform}`);

// Popup mẹo nhỏ
const showPopup = () => alert("💡 Luôn tải từ nguồn chính thức để bảo vệ thiết bị của bạn.");

// Chuyển đổi dark mode, lưu trạng thái localStorage
const toggleDarkMode = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("darkMode", document.body.classList.contains("dark"));
};

// Khi load trang, kiểm tra trạng thái dark mode đã lưu
window.onload = () => {
  if (localStorage.getItem("darkMode") === "true") document.body.classList.add("dark");
};
