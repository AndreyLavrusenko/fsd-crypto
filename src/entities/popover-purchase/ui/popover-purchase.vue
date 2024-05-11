<template>
    <Popover v-if="crypto" :active="popover.active" :close-popover="popover.togglePopover">

        <div :class="$style.wrapper" :id="crypto.id.toString()">
            <div :class="$style.header">
                <div :class="$style.back">
                    <RoundButton @click="popover.togglePopover(false)">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.5 5.5L8 12L14.5 18.5" stroke="#2B2D33" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>
                    </RoundButton>
                </div>

                <div :class="$style.title">
                    <MiniHeader>Invest to Strategy</MiniHeader>
                </div>

            </div>

            <div :class="$style.content">
                <div>
                    <RoundButton>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.7418 6.70274C14.089 7.04987 14.6518 7.04987 14.9989 6.70274L15.8519 5.8498L15.8519 17.926C15.8519 18.417 16.2498 18.8149 16.7407 18.8149C17.2317 18.8149 17.6296 18.417 17.6296 17.926L17.6296 5.8498L18.4826 6.70274C18.8297 7.04987 19.3925 7.04987 19.7396 6.70274C20.0868 6.35561 20.0868 5.79279 19.7396 5.44566L17.3693 3.07529C17.0221 2.72816 16.4593 2.72816 16.1122 3.07529L13.7418 5.44566C13.3947 5.79279 13.3947 6.35561 13.7418 6.70274Z"
                                fill="#2B2D33"/>
                            <path
                                d="M8.14815 18.1505L9.00109 17.2975C9.34822 16.9504 9.91104 16.9504 10.2582 17.2975C10.6053 17.6446 10.6053 18.2075 10.2582 18.5546L7.8878 20.925C7.54067 21.2721 6.97785 21.2721 6.63072 20.925L4.26035 18.5546C3.91322 18.2075 3.91322 17.6446 4.26035 17.2975C4.60748 16.9504 5.1703 16.9504 5.51743 17.2975L6.37037 18.1505L6.37037 6.0742C6.37037 5.58328 6.76834 5.18531 7.25926 5.18531C7.75018 5.18531 8.14815 5.58328 8.14815 6.0742L8.14815 18.1505Z"
                                fill="#2B2D33"/>
                        </svg>
                    </RoundButton>
                </div>

                <div :class="$style.buy">

                    <div :class="$style.crypto">
                        <img :src="crypto.image" alt="">
                        <CommonText>{{crypto.name.toUpperCase()}}</CommonText>
                    </div>

                    <input
                        :class="$style.input"
                        type="number"
                        v-model="popover.amount"
                        @input="popover.validateInput"
                        pattern="[0-9]*"
                        placeholder="0.00"
                    >

                    <SmallText>
                        ⛽&nbsp;&nbsp;No gas, free investments
                    </SmallText>

                </div>
                <div>
                    <RoundButton style="font-size: 15px;" @click="popover.setMax">
                        Max
                    </RoundButton>
                </div>
            </div>

            <DefaultButton :disabled="Boolean(popover.amount)" @click="popover.buyCrypto(crypto)">

                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4.4995 9.21311C5.15683 9.21311 5.508 8.85293 5.508 8.1956V6.23262C5.508 5.4042 5.93122 5.008 6.72361 5.008H8.72261C9.37994 5.008 9.74012 4.64782 9.74012 3.9995C9.74012 3.35118 9.37994 3 8.72261 3H6.55253C4.56253 3 3.5 4.04452 3.5 6.02551V8.1956C3.5 8.85293 3.86018 9.21311 4.4995 9.21311ZM20.5005 9.21311C21.1488 9.21311 21.5 8.85293 21.5 8.1956V6.02551C21.5 4.05353 20.4465 3 18.4475 3H16.2774C15.6201 3 15.2599 3.35118 15.2599 3.9995C15.2599 4.64782 15.6201 5.008 16.2774 5.008H18.2764C19.0598 5.008 19.492 5.4042 19.492 6.23262V8.1956C19.492 8.85293 19.8522 9.21311 20.5005 9.21311ZM11.7841 13.5083H11.8652C12.8107 13.5083 13.3239 12.986 13.3239 12.0495V9.24012C13.3239 8.85293 13.0718 8.5918 12.6846 8.5918C12.2884 8.5918 12.0273 8.85293 12.0273 9.24012V12.0765C12.0273 12.1576 11.9822 12.2026 11.9102 12.2026H11.6581C11.2889 12.2026 11.0098 12.4727 11.0098 12.8329C11.0098 13.2561 11.3069 13.5083 11.7841 13.5083ZM9.15483 11.4012C9.61406 11.4012 9.93822 11.077 9.93822 10.6178V9.3932C9.93822 8.93397 9.61406 8.6008 9.15483 8.6008C8.7046 8.6008 8.37144 8.93397 8.37144 9.3932V10.6178C8.37144 11.077 8.7046 11.4012 9.15483 11.4012ZM15.8272 11.4012C16.2774 11.4012 16.6016 11.077 16.6016 10.6178V9.3932C16.6016 8.93397 16.2774 8.6008 15.8272 8.6008C15.3679 8.6008 15.0348 8.93397 15.0348 9.3932V10.6178C15.0348 11.077 15.3679 11.4012 15.8272 11.4012ZM12.4595 16.4347C13.549 16.4347 14.6566 15.9665 15.449 15.1741C15.566 15.057 15.6291 14.8949 15.6291 14.6968C15.6291 14.3277 15.3409 14.0485 14.9717 14.0485C14.7826 14.0485 14.6476 14.1206 14.4675 14.3187C13.9902 14.8049 13.2249 15.1471 12.4595 15.1471C11.7211 15.1471 10.9557 14.8229 10.4515 14.3097C10.2894 14.1566 10.1543 14.0485 9.92921 14.0485C9.56003 14.0485 9.28089 14.3277 9.28089 14.6968C9.28089 14.8679 9.33492 15.012 9.46098 15.1651C10.1723 15.9845 11.3159 16.4347 12.4595 16.4347ZM6.55253 21H8.72261C9.37994 21 9.74012 20.6398 9.74012 19.9915C9.74012 19.3522 9.37994 18.992 8.72261 18.992H6.72361C5.93122 18.992 5.508 18.5958 5.508 17.7674V15.7954C5.508 15.1471 5.14782 14.7869 4.4995 14.7869C3.85118 14.7869 3.5 15.1471 3.5 15.7954V17.9745C3.5 19.9465 4.56253 21 6.55253 21ZM16.2774 21H18.4475C20.4465 21 21.5 19.9465 21.5 17.9745V15.7954C21.5 15.1471 21.1398 14.7869 20.5005 14.7869C19.8432 14.7869 19.492 15.1471 19.492 15.7954V17.7674C19.492 18.5958 19.0598 18.992 18.2764 18.992H16.2774C15.6201 18.992 15.2599 19.3522 15.2599 19.9915C15.2599 20.6398 15.6201 21 16.2774 21Z"
                        fill="white" fill-opacity="0.88"/>
                </svg>

                {{popover.buyLoading ? 'Purchase...' : 'Hold to Invest'}}

            </DefaultButton>

        </div>


    </Popover>
