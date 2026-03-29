# Backend MCP (Model Context Protocol) with Prisma & Express

โปรเจกต์นี้เป็นระบบ Backend API ที่พัฒนาด้วย Node.js และ Express โดยใช้สถาปัตยกรรม MCP เพื่อให้ AI (Gemini) ทำหน้าที่เป็นผู้ตัดสินใจเลือกใช้ Tool ในการดึงข้อมูลจากฐานข้อมูล (PostgreSQL) ผ่าน Prisma ORM

## ภาพรวมการทำงานของระบบ
1. รับคำสั่ง: ผู้ใช้งานส่งข้อความผ่าน Endpoint `/chat`
2. วิเคราะห์: ระบบส่งข้อความพร้อมโครงสร้าง Database (Schema) ให้ AI วิเคราะห์เจตนา
3. เรียกใช้ Tool: AI ตัดสินใจเลือกใช้ Tool ที่ชื่อ `query` และส่ง Parameter มาให้
4. ตรวจสอบความปลอดภัย: Zod จะตรวจสอบ Parameter เพื่อป้องกันคำสั่งอันตราย (อนุญาตเฉพาะคำสั่งอ่านข้อมูล เช่น `findMany`, `findFirst`)
5. ดึงข้อมูล: Prisma ORM รันคำสั่งดึงข้อมูลจาก Database ตามที่ Tool ระบุ
6. ประมวลผลคำตอบ: ส่งข้อมูลที่ได้กลับไปให้ AI สรุปผลเป็นภาษาธรรมชาติ และตอบกลับผู้ใช้

## อธิบายโครงสร้างไฟล์และการทำงาน (ตามโจทย์)

- src/index.ts: ไฟล์หลักสำหรับตั้งค่าเซิร์ฟเวอร์ Express รวม Router ต่างๆ เข้าด้วยกัน และตั้งค่า Rate Limiting เพื่อป้องกันการยิง Request รัวๆ ใส่ระบบ
- src/lib/llm.ts: เชื่อมต่อกับ Gemini โดยกำหนด System Prompt ให้ AI รู้จัก Schema ของ Database และสร้าง Function Calling Loop เพื่อให้ AI เรียกใช้ Tool ดึงข้อมูลได้เองเมื่อจำเป็น
- src/tools/queryTool.ts: ตัวจัดการ Tool ที่ทำหน้าที่รับคำสั่งจาก AI มาแปลงเป็น Prisma Query มีจุดเด่นคือการทำ Zod Schema Validation แบบ Whitelist เพื่อจำกัดสิทธิ์การเข้าถึงข้อมูลให้ปลอดภัย
- src/lib/schemaReader.ts: ฟังก์ชันอ่านไฟล์ `schema.prisma` เพื่อดึงรายชื่อ Model และ Field ส่งไปเป็น Context ให้ AI เข้าใจโครงสร้าง Database แบบไดนามิก
- src/chatRouter.ts: API Endpoint (`/chat`) สำหรับรับข้อความทั่วไปจากผู้ใช้งาน
- src/mcpRouter.ts: API Endpoint (`/mcp`) สำหรับทดสอบส่ง Payload แบบ JSON เพื่อเรียกใช้งาน Tool โดยตรง