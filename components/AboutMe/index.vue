<template>
  <section id="section-aboutme" class="section-aboutme">
    <h1 class="heading-primary u-margin-bottom-medium section-aboutme__heading">
      About Me
    </h1>
    <div class="section-aboutme__content">
      <div class="section-aboutme__content__image">
        <AboutMeContentDefault />
      </div>
      <div class="section-aboutme__content__navigator">
        <AboutMeCard
          v-for="aboutme in aboutMeData"
          :key="aboutme.title"
          :title="aboutme.title"
          :content="aboutme.content"
        />
      </div>
    </div>
  </section>
</template>

<script>
import AboutMeCard from '@/components/AboutMe/AboutMeCard'
import AboutMeContentDefault from '@/components/AboutMe/AboutMeContentDefault'
import aboutMeData from '@/assets/data/aboutme.json'

export default {
  name: 'SectionAboutMe',
  components: {
    AboutMeCard,
    AboutMeContentDefault
  },
  data() {
    return {
      aboutMeData: aboutMeData.data
    }
  }
}
</script>

<style scoped lang="scss">
.section-aboutme {
  background-image: linear-gradient(
    to right bottom,
    rgba($color-grey-dark-1, 1),
    rgba($color-primary, 1)
  );
  background-position: right top;
  background-size: cover;
  padding: 10rem 10rem 25rem;
  color: $color-white;
  font-size: 1.8rem;

  @include respond(small) {
    font-size: 2rem;
    padding: 3rem;
  }

  &__heading {
    color: $color-white;
  }

  &__content {
    text-align: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    &__image {
      width: 100%;
    }
    &__navigator {
      > * {
        &:not(:last-child) {
          margin-bottom: 2rem;
        }
      }
    }
  }
}
</style>
