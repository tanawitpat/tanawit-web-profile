<template>
  <div>
    <Navbar />
    <div class="container">
      <SectionHome />
      <SectionAboutMe />
      <SectionExperience />
      <SectionActivity />
      <SectionContact />
      <SectionFooter />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import SectionHome from '@/components/Home'
import SectionAboutMe from '@/components/AboutMe'
import SectionExperience from '@/components/Experience'
import SectionActivity from '@/components/Activity'
import SectionContact from '@/components/Contact'
import SectionFooter from '@/components/Footer'

export default {
  components: {
    Navbar,
    SectionHome,
    SectionAboutMe,
    SectionExperience,
    SectionActivity,
    SectionContact,
    SectionFooter
  }
}
</script>
