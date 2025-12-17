<!--Vista de formulario de registro-->
<script setup>
    import { useI18n } from 'vue-i18n';
    import FormNavBar from '../components/FormNavBar.vue';
    import ButtonForm from '../components/ButtonForm.vue';

    const { t } = useI18n() //Variable para llamar al archivo de traduccion
</script>

<template>
    <main class="relative flex flex-col justify-center items-center min-h-screen bg-[rgb(168,79,79)]">
        <FormNavBar></FormNavBar>
        <h1>{{ t("register.title") }}</h1>
        <div id="form-container">
            <div id="side-panel">
                <p id="welcome">{{ t("register.welcome") }}</p>
                <img src="/src/assets/logo/Bucafeed_logo.png" alt="">
                <p id="eslogan">{{ t("register.eslogan") }}</p>
            </div>
            <form method="post">
                <label for="username-register-form" id="username-register-label">{{ t("register.username") }} | {{ t("register.email") }}</label>
                <input type="text" class="input-form" maxlength="50" id="username-register-form" name="username-register-form" :placeholder="t('register.placeholderUsername')" required>
                <label for="password-register-form" id="password-register-label">{{ t("register.password") }}</label>
                <input type="password" class="input-form" maxlength="20" id="password-register-form" name="password-register-form" :placeholder="t('register.placeholderPassword')" required>
                <ButtonForm :value="t('register.submit')"></ButtonForm>
                <RouterLink to="/login" id="redirect-login">{{ t("register.haveAccount") }}<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></RouterLink>
            </form>
        </div>
    </main>
</template>

<style scoped>
    h1 {
        font-size: 60px;
        margin-bottom: 70px;
        color: white;
        text-shadow: -3px 3px 1px black;
    }

    #form-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 150px;
    }

    #side-panel {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 400px;
        width: 400px;
        padding: 10px;
        color: white;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
        background: -webkit-linear-gradient(305deg, #1b1b1b,#ff3838,#1b1b1b);/* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(305deg, #1b1b1b,#ff3838,#1b1b1b);/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */                                             
    }

    #welcome {
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 30px;
        text-shadow: -2px 2px 1px black;
    }

    #eslogan {
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        margin-top: 30px;
        text-shadow: -2px 2px 1px black;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 400px;
        height: 400px;
        padding: 10px;
        background-color: white;
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
    }
    
    #username-register-label {
        margin-top: 60px;
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

    #redirect-login {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: #4a4a4a;
        font-weight: bold;
        margin-top: 60px;
        transition: .2s ease-in-out;
    }

    #redirect-login:hover {
        filter: brightness(2);
    }

    img {
        width: 100px;
        height: 100px;
    }
</style>