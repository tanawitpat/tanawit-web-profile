export const state = () => ({
  isNavigationOpen: true
})

export const mutations = {
  setIsNavigationOpen(state, isNavigationOpen) {
    state.isNavigationOpen = isNavigationOpen
  }
}
