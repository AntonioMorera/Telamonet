<!--Vista de formulario de registro-->
<script setup>
    import FormNavBar from '../components/FormNavBar.vue';
    import ButtonForm from '../components/ButtonForm.vue';
    import { useTranslations } from '../composables/useTranslations'
    const { t } = useTranslations() //Variable para llamar al archivo de traduccion
</script>

<template>
    <main class="relative flex flex-col justify-center items-center min-h-screen bg-[rgb(168,79,79)]">
        <FormNavBar></FormNavBar>
        <h1 class="text-6xl mb-[70px] text-white [text-shadow:-3px_3px_1px_black]">{{ t.register.title }}</h1>
        <div class="flex justify-center items-center mb-[150px]" id="form-container">
            <div class="flex flex-col justify-center items-center h-[400px] w-[400px] p-[10px] text-white rounded-bl-xl rounded-tl-xl" id="side-panel">
                <p class="text-center text-[30px] font-bold mb-[30px] [text-shadow:-2px_2px_1px_black]" id="welcome">{{ t.register.welcome }}</p>
                <img class="w-[100px] h-[100px]" src="/src/assets/logo/Bucafeed_logo.png" alt="">
                <p class="text-center text-[20px] font-bold mt-[30px] [text-shadow:-2px_2px_1px_black]" id="eslogan">{{ t.register.eslogan }}</p>
            </div>
            <form class="flex flex-col justify-center h-[400px] w-[400px] p-[10px] bg-white rounded-br-xl rounded-tr-xl" method="post">
                <label class="mt-[60px]" for="username-register-form" id="username-register-label">{{ t.register.username }} | {{ t.register.email }}</label>
                <input type="text" class="input-form" maxlength="50" id="username-register-form" name="username-register-form" :placeholder="t.register.placeholderUsername" required>
                <label for="password-register-form" id="password-register-label">{{ t.register.password }}</label>
                <input type="password" class="input-form" maxlength="20" id="password-register-form" name="password-register-form" :placeholder="t.register.placeholderPassword" required>
                <ButtonForm :value="t.register.submit"></ButtonForm>
                <RouterLink to="/login" class="flex justify-center items-center text-[#4a4a4a] font-bold mt-[50px] transition-all duration-200 ease-in-out hover:brightness-200" id="redirect-login">{{ t.register.haveAccount }}<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></RouterLink>
            </form>
        </div>
    </main>
</template>

<style scoped>
    #side-panel {
        background: -webkit-linear-gradient(305deg, #1b1b1b,#ff3838,#1b1b1b);/* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(305deg, #1b1b1b,#ff3838,#1b1b1b);/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */                                             
    }

    label {
        font-weight: bold;
        margin-bottom: 10px;
    }

    .input-form {
        outline: none;
        border: none;
        border-bottom: 1px solid black;
        margin-bottom: 30px;
        padding: 2px;
        font-size: 20px;
    }
</style>