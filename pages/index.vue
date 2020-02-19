<template>
  <div class="container">
    <SectionHome />
    <SectionAboutMe />
    <SectionExperience />
    <SectionActivity />
    <SectionEducation />
  </div>
</template>

<script>
import SectionHome from '@/components/Home'
import SectionAboutMe from '@/components/AboutMe'
import SectionExperience from '@/components/Experience'
import SectionActivity from '@/components/Activity'
import SectionEducation from '@/components/Education'

export default {
  components: {
    SectionHome,
    SectionAboutMe,
    SectionExperience,
    SectionActivity,
    SectionEducation
  }
}
</script>
