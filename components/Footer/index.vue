<template>
  <section id="section-footer" class="section-footer">
    <div class="section-footer__content">
      <p>Designed and developed by <span>Tanawit Pattanaveerangkoon.</span></p>
      <p>
        This website was developed using
        <a href="https://nuxtjs.org/">Nuxt.js</a> and deployed on
        <a href="https://firebase.google.com/">Firebase</a> by
        <a href="https://github.com/features/actions">GitHub Action</a>.
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-footer {
  background-color: $color-grey-dark-2;
  color: $color-white;
  padding: 3rem 3rem;
  font-size: 1.6rem;
  text-align: center;

  h3 {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  a {
    color: $color-white;
    font-weight: bold;
    text-decoration: none;
  }

  span {
    font-weight: bold;
  }

  &__content {
    margin: auto;
    max-width: 800px;

    > p {
      &:not(:last-child) {
        margin-bottom: 0.5rem;
      }
    }
  }
}
</style>
