<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>
        <v-form>
          <v-card class="elevation-12">
            <v-toolbar dark color="blue">
              <v-toolbar-title>Login form</v-toolbar-title>
            </v-toolbar>
            <v-alert
              color="error"
              :value="error"
              icon="close"
            >
              The username or the password are incorrect.
            </v-alert>
            <v-card-text>
              <v-text-field v-model="login.email" type="email" prepend-icon="person" name="login" label="Login"></v-text-field>

              <v-text-field v-model="login.password"  type="password" prepend-icon="lock" name="password" label="Password"></v-text-field>
            </v-card-text>
            <v-divider light></v-divider>
            <v-card-actions>
              <v-btn to="/signup" round color="indigo" dark>Sign up</v-btn>
              <v-spacer></v-spacer>
              <router-link to="/Contacts" exact><v-btn round color="primary" dark v-on:click="Login">
                Login
                <v-icon>keyboard_arrow_right</v-icon>
              </v-btn></router-link>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "login",
  data(){
    return{
      login:{
        email: '',
        password: ''
      }
    }
    
  },
 methods:{
    handleLogin() {
            let URL = `https://contact-keeper-apps.herokuapp.com/api/auth`;
            let _data = this.login;
            fetch(URL, {
                method:"POST",
                body:  JSON.stringify(_data),
                mode: 'cors',
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(response => response.json())
                .then(json => {
                  console.log('json', json.token);
                    window.localStorage.setItem('token', json.token);
                })
                .catch(err => console.log('err->',err))
        }
  }
}
</script>
