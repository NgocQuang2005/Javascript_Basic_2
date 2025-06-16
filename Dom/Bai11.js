let randonImgBtn = document.getElementById("randonImgBtn");
let imgRandom = document.getElementById("imgRandom");
let arrImg = [
  {
    url: "https://c.files.bbci.co.uk/5c38/live/16192430-f5ef-11ef-bd6e-cd71c2e1454a.jpg",
    width: "240",
    height: "160",
  },
  {
    url: "https://media.vov.vn/sites/default/files/styles/large/public/2024-10/lionel_messi.jpg",
    width: "320",
    height: "195",
  },
  {
    url: "https://bna.1cdn.vn/2025/01/16/e0.365dm.com-16-11-1600x900-_skysports-lionel-messi-barca_3825537.jpg",
    width: "500",
    height: "343",
  },
  {
    url: "https://cdn.giaoducthoidai.vn/images/27ec8e89764b3bbad626e0937cad3559f0297f93ba251b97e1a8c0f2401e58c50cdd85a1536582654b9fbb9a0c72dc97/messi-4238-2291.jpg",
    width: "340",
    height: "235",
  },
];

// console.log(arrImg[0].url);
randonImgBtn.addEventListener("click", function (e) {
  let srcImg = imgRandom.attributes.src;
  let widthImg = imgRandom.attributes.width;
  let heightImg = imgRandom.attributes.height;
  e.preventDefault();
  let randomImg = Math.floor(Math.random() * arrImg.length);
  for (let i = 0; i < arrImg.length; i++) {
    if (i === randomImg) {
      srcImg.value = arrImg[i].url;
      widthImg.value = arrImg[i].width;
      heightImg.value = arrImg[i].height;
    }
  }
});
