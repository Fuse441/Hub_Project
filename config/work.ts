export interface IWorks {
  projectName: string;
  logo?: string;
  link?: string;
  images: string[];
  feature?: string;
  description: string;
}


export const iconWorks = [
  {
    name: "CO LAB",
    description: "test",
  },
];
export const works: IWorks[] = [
  {
    images: [
      "Work/colab/image.png",
      "Work/colab/image1.png",
      "Work/colab/image2.png",
      "Work/colab/image3.png",
      "Work/colab/image4.png",
    ],
    projectName: "CO LAB",
    logo: "logoProject/colab.png",
    description: `Project Overview
    Our platform serves as a central hub that connects users and partners for booking and managing co-working spaces efficiently. With an intuitive system available on both web and mobile, searching, booking, and managing workspaces becomes more convenient than ever.`,
    feature: `🔹 ลงทะเบียนพื้นที่ (Space Listing)
        🔹 ระบบจัดการการจอง (Booking Management)
        🔹 ระบบบริหารจัดการสมาชิก (Membership & Subscription)
        🔹 ระบบจัดการโปรโมชั่นและส่วนลด (Discount & Promotions)
        🔹 แดชบอร์ดวิเคราะห์ข้อมูล (Analytics Dashboard)
        🔹 ลงทะเบียนพื้นที่ (Space Listing)
        🔹 ระบบจัดการการจอง (Booking Management)
        🔹 ระบบบริหารจัดการสมาชิก (Membership & Subscription)
        🔹 ระบบจัดการโปรโมชั่นและส่วนลด (Discount & Promotions)
        🔹 แดชบอร์ดวิเคราะห์ข้อมูล (Analytics Dashboard)
        \nสำหรับผู้ใช้งาน
        🔹 ค้นหาพื้นที่ตามต้องการ (Smart Search & Filters)
        🔹 ระบบจองออนไลน์ (Online Booking & Instant Confirmation)
        🔹 รีวิวและให้คะแนนสถานที่ (Ratings & Reviews)
        🔹 ระบบการชำระเงินที่ปลอดภัย (Secure Payment System)
        🔹 ระบบสะสมแต้มและรางวัล (Loyalty Program)`,
    link: "https://github.com/Fuse441/colab"
  },
  {
    images: [],
    projectName: "HUB PORTAL",
    logo: "logoProject/hubportal.png",
    description: `Project Overview
The Web Hub Portal is a platform designed to serve as a central hub for managing and accessing various projects in a flexible and easily configurable manner. This system allows new projects to be added and configured without modifying the core web structure. By simply updating the frontend configuration, menus and content are automatically displayed according to the specified values.`,
    feature: `    การจัดการเมนูแบบไดนามิกตามสิทธิ์ของผู้ใช้
    หนึ่งในฟีเจอร์หลักของ Web Hub Portal คือระบบการจัดการเมนูที่สามารถกำหนดสิทธิ์การเข้าถึงแบบละเอียด (Role-Based Access Control) โดยเมนูและฟังก์ชันภายในเว็บจะแสดงผลตามระดับสิทธิ์ของผู้ใช้แต่ละคน เช่น

    User ทั่วไป อาจเห็นเฉพาะเมนูที่เปิดให้ใช้งานโดยไม่มีสิทธิ์แก้ไขข้อมูล
    ผู้ดูแลระบบ (Admin) สามารถเพิ่ม หรือลบเมนูของผู้ใช้แต่ละคน และกำหนดสิทธิ์เพิ่มเติม เช่น
    อนุญาตให้ สร้าง (Create) โปรเจกต์ใหม่
    อนุญาตให้ อัปเดต (Update) ข้อมูลโปรเจกต์ที่มีอยู่
    อนุญาตให้ ลบ (Delete) โปรเจกต์ที่ไม่ต้องการใช้งานแล้ว
    การบริหารจัดการโปรเจกต์อย่างมีประสิทธิภาพ
    Web Hub Portal ช่วยให้การจัดการโปรเจกต์เป็นเรื่องง่าย โดยสามารถนำโปรเจกต์ใหม่เข้ามาในระบบได้อย่างรวดเร็ว และยังรองรับการแก้ไขโครงสร้างของแต่ละโปรเจกต์โดยไม่ต้องเปลี่ยนแปลงโค้ดหลักของระบบ ตัวเว็บใช้แนวคิด Configuration-Based Rendering ซึ่งหมายความว่าแอดมินสามารถปรับเปลี่ยนหรือเพิ่มเมนูได้ง่ายเพียงแค่แก้ไขค่าคอนฟิก

    ความยืดหยุ่นและการขยายขีดความสามารถ
    ด้วยแนวทางการออกแบบที่เน้นความยืดหยุ่น Web Hub Portal สามารถรองรับการขยายตัวของระบบและรองรับผู้ใช้ที่หลากหลาย โดยสามารถเพิ่มประเภทของผู้ใช้ กำหนดสิทธิ์เฉพาะเจาะจง หรือแม้แต่รองรับโปรเจกต์ที่มีโครงสร้างข้อมูลแตกต่างกันได้อย่างอิสระ`,
  },
  {
    images: [],
    projectName: "GENERATOR",
    logo: "logoProject/generate.png",
    description: `Project Overview
This project is a system for reading and importing data from JSON files into MongoDB automatically. It is designed for internal team use, helping to easily update necessary data, reduce the complexity of data management, and improve the accuracy of importing related files.`,
    feature: `📥 ดึงข้อมูลจากไฟล์ JSON
  ระบบจะสแกนโฟลเดอร์ที่กำหนดไว้ เพื่อนำเข้าข้อมูลจากไฟล์ JSON ไปยังฐานข้อมูล MongoDB  
🔍 คัดกรองข้อมูลก่อนนำเข้า  
  มีการตรวจสอบว่าข้อมูลในไฟล์ JSON ตรงกับเงื่อนไขที่กำหนดก่อนนำเข้าฐานข้อมูล  
🗑️ จัดการข้อมูลในฐานข้อมูล MongoDB  
  ลบข้อมูลเก่าที่มีอยู่ก่อนหน้านี้เพื่อป้องกันความซ้ำซ้อน  
🔗 เชื่อมต่อและจัดการฐานข้อมูล MongoDB  
  ระบบใช้ MongoClient เชื่อมต่อกับ MongoDB และทำการดำเนินการต่างๆ โดยอัตโนมัติ  
  เมื่อดำเนินการเสร็จสิ้น ระบบจะปิดการเชื่อมต่อฐานข้อมูลอย่างปลอดภัย  
🚀 การนำไปใช้
โปรเจกต์นี้เหมาะสำหรับทีมที่ต้องการระบบจัดการข้อมูลแบบอัตโนมัติ โดยเฉพาะในกรณีที่ต้องอัปเดตฐานข้อมูลจากไฟล์ JSON เป็นประจำ ลดขั้นตอนการทำงาน และช่วยให้ข้อมูลที่ถูกนำเข้าไปยัง MongoDB มีความถูกต้องและเป็นปัจจุบันอยู่เสมอ`,
    link: "https://github.com/Fuse441/generate",
  },
  {
    images: ["Work/generateV2/market.png"],
    projectName: "GENERATOR 2",
    logo: "logoProject/generateV2.jpeg",
    description: `Project Overview
Generator V2 is an enhanced version of the first iteration, designed to offer a more convenient user experience by transforming it into a VS Code Extension. Instead of embedding JavaScript code into the project each time, users can now install the extension and configure the necessary settings directly in the .env file.`,
    feature: `
  คุณสมบัติเด่น (Features)
  ✅ VS Code Integration  ใช้งานผ่าน Command Palette หรือคีย์ลัด
  ✅ Config-based Setup  ตั้งค่าผ่าน .env เพื่อระบุโฟลเดอร์หรือโครงสร้างที่ต้องการ
  ✅ Automatic File Detection ดึงชื่อไฟล์จากโฟลเดอร์ที่กำหนดเพื่อใช้เป็นคีย์ของ JSON`,
    link: "https://github.com/Fuse441/generatev2",
  },
  {
    images: [],
    projectName: "AC-AUTOCOMPLETE",
    logo: "logoProject/autocomplete.png",
    description: `Project Overview
This project is part of the development of a VS Code Extension that provides a system to quickly and easily generate JSON structures through Snippets. It helps reduce the time spent writing repetitive JSON files automatically and supports defining standard file structures. This tool is ideal for developers and teams looking to create configuration files efficiently.`,
    feature: `
  คุณสมบัติเด่น (Features)
✅ สร้างโครงสร้าง JSON ได้อย่างรวดเร็ว ด้วย Snippet ที่รองรับฟอร์แมต JSON ต่าง ๆ
✅ รองรับคีย์โครงสร้างมาตรฐาน เช่น pt, vc, cd, cm, mr, rf, rs
✅ ดึงชื่อไฟล์อัตโนมัติ สำหรับการกำหนดคีย์ที่สัมพันธ์กับชื่อโฟลเดอร์
✅ ลดข้อผิดพลาดจากการเขียนไฟล์ซ้ำ ช่วยให้การตั้งค่าคอนฟิกเป็นไปอย่างถูกต้อง`,
    link: "https://github.com/Fuse441/ac-autocomplete",
  },
  {
    images: [
      "Work/json_sync/JsonSyncunPass.png",
      "Work/json_sync/JsonSyncPass.png",
    ],
    projectName: "JSON SYNC",
    logo: "logoProject/jsonSync.png",
    description: `Project Overview
JsonSync is a VS Code extension that allows users to easily compare JSON files with data stored in MongoDB. It reads values from configuration files within the workspace and compares them with collections in MongoDB to identify differences.`,
    feature: `คุณสมบัติเด่น (Features)
✅ เปรียบเทียบไฟล์ JSON กับคอลเลกชันใน MongoDB
✅ แสดงผลการเปรียบเทียบใน Output Panel ของ VS Code พร้อมสีที่ช่วยให้เข้าใจง่าย

🟩 ไม่มีความแตกต่าง (JSON และฐานข้อมูลตรงกัน)
🟥 พบความแตกต่าง (JSON และฐานข้อมูลไม่ตรงกัน)
✅ รองรับการทำงานกับคอลเลกชันที่กำหนดในไฟล์ .env`,
    link: "https://github.com/Fuse441/jsonsync",
  },
  {
    images: [
      "Work/generate_swagger/formatExcel.png",
      "Work/generate_swagger/swaggerUI.png",
    ],
    projectName: "Generator Swagger",
    logo: "logoProject/LogoSwagger.webp",
    description: `Project Overview
XLSX to Swagger API is an API that converts Excel (XLSX) files into Swagger YAML files without the need to manually create the YAML files. By simply sending an XLSX file to the API, the system will generate multiple YAML files and return them as a ZIP file, ready for use.`,
    feature: `
  คุณสมบัติเด่น (Features)
  ✅ แปลงไฟล์ Excel (XLSX) เป็น Swagger YAML – ลดเวลาการเขียนเอกสาร API
  ✅ รองรับโครงสร้าง API มาตรฐาน – กำหนด path, query, header, body, และ response จาก Excel
  ✅ เช็คโครงสร้างอัตโนมัติ – ตรวจสอบพารามิเตอร์ เช่น pathParam, queryParam, และ headerParam
  ✅ รองรับการกำหนด HTTP Status Code – ปรับเปลี่ยน HttpStatus Response เป็น String และรองรับ mandatory fields`,
    link: "https://github.com/Fuse441/GeneratorSwag/tree/dev",
  },
  {
    images: ["Work/generate_swagger/web_upload.png"],
    projectName: "SwaggerUI-View",
    logo: "logoProject/LogoSwagger.webp",
    description: `Project Overview
SwaggerUI-View is an upgraded version that builds upon the XLSX to Swagger API by adding a Web Interface. This allows users to upload Excel files and immediately view the generated Swagger YAML as selectable menus through Swagger UI.`,
    feature: `คุณสมบัติเด่น (Features)
    ✅ อัปโหลด XLSX ผ่าน Web UI – ไม่ต้องใช้ Postman
    ✅ แปลงไฟล์เป็น Swagger YAML อัตโนมัติ
    ✅ แสดง Swagger UI พร้อมเมนู API
    ✅ ดาวน์โหลด YAML รายไฟล์ หรือทั้งหมดใน ZIP
    ✅ รองรับ HTTP Status Code, pathParam, และ mandatory fields
    ✅ ใช้งานง่ายผ่านเว็บเบราว์เซอร์`,
    link: "https://github.com/Fuse441/SwaggerUI-view",
  },
  {
    images: [""],
    projectName: "Survery (Workforce Skill Development Platform)",
    logo: "logoProject/logoSurvey.png",
    description: `Project Overview
    A platform to recommend relevant training courses for employees based on department-specific needs. Users select their department and input skills/preferences, while the backend generates recommendations and visualizes workforce skills data.`,
    feature: ``,
    link: "https://github.com/Fuse441/survey_epm",
  },
  {
  images: ["Work/rustLoadX/rustLoadX.png"],
  projectName: "rustLoadX",
  logo: "logoProject/rustLoadX.png",
  description: `Project Overview
rustLoadX is a high-performance CLI-based Kafka Load Testing Tool built with Rust. 
It is designed to benchmark Kafka producer throughput, measure latency, and analyze system stability in real time through a terminal-based interface.

The tool focuses on performance, concurrency, and observability, making it suitable for stress testing Kafka clusters and validating infrastructure scalability.`,
  
  feature: `Key Features
  🚀 High-throughput Kafka producer load testing
  📊 Real-time Terminal UI (TUI) metrics display
  ⚡ Concurrent async message production (Tokio-based)
  📈 Throughput & latency monitoring (Avg, P95, P99)
  🎯 Configurable message size, batch size, and concurrency
  🔍 Error tracking & performance visibility
  🦀 Built with Rust for safety and performance`,
  
  link: "https://github.com/Fuse441/rustLoadX",
}

  ];
