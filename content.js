let images = document.getElementsByTagName('img');

let photos = [
  'https://www.billboard.com/files/styles/article_main_image/public/media/pink-cover-use-only-650.jpg',
  'https://www.breatheheavy.com/wp-content/uploads/2016/03/pink-new-album.jpg',
  'https://s3-us-west-1.amazonaws.com/s3.kllcfm.radio.com/s3fs-public/styles/delta__775x515/public/pink-credit-solve-sundsbo.jpg?itok=hDiOPW0u&c=8e88097a3c7152ff4d2d6f6fe91e3256',
  'https://pbs.twimg.com/profile_images/526808772140740610/xleGN7mO.jpeg',
  'https://www.billboard.com/files/media/pnk-pink-whitebg-650-430.jpg',
  'https://i.pinimg.com/236x/6c/c1/36/6cc1365c5eee8b33f1aff6d6a6b492e8--quick-hairstyles-popular-short-hairstyles.jpg',
  'http://resources2.news.com.au/images/2014/04/10/1226880/343042-267455c6-c058-11e3-ab5c-db8d2f3f624e.jpg',
  'http://cache.lovethispic.com/uploaded_images/309296-P-nk.jpg',
  'https://i.pinimg.com/736x/70/5d/57/705d578af4ba9594bf0308216f5b3431--singer-pink-hairstyles-pompadour-hair.jpg',
  'https://i.scdn.co/image/afc2d276d9c1b398d4f1048c20584f926296b9c0',
  'https://ae01.alicdn.com/kf/HTB1YGBeIXXXXXXIXXXXq6xXFXXXz/Alecia-Beth-Moore-P-nk-pink-Music-Star-Silk-Cloth-Poster-32-x-24-17-x.jpg_640x640.jpg',
  'https://i.pinimg.com/736x/cd/c6/64/cdc664792056141c0f73d4577d09d85a--alecia-moore-beth-moore.jpg',
  'http://cdn.ppcorn.com/wp-content/uploads/sites/14/2016/03/Pink-PPcorn-2016-760x500.jpg',
  'http://promotionmusicnews.com/promotionmusicnews.com/html/wp-content/uploads/PINK-WHAT-ABOUT-US.png',
  'https://i.pinimg.com/originals/b3/4d/95/b34d953a28c922695ad1f396f32a6558.jpg',
  'http://www.taaz.com/images/49913429DD88B8C5E1D91C3FB2F8EFCA.jpg',
  'https://shawetcanada.files.wordpress.com/2017/10/unnamed.png?w=640&h=427',
  'http://images6.fanpop.com/image/photos/36400000/Pink-image-pink-36418450-500-500.jpg',
  'http://images6.fanpop.com/image/photos/37100000/I-Can-t-Get-Enough-Of-You-P-nk-3-pink-37143701-405-414.png',
  'http://img2-ak.lst.fm/i/u/arO/6badaf2149be4f7eb8598555bd4afab0',
  'https://i.pinimg.com/736x/e4/e5/19/e4e519e8a73bff774fe679316e080147--pink-singer-hair-pink-music.jpg',
  'https://data.whicdn.com/images/116888085/large.jpg',
  'https://www.billboard.com/files/styles/article_main_image/public/media/pink-press-billboard-650.jpg',
  'http://pause.es/wp-content/uploads/2012/12/Pink.jpg',
  'https://cdn.smehost.net/pinkspagecom-usrcaprod/wp-content/uploads/2016/02/552332_10150920259436398_1987970376_n_fb.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs2MRzTMoxYeXaz2NA77utkuyF83QbPhZSlv0nbJfmHCAS24iFHw',
  'https://www.billboard.com/files/styles/article_main_image/public/media/pink-wim-mic-650-430.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/P%21nk_Live_2013.jpg/220px-P%21nk_Live_2013.jpg'
];

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  if (message.txt === 'p!nkify') {
    for (let i = 0; i < images.length; i++) {
      images[i].src = photos[Math.floor(Math.random() * photos.length)];
    }
  }
  
}