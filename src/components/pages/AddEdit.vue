<template>
  <div class="bg-neutral-200">
    <div class="flex flex-col items-center gap-3 w-full h-screen sm:h-screen">
      <div
        class="flex flex-col items-center mt-5 mb-5 bg-white w-[340px] sm:w-[840px] sm:h-[898px] h-full overflow-y-auto scrollbar-hidden"
      >
        <header
          class="flex flex-row sm:items-center items-start gap-3 justify-end sm:justify-between sm:px-5 py-3 w-[300px] h-14 sm:w-[820px] sm:h-14"
        >
          <h1 class="font-bold text-3xl leading-10 flex-grow text-center">
            Add Post
          </h1>
        </header>
        <form
          class="flex flex-col items-center w-[300px] h-[763px] py-3 sm:w-[820px] sm:h-[576px] mx-auto"
        >
          <div
            class="flex flex-col items-start gap-3 w-[300px] h-[78px] sm:w-auto sm:h-auto"
          >
            <h1 class="font-normal text-xl leading-6">Title</h1>
            <input
              class="py-3 px-5 gap-3 w-[300px] sm:w-[620px] h-11 box-border bg-white border border-gray-300 rounded-md"
              type="text"
              placeholder="Enter your Title here"
              v-model.trim="title"
            />
          </div>
          <div
            class="flex flex-col items-start gap-3 mt-3 w-[300px] sm:w-auto sm:h-auto"
          >
            <h1 class="font-normal text-xl leading-6">Image</h1>
            <input
              class="py-3 px-5 gap-3 w-[300px] sm:w-[620px] h-11 box-border bg-white border border-gray-300 rounded-md"
              type="file"
              placeholder="Select image"
              @change="handleImageUpload"
            />
          </div>
          <div
            id="frame2"
            class="flex flex-col sm:flex-row items-start gap-5 sm:w-[620px] sm:h-20 w-auto h-auto mt-3"
          >
            <div
              id="field"
              class="flex flex-col items-start gap-3 w-[300px] h-[78px] sm:w-auto sm:h-auto"
            >
              <h1 class="font-normal text-xl leading-6">Author</h1>
              <input
                class="py-3 px-5 gap-3 w-[300px] h-11 box-border bg-white border border-gray-300 rounded-md"
                type="text"
                placeholder="Enter the Author here"
                v-model.trim="author"
              />
            </div>
            <div
              id="field"
              class="flex flex-col items-start gap-3 w-[300px] h-[78px] sm:w-auto sm:h-auto"
            >
              <h1 class="font-normal text-xl leading-6">Category</h1>
              <input
                class="py-3 px-5 gap-3 w-[300px] h-11 box-border bg-white border border-gray-300 rounded-md"
                type="text"
                placeholder="Enter your Category here"
                v-model.trim="category"
              />
            </div>
          </div>
          <div
            class="flex flex-col items-start gap-3 mt-3 w-[300px] h-[351px] sm:w-auto sm:h-auto"
          >
            <h1 class="font-normal text-xl leading-6">Description</h1>
            <textarea
              class="py-3 px-5 gap-3 w-[300px] sm:w-[620px] h-[317px] box-border bg-white border border-gray-300 rounded-md"
              placeholder="Enter your Description here"
              v-model.trim="description"
            ></textarea>
          </div>
          <div
            class="sm:w-[820px] w-[300px] h-11 flex flex-row justify-between items-start gap-7 sm:px-24 mt-5 absolute sm:relative bottom-2 sm:top-auto"
          >
            <div>
              <the-button
                @click="exit"
                buttonText="Cancel"
                bgClass="bg-white"
                textClass="text-neutral-500"
                borderColor="border-neutral-500"
              ></the-button>
            </div>
            <div>
              <the-button
                buttonText="Save"
                textClass="text-white"
                bgClass="bg-neutral-500"
                borderColor="border-neutral-500"
                @click="submitForm"
              ></the-button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const title = ref("");
    const description = ref("");
    const author = ref("");
    const category = ref("");
    const image = ref("");

    const submitForm = async (event) => {
      event.preventDefault();
      if (
        title.value === "" ||
        description.value === "" ||
        author.value === "" ||
        category.value === "" ||
        image.value === ""
      ) {
        event.preventDefault();
        return alert("Some of the fields are not filled correctly!");
      }
      try {
        await saveData();
        router.replace("/posts");
      } catch (error) {
        console.error(error);
        alert("An error occurred. Please try again later.");
      }
    };
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        image.value = reader.result;
      };
      reader.readAsDataURL(file);
    };
    const exit = () => {
      router.push("/posts");
    };
    async function saveData() {
      const newBlog = {
        title: title.value,
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        author: author.value,
        category: category.value,
        description: description.value,
        image: image.value,
      };

      try {
        const response = await axios.post(
          "https://blog-app-8cfe3-default-rtdb.firebaseio.com/blogs.json",
          newBlog
        );

        console.log(response.data); // Log the response data

        if (response.status !== 200) {
          console.error(response.statusText); // Log the error message, if available
          throw new Error("Request failed");
        }

        console.log(response.data);
      } catch (error) {
        console.error(error);
        throw new Error("Failed to save data");
      }
    }

    return {
      title,
      description,
      author,
      category,
      saveData,
      submitForm,
      exit,
      image,
      handleImageUpload,
    };
  },
};
</script>