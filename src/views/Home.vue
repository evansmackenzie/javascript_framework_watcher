<template>
  <div class="home">
    <div v-if="this.vue_stargazers_count">
      <highcharts class="hc" :options="chartOptions" ref="chart"></highcharts>
    </div>
    <h1>vuejs repo</h1>
    <p>stargazers count: {{ vue_stargazers_count }}</p>
    <p>subscribers count: {{ vue_subscribers_count }}</p>
    <p>forks count: {{ vue_forks_count }}</p>
    <h1>angular repo</h1>
    <p>stargazers count: {{ angular_stargazers_count }}</p>
    <p>subscribers count: {{ angular_subscribers_count }}</p>
    <p>forks count: {{ angular_forks_count }}</p>
    <h1>ember repo</h1>
    <p>stargazers count: {{ ember_stargazers_count }}</p>
    <p>subscribers count: {{ ember_subscribers_count }}</p>
    <p>forks count: {{ ember_forks_count }}</p>
    <h1>svelte repo</h1>
    <p>stargazers count: {{ svelte_stargazers_count }}</p>
    <p>subscribers count: {{ svelte_subscribers_count }}</p>
    <p>forks count: {{ svelte_forks_count }}</p>
    <h1>react repo</h1>
    <p>stargazers count: {{ react_stargazers_count }}</p>
    <p>subscribers count: {{ react_subscribers_count }}</p>
    <p>forks count: {{ react_forks_count }}</p>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";
import { Chart } from "highcharts-vue";

export default {
  name: "Home",
  components: {
    highcharts: Chart,
  },

  data: function () {
    return {
      vue_stargazers_count: "",
      vue_subscribers_count: "",
      vue_forks_count: "",
      angular_stargazers_count: "",
      angular_subscribers_count: "",
      angular_forks_count: "",
      ember_stargazers_count: "",
      ember_subscribers_count: "",
      ember_forks_count: "",
      svelte_stargazers_count: "",
      svelte_subscribers_count: "",
      svelte_forks_count: "",
      react_stargazers_count: "",
      react_subscribers_count: "",
      react_forks_count: "",
      chartOptions: {
        chart: {
          type: "bar",
        },
        title: {
          text: "JavaScript Framework Watcher",
        },

        xAxis: {
          categories: ["VueJS", "Angular", "Ember", "Svelte", "React"],
          title: {
            text: null,
          },
        },
        yAxis: {
          min: 0,

          labels: {
            overflow: "justify",
          },
        },

        plotOptions: {
          bar: {
            dataLabels: {
              enabled: true,
            },
          },
        },
        legend: {
          layout: "vertical",
          align: "right",
          verticalAlign: "top",
          x: -40,
          y: 80,
          floating: true,
          borderWidth: 1,
          backgroundColor: "#FFFFFF",
          shadow: true,
        },
        credits: {
          enabled: false,
        },
        series: [
          {
            name: "Stargazers Count",
            data: [],
          },
          {
            name: "Subscribers (Watchers) Count",
            data: [],
          },
          {
            name: "Forks Count",
            data: [],
          },
        ],
      },
    };
  },
  beforeCreate: function () {
    axios.get("https://api.github.com/repos/vuejs/vue").then((response) => {
      console.log(response.data);
      this.vue_stargazers_count = response.data["stargazers_count"];
      this.vue_subscribers_count = response.data["subscribers_count"];
      this.vue_forks_count = response.data["forks_count"];
      debugger;
      this.chartOptions.series[0].data.push(this.vue_stargazers_count);
      this.chartOptions.series[1].data.push(this.vue_subscribers_count);
      this.chartOptions.series[2].data.push(this.vue_forks_count);
    });
    axios
      .get("https://api.github.com/repos/angular/angular.js")
      .then((response) => {
        console.log(response.data);
        this.angular_stargazers_count = response.data["stargazers_count"];
        this.angular_subscribers_count = response.data["subscribers_count"];
        this.angular_forks_count = response.data["forks_count"];
        this.chartOptions.series[0].data.push(this.angular_stargazers_count);
        this.chartOptions.series[1].data.push(this.angular_subscribers_count);
        this.chartOptions.series[2].data.push(this.angular_forks_count);
      });
    axios
      .get("https://api.github.com/repos/emberjs/ember.js")
      .then((response) => {
        console.log(response.data);
        this.ember_stargazers_count = response.data["stargazers_count"];
        this.ember_subscribers_count = response.data["subscribers_count"];
        this.ember_forks_count = response.data["forks_count"];
        this.chartOptions.series[0].data.push(this.ember_stargazers_count);
        this.chartOptions.series[1].data.push(this.ember_subscribers_count);
        this.chartOptions.series[2].data.push(this.ember_forks_count);
      });
    axios
      .get("https://api.github.com/repos/sveltejs/svelte")
      .then((response) => {
        console.log(response.data);
        this.svelte_stargazers_count = response.data["stargazers_count"];
        this.svelte_subscribers_count = response.data["subscribers_count"];
        this.svelte_forks_count = response.data["forks_count"];
        this.chartOptions.series[0].data.push(this.svelte_stargazers_count);
        this.chartOptions.series[1].data.push(this.svelte_subscribers_count);
        this.chartOptions.series[2].data.push(this.svelte_forks_count);
      });
    axios
      .get("https://api.github.com/repos/facebook/react")
      .then((response) => {
        console.log(response.data);
        this.react_stargazers_count = response.data["stargazers_count"];
        this.react_subscribers_count = response.data["subscribers_count"];
        this.react_forks_count = response.data["forks_count"];
        this.chartOptions.series[0].data.push(this.react_stargazers_count);
        this.chartOptions.series[1].data.push(this.react_subscribers_count);
        this.chartOptions.series[2].data.push(this.react_forks_count);
      });
  },
};
</script>
