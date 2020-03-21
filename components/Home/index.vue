<template>
  <section id="section-home" class="section-home">
    <div class="section-home__bg-filter" />
    <div class="section-home__greeting u-center-text">
      <h1 class="section-home__greeting--message">Hi, I'm Tanawit</h1>
      <div class="section-home__greeting--description">Software Developer</div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-home {
  background-image: url('/images/cover.png');
  background-position: right top;
  background-size: cover;
  height: 95vh;
  padding: 0 5rem;
  position: relative;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;

  @include respond(tab-large) {
    background-image: url('/images/cover.png');
    background-position: 90% top;
    grid-template-columns: 1fr;
  }
  &__bg-filter {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: $color-grey-dark-1;
    opacity: 0.3;
    animation-name: homeFadeIn;
    animation-duration: 3s;
  }

  &__greeting {
    color: #ddd;
    font-size: 2.5rem;
    animation-name: moveInBottom;
    animation-duration: 0.8s;
    animation-timing-function: ease-out;
    &--message {
      margin-bottom: 1rem;
    }
    &--description {
      font-size: 2rem;
    }
  }

  @keyframes homeFadeIn {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 0.3;
    }
  }
}
</style>
