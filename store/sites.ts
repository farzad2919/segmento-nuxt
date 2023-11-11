// sites.ts
import Site from '~~/interfaces/Site'

// Define the Sites store state and actions
export const useSitesStore = defineStore({
  id: 'sites',
  state: () => ({
    list: [] as Site[], // Initialize as an empty array
  }),
  actions: {
    // Method to update Sites data
    updateSitesData(newSites: Site[]) {
      this.list = newSites;
    },
  },
});
