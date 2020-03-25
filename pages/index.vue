<template>
  <div>
    <Navbar />
    <div class="container">
      <SectionHome />
      <SectionAboutMe />
      <SectionExperience />
      <SectionActivity />
      <SectionNextStep />
      <SectionFooter />
      <ContactModal v-if="isContactModalOpen" />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import SectionHome from '@/components/Home'
import SectionAboutMe from '@/components/AboutMe'
import SectionExperience from '@/components/Experience'
import SectionActivity from '@/components/Activity'
import SectionNextStep from '@/components/NextStep'
import SectionFooter from '@/components/Footer'
import ContactModal from '@/components/NextStep/ContactModal'

export default {
  components: {
    Navbar,
    SectionHome,
    SectionAboutMe,
    SectionExperience,
    SectionActivity,
    SectionNextStep,
    SectionFooter,
    ContactModal
  },
  computed: {
    isContactModalOpen() {
      return this.$store.state.contact.isContactModalOpen
    }
  }
}
</script>
