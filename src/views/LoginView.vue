<!--Vista de formulario de registro-->
<script setup>
    import FormNavBar from '../components/FormNavBar.vue';
    import ButtonForm from '../components/buttons/ButtonForm.vue';
    import { useTranslations } from '../composables/useTranslations'
    const { t } = useTranslations() // Variable para llamar al archivo de traduccion
</script>

<template>
    <main class="relative flex flex-col justify-center items-center min-h-screen bg-black/50 px-4 sm:px-6 lg:px-8">
        <FormNavBar></FormNavBar>
        <h1 class="text-4xl sm:text-5xl md:text-6xl mb-10 sm:mb-12 md:mb-[70px] text-white [text-shadow:-3px_3px_1px_black] text-center">{{ t.login.title }}</h1>
        <div class="flex flex-col md:flex-row justify-center items-center mb-10 sm:mb-20 md:mb-[150px] w-full max-w-[90%] sm:max-w-[500px] md:max-w-none" id="form-container">
            <form class="flex flex-col justify-center h-auto md:h-[400px] w-full md:w-[400px] p-6 sm:p-8 md:p-[10px] md:pl-[20px] md:pr-[20px] bg-white rounded-b-xl md:rounded-bl-xl md:rounded-tl-xl md:rounded-br-none order-2 md:order-1" method="post">
                <label class="mt-8 sm:mt-10 md:mt-[60px]" for="username-register-form" id="username-register-label">{{ t.login.username }}</label>
                <input type="text" class="input-form" maxlength="50" id="username-register-form" name="username-register-form" :placeholder="t.login.placeholderUsername" required>
                <label for="password-register-form" id="password-register-label">{{ t.login.password }}</label>
                <input type="password" class="input-form" maxlength="20" id="password-register-form" name="password-register-form" :placeholder="t.login.placeholderPassword" required>

                <RouterLink to="/home" class="text-center">
                    <ButtonForm :value="t.login.submit"></ButtonForm>
                </RouterLink>

                <RouterLink to="/" class="flex justify-center items-center text-sm sm:text-[15px] gap-1 text-[#4a4a4a] font-bold mt-8 sm:mt-10 md:mt-[50px] mb-4 md:mb-0 transition-all duration-200 ease-in-out hover:brightness-200" id="redirect-login">{{ t.login.noAccount }}<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></RouterLink>
            </form>
            <div class="flex flex-col justify-center items-center h-auto md:h-[400px] w-full md:w-[400px] p-6 sm:p-8 md:p-[10px] text-white rounded-t-xl md:rounded-br-xl md:rounded-tr-xl md:rounded-tl-none order-1 md:order-2" id="side-panel">
                <p class="text-center text-xl sm:text-2xl md:text-[29px] font-bold mb-5 sm:mb-6 md:mb-[30px] [text-shadow:-2px_2px_1px_black]" id="welcome">{{ t.login.welcome }}</p>
                <img class="w-16 h-[70px] sm:w-20 sm:h-[85px] md:w-[90px] md:h-[100px]" src="/src/assets/logo/logoTelamon.png" alt="">
                <p class="text-center text-base sm:text-lg md:text-[20px] font-bold mt-5 sm:mt-6 md:mt-[30px] ml-[10px] mr-[10px] [text-shadow:-2px_2px_1px_black]" id="eslogan">{{ t.login.eslogan }}</p>
            </div>
        </div>
    </main>
</template>

<style scoped>
    #side-panel {
        background: -webkit-linear-gradient(140deg, #326465,#1d2e3e);/* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(140deg, #326465,#1d2e3e);/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        /* box-shadow: 10px 10px 1px white; */
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