document.addEventListener('DOMContentLoaded', () => {
  const videos = document.querySelectorAll('video');

  // Garante o autoplay contínuo de todos os vídeos mutados na página
  videos.forEach(video => {
    video.muted = true;
    video.play().catch(error => {
      console.log('Autoplay ajustado pelo navegador:', error);
    });
  });
});