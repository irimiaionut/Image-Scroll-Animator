var block = '\
  </div>\
  <div class="Instagram-card">\
    <div class="Instagram-card-header">\
      <img src="https://scontent.fotp3-3.fna.fbcdn.net/v/t1.0-9/42189782_1943751745705439_464232131577511936_o.jpg?_nc_cat=104&oh=9ff23a1c4e05710ba3b59afd1333d06a&oe=5C3F8E61"class="Instagram-card-user-image">\
      <a class="Instagram-card-user-name" href="https://www.instagram.com/rogersbase/"> rogersbase </a>\
      <div class="Instagram-card-time"> 1 sem </div>\
    </div>\
\
    <div class="Instagram-card-image">\
      <img src= "%imgsrc%" height="auto"/>\
    </div>\
\
    <div class="Instagram-card-content">\
      <p class="Likes">640 Me gusta</p>\
      <p><a class="Instagram-card-content-user">\
      <href="https://www.instagram.com/rogersbase/">rogersbase</a>\
     I GOT TO PLAY NINTENDO SWITCH ON #NINTENDO MINUTE! 😱 So happy that I can finally talk about this! @kitellis and @breath0air told me that we were going to be playing <a class="hashtag" href="https://www.instagram.com/explore/tags/poochy/">#Poochy</a> and <a class="hashtag" href="https://www.instagram.com/explore/tags/yoshi/">#Yoshi</a> but ended up surprising me with a private <a class="hashtag" href="https://www.instagram.com/explore/tags/nintendoswitch/">#NintendoSwitch</a> play session. I had the opportunity to play The Legend of <a class="hashtag" href="https://www.instagram.com/explore/tags/zelda/">#Zelda</a> <a class="hashtag" href="https://www.instagram.com/explore/tags/breathofthewild/">#BreathOfTheWild</a> and <a class="hashtag" href="https://www.instagram.com/explore/tags/12switch/">#12Switch</a>, both of which were a ton of fun! Massive thank you to the team at @Nintendo for having me on! I had an absolute blast! 🎉</p>\
      <p class="comments">Ver los 12 comentarios</p>\
      <br><a class="user-comment" href="https://www.instagram.com/chrisobrien64/">chrisobrien64</a> NO WAY! WAY TO GO ROGER MY BOI</br>\
      <br><a class="user-comment" href="https://www.instagram.com/artie_mcparty/">artie_mcparty</a> ROGER = BEST NINTENDO FAN.</br>\
      <br><a class="user-comment" href="https://www.instagram.com/theealeexj/">theealeexj</a> I JUST TRIED IT OUT TODAY ITS AMAZING</br>\
    <hr>\
    </div>  \
\
    <div class="Instagram-card-footer">\
      <a class="footer-action-icons"href="#"><i class="fa fa-heart-o"></i></a>\
      <input class="comments-input" type="text" placeholder="Añade un comentario..."/>\
      <a class="footer-action-icons"href="#"><i class="fa fa-ellipsis-h"></i></a>\
    </div>\
\
  </div>';

var imagesSRC = [
  "resources/1.jpg",
  "resources/2.jpg",
  "resources/3.jpg",
  "resources/4.jpg",
  "resources/5.jpg",
  "resources/6.jpg",
  "resources/7.jpg"
];

  function refreshImages(images, force){
    [].forEach.call(images, function(image) {
        var slide = image.getBoundingClientRect().top;

        if((slide > (image.height/-2) && slide < document.documentElement.clientHeight - (image.height/2)) || force ){
          let travel =  30 + (slide/(document.documentElement.clientHeight/70) * 2);

          console.log(travel);

          if(travel < 0 ){
            travel = 0;
          }

          if(travel > 100 ){
            travel = 100;
          }
          image.style.webkitTransform = "translate3d(0px," + travel + "px,0px)";
        }
    });
  }

document.addEventListener("DOMContentLoaded", function(event) {

  for(let i = 0; i <= 6; i++){
    document.body.innerHTML += block.replace('%imgsrc%', imagesSRC[i]);
  }
  for(let i = 0; i <= 6; i++){
    document.body.innerHTML += block.replace('%imgsrc%', imagesSRC[i]);
  }

  var images = document.querySelectorAll('.Instagram-card-image img');
  refreshImages(images, true);

  window.addEventListener("scroll", function(e) {
    refreshImages(images, false);
  });
});
