<template>
    <div class="max-w-2xl mx-auto my-40">
        <div class="flex flex-col">
            <div class="text-green-400">
                <form action="" class="flex flex-col">

                    <input type="text" class="px-6 py-2 border border-1 border-gray-500" required>

                    <button class="mt-4 px-6 py-2 w-64 mx-auto bg-gray-700 text-white">Search</button>

                </form>
            </div>

            <div class="mt-10">
                <div v-if="!orderFound && !order">
                    Sorry order not found!
                </div>
                <div v-if="orderFound && order">
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
                        <p class="flex items-center justify-end text-gray-600">
                            ${{ Number(i * 3 + 10).toLocaleString() }}
                        </p>
                    </div>

                    <div class="flex justify-end text-xl text-right text-gray-400">
                        <div class="flex flex-col">
                            <p>
                                <span class="text-gray-300 text-sm">Product total</span> ${{ Number(30 * 3 + 10).toLocaleString() }}
                            </p>
                            <p>
                                <span class="text-gray-300 text-sm">Shipping total</span> ${{ Number(30 * 3 + 10).toLocaleString() }}
                            </p>
                            <p>
                                <span class="text-gray-300 text-sm">Grand total</span> <span class="text-gray-600">${{ Number(30 * 3 + 10).toLocaleString() }}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                order: {},
                search_id: null,
                orderFound: true,
            }
        }
    }
</script>