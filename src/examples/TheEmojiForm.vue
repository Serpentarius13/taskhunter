<template>
  <BaseFormComponent :onSubmit="onSubmit" class="flex-col md:flex-row">
    <BaseRadioButton
      v-for="emoji in emojis"
      :value="emoji"
      v-model="emojiValue"
      :key="emoji"
    />
  </BaseFormComponent>
</template>

<script setup lang="ts">
import BaseFormComponent from "@/components/Form/BaseFormComponent.vue";
import BaseRadioButton from "@/components/Inputs/BaseRadioButton.vue";
import useToastedForm from "@/composables/useToastedForm";
import useLoadingStore from "@/store/useLoadingStore";
import startDay from "@/variables/zod/startDay";
import { useField } from "vee-validate";
import { IDay } from "@/types/dataTypes";
import { getCurrentUser } from "vuefire";
import { getDaysForUser } from "@/utils/fetchFunctions";
import isTodaysDate from "@/functions/isTodaysDate";
import { addDoc } from "@firebase/firestore";
import { daysRef } from "@/utils/collections";

const emojis = ["😸", "😼", "🙀", "😿", "😾"];

const validate = useToastedForm(startDay, {
  mood: emojis[0],
});

const loadStore = useLoadingStore();

const { value: emojiValue } = useField<string>("mood");

const onSubmit = async () => {
  const isValid = await validate();
  if (!isValid) return;
  try {
    loadStore.load();
    const user = await getCurrentUser();

    const days = await getDaysForUser(user?.uid);
    let isCheckedForToday;

    if (days.length) {
      days.forEach((day) => {
        console.log(day);
        if (isTodaysDate(day?.date)) isCheckedForToday = true;
      });
    }

    if (isCheckedForToday) {
      alert("You have already checked in for today!");
      location.reload();
      return;
    }

    const todayDate = new Date().toUTCString();
    const newDayModel: Omit<IDay, "dayId"> = {
      date: todayDate,
      mood: emojiValue.value,
      todos: [],
      texts: [],
      images: [],
      isCompleted: false,
      authorId: user?.uid ? user.uid : "1",
      dayCount: days.length + 1,
      isSkipped: false,
    };

    await addDoc(daysRef, newDayModel);
    loadStore.unload();
  } catch (error) {
    loadStore.error();
    console.log(error);
  }
};
</script>

<style scoped></style>
