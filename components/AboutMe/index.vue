<template>
  <section id="section-aboutme" class="section-aboutme">
    <h1 class="heading-primary u-margin-bottom-big section-aboutme__heading">
      Words describe me
    </h1>
    <div class="section-aboutme__body">
      <div
        class="section-aboutme__body__card section-aboutme__body__card--right"
      >
        <div class="section-aboutme__body__card__image" data-aos="fade-right">
          <div class="section-aboutme__body__card__image__developer">
            <div class="section-aboutme__body__card__image__developer__line-1">
              <img
                alt="JavaScript icon"
                src="images/skills/javascript.jpg"
                class="section-aboutme__body__card__image__developer--1"
              />
              <img
                alt="Python icon"
                src="images/skills/go.png"
                class="section-aboutme__body__card__image__developer--2"
              />
              <img
                alt="Go icon"
                src="images/skills/react.png"
                class="section-aboutme__body__card__image__developer--3"
              />
            </div>
            <div class="section-aboutme__body__card__image__developer__line-2">
              <img
                alt="React icon"
                src="images/skills/graphql.png"
                class="section-aboutme__body__card__image__developer--4"
              />
              <img
                alt="GraphQL icon"
                src="images/skills/kubernetes.png"
                class="section-aboutme__body__card__image__developer--5"
              />
            </div>
          </div>
        </div>
        <div class="section-aboutme__body__card__meaning" data-aos="fade-left">
          <AboutMeLayoutMeaning
            :link="{ label: 'Explore my technical skills', path: '/nerd' }"
            title="Software Developer"
            description="I am passionate about building a software used by tons of users. Experienced in JavaScript, Go, React, GraphQL, and Kubernetes"
          />
        </div>
      </div>
      <div
        class="section-aboutme__body__card section-aboutme__body__card--left"
      >
        <div class="section-aboutme__body__card__image" data-aos="fade-right">
          <img
            src="images/aboutme/bangkok.png"
            alt="Thailand"
            class="section-aboutme__body__card__image__location--1"
          />
          <img
            src="images/aboutme/iconsiam.png"
            alt="Thailand"
            class="section-aboutme__body__card__image__location--2"
          />
        </div>
        <div class="section-aboutme__body__card__meaning" data-aos="fade-left">
          <AboutMeLayoutMeaning
            title="Bangkok"
            description="A capital city of Thailand and the city where I grew up and has been
      living."
          />
        </div>
      </div>
      <div
        class="section-aboutme__body__card section-aboutme__body__card--right"
      >
        <div class="section-aboutme__body__card__image" data-aos="fade-right">
          <img
            src="images/aboutme/restaurant-city.png"
            alt="Restaurant City"
            class="section-aboutme__body__card__image__birth--1 zoom-image-on-hover"
          />
          <img
            src="images/aboutme/tanawit-child.png"
            alt="Tanawit's Photo"
            class="section-aboutme__body__card__image__birth--2 zoom-image-on-hover"
          />
        </div>
        <div class="section-aboutme__body__card__meaning" data-aos="fade-left">
          <AboutMeLayoutMeaning
            title="1996"
            description="A year which I was born. If you had played Restaurant City while you were in a high school, we are friends!."
          />
        </div>
      </div>
      <div
        class="section-aboutme__body__card section-aboutme__body__card--left"
      >
        <div class="section-aboutme__body__card__image" data-aos="fade-right">
          <img
            src="images/aboutme/tanawit3.png"
            alt="Tanawit's Photo"
            class="section-aboutme__body__card__image__education--1 zoom-image-on-hover"
          />
          <img
            src="images/aboutme/tanawit1.png"
            alt="Tanawit's Photo"
            class="section-aboutme__body__card__image__education--2 zoom-image-on-hover"
          />
        </div>
        <div class="section-aboutme__body__card__meaning" data-aos="fade-left">
          <AboutMeLayoutMeaning
            title="Statistics"
            description="I graduated from Chulalongkorn University with Statistics major."
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AboutMeLayoutMeaning from '@/components/AboutMe/AboutMeLayoutMeaning'

export default {
  name: 'SectionAboutMe',
  components: {
    AboutMeLayoutMeaning
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
  padding: 7.5rem 10rem 20rem;
  background-color: $color-grey-light-3;

  &__heading {
    color: $color-primary;
  }

  &__body {
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

    &__card {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 5rem;

      &:not(:last-child) {
        margin-bottom: 1rem;
      }

      &__image {
        position: relative;

        * {
          transition: opacity 0.3s;
        }

        &__developer {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

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
          }

          &__line-2 {
            justify-content: center;
            display: grid;
            grid-template-columns: repeat(2, 10rem);
            grid-gap: 2rem;
          }
        }

        &__location {
          &--1 {
            position: absolute;
            height: 25rem;
            top: 1rem;
            left: 1rem;
          }

          &--2 {
            position: absolute;
            height: 25rem;
            top: 3rem;
            right: 1rem;
          }
        }

        &__birth {
          &--1 {
            position: absolute;
            height: 18rem;
            top: 5rem;
            left: 0rem;
            z-index: 1;
          }

          &--2 {
            position: absolute;
            height: 18rem;
            top: 7rem;
            right: 0rem;
          }
        }

        &__education {
          &--1 {
            position: absolute;
            height: 25rem;
            top: 1rem;
            left: 3rem;
          }

          &--2 {
            position: absolute;
            height: 25rem;
            top: 3rem;
            right: 3rem;
          }
        }
      }

      &__meaning {
        display: flex;
        align-items: center;
        height: 300px;
      }

      &--left {
        .section-aboutme__body__card__image {
          grid-column: 1 / 2;
          grid-row: 1 / -1;
        }
        .section-aboutme__body__card__meaning {
          padding-left: 1rem;
          grid-column: 2 / -1;
          grid-row: 1 / -1;
        }
      }

      &--right {
        .section-aboutme__body__card__image {
          grid-column: 2 / -1;
          grid-row: 1 / -1;
        }
        .section-aboutme__body__card__meaning {
          grid-column: 1 / 2;
          grid-row: 1 / -1;
        }
      }
    }
  }
}
</style>
