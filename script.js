// قائمة الترحيب بلغات متعددة
const messages = [
    "مرحبًا بك في موقع أبو عساف أحمد شوقي",     // العربية
    "Welcome to Abu Assaf's website - Ahmed Shawqi", // الإنجليزية
    "Bienvenue sur le site de Abu Assaf Ahmed Chawki", // الفرنسية
    "Bienvenido al sitio de Abu Assaf Ahmed Shawqi",   // الإسبانية
    "欢迎来到阿布·阿萨夫的网站 - 艾哈迈德·肖基",     // الصينية
    "Willkommen auf der Website von Abu Assaf Ahmed Shawqi", // الألمانية
    "Benvenuto nel sito di Abu Assaf Ahmed Shawqi", // الإيطالية
    "Добро пожаловать на сайт Абу Ассафа Ахмеда Шавки", // الروسية
    "サイトへようこそ、アブ・アッサフ・アフマド・ショーキ", // اليابانية
    "Bem-vindo ao site de Abu Assaf Ahmed Shawqi"  // البرتغالية
];

// ألوان مختلفة للعرض
const colors = [
    "#e74c3c", // أحمر
    "#3498db", // أزرق
    "#2ecc71", // أخضر
    "#9b59b6", // بنفسجي
    "#f39c12", // برتقالي
    "#1abc9c", // تركواز
    "#e84393", // وردي
    "#34495e", // رمادي غامق
    "#d35400", // بني
    "#7f8c8d"  // رمادي فاتح
];

let index = 0;

function changeMessage() {
    const messageElement = document.getElementById("welcome-message");

    // تغيير النص
    messageElement.textContent = messages[index];

    // تغيير اللون
    messageElement.style.color = colors[index];

    // الانتقال إلى الرسالة التالية
    index = (index + 1) % messages.length;
}

// أول مرة
changeMessage();

// كل 5 ثوانٍ
setInterval(changeMessage, 5000);
