import { Injectable } from '@angular/core';

@Injectable()
export class Course {
    constructor() {
        
    }
    courseList=[{
        "id":1,
        "title": "دوره آموزشی برنامه نویسی سمت کاربر (Front-End)",
        "description":"طراحی سایت و صفحات وب، امروزه  یکی از شغل‌های پرطرفدار و پردرآمد می‌باشد. طراحی وب مجموعه ای از تکنیک‌ها است که بر پایه‌ی تعداد زیادی از استانداردهای جهانی استوار شده است که مهمترین این استانداردها زبانهای HTML و CSS هستند. در این دوره آموزشی شما با HTML5، CSS3 و JavaScript آشنا خواهید شد و انواع تکنیک‌های مختلف را در این زمینه و از سطوح ابتدایی فرا خواهید گرفت.",
        "material":["آموزش ایجاد صفحات وب بوسیله HTML5 و CSS3.",
        "آموزش ایجاد صفحات واکنش‌گرا(Responsive) با استفاده از Bootstrap.",
        "آموزش JavaScript و Jquery برای پویایی و ایجاد صفحات ..interactive."
    ],
    "teacher":"جواد توکلی",
    "startDate":"شنبه ۲۰ مردادماه ۹۷",
    "capacity":"10",
    "price":"410000",
    "length":"30",
    "dates":"روزهای شنبه و سه شنبه از ساعت ۱۸:۰۰ تا ۲۰:۰۰",
    "place":"خیابان دهخدا، شرکت کاما",
    "thumbnail": ""
},
{
    "id":2,
    "title": "دوره آموزشی برنامه‌نویسی سمت سرور (Back-End)",
    "description":"هر وبسایت برای اینکه بتواند پویا باشد و اطلاعات آن را بروز رسانی کرد نیاز به ذخیره داده هایش بر روی مکانی به نام سرور دارد در این دوره شما خواهید آموخت چگونه یک وبسایت پویا بسازید و داده های وبسایت خود را از طریق برنامه هایی که می نویسید کنترل نمایید ، داده ها را از کاربر های مختلف دریافت نمایید سپس ذخیره کرده و در جا های مختلف به آنها نمایش دهید.",
    "material":["آموزش برنامه نویسی سامانه های وب و مدیریت پایگاه داده (با استفاده از PHP و mysql)."
],
"teacher":"جواد توکلی",
"startDate":"شنبه ۲۰ مردادماه 97",
"capacity":"10",
"price":"465000",
"length":"30",
"dates":"روزهای شنبه  و سه شنبه از ساعت ۰۹:۳۰  تا ۱۱:۳۰",
"place":"خیابان دهخدا، شرکت کاما",
"thumbnail": ""
},
{
    "id":3,
    "title": "دوره آموزشی برنامه‌نویسی موبایل (Android)",
    "description":"سیستم عامل اندروید امروزه بیشتر از هر زمان دیگری به عنوان سیستم عامل دستگاه‌ های هوشمند ( موبایل و تبلت ) استفاده می شود به طوری که بیش از 87  درصد ازدستگاه‌ های هوشمند که امروزه تولید می­‌شوند، از سیستم عامل­‌های اندروید استفاده می‌کنند. در ایران نیز، سرعت رشد استفاده از اپلیکیشن‌ها برای زندگی روزمره و ایجاد اپلیکیشن های متنوع، بسیار زیاد است.یادگیری این زبان، به یادگیرنده این امکان را می‌دهد تا ایده­‌ها و علایق خود را عملی کرده و حتی به آن­‌ها به عنوان پروژه­ های سود­ زا نگاه کند.",
    "material":["آموزش مقدماتی برنامه نویسی به زبان Java",
    "آموزش طراحی صفحات بوسیله XML",
    "آموزش ایجاد و مدیریت پایگاه داده با Sqllite",
    "آموزش نحوه کار با سیستم توسعه یکپارچه Android Studio"
],
"teacher":"جواد توکلی",
"startDate":"یک شنبه ۲۱ مرداد ماه 97",
"capacity":"10",
"price":"485000",
"length":"30",
"dates":"روزهای یک شنبه و چهار شنبه از ساعت ۰۹:۳۰ تا ۱۱:۳۰",
"place":"خیابان دهخدا، شرکت کاما",
"thumbnail": ""
},
{
    "id":4,
    "title": "آموزش تصویرسازی با نرم‌افزار Illustrator",
    "description":"نرم‌افزا ایلاستریتور (illustrator) یکی از قدرتمندترین نرم‌افزارهای طراحی و ویرایش به صورت برداری می‌باشد. این نرم‌افزار، ابزار طراحی قدرتمند جهت خلق آثار وکتور و افکت‌های گرافیکی به همراه براش-Brushهای متفاوت و ابزار کنترل رنگ به همراه محیط سازگار با فتوشاپ و سایر محصولات Adobe را در اختیار طراحان قرار می‌دهد. توسط این نرم افزار کاربران قادر خواهند بود تا به طراحی برداری بر روی تصاویر، فایل‌های تصویری، انیمیشن‌های فلش و سایر منابع چند رسانه‌ای بپردازند.",
    "material":["آموزش ایجاد شکل و فرم، درج متن و مدیریت آنها",
    "آموزش مدیریت صفحه‌ها و Artboard های مختلف.",
    "آموزش انواع مدهای رنگی نرم‌افزاری.",
    "آموزش مفاهیم وضوح تصویر و تفاوت نرم‌افزارهای برداری و پیکسلی.",
    "آشنایی با ابزار پرکاربرد Pen و ایجاد Shapهای مبتنی بر Path.",
    "آموزش ایجاد آیکون‌، نماد و لوگو.",
    "آموزش کار با Effect ها.",
    "آموزش کار با لایه ها."
    
],
"teacher":"امیر توکلی",
"startDate":"یک شنبه ۲۱ مردادماه ۹۷",
"capacity":"10",
"price":"317000",
"length":"21",
"dates":"روزهای یکشنبه و چهارشنبه از ساعت ۱۸:۳۰ تا ۲۰:۰۰",
"place":"خیابان دهخدا، شرکت کاما",
"thumbnail": ""
},
{
    "id":5,
    "title": "آموزش صفحه آرایی با نرم‌افزار InDesign",
    "description":"نرم‌افزار ایندیزاین (InDesign) یکی از پیشرفته‌ترین نرم‌افزارهای نشر و صفحه‌آرایی در دنیا می‌باشد. شما با کمک این نرم‌افزار به راحتی می‌توانید صفحات یک مجله یا یک بروشور را طراحی کنید. در واقع ابزارهای این برنامه به شما کمک می‌کنند تا یک متن ساده را تبدیل به متنی بسیار جذاب کنید. به عبارت دیگر شما می توانید با ابزارهای این برنامه حاشیه هایی بسیار زیبا به متن خود اضافه کنید و از همه مهمتر تصاویری را در کنار متن قرار دهید تا علاوه بر زیباتر شدن صفحه باعث جلب توجه خوانندگان نیز گردد.",
    "material":["آموزش مقدماتی اصول صفحه آرایی.",
    "آموزش مفاهیم وضوح تصویر و تفاوت نرم‌افزارهای برداری و پیکسلی.",
    "آموزش کار با ابزارهای پرکاربرد در صفحه آرایی.",
    "آموزش کار با Effect ها.",
    "آموزش کار با لایه ها.",
    "آموزش ایجاد و ویرایش متن و پاراگراف.",
    "آموزش MasterPage ها و مدیریت صفحات.",
    "آموزش کار با متغیرهای متنی.",
    "آموزش صفحه آرایی برشور، کاتالوگ و نشریه (هفته‌نامه و روزنامه)."
    
],
"teacher":"امیر توکلی",
"startDate":"یک شنبه ۲۱ مردادماه ۹۷",
"capacity":"10",
"price":"316000",
"length":"21",
"dates":"روزهای یکشنبه و چهارشنبه از ساعت ۱۶:۳۰ تا ۱۸:۰۰",
"place":"خیابان دهخدا، شرکت کاما",
"thumbnail": ""
}]
}
