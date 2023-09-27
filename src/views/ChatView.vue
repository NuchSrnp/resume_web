<script setup>
import { onMounted, onUpdated, ref, watch } from 'vue';
import {
    app,
    auth,
    database,
    ref as refDb,
    set,
    push,
    onValue
} from '../firebaseConfig'
// import { DataSnapshot } from '@firebase/database';

let chat = ref("");
let histories = ref([]);
let historykey = ref(""); //collect select group
const bottomEl = ref(null);
const studentId = "6314110020"
let refChat;
const db = refDb(database, 'all_chat/')

const onSend = () => {
    if (chat.value != '' && historykey.value != '') {
        push(refDb(database, `all_chat/${historykey.value}`), {
            "user": studentId,
            "message": chat.value,
            "dateTime": new Date().toISOString()
        });
        chat.value = "";

    }


}

onValue(db, (snapshot) => {
    const data = snapshot.val();
    histories.value = data;
})
// watch(histories, (newHistories, oldHistories) => {
//     bottonEl.value.scrollIntoView({ behavior: 'smooth' });
// });

onUpdated(() => {
    bottomEl.value.scrollIntoView({ behavior: 'smooth' });
});

const selectGroup = (key) => {
    historykey.value = key;
}

let groupChatName = ref("");
const createGroup = () => {
    if (groupChatName.value != '') {
        push(refDb(database, `all_chat/${groupChatName.value}`), {
            "user": studentId,
            "message": '',
            "dateTime": new Date().toISOString()
        });
        groupChatName.value = '';
    }
}

const closeCreate = () => {
    const off = document.getElementById('my_modal_1');
    off.close(); // ปิดโมดัล
};


const deleteGroup = (key) => {
    // ตรวจสอบว่า key ไม่เป็นค่าว่าง
    if (key !== '') {
        // ลบกลุ่มที่ถูกเลือกออกจาก Firebase Realtime Database
        const groupRef = refDb(database, `all_chat/${key}`);
        set(groupRef, null); // ลบข้อมูลทั้งกลุ่ม

        // ลบกลุ่มที่ถูกเลือกออกจาก `histories`
        histories.value = histories.value.filter((group, index) => index !== key);

        // เลือกกลุ่มใหม่หลังการลบ
        if (historykey.value === key) {
            historykey.value = '';
        }
    }
};



// onMounted(() => {
//     push(refDb(database,'test'), {
//     "6314110020": "Hello World"
//   });
// });

</script>
 

<template>
    <div class="flex">
        <div class="bg-[#bcaca4] h-[90vh] w-[30%]">
            <div class="overflow-y-scroll w-full h-[90%]">

                <div class="card card-side bg-[#F5F5F5] shadow-xl w-full mb-2"
                    style="cursor: pointer;border: 2px solid #42362e; border-radius: 10px;"
                    v-for="(group, index) in histories" :key="index" @click="selectGroup(index)">

                    <div class="avatar online p-4 ">
                        <div class="w-20 rounded-full">
                            <img src="/image/persons.png" />
                        </div>
                    </div>

                    <div class="card-body">
                        <h2 class="card-title">{{ index }}</h2>
                        <p>{{ group[Object.keys(group)[Object.keys(group).length - 1]].message }}</p>
                    </div>
                    <button class="btn btn-circle btn-outline" @click="deleteGroup(index)">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
</svg>

                    </button>
                    

                </div>

            </div>

            <div class="w-full h-[10%] ">
                <button class="btn w-full h-full bg-[#42362e]  text-white" onclick="my_modal_1.showModal()">Add
                    Group</button>
                <dialog id="my_modal_1" class="modal">
                    <div class="modal-box">
                        <div class="from-control w-full">
                            <label class="label">
                                <span class="label-text">Group Name</span>
                            </label>
                            <input type="text" placeholder="Type here" class="input input-bordered w-full"
                                v-model="groupChatName" />
                        </div>


                        <div class="modal-action">
                            <button class="btn w-[85%] h-[90%]" @click="createGroup">create Group</button>
                            <form method="dialog">
                                <button class="btn" @click="closeCreate" >Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>


        <div class=" bg-gray-50 h-[90vh] w-[70%]  ">
            <div class="overflow-y-scroll h-[90%]">

                <div v-for="(history, index) in histories[historykey]"
                    :class="`chat ${history.user == studentId ? 'chat-end' : 'chat-start'}`" :key="index">
                    <div class="chat-image avatar">
                        <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="/image/person.png" />
                        </div>
                    </div>

                    <div class="chat-header">{{ history.user }}
                        <time class="text-xs opacity-50">{{ history.dateTime }}</time>
                    </div>
                    <div class="chat-bubble">{{ history.message }}</div>
                </div>


                <div ref="bottomEl"></div>
            </div>

            <div class="flex h-[10%] gap-4">
                <input v-on:keyup.enter="onSend" v-model="chat" type="text" placeholder="Type here"
                    class="input input-bordered w-[80%] h-full" />
                <button @click="onSend" class="w-[20%] btn h-full bg-[#42362e]  text-white">send</button>
            </div>





        </div>
    </div>
</template>

<style scoped></style>
