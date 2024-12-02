// Khi trang được tải
document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    const errorMessage = document.getElementById('errorMessage');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    // Sự kiện khi nhấn nút "Log In"
    loginButton.addEventListener('click', () => {
        // Hiển thị thông báo lỗi
        errorMessage.style.display = 'block';

        // Lưu giá trị đã nhập vào localStorage
        const username = usernameInput.value;
        const password = passwordInput.value;
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        // In ra console (dành cho mục đích kiểm tra)
        console.log('Saved data:', { username, password });
    });

    // Phục hồi dữ liệu từ localStorage (nếu có)
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    if (savedUsername) usernameInput.value = savedUsername;
    if (savedPassword) passwordInput.value = savedPassword;
});