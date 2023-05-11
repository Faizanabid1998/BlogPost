    <template>
    <button
        :class="`flex flex-row items-center w-24 h-11 bg-${bg} rounded-md justify-center text-white`"
    >
        <div :class="`w-14 h-6 leading-6  font-medium`">
        {{ buttonText }}
        </div>
    </button>
    </template>


    <script>
    export default{
        props:['buttonText', 'bg', 'color']

    }
    </script>