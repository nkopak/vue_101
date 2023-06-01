<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <p>Search term - {{ search }}</p>
    <p v-for="name in matchingNames" :key="name">
      {{ name }}
    </p>
    <button @click="handleClick">Stop watching</button>

    <h2>Posts</h2>
    <div v-if="error">{{ error }}</div>
    <PostList v-if="showPosts" :posts="posts" />
    <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">delete post</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { getPosts } from "../composables/getPosts";
import PostList from "../components/PostList.vue";

export default {
  name: "HomeView",
  components: {
    PostList,
  },
  setup() {
    const { load, posts, error } = getPosts();

    load();

    const showPosts = ref(true);
    // const search = ref("");
    // const names = ref(["name", "peter", "mathew"]);

    // const stopWatch = watch(search, () => {
    //   console.log("watch");
    // });

    // watchEffect(() => {
    //   console.log("watchEffect: ");
    // });

    // const handleClick = () => {
    //   stopWatch();
    // };

    // const matchingNames = computed(() => {
    //   return names.value.filter((n) => n.includes(search.value));
    // });

    return { posts, showPosts, error };
    // return { names, search, matchingNames, handleClick };
  },
};
</script>
