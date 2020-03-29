<template>
  <section id="section-home" class="section-home">
    <BackgroundVideo video-path="images/Hello-World" />
    <div>
      <h1>Tanawit</h1>
      <p>Software Developer</p>
    </div>
    <TriangleFooter class="section-home__triangle-footer" />
  </section>
</template>

<script>
import TriangleFooter from '@/components/TriangleFooter'
import BackgroundVideo from '@/components/BackgroundVideo'

export default {
  components: {
    BackgroundVideo,
    TriangleFooter
  }
}
</script>

<style scoped lang="scss">
.section-home {
  background-color: rgba($color-black, 0.7);
  height: 95vh;
  max-height: 800px;
  padding: 65px 20rem;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    background-image: $color-gradient-primary;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    font-size: 12rem;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 0.3em;

    animation-name: moveInBottom;
    animation-duration: 0.8s;
    animation-timing-function: ease-out;

    @include respond(mobile) {
      font-size: 4rem;
    }
  }

  p {
    color: $color-white;
    font-size: 3.6rem;
    font-weight: 800;
    text-align: center;
    text-transform: uppercase;
  }

  &__triangle-footer {
    border-color: transparent transparent $color-black transparent;
  }
}
</style>
