# premotio.com — آینه‌ی استاتیک (Scrape)

این پوشه خروجی build شده‌ی سایت `https://premotio.com/` است که در تاریخ 2026-11-09 دانلود شده.

## محتویات

- `index.html` — صفحه اصلی
- `legal/*/index.html` — صفحات Terms, Privacy, Cookies, Refunds, License, Acceptable Use
- `_nuxt/*.js` — چانک‌های جاوااسکریپت (Nuxt 3 / Vue 3)
- `_nuxt/*.css` — استایل‌ها
- `_nuxt/*.svg`, `pictures/*.webp`, `customization/*.webp`, `library/*.webp` — تصاویر
- `fonts/InterTight-Variable.woff2` — فونت
- `_payload.json`, `_scrape-report.json` — داده‌های Nuxt و گزارش دانلود

## اجرای لوکال

چون سایت از مسیرهای مطلق (`/_nuxt/...`) استفاده می‌کند، باید از ریشه‌ی همین پوشه سرو شود:

```powershell
cd premotio-scrape
python -m http.server 8123
```

سپس باز کنید: `http://localhost:8123/`

## نکته‌ها

- این خروجیِ کامپایل‌شده‌ی Nuxt است؛ سورس اصلی Vue (فایل‌های `.vue`، تنظیمات build و کد سرور) به‌صورت عمومی سرو نمی‌شود و در نتیجه قابل استخراج نیست.
- اسکریپت دانلود: `../scrape.mjs` — اسکریپت بررسی ارجاع‌ها: `../verify.mjs`
- محتوای سایت متعلق به premotio است و این آینه صرفاً برای مطالعه/استفاده‌ی شخصی دانلود شده است.
