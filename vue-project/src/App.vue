<template>
  <h3>Hey</h3>
    <greeting :age="age"></greeting>
    <user :age="age" @age-change="updateAge" :ageChangeFn="updateAgeCB"></user>
    <app-form>
      <template v-slot:help>
        <p>{{ help }}</p>
      </template>
      <template v-slot:fields>
        <input type="text" placeholder="email">
        <input type="text" placeholder="username">
        <input type="password" placeholder="password">
      </template>
      <template v-slot:buttons>
        <button type="submit">Submit</button>
      </template>
      <p>Dummy text</p>
    </app-form>
    <hr/>
    <app-form>
      <template v-slot:help>
        <p>Contact text.</p>
      </template>
      <template v-slot:fields>
        <input type="text" placeholder="email">
        <input type="text" placeholder="message">
      </template>
      <template v-slot:buttons>
        <button type="submit">Submit</button>
      </template>
    </app-form>

    <select v-model="componentName">
      <option value="Home">Home</option>
      <option value="About">About</option>
    </select>

    <keep-alive>
      <component :is="componentName"/>
    </keep-alive>
</template>

<script>
  import Greeting from '@/components/Greeting.vue' //Registering component locally
  import User from '@/components/User.vue'
  import AppForm from "@/components/Form.vue"
  import Home from "@/components/Home.vue"
  import About from "@/components/About.vue"

   export default {
    name: 'App',
    components: {
      Greeting,
      User,
      AppForm,
      Home,
      About
    },
    data() {
      return {
        age:15,
        help: 'This is HELP!',
        componentName: 'Home'
      }
    },
    methods: {
      updateAge(num) {
        this.age += num
      },
      updateAgeCB(num) {
        this.age += num
      }
    }
   }
</script>