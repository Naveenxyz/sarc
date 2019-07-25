<template style="overflow: hidden;">
    <div style="display: flex; flex-direction: row;height: 100vh; width: 100vw;overflow: hidden;" class="page_body">
        <div style="flex: 1; background: #f1f1f1;display: flex;justify-content: center;">
            <img @click="$router.push('/home')" src="../assets/logo.svg" style="width: 50%;height: auto;align-self: center;" alt="">
        </div>
        <div style="flex: 1;display: flex; flex-direction: column;justify-content: center;">
            <h1 style="color: black;word-spacing: 8px;align-self: center;padding-bottom: 10vh;">Signup to <strong> SARC </strong> services</h1>
            <input v-model="name" class="input" placeholder="Enter Your Name" type="text">
            <input v-model="email" class="input" placeholder="Enter Your Email ID" type="email">
            <input v-model="password" class="input" placeholder="Enter Your Password" type="password">
            <input v-model="password_re" class="input" placeholder="Re-Enter Your Password" type="password">
            <button @click="signup" class="btn_submit" >Signup</button>
            <p @click="$router.push('/login')" style="margin-top: 10vh;font-weight: 900;cursor: pointer">Already Have an Account</p>
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
    name: 'signup',
    components: {},
    data () {
        return {
            name: '',
            email: '',
            password: '',
            password_re: '',
        }
    },
    mounted: function () {
    },
    methods: {
        signup () {
            var vm = this
            if ( this.name && this.email && this.password && this.password_re ) {
                if (this.password == this.password_re) {
                    if(this.email.includes('@gmail.com') && this.email) {
                        var post_json = {
                            username: vm.name,
                            email: vm.email,
                            password: vm.password,
                            role: 'user'
                        }
                        vm.$http.post('https://sarc-bphc-backend.herokuapp.com/api/auth/signup', post_json).then(resp => {
                            console.log(resp)
                        })
                    }
                } else {
                    alert('Password donot match')
                }
            }else {
                alert('Please fill all the fields')
            }
        }
    }
}
</script>
