<template>
  <div class="activity-card">
    <h3 class="activity-card__name u-center-text">{{ title }}</h3>
    <img
      :src="require(`~/assets/${previewImagePath}`)"
      :alt="title"
      class="activity-card__img"
    />
    <p class="activity-card__description">{{ description }}</p>
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
    previewImagePath: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.activity-card {
  color: #fff;
  border-radius: 20px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow: hidden;

  &__name {
    grid-row: 1 / 2;
    grid-column: 1 / 3;
    z-index: 3;
    padding: 1rem 0;
    background-color: rgba(#fff, 0.8);
    color: $color-blue-dark;
    font-weight: bold;
  }

  &__img {
    width: 100%;
    grid-row: 2 / 4;
    grid-column: 1 / 3;
    z-index: 1;

    &:hover ~ p {
      color: black;
      background-color: rgba(#fff, 0.8);

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__description {
    grid-row: 2 / 4;
    grid-column: 1 / 3;
    z-index: 2;
    padding: 3rem;
    display: none;

    &:hover {
      color: black;
      background-color: rgba(#fff, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @include respond(mobile) {
      display: block;
      color: $color-blue-dark;
      background-color: rgba(#fff, 0.7);
      grid-row: 4 / 5;
      padding: 2rem;
    }
  }
}
</style>
