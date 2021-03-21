$(document).ready(function () {
  $("#container").vide({
    mp4: "https://17felix.github.io/MK/video/video.mp4",
    webm: "https://17felix.github.io/MK/video/video.webm",
    ogv: "https://17felix.github.io/MK/video/video.ogv",
    poster: "",
//     here must be poster.img ["https://17felix.github.io/MK/img/cover-image.jpg"], but i have some troubles to enable it in right way
  });
});

$(".button-primary").fancybox();
