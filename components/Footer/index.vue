<template>
  <section id="section-footer" class="section-footer">
    <div class="section-footer__layout">
      <div class="section-footer__general">
        <h3>About this site</h3>
        <div class="section-footer__general--developer">
          Designed and developed by Tanawit Pattanaveerangkoon.
        </div>
        <div class="section-footer__general--image-disclaimer">
          The background image in the experience section was posted on
          <a href="https://unsplash.com/photos/gwH96RaS3KM">Unsplash</a> by
          <a href="https://unsplash.com/@heysupersimi">@heysupersimi</a>.
        </div>
      </div>
      <div class="section-footer__contact">
        <h3>
          Contact
        </h3>
        <p>
          You can contact me via email (tanawit.pat@gmail.com) or
          <a href="https://www.linkedin.com/in/tanawitp/">Linkedin</a>.
        </p>
      </div>
      <div class="section-footer__nerd">
        <h3>For nerds</h3>
        <div class="section-footer__nerd--tech-stack">
          This website was developed using
          <a href="https://nuxtjs.org/">Nuxt.js</a> and deployed on
          <a href="https://firebase.google.com/">Firebase</a> by
          <a href="https://github.com/features/actions">GitHub Action</a>. The
          code was written on
          <a href="https://code.visualstudio.com/">VSCode</a> and formatted by
          <a href="https://prettier.io/">Prettier</a>.
        </div>
        <div class="section-footer__nerd--source-code">
          You can visit my <a href="https://github.com/tanawitpat">GitHub</a> to
          explore my other projects.
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
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  a {
    color: $color-white;
    font-weight: bold;
    text-decoration: none;
  }

  &__layout {
    max-width: 120rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5rem;
    margin: auto;
  }

  &__general {
    > * {
      margin-bottom: 1rem;
    }
  }

  &__nerd {
    > * {
      margin-bottom: 1rem;
    }
  }
}
</style>
