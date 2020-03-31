<template>
  <section class="section-github">
    <div class="section-github__content">
      <h3 class="heading-primary">Explore my other projects</h3>
      <div class="section-github__image">
        <div class="section-github__image--1" />
        <div class="section-github__image--2" />
      </div>
      <a href="https://github.com/tanawitpat">Visit my GitHub</a>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-github {
  background-color: $color-grey-dark-1;
  padding: 5rem 20rem 7.5rem;
  position: relative;

  &__content {
    text-align: center;

    h3 {
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
      padding: 1.5rem 2rem;
      background-color: $color-grey-dark-2;
      border-radius: 2rem;
      cursor: pointer;

      &:hover {
        background: $color-gradient-primary;
      }
    }
  }

  &__image {
    height: 380px;
    width: 700px;
    margin: auto;
    position: relative;
    margin-bottom: 1.5rem;

    > * {
      border-radius: 2rem;
      background-color: $color-grey-dark-2;
      width: 400px;
      height: 300px;
      box-shadow: 0 1rem 2rem rgba($color-black, 0.2);
    }

    &--1 {
      position: absolute;
      top: 0;
      left: 0;
    }

    &--2 {
      position: absolute;
      top: 3rem;
      right: 0;
    }
  }
}
</style>
