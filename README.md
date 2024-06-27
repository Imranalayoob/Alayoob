<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>الايوب</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            direction: rtl;
            background-color: var(--background-color, #f8f9fa);
            color: var(--text-color, #333);
            margin: 0;
            padding: 0;
        }
        header {
            background-color: var(--header-background, #007baa);
            color: var(--header-color, #fff);
            padding: 10px 0;
            text-align: center;
            font-size: 1.5em;
        }
        .content {
            padding: 20px;
        }
        .card {
            background: var(--card-background, #fff);
            margin: 10px 0;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .controls {
            text-align: center;
            margin: 20px;
        }
        .controls button {
            margin: 0 5px;
            padding: 10px 20px;
            background: #007baa;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .controls button:hover {
            background: #0056b3;
        }
        .info-icon {
            font-size: 1.5em;
            cursor: pointer;
            color: #007bff;
        }
        .info-modal {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            z-index: 1000;
        }
        .modal-backdrop {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
        }
        .dark-mode {
            --background-color: #121212;
            --text-color: #e0e0e0;
            --header-background: #1f1f1f;
            --header-color: #e0e0e0;
            --card-background: #1e1e1e;
        }
    </style>
</head>
<body>
    <header>
الايوب
    </header>
    <div class="controls">
        <button onclick="changeFontSize('increase')">+</button>
        <button onclick="changeFontSize('decrease')">-</button>
        <button onclick="toggleTheme()">🌚🌝</button>
        <button class="info-icon" onclick="toggleModal()">? </button>

    <div class="content">
        <div class="card" onclick="copyDua(this)">
            <p>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
        <p>قَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا ۚ إِمَّا يَبْلُغَنَّ عِندَكَ الْكِبَرَ أَحَدُهُمَا أَوْ كِلَاهُمَا فَلَا تَقُل لَّهُمَا أُفٍّ وَلَا تَنْهَرْهُمَا وَقُل لَّهُمَا قَوْلًا كَرِيمًا
</p>
<p>[﻿سورة الاسراء: 23]</p>
        </div>
        <div class="card" onclick="copyDua(this)">
            <p>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
        <p>﴿ اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ ﴾
<p>[سورة البقرة - 255]</p></p>
            </div>
        <div class="card" onclick="copyDua(this)">
            <p>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
        <p>﴿ وَاتَّقُوا يَوْمًا لَّا تَجْزِي نَفْسٌ عَن نَّفْسٍ شَيْئًا وَلَا يُقْبَلُ مِنْهَا شَفَاعَةٌ وَلَا يُؤْخَذُ مِنْهَا عَدْلٌ وَلَا هُمْ يُنصَرُونَ﴾</p>
        <p>[سورة البقرة - 45]</p>
    </div>
    <div class="card" onclick="copyDua(this)">
            <p>عن النبي صل الله عليه وسلم قال</p>
        <p>كلمتان خفيفتان على اللسان ثقيلتان في الميزان حبيبتان إلى الرحمن</p>
        <p>سبحان الله وبحمده - سبحان الله العظيم</p>
            </div>
            <div class="card" onclick="copyDua(this)">
            <p>اللهم عافي مرضانا ، وارحم موتانا ، واشرح صدورنا ، ويسر امورنا ، واجعل هذا اليوم فرج لكل صابر ، واستجابه لكل دعاء</p>
            </div>
            <div class="card" onclick="copyDua(this)">
            <p>الحياة تذهبُ وتبقى الباقِياتُ الصّالحاتُ :</p>
        <p>‏ سُبحان الله و الحمدلله و لا إله الا الله و الله اكبر</p>
            </div>
            <div class="card" onclick="copyDua(this)">
            <p>قال رسول الله ﷺ</p>
        <p>لن يجزي ولد والده 
الا ان يجده مملوكا فيشتريه فيعتقه</p>
            </div>
            <div class="card" onclick="copyDua(this)">
            <p>لا أعلم ما تخفيه صدوركم من الاحزان ولا أعلم ما تريدون من دعوات ولكن أسأل الله لي ولكم راحة تسع الكون وما فيه</p>
            </div>
            <div class="card" onclick="copyDua(this)">
            <p>اللهم صل وسلم على نبينا محمد  عطرو افواهكم بالصلاة على خير البشر</p>
            
    </div>
    <div class="modal-backdrop" onclick="toggleModal()"></div>
    <div class="info-modal">
        <p>تم تطوير الموقع بتصميم عصري وبسيط</p>
<p>يسهّل على المستخدمين قراءة الأدعية و الاذكار</p>
<p>مع توفير خيارات تخصيص</p>
<p>يوفّر الموقع كذلك ميزة نسخ الدعاء عن طريق الضغط عليه</p>
<p>و ميزة تكبير وتصغير الكتابة </p>
<p>هذا الموقع صدقة جارية لروح الاستاذ/ايوب عبد دبيس</p>

<p>و جميع المُسلمين</p>
  للتواصل info@alayoob.com</p>
        <button onclick="toggleModal()">شكراً</button>
    </div>

    <script>
        function changeFontSize(action) {
            let duaElements = document.querySelectorAll('.card p');
            duaElements.forEach(el => {
                let currentSize = parseInt(window.getComputedStyle(el).fontSize);
                if (action === 'increase') {
                    el.style.fontSize = (currentSize + 2) + 'px';
                } else {
                    el.style.fontSize = (currentSize - 2) + 'px';
                }
            });
        }

        function copyDua(element) {
            let range = document.createRange();
            range.selectNode(element);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            document.execCommand('copy');
            alert('تم النسخ😉');
        }

        function toggleModal() {
            const modal = document.querySelector('.info-modal');
            const backdrop = document.querySelector('.modal-backdrop');
            const isVisible = modal.style.display === 'block';
            modal.style.display = isVisible ? 'none' : 'block';
            backdrop.style.display = isVisible ? 'none' : 'block';
        }

        function toggleTheme() {
            document.body.classList.toggle('dark-mode');
        }
    </script>
</body>
</html>
