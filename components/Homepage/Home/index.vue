<template>
  <section id="section-home" class="section-home">
    <div class="section-home__container"><p>Hi! I'm Tanawit</p></div>
  </section>
</template>

<style scoped lang="scss">
.section-home {
  height: 95vh;
  max-height: 900px;
  padding-top: 65px;
  position: relative;

  background-image: url('~static/images/cover.png');
  background-position: right 20%;
  background-size: cover;

  display: flex;
  align-items: center;

  @include respond(tab-large) {
    justify-content: center;
  }

  @include respond(tab-medium) {
    background-position: 80% 20%;
  }

  &__container {
    max-width: $max-width;
    width: 100%;
    margin: auto;
    padding: 0 5rem;
  }

  p {
    color: $color-white;
    font-size: 4.8rem;
    text-transform: uppercase;
    font-weight: 800;

    animation-name: moveInBottom;
    animation-duration: 0.8s;
    animation-timing-function: ease-out;

    @include respond(tab-large) {
      text-align: center;
    }

    @include respond(tab-small) {
      font-size: 4rem;
    }
  }
}
</style>
