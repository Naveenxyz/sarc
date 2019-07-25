<template style="overflow: hidden;">
    <div style="display: flex; flex-direction: row;height: 100vh; width: 100vw;overflow: hidden;" class="page_body">
        <div class="left" style="flex: 1;display: flex; flex-direction: column;justify-content: center;">
            <h1 style="color: black;word-spacing: 8px;align-self: center;padding-bottom: 10vh;">Login to use <strong> SARC </strong> services</h1>
            <input class="input" placeholder="Enter Your Email ID" v-model="email" type="email">
            <input class="input" placeholder="Enter Your Password" v-model="password" type="password">
            <button @click="this.login" class="btn_submit" >Login</button>
            <p @click="$router.push('/signup')" style="margin-top: 10vh;font-weight: 900;cursor: pointer">Click Here To Signup</p>
        </div>
        <div class="right" style="flex: 1; background: #f1f1f1;display: flex;justify-content: center;">
            <img @click="$router.push('/home')" src="../assets/logo.svg" style="width: 50%;height: auto;align-self: center;" alt="">
        </div>
    </div>
</template>

<style scoped>
    .input {
        all: unset;
        width: 60%;
        background: #f1f1f1;
        color: black;
        padding: 20px;
        align-self: center;
        margin-top: 20px;
        border-radius: 100000px;
        font-weight: 900;
    }

    .btn_submit{
        all: unset;
        background: transparent;
        border: 2px solid #EA4360;
        padding: 15px;
        width: 13%;
        align-self: center;
        margin-top: 30px;
        border-radius: 100000px;
        cursor: pointer;
        color: black;
        font-weight: 900;
    }
    .btn_submit:hover{
        background: #EA4360;
        color: white;
    }

</style>

<script>
export default {
    name: 'login',
    components: {},
    data () {
        return {
            email: '',
            password: ''
        }
    },
    mounted: function () {

    },
    methods: {
        login () {
            var vm = this
            if ( vm.email && vm.password ) {
                if(vm.email.includes('@gmail.com') && vm.email) {
                    var post_json = {
                        email: vm.email,
                        password: vm.password
                    }
                    vm.$http.post('https://sarc-bphc-backend.herokuapp.com/api/auth/login', post_json).then(resp => {
                        console.log(resp)
                    })
                }
            }else {
                alert('Please fill all the fields')
            }
        }
    }
}
</script>
