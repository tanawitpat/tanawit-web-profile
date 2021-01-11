<template>
  <section id="section-nextstep" class="section-nextstep">
    <h2 class="heading-primary section-nextstep__heading">
      Next steps
    </h2>
    <div
      class="section-nextstep__content"
      data-aos="fade-up"
      data-aos-offset="50"
    >
      <div>
        <h3>
          Explore my
          <span>software development</span> skills
        </h3>
        <Button
          path="/nerd"
          label="Visit my nerd site"
          type="link"
          data-id="next-step-visit-nerd-site"
        />
      </div>
      <div>
        <h3>Looking for my <span>formal</span> profile?</h3>
        <Button
          :is-internal-path="false"
          :disabled="true"
          path="http://static.tanawitp.me.s3.amazonaws.com/Tanawit-Pattanaveerangkoon_Resume.pdf"
          label="Checkout my resume"
          type="link"
        />
      </div>
      <div>
        <h3>Let's <span>get in touch</span></h3>
        <Button
          label="View my contact"
          @click.native="setIsContactModalOpen(true)"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Button from '@/components/Homepage/Button'

export default {
  components: {
    Button
  },
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
        '/images/icon/gmail.svg',
        '/images/logo/linkedin.jpg'
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
.section-nextstep {
  color: $color-black;
  background-color: $color-grey-light-2;
  padding: 10rem 5rem;
  font-size: 1.6rem;

  @include respond(tab-small) {
    padding: 5rem 5rem;
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
        font-size: 2rem;
        margin-bottom: 2rem;
        text-transform: uppercase;
        text-align: center;

        span {
          color: $color-primary;
        }
      }
    }
  }
}
</style>
