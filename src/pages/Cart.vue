<template>
    <div class="max-w-3xl mx-auto my-20">
        <div class="w-full text-2xl text-gray-300 text-center">
            PRODUCTS
        </div>
        <div>
            <div class="text-gray-400 md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                <div class="text-left">
                    PRODUCT
                </div>
                <p class="text-center">
                    UNIT PRICE
                </p>
                <p class="text-center">
                    QUANTITY
                </p>
                <p class="text-right">
                    T0TAL
                </p>
            </div>

            <div class="md:grid md:grid-cols-4 hover:bg-gray-50 md:space-y-0 space-y-1 p-4"
                    v-for="(item,i) in 3"
                    :key="i"
                    >
                <div class="flex space-x-1 text-gray-600 text-left">
                    <img class="w-20 h-20 hover:grow hover:shadow-lg"
                         src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=400&amp;h=400&amp;q=80">
                    <div class='py-4'>
                        <p class="text-md font-light text-gray-700">Product name</p>
                        <span class="text-xs cursor-pointer font-light text-gray-400">delete ?</span>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-full text-gray-600 text-center">
                        ${{ Number(i * 3 + 10).toLocaleString() }}
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="text-center w-full">
                        <button class="px-4 md:w-auto text-gray-700">-</button>
                        1
                        <button class="px-4 md:w-auto text-gray-700">+</button>
                    </div>
                </div>
                <p class="text-right text-gray-600">
                    ${{ Number(i * 3 + 10).toLocaleString() }}
                </p>
            </div>
        </div>

        <div class="flex justify-end text-xl text-right text-gray-600">
            <div>
                <span class="text-gray-300 text-sm">Product total</span> ${{ Number(30 * 3 + 10).toLocaleString() }}
            </div>
        </div>

        <div class="w-full text-2xl text-gray-300 text-center mt-10">
            SHIPPING & PAYMENT
        </div>

        <div class="flex flex-col">

            <div class="flex flex-col p-4 text-gray-700">
                <label class="text-gray-500">Shipping Method</label>
                <div class="pt-2">
                    <input type="radio" name="shipping_class_id" value="cash_on_delivery"> Pathao (Within Dhaka $1.25)
                </div>
                <div>
                    <input type="radio" name="shipping_class_id" value="stripe"> (DHL Anywhere in BD $1.74)
                </div>
            </div>

            <div class="flex flex-col px-4 text-gray-700">
                <label for="street_address" class="text-gray-500">Shipping Address</label>
                <textarea name="street_address" id="street_address" cols="30" rows="5" class="mt-4 border border-1 border-gray-300 p-2 pt-4 w-6/12" placeholder="Your street address, zip, city and country"></textarea>
            </div>

            <div class="flex flex-col px-4 text-gray-700 mt-4">
                <label for="street_address">
                    <span @click="showNote = !showNote" class="text-gray-500">Have an additional note?</span>
                </label>
                <textarea v-if="showNote" name="note" id="note" cols="30" rows="4" class="mt-4 border border-1 border-gray-300 p-2 w-6/12" placeholder="Your street address, zip, city and country"></textarea>
            </div>

            <div class="flex flex-col p-4 text-gray-700">
                <label class="text-gray-500">Payment method</label>

                <div class="pt-2">
                    <input type="radio" name="payment_method" value="cash_on_delivery"> Cash on delivery
                </div>
                <div>
                    <input type="radio" name="payment_method" value="stripe"> Stripe
                </div>
            </div>

            <div class="flex justify-center">
                <button class="px-6 py-2 w-full md:w-6/12 md:w-auto bg-gray-700 text-white">Place order ($101.34)</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                showNote: false,
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