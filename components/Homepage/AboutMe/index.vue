<template>
  <section id="section-aboutme" class="section-aboutme">
    <h2 class="heading-primary u-margin-bottom-medium section-aboutme__heading">
      About Me
    </h2>
    <div class="section-aboutme__container">
      <div class="section-aboutme__card section-aboutme__card--right">
        <div class="section-aboutme__card__image" data-aos="fade-right">
          <div class="section-aboutme__card__image__developer">
            <div class="section-aboutme__card__image__developer__line-1">
              <img
                alt="JavaScript icon"
                src="images/skills/javascript.jpg"
                class="section-aboutme__card__image__developer--1"
              />
              <img
                alt="Python icon"
                src="images/skills/go.png"
                class="section-aboutme__card__image__developer--2"
              />
              <img
                alt="Go icon"
                src="images/skills/react.png"
                class="section-aboutme__card__image__developer--3"
              />
            </div>
            <div class="section-aboutme__card__image__developer__line-2">
              <img
                alt="React icon"
                src="images/skills/graphql.png"
                class="section-aboutme__card__image__developer--4"
              />
              <img
                alt="GraphQL icon"
                src="images/skills/kubernetes.png"
                class="section-aboutme__card__image__developer--5"
              />
            </div>
          </div>
        </div>
        <div class="section-aboutme__card__meaning" data-aos="fade-left">
          <AboutMeKeyword
            :link="{ label: 'Explore my technical skills', path: '/nerd' }"
            title="Software Developer"
            description="I am passionate about building software. Experienced in both frontend and backend development"
          />
        </div>
      </div>
      <div class="section-aboutme__card section-aboutme__card--left">
        <div class="section-aboutme__card__image" data-aos="fade-right">
          <div class="section-aboutme__card__image__location">
            <img
              src="images/aboutme/bangkok.png"
              alt="Thailand"
              class="section-aboutme__card__image__location--1"
            />
            <img
              src="images/aboutme/iconsiam.png"
              alt="Thailand"
              class="section-aboutme__card__image__location--2"
            />
          </div>
        </div>
        <div class="section-aboutme__card__meaning" data-aos="fade-left">
          <AboutMeKeyword
            title="Bangkok"
            description="The capital city of Thailand, my hometown, and the city where I have been living."
          />
        </div>
      </div>
      <div class="section-aboutme__card section-aboutme__card--right">
        <div class="section-aboutme__card__image" data-aos="fade-right">
          <div class=" section-aboutme__card__image__birth">
            <img
              src="images/aboutme/restaurant-city.png"
              alt="Restaurant City"
              class="section-aboutme__card__image__birth--1 zoom-image-on-hover"
            />
            <img
              src="images/aboutme/tanawit-child.png"
              alt="Tanawit's Photo"
              class="section-aboutme__card__image__birth--2 zoom-image-on-hover"
            />
          </div>
        </div>
        <div class="section-aboutme__card__meaning" data-aos="fade-left">
          <AboutMeKeyword
            title="1996"
            description="The year I was born. If you had played Restaurant City while you were in high school, we are friends!."
          />
        </div>
      </div>
      <div class="section-aboutme__card section-aboutme__card--left">
        <div class="section-aboutme__card__image" data-aos="fade-right">
          <div class="section-aboutme__card__image__education">
            <img
              src="images/aboutme/tanawit3.png"
              alt="Tanawit's Photo"
              class="section-aboutme__card__image__education--1 zoom-image-on-hover"
            />
            <img
              src="images/aboutme/tanawit1.png"
              alt="Tanawit's Photo"
              class="section-aboutme__card__image__education--2 zoom-image-on-hover"
            />
          </div>
        </div>
        <div class="section-aboutme__card__meaning" data-aos="fade-left">
          <AboutMeKeyword
            title="Statistics"
            description="I graduated from Chulalongkorn University with a Statistics major."
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

    &__image {
      position: relative;

      * {
        transition: opacity 0.3s;
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

        &__line-1 {
          justify-content: center;
          display: grid;
          grid-template-columns: repeat(3, 10rem);
          grid-gap: 2rem;
          margin-bottom: 2rem;

          @include respond(tab-large) {
            grid-template-columns: repeat(3, 7.5rem);
          }
        }

        &__line-2 {
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

      &__birth {
        margin: auto;
        width: 33rem;
        height: 100%;
        position: relative;

        @include respond(tab-large) {
          width: 25rem;
        }

        @include respond(tab-medium) {
          height: 18rem;
          width: 35rem;
        }

        @include respond(tab-small) {
          width: 30rem;
        }

        &--1 {
          position: absolute;
          width: 20rem;
          top: 7rem;
          left: 0rem;
          z-index: 1;

          @include respond(tab-large) {
            width: 15rem;
            top: 9rem;
          }

          @include respond(tab-medium) {
            width: 16rem;
            top: 0rem;
          }
        }

        &--2 {
          position: absolute;
          width: 20rem;
          top: 9rem;
          right: 0rem;

          @include respond(tab-large) {
            width: 15rem;
            top: 10rem;
          }

          @include respond(tab-medium) {
            width: 16rem;
            top: 1rem;
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
          top: 1rem;
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
          top: 3rem;
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
    }

    &__meaning {
      display: flex;
      align-items: center;
      height: 300px;

      @include respond(tab-medium) {
        height: auto;
      }
    }

    &--left {
      .section-aboutme__card__image {
        grid-column: 1 / 2;
        grid-row: 1 / -1;

        @include respond(tab-medium) {
          height: auto;
        }
      }

      .section-aboutme__card__meaning {
        padding: 1rem 0;
        grid-column: 2 / -1;
        grid-row: 1 / -1;

        @include respond(tab-medium) {
          height: auto;
        }
      }
    }

    &--right {
      .section-aboutme__card__image {
        grid-column: 2 / -1;
        grid-row: 1 / -1;

        @include respond(tab-medium) {
          height: auto;
        }
      }

      .section-aboutme__card__meaning {
        grid-column: 1 / 2;
        grid-row: 1 / -1;

        @include respond(tab-medium) {
          height: auto;
        }
      }
    }
  }
}
</style>
