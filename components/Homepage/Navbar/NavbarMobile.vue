<template>
  <div :class="{ active: isNavigationOpen }" class="navigation">
    <p v-scroll-to="'#section-home'" class="navigation__title">Tanawit</p>
    <label
      @click="setIsNavigationOpen(!isNavigationOpen)"
      class="navigation__button"
    >
      <span class="navigation__icon">&nbsp;</span>
    </label>
    <div class="navigation__background">&nbsp;</div>
    <nav class="navigation__nav">
      <div class="navigation__list">
        <div
          @click="setIsNavigationOpen(false)"
          v-scroll-to="'#section-aboutme'"
          class="navigation__link"
        >
          About me
        </div>
        <div
          @click="setIsNavigationOpen(false)"
          v-scroll-to="'#section-experience'"
          class="navigation__link"
        >
          Experience
        </div>
        <div
          @click="setIsNavigationOpen(false)"
          v-scroll-to="'#section-activity'"
          class="navigation__link"
        >
          Activies
        </div>
        <nuxt-link
          @click="setIsNavigationOpen(false)"
          to="nerd"
          class="navigation__link navigation__link"
        >
          Nerd Mode
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    isNavigationOpen() {
      return this.$store.state.homepage.isNavigationOpen
    }
  },
  methods: {
    setIsNavigationOpen(newIsNavigationOpen) {
      this.$store.commit('homepage/setIsNavigationOpen', newIsNavigationOpen)
    }
  }
}
</script>

<style scoped lang="scss">
.navigation {
  &__title {
    font-size: 0;
    color: $color-white;
    text-transform: uppercase;
    cursor: pointer;
    z-index: 105;
    transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);

    position: fixed;
    top: 4rem;
    left: 4rem;

    @include respond(tab-small) {
      top: 3rem;
      left: 3rem;
    }
  }

  &__button {
    background-color: $color-white;
    height: 7rem;
    width: 7rem;
    position: fixed;
    top: 4rem;
    right: 4rem;
    border-radius: 50%;
    z-index: 105;
    box-shadow: 0 1rem 2rem rgba($color-black, 0.1);
    text-align: center;
    cursor: pointer;

    transition: all 0.4s;

    @include respond(tab-small) {
      top: 3rem;
      right: 3rem;
    }
  }

  &__background {
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    background-image: radial-gradient($color-blue-dark-1, $color-white);
    z-index: 100;
    transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);

    position: fixed;
    top: 4.5rem;
    right: 4.5rem;

    @include respond(tab-small) {
      top: 3.5rem;
      right: 3.5rem;
    }
  }

  &__nav {
    height: 100vh;
    z-index: 101;
    opacity: 0;
    width: 0;
    transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);

    position: fixed;
    top: 0;
    left: 0;
  }

  &__list {
    list-style: none;
    text-align: center;
    width: 100%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__link {
    font-size: 3rem;
    font-weight: 300;
    padding: 1rem 2rem;
    margin-bottom: 1rem;
    color: $color-white;
    background-size: 220%;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    white-space: nowrap;
    transition: all 0.4s;
    cursor: pointer;
  }

  .active > &__title {
    font-size: 3.6rem;
  }

  .active > &__background {
    transform: scale(80);
  }

  .active > &__nav {
    opacity: 1;
    width: 100%;
  }

  &__icon {
    position: relative;
    margin-top: 3.5rem;

    &,
    &::before,
    &::after {
      width: 3rem;
      height: 2px;
      background-color: $color-grey-dark-3;
      display: inline-block;
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
    }

    &::before {
      top: -0.8rem;
    }

    &::after {
      top: 0.8rem;
    }
  }
}
</style>
