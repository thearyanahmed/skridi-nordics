<template>
    <div class="max-w-5xl mx-auto">
        <div>
            <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <div class="text-gray-600">
                    img
                    Product name
                    delete
                </div>
                <p>
                    unit price
                </p>
                <p>
                    minus
                    quantity
                    plus
                </p>
                <p>
                    Total
                </p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data: function () {
            return {

            }
        },

        computed: {
            empty() {
                return false
            }
        },

        methods: {
            updateCart() {

            },

            checkout() {

            }
        }
    }
</script>