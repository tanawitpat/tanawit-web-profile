<template>
  <section id="section-contact" class="section-contact">
    <h1 class="heading-primary section-contact__heading">
      Keep in touch
    </h1>
    <div class="section-contact__content">
      <div class="section-contact__content--github">
        <!-- <img
          alt="Github UI"
          src="images/keep-in-touch/github-screenshot.png"
          class="section-contact__github--image"
        /> -->
        <div class="section-contact__content--github">
          <h2>Are you a <span>software developer</span>?</h2>
          <p>
            Visit my <a href="https://github.com/tanawitpat">GitHub</a> to
            explore my projects.
          </p>
        </div>
      </div>
      <div class="section-contact__content--github">
        <!-- <img
          alt="Github UI"
          src="images/keep-in-touch/linkedin-screenshot.png"
          class="section-contact__github--image"
        /> -->
        <div class="section-contact__content--github">
          <h2>Looking for my formal <span>profile</span>?</h2>
          <p>
            Here is my
            <a href="https://github.com/tanawitpat">resume</a> you may be
            looking for.
          </p>
        </div>
      </div>
      <div class="section-contact__content--github">
        <!-- <img
          alt="Github UI"
          src="images/keep-in-touch/github-screenshot.png"
          class="section-contact__github--image"
        /> -->
        <div class="section-contact__content--github">
          <h2>Want to send me a <span>message</span>?</h2>
          <p>
            I prefer
            <a href="https://github.com/tanawitpat">Linkedin</a> messages and
            email (tanawit.pat@gmail.com).
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-contact {
  background-image: linear-gradient(
      to right bottom,
      rgba($color-grey-light-1, 0.9),
      rgba($color-white, 0.9)
    ),
    url('/images/contact-bg.jpg');
  background-position: center top;
  background-size: cover;

  color: $color-black;
  padding: 10rem 5rem;
  font-size: 1.6rem;

  > * {
    max-width: $max-width;
    margin: 0 auto;
  }

  &__heading {
    color: $color-primary;
    margin-bottom: 8rem;
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10rem;

    h2 {
      span {
        color: $color-secondary;
      }
    }

    a {
      font-weight: bold;
      text-decoration: none;
      color: $color-black;
    }

    &--github {
      img {
        width: 100%;
        margin-bottom: 3rem;
      }
    }
  }
}
</style>
