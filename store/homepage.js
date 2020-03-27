export const state = () => ({
  isContactModalOpen: false,
  isNavigationOpen: false
})

export const mutations = {
  setIsContactModalOpen(state, isContactModalOpen) {
    state.isContactModalOpen = isContactModalOpen
  },
  setIsNavigationOpen(state, isNavigationOpen) {
    state.isNavigationOpen = isNavigationOpen
  }
}
