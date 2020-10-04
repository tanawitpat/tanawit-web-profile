<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main>
      <SectionHome />
      <SectionAboutMe />
      <SectionExperience />
      <SectionActivity />
      <SectionNextStep />
      <SectionFooter />
      <ContactModal v-if="isContactModalOpen" />
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Homepage/Navbar'
import SectionHome from '@/components/Homepage/Home'
import SectionAboutMe from '@/components/Homepage/AboutMe'
import SectionExperience from '@/components/Homepage/Experience'
import SectionActivity from '@/components/Homepage/Activity'
import SectionNextStep from '@/components/Homepage/NextStep'
import SectionFooter from '@/components/Homepage/Footer'
import ContactModal from '@/components/Homepage/NextStep/ContactModal'

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
      return this.$store.state.homepage.isContactModalOpen
    }
  }
}
</script>
