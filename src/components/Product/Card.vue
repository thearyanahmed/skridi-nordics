<template>
    <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
        <div @click="visit('hello')">
            <img class="hover:grow hover:shadow-lg"
            src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=400&amp;h=400&amp;q=80">

            <div class="pt-3 flex items-center justify-between">
                <p class="">Product Name</p>
                <Heart />
            </div>

            <p class="pt-1 text-gray-900">£9.99</p>
        </div>
    </div>
</template>

<script>

import Heart from '../SVG/Heart.vue'

export default {
    components: {
        Heart
    },
    methods: {
        visit(slug) {
            this.$router.push({ name: 'product', params: { slug }})
        }
    }
}
</script>
