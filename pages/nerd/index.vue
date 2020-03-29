<template>
  <div>
    <Navbar />
    <div class="container">
      <SectionHome />
      <SectionSkill />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Nerd/Navbar'
import SectionHome from '@/components/Nerd/Home'
import SectionSkill from '@/components/Nerd/Skill'

export default {
  components: {
    Navbar,
    SectionHome,
    SectionSkill
  }
}
</script>
