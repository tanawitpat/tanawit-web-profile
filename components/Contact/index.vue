<template>
  <section id="section-contact" class="section-contact">
    <h1 class="heading-primary section-contact__heading">
      Next steps...
    </h1>
    <div class="section-contact__content">
      <div>
        <h2>Are you a <span>software developer</span>?</h2>
        <p>
          Visit my <a href="https://github.com/tanawitpat">GitHub</a> to explore
          my projects.
        </p>
      </div>
      <div>
        <h2>Looking for my formal <span>profile</span>?</h2>
        <p>
          Here is my
          <a href="https://github.com/tanawitpat">resume</a> you may be looking
          for.
        </p>
      </div>
      <div>
        <h2>Want to send me a <span>message</span>?</h2>
        <p>
          I prefer
          <a href="https://github.com/tanawitpat">Linkedin</a> messages and
          email &lt;tanawit.pat@gmail.com&gt;.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-contact {
  color: $color-black;
  background-color: $color-grey-light-2;
  padding: 10rem 5rem;
  font-size: 1.6rem;

  > * {
    max-width: $max-width;
    margin: 0 auto;
  }

  &__heading {
    color: $color-primary;
    margin-bottom: 6rem;
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10rem;

    @include respond(tab-large) {
      grid-template-columns: 1fr;
      grid-gap: 5rem;

      * {
        text-align: center;
      }
    }

    > div {
      h2 {
        span {
          color: $color-primary;
        }
        font-size: 2rem;
        margin-bottom: 0.5rem;
      }

      p {
        a,
        span {
          font-weight: bold;
          text-decoration: none;
          color: $color-black;
        }
      }
    }
  }
}
</style>
