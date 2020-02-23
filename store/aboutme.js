export const state = () => ({
  selectedAboutMeContent: ''
})

export const mutations = {
  setSelectedAboutMeContent(state, selectedAboutMeContent) {
    state.selectedAboutMeContent = selectedAboutMeContent
  }
}
