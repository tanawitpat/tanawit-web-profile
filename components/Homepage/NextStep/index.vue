<template>
  <section id="section-nextstep" class="section-contact">
    <h2 class="heading-primary section-contact__heading">
      Next steps
    </h2>
    <div class="section-contact__content" data-aos="fade-up">
      <div>
        <h3>
          Explore my
          <span>software development</span> skills
        </h3>
        <button @click="$router.push('/nerd')">Visit my nerd site</button>
      </div>
      <div>
        <h3>Looking for my <span>formal</span> profile?</h3>
        <a
          aria-label="Tanawit's Resume"
          href="http://static.tanawitp.me.s3.amazonaws.com/Tanawit-Pattanaveerangkoon_Resume.pdf"
        >
          <button>Checkout my resume</button>
        </a>
      </div>
      <div>
        <h3>Let's <span>keep in touch</span></h3>
        <button @click="setIsContactModalOpen(true)">View my contact</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.preloadContactImages()
  },
  methods: {
    setIsContactModalOpen(newIsContactModalOpen) {
      this.$store.commit(
        'homepage/setIsContactModalOpen',
        newIsContactModalOpen
      )
    },
    preloadContactImages() {
      const preloadImages = [
        'images/icon/gmail.svg',
        'images/logo/linkedin.jpg'
      ]
      preloadImages.forEach((imagePath) => {
        const img = new Image()
        img.src = imagePath
      })
    }
  }
}
</script>

<style scoped lang="scss">
.section-contact {
  color: $color-black;
  background-color: $color-grey-light-2;
  padding: 10rem 5rem;
  font-size: 1.6rem;

  @include respond(tab-small) {
    padding: 5rem 5rem;
  }

  button {
    font-size: 1.8rem;
    font-weight: 700;
    color: $color-white;
    background-color: $color-primary;
    height: 4.5rem;
    border: none;
    border-radius: 2rem;
    padding: 0 2rem;
    margin: auto;
    cursor: pointer;
    display: flex;
    justify-content: center;

    &:hover {
      background-color: $color-blue-dark-2;
    }
  }

  a {
    text-decoration: none;
  }

  > * {
    max-width: $max-width;
    margin: 0 auto;
  }

  &__heading {
    color: $color-primary;
    margin-bottom: 4rem;
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8rem;

    @include respond(tab-large) {
      grid-template-columns: 1fr;
      grid-gap: 5rem;

      * {
        text-align: center;
      }
    }

    > div {
      h3 {
        span {
          color: $color-primary;
        }
        font-size: 2rem;
        margin-bottom: 2rem;
        text-transform: uppercase;
        text-align: center;
      }
    }
  }
}
</style>
