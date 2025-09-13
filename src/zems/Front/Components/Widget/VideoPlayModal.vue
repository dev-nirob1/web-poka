<template>
  <div class="video-modal flex-center">
    <!-- Overlay -->
    <div class="video-overlay"></div>

    <!-- Modal content -->
    <div class="video-wrapper">
      <!-- Close button -->
      <button class="video-close">✕</button>

      <!-- YouTube iframe -->
      <div class="video-embed">
        <iframe src="https://www.youtube.com/embed/NrgkeOR_g5E" title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
.video-modal {
  position: fixed;
  inset: 0;
  z-index: 999;
}

.video-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
}

.video-wrapper {
  position: relative;
  min-width: 70vw;
  aspect-ratio: 16 / 9;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: var(--box-shadow);
}

/* Close button */
.video-close {
  position: absolute;
  top: 0;
  right: 0.5rem;
  background: rgb(from var(--dark-color)r g b / 20%);
  border: none;
  color: var(--white-color);
  font-size: 1.2rem;
  padding: 0.4rem 0.6rem;
  border-radius: 0.4rem;
  cursor: pointer;
  z-index: 1000;
}

.video-embed {
  width: 100%;
  height: 100%;
}

.video-embed iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
