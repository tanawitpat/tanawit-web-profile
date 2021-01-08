<template>
  <div class="navigation">
    <div class="navigation__container">
      <div class="navigation__left">
        <nuxt-link to="/">
          Back to homepage
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.navigation {
  position: fixed;
  height: 6.5rem;
  width: 100%;
  background-color: $color-black;
  z-index: 100;

  &__container {
    max-width: 120rem;
    width: auto;
    height: 100%;
    margin: auto;
    padding: 0 3rem;
    display: flex;
    justify-content: space-between;
  }

  &__left {
    margin: auto 0;

    a {
      text-decoration: none;
      font-size: 2rem;
      font-weight: 700;
      color: $color-white;
      cursor: pointer;
    }
  }
}
</style>
