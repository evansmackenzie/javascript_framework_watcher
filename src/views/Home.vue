<template>
  <div class="home">
    <h1>vuejs repo</h1>
    <p>stargazers count: {{ vue_stargazers_count }}</p>
    <p>watchers count: {{ vue_watchers_count }}</p>
    <p>forks count: {{ vue_forks_count }}</p>
    <h1>angular repo</h1>
    <p>stargazers count: {{ angular_stargazers_count }}</p>
    <p>watchers count: {{ angular_watchers_count }}</p>
    <p>forks count: {{ angular_forks_count }}</p>
    <h1>ember repo</h1>
    <p>stargazers count: {{ ember_stargazers_count }}</p>
    <p>watchers count: {{ ember_watchers_count }}</p>
    <p>forks count: {{ ember_forks_count }}</p>
    <h1>svelte repo</h1>
    <p>stargazers count: {{ svelte_stargazers_count }}</p>
    <p>watchers count: {{ svelte_watchers_count }}</p>
    <p>forks count: {{ svelte_forks_count }}</p>
    <h1>react repo</h1>
    <p>stargazers count: {{ react_stargazers_count }}</p>
    <p>watchers count: {{ react_watchers_count }}</p>
    <p>forks count: {{ react_forks_count }}</p>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";

export default {
  name: "Home",

  data: function () {
    return {
      vue_stargazers_count: "",
      vue_watchers_count: "",
      vue_forks_count: "",
      angular_stargazers_count: "",
      angular_watchers_count: "",
      angular_forks_count: "",
      ember_stargazers_count: "",
      ember_watchers_count: "",
      ember_forks_count: "",
      svelte_stargazers_count: "",
      svelte_watchers_count: "",
      svelte_forks_count: "",
      react_stargazers_count: "",
      react_watchers_count: "",
      react_forks_count: "",
    };
  },
  created: function () {
    axios.get("https://api.github.com/repos/vuejs/vue").then((response) => {
      console.log(response.data);
      this.vue_stargazers_count = response.data["stargazers_count"];
      this.vue_watchers_count = response.data["watchers_count"];
      this.vue_forks_count = response.data["forks_count"];
    });
    axios
      .get("https://api.github.com/repos/angular/angular.js")
      .then((response) => {
        console.log(response.data);
        this.angular_stargazers_count = response.data["stargazers_count"];
        this.angular_watchers_count = response.data["watchers_count"];
        this.angular_forks_count = response.data["forks_count"];
      });
    axios
      .get("https://api.github.com/repos/emberjs/ember.js")
      .then((response) => {
        console.log(response.data);
        this.ember_stargazers_count = response.data["stargazers_count"];
        this.ember_watchers_count = response.data["watchers_count"];
        this.ember_forks_count = response.data["forks_count"];
      });
    axios
      .get("https://api.github.com/repos/sveltejs/svelte")
      .then((response) => {
        console.log(response.data);
        this.svelte_stargazers_count = response.data["stargazers_count"];
        this.svelte_watchers_count = response.data["watchers_count"];
        this.svelte_forks_count = response.data["forks_count"];
      });
    axios
      .get("https://api.github.com/repos/facebook/react")
      .then((response) => {
        console.log(response.data);
        this.react_stargazers_count = response.data["stargazers_count"];
        this.react_watchers_count = response.data["watchers_count"];
        this.react_forks_count = response.data["forks_count"];
      });
  },
};
</script>
