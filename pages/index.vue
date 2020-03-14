<template>
  <div class="container">
    <SectionHome />
    <SectionAboutMe />
    <SectionExperience />
    <SectionActivity />
    <SectionContact />
    <SectionFooter />
  </div>
</template>

<script>
import SectionHome from '@/components/Home'
import SectionAboutMe from '@/components/AboutMe'
import SectionExperience from '@/components/Experience'
import SectionActivity from '@/components/Activity'
import SectionContact from '@/components/Contact'
import SectionFooter from '@/components/Footer'

export default {
  components: {
    SectionHome,
    SectionAboutMe,
    SectionExperience,
    SectionActivity,
    SectionContact,
    SectionFooter
  }
}
</script>
