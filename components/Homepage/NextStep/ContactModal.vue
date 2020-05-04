<template>
  <section @click.self="setIsContactModalOpen(false)" class="contact-modal">
    <div class="contact-modal__container">
      <h3>Tanawit Pattanaveerangkoon (Oui)</h3>
      <div class="contact-modal__contact">
        <div class="contact-modal__contact--email">
          <div class="contact-modal__icon">
            <img src="images/icon/gmail.svg" />
          </div>
          <p>tanawit.pat@gmail.com</p>
        </div>
        <div class="contact-modal__contact--linkedin">
          <div class="contact-modal__icon">
            <a
              href="https://www.linkedin.com/in/tanawitp/"
              aria-label="Linkedin"
            >
              <img src="images/logo/linkedin.jpg" />
            </a>
          </div>
          <a href="https://www.linkedin.com/in/tanawitp/" aria-label="Linkedin">
            <p>linkedin.com/in/tanawitp</p>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    setIsContactModalOpen(newIsContactModalOpen) {
      this.$store.commit(
        'homepage/setIsContactModalOpen',
        newIsContactModalOpen
      )
    }
  }
}
</script>

<style scoped lang="scss">
.contact-modal {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba($color-white, 0.8);
  z-index: 10;
  animation-name: moveInBottom;
  animation-duration: 0.3s;
  animation-timing-function: ease-out;

  display: flex;
  justify-content: center;
  align-items: center;

  &__container {
    width: 100%;
    max-width: 60rem;
    padding: 6rem 4rem;
    box-shadow: 0 1rem 2rem rgba($color-black, 0.1);
    background-color: $color-white;

    @include respond(tab-small) {
      margin: 0 1.5rem;
    }

    h3 {
      font-size: 2.4rem;
      color: $color-primary;
      text-transform: uppercase;
      margin-bottom: 3rem;
      text-align: center;
    }
  }

  &__icon {
    height: 12rem;
  }

  &__contact {
    padding: 0 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem;

    @include respond(tab-small) {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 4rem;
    }

    a {
      text-decoration: none;
    }

    p {
      color: $color-black;
      font-size: 1.8rem;
    }

    &--email {
      text-align: center;

      img {
        height: 10rem;
      }
    }

    &--linkedin {
      text-align: center;

      img {
        margin-top: 0.5rem;
        height: 9rem;
      }
    }
  }
}
</style>
