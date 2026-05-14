function kembali(){

  window.location.href = "novel.html";

}

function publishNovel(){

  let judul =
  document.getElementById("judul").value;

  let isi =
  document.getElementById("isiNovel").value;

  if(judul === "" || isi === ""){

    alert("😭 Judul dan isi novel harus diisi");

    return;

  }

  alert(
    "🔥 Novel berhasil dipublish (sementara demo dulu 😎)"
  );

}
