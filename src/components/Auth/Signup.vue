<template>

  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>
        <v-card class="elevation-12">
          <v-toolbar dark color="blue">
            <v-toolbar-title>Signup form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-alert
                :value="userExists"
                color="error"
                icon="warning"
              >This user already exists, try a different set of data.</v-alert>

              <v-text-field
                prepend-icon="person"
                name="login"
                v-model="register.name"
                label="Login"
                :rules="[rules.required]"
              ></v-text-field>

              <v-text-field
                prepend-icon="email"
                name="email"
                v-model="register.email"
                label="Email"
                :rules="[rules.required, rules.email]"
              ></v-text-field>

              <v-text-field
                prepend-icon="lock"
                name="password"
                label="Password"
                :rules="[rules.required]"
                type="password"
                v-model="register.password"
              ></v-text-field>

              <v-text-field
                prepend-icon="lock"
                name="password"
                label="Confirm Password"
                :rules="[rules.required]"
                type="password"
                v-model="confirm_password"
                :error="!valid()"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-divider light></v-divider>
          <v-card-actions>
 <v-btn to="/signup" round color="black" dark>Signup</v-btn>
              <v-spacer></v-spacer>
              <router-link to="/Contacts" exact><v-btn round color="success" dark v-on:click="Signup">
                Register
                <v-icon>keyboard_arrow_right</v-icon>
              </v-btn></router-link>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "signup",
  data: () => ({
    userExists: false,
    register: {
      name: '', 
      email: '',
      password: '',
    },

    confirm_password: '',
    rules: {
      required: value => !!value || "Required",
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      }
    }
  }),
  methods: {
    valid() {
      return this.register.password === this.confirm_password;
    },
    handleRegister(){
       let URL = "https://contact-keeper-apps.herokuapp.com/api/users";
            let _data = this.register;
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
                    console.log('json->', json);
                    // window.localStorage.setItem('token', json); 
                })
                .catch(err => console.log('err->',err))
    }
  }
};
</script>
