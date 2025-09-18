function cekinput() {
    let nilai = document.getElementsByClassName("nama")[0].value.toUpperCase(); // ambil input pertama

    if (nilai === "SITI ALIFA NURMALIA") {
      window.location.href = "isi.html";
    } else {
      alert("itu bukan nama sayang aku!");
    }
}