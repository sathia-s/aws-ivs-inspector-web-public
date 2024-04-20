import { defineStore } from "pinia";

export const useCommonStore = defineStore("CommonStore", {
  state: () => ({
    apiIds: JSON.parse(import.meta.env.VITE_API_IDS),

    // {
    //   "us-east-1": JSON.parse(import.meta.env.VITE_US_EAST_1_API_IDS),
    //   "us-west-2": JSON.parse(import.meta.env.VITE_US_WEST_2_API_IDS),
    //   "ap-south-1": JSON.parse(import.meta.env.VITE_AP_SOUTH_1_API_IDS),
    // },

    thumbStyle: {
      right: "0px",
      borderRadius: "7px",
      backgroundColor: "#ff6f00",
      width: "4px",
      opacity: 0.75,
    },

    initialPagination: {
      sortBy: "desc",
      descending: false,
      page: 1,
      rowsPerPage: 100,
    },
  }),

  actions: {},
});
