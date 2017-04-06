<template>
  <div id="app">
    <header class="header">
      <nav class="inner">
        <router-link to="/page1">Page1</router-link>
        <router-link to="/page2">Page2</router-link>
      </nav>
    </header>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<style>
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 15px;
    margin: 0;
    padding: 40px 20px;
    color: #34495e;
    overflow-y: scroll;
  }

  a {
    color: #2972cc;
    display: inline-block;
    margin-right: 20px;
    text-decoration: none;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .2s ease;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>
