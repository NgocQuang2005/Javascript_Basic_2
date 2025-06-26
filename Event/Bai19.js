if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(bai19);
} else {
  console.log("Trình duyệt không hỗ trợ định vị địa lý.");
}
function bai19(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log("Vĩ độ: " + latitude + ", Kinh độ: " + longitude);
}
