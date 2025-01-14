function createTriangle() {
    const triangle = document.createElement('div');
    triangle.classList.add('triangle');
    triangle.style.left = Math.random() * window.innerWidth + 'px';
    triangle.style.top = '-20px';
    // Làm chậm tốc độ rơi
    triangle.style.animationDuration = Math.random() * 4 + 3 + 's';
    document.body.appendChild(triangle);

    triangle.addEventListener('animationend', () => {
        triangle.remove();
    });
}

// Giảm tần suất tạo tam giác (1000ms = 1 giây)
setInterval(createTriangle, 1000);
