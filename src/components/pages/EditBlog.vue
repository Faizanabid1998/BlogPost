<template>
  <div>
    <header class="flex flex-row justify-between px-5 py-3 items-center">
      <base-button editDel="Back" @click="exit"></base-button>
      <h1 class="font-bold text-3xl leading-10">Add/Edit Post</h1>
      <img
        class="hover cursor-pointer"
        @click="goBackBtn"
        src="../../images/Button.svg"
        alt=""
      />
    </header>

    <form class="flex flex-col items-center w-[820px] h-[576px] mx-auto">
      <div class="flex flex-col items-start gap-3">
        <h1 class="font-normal text-xl leading-6">Title</h1>
        <input
          class="py-3 px-5 gap-3 w-[620px] h-11 box-border bg-white border border-gray-300 rounded-md"
          type="text"
          placeholder="Enter your Title here"
          v-model.trim="title"
        />
      </div>
      <div
        id="frame2"
        class="flex flex-row items-start gap-5 w-[620px] h-20 mt-3"
      >
        <div id="field" class="flex flex-col items-start gap-3">
          <h1 class="font-normal text-xl leading-6">Author</h1>
          <input
            class="py-3 px-5 gap-3 w-[300px] h-11 box-border bg-white border border-gray-300 rounded-md"
            type="text"
            placeholder="Enter the Author here"
            v-model.trim="author"
          />
        </div>
        <div id="field" class="flex flex-col items-start gap-3">
          <h1 class="font-normal text-xl leading-6">Category</h1>
          <input
            class="py-3 px-5 gap-3 w-[300px] h-11 box-border bg-white border border-gray-300 rounded-md"
            type="text"
            placeholder="Enter your Category here"
            v-model.trim="category"
          />
        </div>
      </div>
      <div class="flex flex-col items-start gap-3 mt-3">
        <h1 class="font-normal text-xl leading-6">Description</h1>
        <textarea
          class="py-3 px-5 gap-3 w-[620px] h-[317px] box-border bg-white border border-gray-300 rounded-md"
          placeholder="Enter your Description here"
          v-model.trim="description"
        ></textarea>
      </div>
      <back-button class="mt-5" back="Save" @click="submitForm"></back-button>
    </form>
  </div>
</template>
  
  <script>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const title = ref("");
    const description = ref("");
    const author = ref("");
    const category = ref("");

    const submitForm = (event) => {
      event.preventDefault();
      if (
        title.value === "" ||
        description.value === "" ||
        author.value === "" ||
        category.value === ""
      ) {
        event.preventDefault();
        return alert("Some of the fields are not filled correctly!");
      } else {
        saveData();
      }
      router.replace("/posts");
    };
    const goBackBtn = () => {
      router.replace("/posts");
    };
    const exit = () => {
      router.replace("/");
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
      };

      try {
        const blogId = router.currentRoute.value.params.id;
        const response = await axios.put(
          `https://blog-app-8cfe3-default-rtdb.firebaseio.com/blogs/${blogId}.json`,
          newBlog
        );

        if (!response.ok) {
          return;
        }
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    onMounted(() => {
      const blogId = router.currentRoute.value.params.id;
      axios
        .get(
          `https://blog-app-8cfe3-default-rtdb.firebaseio.com/blogs/${blogId}.json`
        )
        .then((response) => {
          title.value = response.data.title;
          description.value = response.data.description;
          author.value = response.data.author;
          category.value = response.data.category;
        })
        .catch((error) => {
          console.error(error);
        });
    });

    return {
      title,
      description,
      author,
      category,
      saveData,
      submitForm,
      goBackBtn,
      exit
    };
  },
};
</script>
  