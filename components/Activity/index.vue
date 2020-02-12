<template>
  <section class="section-activity">
    <h1 class="heading-primary u-margin-bottom-big section-activity__heading">
      Activities
    </h1>
    <div class="section-activity__card">
      <ActivityCard
        v-for="activity in activityData"
        :key="activity.name"
        :title="activity.name"
        :previewImagePath="activity.previewImagePath"
        :description="activity.description"
        :actions="activity.actions"
      />
    </div>
    <div class="section-activity__footer">
      <button
        onclick="window.location='https://github.com/tanawitpat'"
        type="button"
        class="btn"
      >
        Explore more
      </button>
    </div>
  </section>
</template>

<script>
import ActivityCard from '@/components/Activity/ActivityCard'
import activityData from '@/assets/data/activity.json'

export default {
  name: 'SectionActivity',
  components: {
    ActivityCard
  },
  data() {
    return {
      activityData: activityData.data
    }
  }
}
</script>

<style scoped lang="scss">
.section-activity {
  padding: 10rem 15rem;
  background-image: linear-gradient(
      to right bottom,
      rgba($color-blue-dark, 0.9),
      rgba($color-blue-dark, 0.9)
    ),
    url(~assets/images/activity-bg.jpg);

  @include respond(medium) {
    padding: 10rem 5rem;
  }

  @include respond(small) {
    padding: 10rem 3rem;
  }

  &__heading {
    color: #fff;
  }

  &__card {
    margin-bottom: 6rem;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    grid-gap: 5rem;
  }

  &__footer {
    text-align: center;

    button.btn {
      border: none;
      color: $color-blue-dark;
      background-color: rgba(#fff, 0.8);
      font-size: 1.6rem;
      font-weight: 600;
      padding: 1.5rem 2.5rem;
      text-transform: uppercase;
      transition: transform 0.2s, background-color 0.2s, color 0.2s;
      cursor: pointer;

      &:hover,
      &:active {
        background-color: rgba(#fff, 0.05);
        color: #fff;
        transform: scale(1.1);
      }
    }
  }
}
</style>
