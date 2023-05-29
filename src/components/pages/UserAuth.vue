<template>
  <div class="bg-neutral-200">
    <div
      class="flex flex-col items-center justify center w-full h-screen absolute bg-neutral-200"
    >
      <div
        class="flex flex-col items-center mt-5 mb-5 bg-white sm:w-[840px] w-[340px] sm:h-[1214px] h-[2814px] overflow-y-auto scrollbar-hidden sm:px-3 px-5 pt-5 sm:pb-12 pb-12 justify-center"
      >
        <form action="">
          <div
            class="flex flex-col items-start gap-3 w-[300px] h-[78px] sm:w-auto sm:h-auto"
          >
            <h1 class="font-normal text-xl leading-6">Email</h1>
            <input
              class="py-3 px-5 gap-3 w-[300px] sm:w-[350px] h-11 box-border bg-white border border-gray-300 rounded-md"
              type="email"
              placeholder="Enter your Email here"
              v-model.trim="email"
            />
          </div>
          <div
            class="flex flex-col items-start gap-3 w-[300px] h-[78px] sm:w-auto sm:h-auto mt-5"
          >
            <h1 class="font-normal text-xl leading-6">Password</h1>
            <input
              class="py-3 px-5 gap-3 w-[300px] sm:w-[350px] h-11 box-border bg-white border border-gray-300 rounded-md"
              type="password"
              placeholder="Enter your password here"
              v-model.trim="password"
              autocomplete="current-password"
            />
          </div>
          <div
            class="sm:w-[350px] w-[300px] h-11 flex flex-row justify-between mt-5"
          >
            <div>
              <the-button
                buttonText="Login"
                bgClass="bg-white"
                textClass="text-neutral-500"
                borderColor="border-neutral-500"
                @click="handleLogin"
              ></the-button>
            </div>
            <div>
              <the-button
                buttonText="Signup"
                textClass="text-neutral-500"
                bgClass="bg-white"
                borderColor="border-neutral-500"
                @click="submitForm"
              ></the-button>
            </div>
          </div>
          <div class="flex justify-center items-center mt-5">
              <the-button
                buttonText="View Blogs"
                textClass="text-neutral-500"
                bgClass="bg-white"
                borderColor="border-neutral-500"
                @click="viewBlogs"
              ></the-button>
            </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const store = useStore();
    const router = useRouter();
    // const isValid=ref(true)

    const submitForm = async (event) => {
      event.preventDefault();
      if (email.value === "" || password.value === "") {
        event.preventDefault();
        return alert("Some of the fields are not filled correctly!");
      }
      try {
        await saveData();
        router.replace("/")
        console.log("data sent");
      } catch (error) {
        console.error(error);
        alert("An error occurred. Please try again later.");
      }
    };

    async function saveData() {
      try {
        const response = await axios.post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC8MKmoDLzq0FzqvK5VQgGaekhXDgyKGcE`,
          {
            email: email.value,
            password: password.value,
            returnSecureToken: true,
          }
        );
        if (response.status !== 200) {
          throw new Error("Signup request failed");
        }
        console.log(response.data);
        alert("Signup successful!");
        await login();
      } catch (error) {
        console.error(error.response.data);
        alert("An error occurred during signup.");
      }
    }
    const handleLogin = async (event) => {
      event.preventDefault();
      if (email.value === "" || password.value === "") {
        event.preventDefault();
        return alert("Some of the fields are not filled correctly!");
      }
      try {
        await login();
        router.replace("/")
      } catch (error) {
        console.error(error);
        alert("An error occurred. Please try again later.");
      }
    };
    async function login() {
      try {
        const response = await axios.post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC8MKmoDLzq0FzqvK5VQgGaekhXDgyKGcE`,
          {
            email: email.value,
            password: password.value,
            returnSecureToken: true,
          }
        );
        if (response.status === 200) {
          const userData = {
            email: response.data.email,
            idToken: response.data.idToken,
            expiresIn: response.data.expiresIn,
          };
          store.commit("setToken", userData.idToken);
          console.log(userData);
          alert("Login successful!");
        } else {
          throw new Error("Login request failed");
        }
      } catch (error) {
        console.error(error);
        alert("An error occurred during login.");
      }
    }
    const viewBlogs=()=>{
      router.replace("/blogs")
    }
    return { submitForm, email, password, saveData, handleLogin, login,viewBlogs };
  },
};
</script>