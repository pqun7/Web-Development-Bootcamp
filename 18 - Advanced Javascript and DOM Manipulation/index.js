


const fs = require('fs');
const path = require('path');

// تحديد مسار المجلد
const folderPath = "C:\\Users\\Administrator\\OneDrive\\المستندات\\GitHub\\Web-Development-Bootcamp\\17 - Boss Level Challenge 1 - The Dicee Game\\sounds";

// قراءة محتويات المجلد
fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.error('حدث خطأ أثناء قراءة المجلد:', err);
        return;
    }

    // التكرار عبر الملفات
    files.forEach((file) => {
        const filePath = path.join(folderPath, file);

        // التحقق إذا كان العنصر ملفًا
        fs.stat(filePath, (err, stats) => {
            if (err) {
                console.error('حدث خطأ أثناء فحص الملف:', err);
                return;
            }

            if (stats.isFile()) {
                console.log(`Processing file: ${file}`);
            }
        });
    });
});
