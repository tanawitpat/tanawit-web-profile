<template>
  <section id="section-aboutme" class="section-aboutme">
    <h2 class="heading-primary u-margin-bottom-medium section-aboutme__heading">
      About Me
    </h2>
    <div class="section-aboutme__container">
      <div class="section-aboutme__card section-aboutme__card--right">
        <div class="section-aboutme__image" data-aos="fade-right">
          <div class="section-aboutme__developer">
            <div class="section-aboutme__developer--line-1">
              <img
                alt="JavaScript icon"
                src="/images/skills/javascript.jpg"
                class="section-aboutme__developer--1"
              >
              <img
                alt="Python icon"
                src="/images/skills/go.png"
                class="section-aboutme__developer--2"
              >
              <img
                alt="Go icon"
                src="/images/skills/react.png"
                class="section-aboutme__developer--3"
              >
            </div>
            <div class="section-aboutme__developer--line-2">
              <img
                alt="React icon"
                src="/images/skills/graphql.png"
                class="section-aboutme__developer--4"
              >
              <img
                alt="GraphQL icon"
                src="/images/skills/kubernetes.png"
                class="section-aboutme__developer--5"
              >
            </div>
          </div>
        </div>
        <div class="section-aboutme__meaning" data-aos="fade-left">
          <AboutMeKeyword
            :link="{
              label: 'Explore my technical skills',
              path: '/nerd',
              isInternalPath: true
            }"
            title="Software Developer"
            description="I am passionate about coding. Experienced in both front-end and back-end development."
          />
        </div>
      </div>
      <div class="section-aboutme__card section-aboutme__card--left">
        <div class="section-aboutme__image" data-aos="fade-right">
          <div class="section-aboutme__education">
            <img
              src="/images/aboutme/tanawit3.png"
              alt="Tanawit's Photo"
              class="section-aboutme__education--1 zoom-image-on-hover"
            >
            <img
              src="/images/aboutme/tanawit1.png"
              alt="Tanawit's Photo"
              class="section-aboutme__education--2 zoom-image-on-hover"
            >
          </div>
        </div>
        <div class="section-aboutme__meaning" data-aos="fade-left">
          <AboutMeKeyword
            :link="{
              label: 'Visit the school website',
              path: 'https://www.chula.ac.th/en',
              isInternalPath: false
            }"
            title="Statistics"
            description="I graduated from Chulalongkorn University with a statistics major."
          />
        </div>
      </div>
      <div class="section-aboutme__card section-aboutme__card--right">
        <div class="section-aboutme__image" data-aos="fade-right">
          <div class="section-aboutme__location">
            <img
              src="/images/aboutme/bangkok.png"
              alt="Thailand"
              class="section-aboutme__location--1"
            >
            <img
              src="/images/aboutme/iconsiam.png"
              alt="Thailand"
              class="section-aboutme__location--2"
            >
          </div>
        </div>
        <div class="section-aboutme__meaning" data-aos="fade-left">
          <AboutMeKeyword
            :link="{
              label: 'View on Google Maps',
              path: 'http://maps.google.com/?q=Bangkok',
              isInternalPath: false
            }"
            title="Bangkok"
            description="The capital city of Thailand, my hometown, and the city where I live."
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AboutMeKeyword from '@/components/Homepage/AboutMe/AboutMeKeyword'

export default {
  name: 'SectionAboutMe',
  components: {
    AboutMeKeyword
  },
  data() {
    return {
      isBangkokImageOnHover: false
    }
  },
  methods: {
    setIsBangkokImageOnHover(newIsBangkokImageOnHover) {
      this.isBangkokImageOnHover = newIsBangkokImageOnHover
    }
  }
}
</script>

