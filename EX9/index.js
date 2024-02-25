function status() {
  const img = document.getElementById("img");
  const btn = document.getElementById("btn");

  let isOn = img.src.includes("./img/pic_bulbon.gif");

  // Thay đổi trạng thái bóng đèn
  if (isOn) {
    
    img.src = "./img/";
    text.innerHTML = "Tắt";
  } else {
    bulb.src = "bulb-on.png";
    text.innerHTML = "Bật";
  }
}
