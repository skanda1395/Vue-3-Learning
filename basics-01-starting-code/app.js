const app = Vue.createApp({
  data: function () {
    return {
      courseGoalA: "Finish the course and master Vue",
      courseGoalB: "Master Nuxt ",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");

console.log(Vue);
