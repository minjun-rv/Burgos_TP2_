let usuarioInteractuo = false;
const carousel = document.getElementById('carouselExample');


// Activar audio al hacer clic en la primera imagen
const primerImagen = document.getElementById('album1');
if (primerImagen) {
  primerImagen.addEventListener('click', function activarAudio() {
    usuarioInteractuo = true;
    primerImagen.removeEventListener('click', activarAudio);


    const audio = document.getElementById('taylorswift');
    if (audio) {
      audio.play();
    }
  });
}


// Al cambiar de slide
carousel.addEventListener('slid.bs.carousel', function () {
  // Detener todos los audios
  const audios = [
    document.getElementById('taylorswift'),
    document.getElementById('fearless'),
    document.getElementById('speaknow'),
    document.getElementById('red'),
    document.getElementById('1989'),
    document.getElementById('reputacion'),
    document.getElementById('lover'),
    document.getElementById('folklore'),
    document.getElementById('evermore'),
    document.getElementById('midnights'),
    document.getElementById('thetortured'),
    document.getElementById('showgirl')
  ];


  for (let i = 0; i < audios.length; i++) {
    if (audios[i]) {
      audios[i].pause();
      audios[i].currentTime = 0;
    }
  }


  // Si el usuario ya interactuó, reproducir el audio del slide activo
  if (usuarioInteractuo) {
    const slides = [
      'slide1', 'slide2', 'slide3', 'slide4', 'slide5',
      'slide6', 'slide7', 'slide8', 'slide9', 'slide10',
      'slide11', 'slide12'
    ];


    for (let i = 0; i < slides.length; i++) {
      const slide = document.getElementById(slides[i]);
      if (slide && slide.className === 'carousel-item active') {
        const audioActivo = audios[i];
        if (audioActivo) {
          audioActivo.play();
        }
        break;
      }
    }
  }
});
