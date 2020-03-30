<template>
  <section class="section-github">
    <div class="section-github__container">
      <div class="section-github__image"></div>
      <div class="section-github__content">
        <h3>Explore my other projects</h3>
        <a href="https://github.com/tanawitpat">Visit my GitHub</a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-github {
  background-color: $color-grey-dark-1;
  padding: 5rem 20rem 10rem;
  position: relative;

  &__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10rem;
  }

  &__content {
    h3 {
      font-size: 2.4rem;
      background-image: $color-gradient-primary;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
      text-transform: uppercase;
      margin-bottom: 1rem;
    }

    a {
      font-size: 1.8rem;
      color: $color-white;
      font-weight: 800;
      border-bottom: 1px dotted;
      display: inline-block;
      text-decoration: none;
      cursor: pointer;
    }
  }
}
</style>
