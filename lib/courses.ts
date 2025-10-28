export interface Module {
  id: number;
  name: string;
  color?: string;
}

export interface Course {
  slug: string;
  title: string;
  category: string;
  description: string;
  totalModules: number;
  relatedJobs: number;
  author: string;
  modules: Module[];
  links: { source: number; target: number }[];
}

export const coursesData: Course[] = [
  {
    slug: "customer-service",
    title: "Customer Service",
    category: "งานบริการลูกค้า",
    description: "เรียนรู้ทักษะการสื่อสาร การแก้ปัญหา และการใช้เครื่องมือดิจิทัล เพื่อการบริการลูกค้าที่เป็นเลิศและสร้างความประทับใจ",
    totalModules: 5,
    relatedJobs: 50,
    author: "O-Guard Academy",
    modules: [
      { id: 1, name: "Module 1: หลักการบริการลูกค้าที่เป็นเลิศ (Customer Centricity)", color: "#fbbf24" },
      { id: 2, name: "Module 2: เทคนิคการสื่อสารผ่านแชทและโทรศัพท์", color: "#fbbf24" },
      { id: 3, name: "Module 3: Google Workspace และเครื่องมือดิจิทัล", color: "#fbbf24" },
      { id: 4, name: "Module 4: Workshop การจัดการ Social Media และสร้างคอนเทนต์ด้วย Canva", color: "#fbbf24" },
      { id: 5, name: "Module 5: สถานการณ์จำลอง: การรับมือกับลูกค้า", color: "#fbbf24" },
    ],
    links: [
      { source: 1, target: 2 },
      { source: 2, target: 3 },
      { source: 3, target: 4 },
      { source: 4, target: 5 },
    ],
  },
  {
    slug: "logistics",
    title: "พนักงานคลังสินค้าและโลจิสติกส์",
    category: "งานคลังสินค้าและโลจิสติกส์",
    description: "พัฒนาทักษะรอบด้านสำหรับงานคลังสินค้า ตั้งแต่การสื่อสาร การใช้เครื่องมือดิจิทัล ไปจนถึงการสร้างคอนเทนต์เพื่อการตลาด",
    totalModules: 5,
    relatedJobs: 65,
    author: "O-Guard Academy",
    modules: [
      { id: 1, name: "Module 1: ทำความรู้จัก Customer Centricity", color: "#fbbf24" },
      { id: 2, name: "Module 2: Google Workspace และเครื่องมือพื้นฐาน", color: "#fbbf24" },
      { id: 3, name: "Module 3: Workshop พัฒนา Social Media", color: "#fbbf24" },
      { id: 4, name: "Module 4: Workshop พัฒนาคอนเทนต์ด้วย Canva", color: "#fbbf24" },
      { id: 5, name: "Module 5: ทดลองสร้างคอนเทนต์จริง", color: "#fbbf24" },
    ],
    links: [
      { source: 1, target: 2 },
      { source: 2, target: 3 },
      { source: 3, target: 4 },
      { source: 4, target: 5 },
    ],
  },
  {
    slug: "on-site-service",
    title: "พนักงานหน้าร้าน (On-site Services)",
    category: "งานหน้าร้านและบริการ",
    description: "เสริมสร้างความมั่นใจและทักษะที่จำเป็นสำหรับงานหน้าร้าน ตั้งแต่ Service Mind การใช้ระบบ POS ไปจนถึงการแก้ปัญหาเฉพาะหน้า",
    totalModules: 5,
    relatedJobs: 40,
    author: "O-Guard Academy",
    modules: [
      { id: 1, name: "Module 1: Service Mind และการสื่อสารกับลูกค้า", color: "#fbbf24" },
      { id: 2, name: "Module 2: เรียนรู้การใช้งานระบบ POS", color: "#fbbf24" },
      { id: 3, name: "Module 3: การทำความเข้าใจสินค้าและบริการ", color: "#fbbf24" },
      { id: 4, name: "Module 4: การแก้ปัญหาเฉพาะหน้า", color: "#fbbf24" },
      { id: 5, name: "Module 5: การทำงานร่วมกับทีม", color: "#fbbf24" },
    ],
    links: [
      { source: 1, target: 2 },
      { source: 2, target: 3 },
      { source: 3, target: 4 },
      { source: 4, target: 5 },
    ],
  },
];
