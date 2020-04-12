<template>
  <div>
    <header>
      <Navbar />
    </header>
    <div class="container">
      <SectionHome />
      <SectionSkill />
      <SectionExperience />
      <SectionGithub />
      <SectionFooter />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Nerd/Navbar'
import SectionHome from '@/components/Nerd/Home'
import SectionSkill from '@/components/Nerd/Skill'
import SectionExperience from '@/components/Nerd/Experience'
import SectionGithub from '@/components/Nerd/Github'
import SectionFooter from '@/components/Nerd/Footer'

export default {
  components: {
    Navbar,
    SectionHome,
    SectionSkill,
    SectionExperience,
    SectionGithub,
    SectionFooter
  }
}
</script>
