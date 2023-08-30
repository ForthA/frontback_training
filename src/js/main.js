if (window.location.toString().indexOf('added.html') > 0) {
  const fileInput = document.getElementById('imageUpload');
  const preview = document.getElementById('preview');

  fileInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const img = document.createElement('img');
      img.src = url;
      img.onload = function () {
        if (this.width === 250 && this.height === 250) {
          preview.appendChild(img);
        } else {
          alert('Изображение должно быть размером 500x500px');
        }
      };
    }
  });
}
