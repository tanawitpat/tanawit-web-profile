<template>
  <section class="section-github">
    <div class="section-github__content">
      <h2 class="heading-primary">Explore my other projects</h2>
      <div class="section-github__image" data-aos="fade-up">
        <div class="section-github__image--1" />
        <div class="section-github__image--2" />
      </div>
      <a href="https://github.com/tanawitpat">Visit my GitHub</a>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-github {
  background-color: $color-grey-dark-2;
  padding: 5rem 10rem 7.5rem;
  position: relative;

  @include respond(tab-medium) {
    padding: 5rem 5rem 7.5rem;
  }

  @include respond(tab-medium) {
    padding: 5rem 3rem 7.5rem;
  }

  &__content {
    text-align: center;

    h2 {
      font-size: 3.2rem;
      background-image: $color-gradient-primary;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      text-transform: uppercase;
      margin-bottom: 5rem;
    }

    a {
      color: $color-white;
      font-weight: 800;
      text-decoration: none;
      font-size: 1.8rem;
      padding: 1.3rem 2rem;
      background: $color-grey-dark-3;
      border-radius: 2rem;
      cursor: pointer;

      &:hover {
        background: $color-gradient-primary;

        @include respond(mobile) {
          background: $color-grey-dark-3;
        }
      }
    }
  }

  &__image {
    height: 330px;
    width: 700px;
    margin: auto;
    position: relative;
    margin-bottom: 7rem;

    @include respond(tab-large) {
      width: 500px;
      height: 250px;
    }

    @include respond(tab-medium) {
      width: 380px;
      height: 170px;
    }

    @include respond(tab-small) {
      width: 75%;
      min-width: 200px;
      height: 140px;
    }

    > * {
      border-radius: 2rem;
      background-color: $color-grey-dark-3;
      width: 400px;
      height: 300px;
      box-shadow: 0 1rem 2rem rgba($color-black, 0.2);

      @include respond(tab-large) {
        width: 300px;
        height: 225px;
      }

      @include respond(tab-medium) {
        width: 200px;
        height: 150px;
      }

      @include respond(tab-small) {
        width: 150px;
        height: 113px;
      }
    }

    &--1 {
      position: absolute;
      top: 0;
      left: 0;
    }

    &--2 {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
}
</style>
