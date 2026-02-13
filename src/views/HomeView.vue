<script setup>
    import NavBar from '../components/NavBar.vue';
    import SearchBar from '../components/SearchBar.vue';
    import { onMounted } from 'vue';

    import { useTranslations } from '../composables/useTranslations'

    const { t } = useTranslations() // Variable para llamar al archivo de traduccion
    
    onMounted(() => {
        function showCreatedPost(postObjectValues) {

            const postObjectDict = Object.entries(postObjectValues);

            const mainBody = document.getElementById("mainBody");

            const newPostContainer = document.createElement("div");
            const newPostTitle = document.createElement("p");
            const newPostDescription = document.createElement("p");

            newPostContainer.className = "border border-red-500 w-[600px]";
            mainBody.append(newPostContainer);

            newPostTitle.innerHTML = postObjectDict[0][1];
            newPostTitle.className = "text-[30px]";

            newPostDescription.innerHTML = postObjectDict[2][1];
            newPostTitle.className = "text-[25px]";

            newPostContainer.append(newPostTitle);
            newPostContainer.append(newPostDescription);
        }

        const postObject = JSON.parse(sessionStorage.getItem("newPost"));

        if (postObject) {
            showCreatedPost(postObject);
        }

    });

</script>

<template>
    <main class="flex min-h-screen justify-between">
        <NavBar></NavBar>
        <section class="text-white w-[1580px] mr-4">
            <SearchBar></SearchBar>
            <div id="mainBody" class="flex flex-col gap-4 justify-center items-center min-h-[92.9vh]">
                <!-- Post 1 -->
                <div class="post-card">
                    <div class="post-header">
                        <div class="post-question">Pregunta 1</div>
                    </div>
                    <h2 class="post-title">TITULO DEL POST</h2>
                    <div class="post-footer">
                        <div class="responses-badge">
                            <span class="response-emoji">💬</span>
                            <span class="response-count">24</span>
                            <span class="response-label">respuestas</span>
                        </div>
                    </div>
                </div>

                <!-- Post 2 -->
                <div class="post-card">
                    <div class="post-header">
                        <div class="post-question">Pregunta 2</div>
                    </div>
                    <h2 class="post-title">TITULO DEL POST</h2>
                    <div class="post-footer">
                        <div class="responses-badge">
                            <span class="response-emoji">💬</span>
                            <span class="response-count">15</span>
                            <span class="response-label">respuestas</span>
                        </div>
                    </div>
                </div>

                <!-- Post 3 -->
                <div class="post-card">
                    <div class="post-header">
                        <div class="post-question">Pregunta 3</div>
                    </div>
                    <h2 class="post-title">TITULO DEL POST</h2>
                    <div class="post-footer">
                        <div class="responses-badge">
                            <span class="response-emoji">💬</span>
                            <span class="response-count">8</span>
                            <span class="response-label">respuestas</span>
                        </div>
                    </div>
                </div>

                <!-- Post 4 -->
                <div class="post-card">
                    <div class="post-header">
                        <div class="post-question">Pregunta 4</div>
                    </div>
                    <h2 class="post-title">TITULO DEL POST</h2>
                    <div class="post-footer">
                        <div class="responses-badge">
                            <span class="response-emoji">💬</span>
                            <span class="response-count">42</span>
                            <span class="response-label">respuestas</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
    .post-card {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%);
        border: 1px solid rgba(255, 255, 255, 0.12);
        width: 1580px;
        border-radius: 16px;
        padding: 1.75rem;
        cursor: pointer;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
        backdrop-filter: blur(10px);
    }

    .post-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        transition: left 0.6s;
    }

    .post-card:hover::before {
        left: 100%;
    }

    .post-card:hover {
        transform: translateY(-4px);
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%);
        border-color: rgba(255, 255, 255, 0.2);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
    }

    .post-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 1rem;
    }

    .post-question {
        font-family: 'Syne', sans-serif;
        font-size: 0.85rem;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.6);
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .post-title {
        font-family: 'Syne', sans-serif;
        font-size: 1.35rem;
        font-weight: 700;
        color: white;
        margin-bottom: 0.5rem;
        line-height: 1.4;
    }

    .post-footer {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 1.5rem;
        padding-top: 1rem;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
    }

    .responses-badge {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: rgba(255, 255, 255, 0.1);
        padding: 0.5rem 1rem;
        border-radius: 20px;
        transition: all 0.3s;
    }

    .post-card:hover .responses-badge {
        background: rgba(255, 255, 255, 0.15);
        transform: scale(1.05);
    }

    .response-emoji {
        font-size: 1.2rem;
        animation: float 3s ease-in-out infinite;
    }

    .response-count {
        font-family: 'Syne', sans-serif;
        font-weight: 700;
        font-size: 0.95rem;
        color: white;
    }

    .response-label {
        font-size: 0.85rem;
        color: rgba(255, 255, 255, 0.7);
        font-weight: 500;
    }

    @keyframes float {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-3px);
        }
    }
</style>