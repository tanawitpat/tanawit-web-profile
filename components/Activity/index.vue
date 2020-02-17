<template>
  <section class="section-activity">
    <div class="section-activity__container">
      <h1 class="heading-primary u-margin-bottom-big section-activity__heading">
        Activities
      </h1>
      <div class="section-activity__card">
        <ActivityCard
          v-for="activity in activityData"
          :key="activity.name"
          :title="activity.name"
          :issuer="activity.issuer"
          :previewImagePath="activity.previewImagePath"
          :description="activity.description"
          :actions="activity.actions"
        />
      </div>
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
  padding: 10rem 0 7.5rem;
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

  &__container {
    max-width: 120rem;
    margin: auto;
  }

  &__heading {
    color: $color-white;
  }

  &__card {
    margin-bottom: 6rem;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    grid-gap: 5rem;
  }
}
</style>
