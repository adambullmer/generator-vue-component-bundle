<template>
    <div id="app">
        <img src="../assets/logo.png" />
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',
};
</script>

<style>
body {
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    text-align: center;
}
</style>
