<template>
  <section id="section-footer" class="section-footer">
    <div class="section-footer__container">
      <p class="section-footer__container--developer">
        Designed and developed by Tanawit Pattanaveerangkoon
      </p>
      <div class="section-footer__seperator" />
      <p class="section-footer__container--tech-stack">
        This website was built by these tools
      </p>
      <div class="section-footer__skill">
        <a href="https://vuejs.org/">Vue.js</a>
        <a href="https://nuxtjs.org/">Nuxt.js</a>
        <a href="https://firebase.google.com/">Firebase</a>
        <a href="https://github.com/features/actions">GitHub Actions</a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-footer {
  background-color: $color-black;
  padding: 3rem 3rem 2rem;
  position: relative;

  @include respond(tab-small) {
    padding: 3rem 2rem 1rem;
  }

  &__seperator {
    margin: auto;
    width: 50rem;
    height: 0.2rem;
    background: $color-grey-dark-4;
    margin-bottom: 2rem;

    @include respond(tab-medium) {
      width: 90%;
    }
  }

  &__container {
    max-width: $max-width;
    margin: auto;
    text-align: center;
    color: $color-white;
    font-size: 1.8rem;
    color: $color-grey-dark-4;

    &--developer {
      letter-spacing: 1px;
      margin-bottom: 2rem;
      font-weight: bold;
      font-size: 2rem;
    }

    &--tech-stack {
      display: inline-block;
      margin-bottom: 1.5rem;
      font-weight: bold;
    }
  }

  &__skill {
    > a {
      color: $color-grey-dark-4;
      background-color: $color-grey-dark-2;
      padding: 0.5rem 1rem;
      border-radius: 10px;
      font-weight: 800;
      display: inline-block;
      text-decoration: none;
      margin-bottom: 1rem;
      font-size: 1.6rem;
      cursor: pointer;

      &:not(:last-child) {
        margin-right: 1rem;
      }

      &:hover {
        background-color: $color-grey-dark-3;
        color: $color-grey-light-1;

        @include respond(mobile) {
          color: $color-grey-dark-4;
          background-color: $color-grey-dark-2;
        }
      }
    }
  }
}
</style>
