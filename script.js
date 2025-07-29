// Hiển thị thông báo khi người dùng bấm vào link tải
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
        const fileName = this.textContent.trim();
        alert(`Bạn đang mở link tải: ${fileName}`);
    });
});

// Hiệu ứng khi nhấn vào tiêu đề
document.querySelectorAll('h2').forEach(heading => {
    heading.addEventListener('click', () => {
        heading.classList.toggle('active');
    });
});