// =========================================================================
// THE GALLERY TENNIS HOUSE - CENTRALIZED COACHES CONFIGURATION
// ไฟล์ตั้งค่าข้อมูลคุณสมบัติโค้ชแต่ละคน (แก้ไขข้อมูลโค้ชที่นี่ที่เดียว)
// =========================================================================

window.COACHES_DATA = [
    { 
        id: 'coach1', 
        name: 'Coach Gun', 
        price: 1700, 
        active: true,
        availableDays: [0, 1, 2, 3, 4, 5, 6], // 0=อาทิตย์, 1=จันทร์, ..., 6=เสาร์
        avatar: 'coach1.png',
        daysText: 'สอนทุกวัน จันทร์ - อาทิตย์', 
        desc: 'สอนทุกระดับ ตั้งแต่พื้นฐานถึงระดับสูง เน้นเทคนิค วางแผนการเล่น และพัฒนาจิตใจนักกีฬา',
        studentText: 'รับนักเรียน : เดี่ยว / กลุ่ม (1-4 คน)'
    },
    { 
        id: 'coach2', 
        name: 'Coach Nok', 
        price: 800, 
        active: true,
        availableDays: [2, 3, 4], // อังคาร - พฤหัสบดี
        avatar: 'coach2.png',
        daysText: 'สอนวัน อังคาร - พุธ - พฤหัสบดี', 
        desc: 'สอนทุกระดับ ตั้งแต่พื้นฐานถึงระดับสูง เน้นความเข้าใจเทคนิค และการฝึกที่ถูกต้อง',
        studentText: 'รับนักเรียน : เดี่ยว / กลุ่ม (1-4 คน)'
    },

    { 
        id: 'coach3', 
        name: 'Coach Nui', 
        // title: 'ASSISTANT COACH', 
        price: 400, 
        active: true,
        availableDays: [0, 1, 2, 3, 4, 5, 6], // 0=อาทิตย์, 1=จันทร์, ..., 6=เสาร์
        avatar: 'coach3.png',
        daysText: 'สอนทุกวัน จันทร์ - อาทิตย์', 
        desc: 'อดีตนักกีฬากองทัพบก เน้นสอนผู้ใหญ่ระดับเริ่มต้น วางพื้นฐานที่ถูกต้อง',
        studentText: 'รับนักเรียน : เดี่ยว / กลุ่ม (1-4 คน)'
    }
];

/**
 * ฟังก์ชันดึงข้อมูลโค้ชตั้งต้นทั้งหมด
 */
function getCentralCoaches() {
    return (typeof window.COACHES_DATA !== 'undefined' && Array.isArray(window.COACHES_DATA)) 
        ? window.COACHES_DATA 
        : [];
}

/**
 * ฟังก์ชันค้นหาข้อมูลโค้ชตาม ID
 */
function getCoachById(coachId) {
    const list = getCentralCoaches();
    return list.find(c => c.id === coachId) || null;
}