</template>

<script setup lang="ts">
import Popover from "@/shared/ui/popover/popover.vue";
import {popoverPurchaseModel} from "@/entities/popover-purchase/model";
import RoundButton from "@/shared/ui/button/ui/round-button/round-button.vue";
import MiniHeader from "@/shared/ui/title/ui/mini-header/mini-header.vue";
import DefaultButton from "@/shared/ui/button/ui/default-button/default-button.vue";
import {CommonText} from "@/shared/ui/text/ui/common";
import SmallText from "@/shared/ui/text/ui/small/small-text.vue";
import {computed, ref} from "vue";
import {cryptoItemModel} from "@/entities/crypto-item/model";

const popover = popoverPurchaseModel()
const selectedCrypto = cryptoItemModel()

const crypto = computed(() => selectedCrypto.selectedItem)

</script>

<style scoped module>
.wrapper {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    height: 100%;
}

.header {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-top: 12px;
}

.back {
    align-self: flex-start;
}

.title {
    margin: auto;
    position: relative;
    left: -20px;
}

.content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.buy {
    display: flex;
    align-items: center;
    flex-direction: column;

    gap: 10px;
}

.crypto {
    display: flex;
    align-items: center;

    gap: 8px;
}

.crypto img {
    width: 24px;
    height: 24px;

    border-radius: 50%;
}

.input {
    border: none;
    outline: none;

    width: 200px;

    color: var(--colors-primary, #2B2D33);
    text-align: center;
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
    line-height: 43px; /* 89.583% */
    letter-spacing: 0.3px;
}
</style>