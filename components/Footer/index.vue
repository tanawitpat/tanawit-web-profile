<template>
  <section id="section-footer" class="section-footer">
    <div class="section-footer__layout">
      <div>
        <h3>About this site</h3>
        <div class="section-footer__card">
          <div>
            Designed and developed by <span>Tanawit Pattanaveerangkoon.</span>
          </div>
        </div>
      </div>
      <div>
        <h3>For nerds</h3>
        <div class="section-footer__card">
          This website was developed using
          <a href="https://nuxtjs.org/">Nuxt.js</a> and deployed on
          <a href="https://firebase.google.com/">Firebase</a> by
          <a href="https://github.com/features/actions">GitHub Action</a>. The
          code was written on
          <a href="https://code.visualstudio.com/">VSCode</a> and formatted by
          <a href="https://prettier.io/">Prettier</a>.
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-footer {
  background-color: $color-grey-dark-2;
  color: $color-white;
  padding: 5rem 5rem;
  font-size: 1.6rem;

  h3 {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }

  a {
    color: $color-white;
    font-weight: bold;
    text-decoration: none;
  }

  &__layout {
    max-width: 120rem;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10rem;

    @include respond(tab-large) {
      grid-template-columns: 1fr;
      grid-gap: 5rem;
    }
  }

  &__card {
    > * {
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
  }
}
</style>
