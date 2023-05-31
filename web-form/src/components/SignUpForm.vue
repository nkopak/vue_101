<template>
  <form @submit.prevent="handleSubmit">
    <label>Email:</label>
    <input type="text" required v-model="email">

    <label>Password:</label>
    <input type="password" required v-model="password">
    <div v-if="passwordError" class="error"> {{ passwordError }}</div>

    <label>Role:</label>
    <select v-model="role">
        <option value="jsdev">JS Developer</option>
        <option value="rubydev">Ruby Developer</option>
    </select>

    <label>Skills:</label>
    <input type="text" v-model="tempSkill" @keyup="addSkill">
    <div v-for="skill in skills" :key="skill" class="pill">
        <p @click="deleteSkill(skill)">{{ skill }}</p>
    </div>

    <div class="terms">
        <input type="checkbox" required v-model="terms">
        <label>Accept terms and conditions</label>
    </div>

    <div>
        <input type="checkbox" value="peter" v-model="names">
        <label>Peter</label>
    </div>
    <div>
        <input type="checkbox" value="morty" v-model="names">
        <label>Morty</label>
    </div>
    <div>
        <input type="checkbox" value="rick" v-model="names">
        <label>Rick</label>
    </div>

    <div class="submit">
        <button>Create an account</button>
    </div>
  </form>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            role: 'rubydev',
            terms: false,
            names: [],
            tempSkill: '',
            skills: [],
            passwordError: ''
        }
    },
    methods: {
        addSkill(e) {
            if(e.key === ',' && this.tempSkill) {
                if(!this.skills.includes(this.tempSkill)) {
                    this.skills.push(this.tempSkill)
                }
                this.tempSkill = ''
            }
        },
        deleteSkill(skill) {
            console.log(skill)
            this.skills = this.skills.filter((s) => s !== skill)
        },
        handleSubmit() {
            this.passwordError = this.password.length > 5 ? '' : 'Password must be at least 6 characters long'

            if(!this.passwordError) {
                console.log('email', this.email)
                console.log('password', this.password)
                console.log('role', this.role)
                console.log('terms', this.terms)
                console.log('names', this.names)
                console.log('tempSkill', this.tempSkill)
                console.log('skills', this.skills)
                console.log('passwordError', this.passwordError)
            }
        }
    }
}
</script>

<style>
  form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
   input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  }
  .pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
  }
  button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
  }
  .submit {
    text-align: center;
  }
  .error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }
</style>