window.onload = function() {
    // Thêm tabindex và sự kiện cho tất cả ảnh
    const images = document.querySelectorAll('.preview');
    
    images.forEach(img => {
        img.setAttribute('tabindex', '0'); // Thêm tabindex
        img.addEventListener('mouseover', () => upDate(img));
        img.addEventListener('mouseout', unDo);
        img.addEventListener('focus', () => upDate(img));
        img.addEventListener('blur', unDo);
    });

    console.log('Tabindex và sự kiện đã được thêm!');
};

// Lưu trạng thái ban đầu
const originalText = document.getElementById('image').innerHTML;
const originalBg = window.getComputedStyle(document.getElementById('image')).backgroundImage;

// Hàm khi hover/focus
function upDate(previewPic) {
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.innerHTML = previewPic.alt;
    console.log(`Đang hiển thị: ${previewPic.alt}`);
}

// Hàm khi rời chuột/blur
function unDo() {
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = originalBg;
    imageDiv.innerHTML = originalText;
    console.log('Đã khôi phục về trạng thái ban đầu');
}
