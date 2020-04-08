<template>
  <section id="section-home" class="section-home">
    <BackgroundVideo video-path="images/Hello-World" />
    <div class="section-home__content">
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
  padding: 5rem 20rem;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  @include respond(tab-large) {
    padding: 5rem 10rem;
  }

  @include respond(tab-small) {
    height: 90vh;
    padding: 5rem 2rem;
  }

  h1 {
    text-align: center;
    font-size: 12rem;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 0.3em;

    background-image: $color-gradient-primary;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    @include respond(tab-large) {
      font-size: 7rem;
    }

    @include respond(tab-medium) {
      font-size: 6rem;
      margin-bottom: 1rem;
    }

    @include respond(tab-small) {
      font-size: 5.6rem;
      letter-spacing: 0.2em;
    }
  }

  p {
    color: $color-white;
    font-size: 3.6rem;
    font-weight: 800;
    text-align: center;
    text-transform: uppercase;

    @include respond(tab-large) {
      font-size: 3rem;
    }

    @include respond(tab-medium) {
      font-size: 2.4rem;
    }

    @include respond(tab-small) {
      font-size: 2rem;
    }
  }

  &__content {
    animation-name: moveInBottom;
    animation-duration: 0.8s;
    animation-timing-function: ease-out;
  }

  &__triangle-footer {
    border-color: transparent transparent $color-grey-dark-1 transparent;
  }
}
</style>
