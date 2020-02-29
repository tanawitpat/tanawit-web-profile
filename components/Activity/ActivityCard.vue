<template>
  <div class="activity-card">
    <img :src="previewImagePath" :alt="title" class="activity-card__img" />
    <p class="activity-card__description">
      {{ description }}
    </p>
    <div class="activity-card__footer">
      <div class="activity-card__time">{{ year }}</div>
      <h3>{{ title }}</h3>
      <p>{{ issuer }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActivityCard',
  props: {
    title: {
      type: String,
      required: true
    },
    issuer: {
      type: String,
      required: true
    },
    previewImagePath: {
      type: String,
      required: false,
      default: 'images/activities/default-activity-image.png'
    },
    description: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.activity-card {
  color: $color-white;
  background-color: $color-white;
  border-radius: 20px;
  position: relative;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow: hidden;

  &:hover,
  &:active {
    background-color: rgba($color-white, 0.05);
    color: $color-white;
    transform: scale(1.05);
  }
  transition: transform 0.2s;

  &__time {
    color: $color-white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 2rem;
    background-color: rgba($color-primary, 0.95);
    z-index: 4;
    font-size: 1.6rem;
    font-weight: bold;
    height: 50px;

    position: absolute;
    top: -25px;
    left: 0;

    @include respond(mobile) {
      bottom: 210px;
    }
  }

  &__footer {
    grid-row: 2 / 3;
    grid-column: 1 / 3;
    z-index: 3;
    padding: 0 1.5rem;
    background-color: $color-white;
    color: $color-blue-dark;
    font-weight: bold;
    height: 110px;
    text-align: right;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;

    h3 {
      font-size: 2rem;
      text-transform: uppercase;
      color: $color-primary;
    }
    p {
      font-size: 1.6rem;
    }

    @include respond(mobile) {
      grid-row: 3 / 4;
      height: auto;
      padding-top: 10px;
    }
  }

  &__img {
    width: 100%;
    grid-row: 1 / 2;
    grid-column: 1 / 3;
    z-index: 1;

    &:hover ~ p {
      color: $color-black;
      background-color: rgba($color-white, 0.8);

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__description {
    grid-row: 1 / 2;
    grid-column: 1 / 3;
    z-index: 2;
    padding: 3rem;
    display: none;
    font-size: 1.6rem;

    &:hover {
      color: $color-black;
      background-color: rgba($color-white, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @include respond(mobile) {
      display: block;
      color: $color-blue-dark;
      background-color: $color-white;
      grid-row: 4 / 5;
      padding: 2rem;
      padding-top: 1rem;
    }
  }
}
</style>
