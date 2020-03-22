<template>
  <div class="navbar">
    <div class="navbar__container">
      <div class="navbar__left">
        <p>TANAWIT</p>
      </div>
      <div class="navbar__right">
        <div v-scroll-to="'#section-home'">Home</div>
        <div v-scroll-to="'#section-aboutme'">About me</div>
        <div v-scroll-to="'#section-experience'">Experience</div>
        <div v-scroll-to="'#section-activity'">Activities</div>
        <nuxt-link to="nerd" class="navbar__right__nerd-button">
          <button>
            Nerd Mode
          </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.navbar {
  position: fixed;
  height: 6.5rem;
  width: 100%;
  background-color: rgba($color-white, 0.95);
  z-index: 10;
  box-shadow: 0 1px 4px $color-grey-light-1;

  &__container {
    max-width: 120rem;
    margin: auto;
    width: auto;
    height: 100%;

    display: flex;
    justify-content: space-between;
  }

  &__left {
    margin: auto 0;

    p {
      font-size: 2.4rem;
      font-weight: 700;
      color: $color-grey-dark-1;
    }
  }

  &__right {
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    color: $color-grey-dark-1;
    font-weight: 700;
    margin: auto 0;

    > * {
      cursor: pointer;

      &:hover {
        color: $color-primary;
      }

      &:not(:last-child) {
        margin-right: 40px;
      }

      &:last-child {
        margin-right: 30px;
      }
    }

    &__nerd-button {
      padding: 2rem 0;
      height: 100%;
      padding: 0;

      button {
        font-size: 1.8rem;
        font-weight: 700;
        color: $color-white;
        background-color: $color-primary;
        height: 4.5rem;
        border: none;
        border-radius: 2rem;
        padding: 0 2rem;
        cursor: pointer;
      }
    }
  }
}
</style>
