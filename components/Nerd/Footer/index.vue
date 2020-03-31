<template>
  <section class="section-footer">
    <div class="section-footer__container">
      <h3>Developed by Tanawit Pattanaveerangkoon</h3>
      <div class="section-footer__seperator" />
      <h4>This website was built by these tools</h4>
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
  padding: 3rem 3rem 1rem;
  position: relative;

  @include respond(tab-small) {
    padding: 3rem 2rem 1rem;
  }

  &__seperator {
    margin: auto;
    width: 50rem;
    height: 0.2rem;
    background: $color-grey-dark-3;
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
    color: $color-grey-dark-3;

    h3 {
      letter-spacing: 1px;
      margin-bottom: 2rem;
    }

    h4 {
      display: inline-block;
      margin-bottom: 1.5rem;
    }
  }

  &__skill {
    > a {
      color: $color-grey-dark-3;
      background-color: $color-grey-dark-1;
      padding: 0.5rem 1rem;
      border-radius: 10px;
      font-weight: 800;
      display: inline-block;
      text-decoration: none;
      margin-bottom: 2rem;
      cursor: pointer;

      &:not(:last-child) {
        margin-right: 1rem;
      }

      &:hover {
        background-color: $color-grey-dark-2;
        color: $color-grey-light-1;

        @include respond(mobile) {
          color: $color-grey-dark-3;
          background-color: $color-grey-dark-1;
        }
      }
    }
  }
}
</style>
