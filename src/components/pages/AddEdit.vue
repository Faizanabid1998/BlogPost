<template>
  <div>
    <header class="flex flex-row justify-between px-5 py-3">
      <base-button editDel="Back"></base-button>
      <h1 class="font-bold text-3xl leading-10">Add/Edit Post</h1>
      <img src="../../images/Button.svg" alt="" />
    </header>

    <form
      @submit.prevent=""
      class="flex flex-col items-center w-[820px] h-[576px] mx-auto"
    >
      <div class="flex flex-col items-start gap-3">
        <h1 class="font-normal text-xl leading-6">Title</h1>
        <input
          class="py-3 px-5 gap-3 w-[620px] h-11 box-border bg-white border border-gray-300 rounded-md"
          type="text"
          placeholder="Enter your Title here"
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
          />
        </div>
        <div id="field" class="flex flex-col items-start gap-3">
          <h1 class="font-normal text-xl leading-6">Category</h1>
          <input
            class="py-3 px-5 gap-3 w-[300px] h-11 box-border bg-white border border-gray-300 rounded-md"
            type="text"
            placeholder="Enter your Category here"
          />
        </div>
      </div>
      <div class="flex flex-col items-start gap-3 mt-3">
        <h1 class="font-normal text-xl leading-6">Description</h1>
        <textarea
          class="py-3 px-5 gap-3 w-[620px] h-[317px] box-border bg-white border border-gray-300 rounded-md"
          placeholder="Enter your Description here"
          
        ></textarea>
      </div>
      <back-button class="mt-5" back="Save"></back-button>
    </form>
  </div>
</template>