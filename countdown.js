// Thời gian đếm ngược (giây)
let countdown = 5;

// Cập nhật thời gian đếm ngược và chuyển hướng khi hết thời gian
function updateCountdown() {
  const countdownElement = document.getElementById("countdown");
  countdownElement.textContent = countdown;

  if (countdown === 0) {
    // Chuyển hướng đến trang web chính
    window.location.href = "index3.html";
  } else {
    countdown--;
    setTimeout(updateCountdown, 1000); // Đợi 1 giây trước khi cập nhật lại thời gian
  }
}

// Bắt đầu đếm ngược khi tài liệu đã tải xong
document.addEventListener("DOMContentLoaded", updateCountdown);
