
// Preview logo sekolah
document.getElementById("logo").addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("preview").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Validasi Form Sekolah
document.getElementById("sekolahForm").addEventListener("submit", function (e) {
  const nama = document.getElementById("namaSekolah").value;
  if (!nama.trim()) {
    alert("Nama Sekolah wajib diisi.");
    e.preventDefault();
  }
});