<style scoped lang="scss">
.section-aboutme {
  font-size: 1.8rem;
  padding: 7.5rem 10rem 5rem;
  background-color: $color-grey-light-3;

  @include respond(tab-large) {
    padding: 7.5rem 7.5rem;
  }

  @include respond(tab-medium) {
    padding: 7.5rem 5rem;
  }

  &__heading {
    color: $color-primary;
    margin: auto;
  }

  &__container {
    color: $color-black;
    max-width: 90rem;
    margin: auto;

    img {
      &:hover {
        transform: scale(1.05);
        transition: transform 0.2s;
        z-index: 5;
        box-shadow: 0 1rem 2rem rgba($color-black, 0.4);
      }
    }
  }

  &__card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5rem;

    @include respond(tab-medium) {
      display: block;
    }

    &:not(:last-child) {
      margin-bottom: 1rem;

      @include respond(tab-medium) {
        margin-bottom: 8rem;
      }
    }

    &--left {
      .section-aboutme__image {
        grid-column: 1 / 2;
        grid-row: 1 / -1;

        @include respond(tab-medium) {
          height: auto;
        }
      }

      .section-aboutme__meaning {
        padding: 1rem 0;
        grid-column: 2 / -1;
        grid-row: 1 / -1;

        @include respond(tab-medium) {
          height: auto;
        }
      }
    }

    &--right {
      .section-aboutme__image {
        grid-column: 2 / -1;
        grid-row: 1 / -1;

        @include respond(tab-medium) {
          height: auto;
        }
      }

      .section-aboutme__meaning {
        grid-column: 1 / 2;
        grid-row: 1 / -1;

        @include respond(tab-medium) {
          height: auto;
        }
      }
    }
  }

  &__developer {
    height: 22.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @include respond(tab-medium) {
      position: static;
      top: 0;
      left: 0;
      transform: none;
      height: auto;
      margin-bottom: 4rem;
    }

    img {
      background-color: $color-white;
      border-radius: 10%;
      width: 100%;

      &:hover {
        transform: scale(1.1);
        box-shadow: 0 0.5rem 1rem rgba($color-black, 0.1);
      }
    }

    &--line-1 {
      justify-content: center;
      display: grid;
      grid-template-columns: repeat(3, 10rem);
      grid-gap: 2rem;
      margin-bottom: 2rem;

      @include respond(tab-large) {
        grid-template-columns: repeat(3, 7.5rem);
      }
    }

    &--line-2 {
      justify-content: center;
      display: grid;
      grid-template-columns: repeat(2, 10rem);
      grid-gap: 2rem;

      @include respond(tab-large) {
        grid-template-columns: repeat(2, 7.5rem);
      }
    }
  }

  &__location {
    margin: auto;
    width: 33rem;
    height: 100%;
    position: relative;

    @include respond(tab-large) {
      width: 25rem;
    }

    @include respond(tab-medium) {
      height: 23rem;
      width: 35rem;
    }

    @include respond(tab-small) {
      width: 30rem;
    }

    &--1 {
      position: absolute;
      width: 16.5rem;
      top: 3rem;
      left: 1rem;

      @include respond(tab-large) {
        width: 13.5rem;
        top: 6rem;
        left: 0rem;
      }

      @include respond(tab-medium) {
        width: 15rem;
        top: 0rem;
        left: 1rem;
      }

      @include respond(tab-small) {
        width: 13.5rem;
      }
    }

    &--2 {
      position: absolute;
      width: 16.5rem;
      top: 5rem;
      right: 1rem;

      @include respond(tab-large) {
        width: 13.5rem;
        top: 7rem;
        right: 0rem;
      }

      @include respond(tab-medium) {
        width: 15rem;
        top: 1rem;
        right: 1rem;
      }

      @include respond(tab-small) {
        width: 13.5rem;
      }
    }
  }

  &__education {
    margin: auto;
    width: 33rem;
    height: 100%;
    position: relative;

    @include respond(tab-large) {
      width: 25rem;
    }

    @include respond(tab-medium) {
      height: 23rem;
      width: 35rem;
    }

    @include respond(tab-small) {
      width: 30rem;
    }

    &--1 {
      position: absolute;
      width: 16.5rem;
      top: 2rem;
      left: 1rem;

      @include respond(tab-large) {
        width: 13.5rem;
        top: 6rem;
        left: 0rem;
      }

      @include respond(tab-medium) {
        width: 15rem;
        top: 0rem;
        left: 1rem;
      }

      @include respond(tab-small) {
        width: 13.5rem;
      }
    }

    &--2 {
      position: absolute;
      width: 16.5rem;
      top: 4rem;
      right: 1rem;

      @include respond(tab-large) {
        width: 13.5rem;
        top: 7rem;
        right: 0rem;
      }

      @include respond(tab-medium) {
        width: 15rem;
        top: 1rem;
        right: 1rem;
      }

      @include respond(tab-small) {
        width: 13.5rem;
      }
    }
  }

  &__image {
    position: relative;
  }

  &__meaning {
    display: flex;
    align-items: center;
    height: 300px;

    @include respond(tab-medium) {
      height: auto;
    }
  }
}
</style>
