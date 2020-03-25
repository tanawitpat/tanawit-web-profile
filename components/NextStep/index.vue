<template>
  <section id="section-nextstep" class="section-contact">
    <h1 class="heading-primary section-contact__heading">
      Next steps
    </h1>
    <div class="section-contact__content" data-aos="fade-up">
      <div>
        <h2>
          Want to explore my
          <span>software development</span> skills?
        </h2>
        <button @click="$router.push('/nerd')">Visit my nerd site</button>
      </div>
      <div>
        <h2>Looking for my <span>formal</span> profile?</h2>
        <button>Checkout my resume</button>
      </div>
      <div>
        <h2>Let's <span>keep in touch</span></h2>
        <button @click="setIsContactModalOpen(true)">View my contact</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    setIsContactModalOpen(newIsContactModalOpen) {
      this.$store.commit('contact/setIsContactModalOpen', newIsContactModalOpen)
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
    grid-gap: 8rem;

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
        margin-bottom: 2rem;
        text-transform: uppercase;
        text-align: center;
      }
    }
  }
}
</style>
