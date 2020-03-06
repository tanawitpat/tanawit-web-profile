<template>
  <div class="aboutme-content-location center-vertical">
    <div
      @mouseover="setIsBangkokImageOnHover(true)"
      @mouseleave="setIsBangkokImageOnHover(false)"
      class="aboutme-content-location__image aboutme-image-layout"
    >
      <img
        :class="{ active: isBangkokImageOnHover }"
        src="images/aboutme/thailand.png"
        alt="Thailand"
        class="aboutme-content-location__image--thailand "
      />
      <img
        :class="{ active: isBangkokImageOnHover }"
        src="images/aboutme/bangkok.png"
        alt="Thailand"
        class="aboutme-content-location__image--bangkok"
      />
      <img
        :class="{ active: isBangkokImageOnHover }"
        src="images/aboutme/iconsiam.png"
        alt="Thailand"
        class="aboutme-content-location__image--iconsiam"
      />
    </div>
    <AboutMeLayoutMeaning
      class="aboutme-content-location__meaning"
      word="Bangkok"
      meaning="A capital city of Thailand and the city where Tanawit grew up and has been
      living."
    />
  </div>
</template>

<script>
import AboutMeLayoutMeaning from '@/components/AboutMe/AboutMeLayoutMeaning'

export default {
  name: 'AboutMeContentLocation',
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
.aboutme-content-location {
  padding-left: 8rem;
  height: 100%;
  text-align: left;
  position: relative;

  h1 {
    font-size: 3.2rem;
    text-transform: uppercase;
  }

  &__image {
    > * {
      transition: opacity 0.3s;
    }

    &--thailand {
      grid-column: 8 / 14;
      grid-row: 2 / -1;

      &.active {
        opacity: 0;
      }
    }

    &--bangkok {
      opacity: 0;
      grid-column: 3 / 10;
      grid-row: 2 / -1;
      z-index: 1;

      &.active {
        opacity: 1;
      }
    }

    &--iconsiam {
      opacity: 0;
      grid-column: 11 / 18;
      grid-row: 3 / -1;
      z-index: 1;

      &.active {
        opacity: 1;
      }
    }
  }

  &__meaning {
    position: absolute;
    bottom: 0;
  }
}
</style>
