<template>
  <div class="bg-video">
    <video class="bg-video__content" autoplay muted loop>
      <source :src="webmVideoPath" type="video/webm">
    </video>
  </div>
</template>

<script>
export default {
  props: {
    webmVideoPath: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  overflow: hidden;
  background-color: $color-grey-dark-2;

  &__content {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>
