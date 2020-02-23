<template>
  <section id="section-aboutme" class="section-aboutme">
    <h1 class="heading-primary u-margin-bottom-medium section-aboutme__heading">
      About Me
    </h1>
    <div class="section-aboutme__content">
      <div class="section-aboutme__content__image">
        <AboutMeContentName v-if="selectedAboutMeContent === 'name'" />
        <AboutMeContentLocation
          v-else-if="selectedAboutMeContent === 'location'"
        />
        <AboutMeContentHobby v-else-if="selectedAboutMeContent === 'hobby'" />
        <AboutMeContentBirth v-else-if="selectedAboutMeContent === 'birth'" />
        <AboutMeContentLanguage
          v-else-if="selectedAboutMeContent === 'language'"
        />
        <AboutMeContentDefault v-else />
      </div>
      <div class="section-aboutme__content__navigator">
        <AboutMeCard
          v-for="aboutme in aboutMeData"
          :key="aboutme.id"
          :title="aboutme.title"
          :content="aboutme.content"
          :id="aboutme.id"
        />
      </div>
    </div>
  </section>
</template>

<script>
import AboutMeCard from '@/components/AboutMe/AboutMeCard'
import AboutMeContentDefault from '@/components/AboutMe/AboutMeContentDefault'
import AboutMeContentName from '@/components/AboutMe/AboutMeContentName'
import AboutMeContentLocation from '@/components/AboutMe/AboutMeContentLocation'
import AboutMeContentHobby from '@/components/AboutMe/AboutMeContentHobby'
import AboutMeContentLanguage from '@/components/AboutMe/AboutMeContentLanguage'
import AboutMeContentBirth from '@/components/AboutMe/AboutMeContentBirth'
import aboutMeData from '@/assets/data/aboutme.json'

export default {
  name: 'SectionAboutMe',
  components: {
    AboutMeCard,
    AboutMeContentDefault,
    AboutMeContentName,
    AboutMeContentLocation,
    AboutMeContentHobby,
    AboutMeContentBirth,
    AboutMeContentLanguage
  },
  data() {
    return {
      aboutMeData: aboutMeData.data
    }
  },
  computed: {
    selectedAboutMeContent() {
      return this.$store.state.aboutme.selectedAboutMeContent
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
      height: 100%;
    }
    &__navigator {
      > * {
        &:not(:last-child) {
          padding-bottom: 2rem;
        }
      }
    }
  }
}
</style>
