const modules=['เวชปฏิบัติครอบครัวและชุมชน','การพยาบาลในชุมชน','ส่งเสริมสุขภาพทุกกลุ่มวัย','ป้องกันและควบคุมโรคและระบาดวิทยา','อาชีวอนามัยและความปลอดภัย','สุขาภิบาลและอนามัยสิ่งแวดล้อม','พัฒนาระบบบริการปฐมภูมิและเครือข่าย','อนามัยโรงเรียน','สุขภาพจิตและจิตเวชในชุมชน','บำบัดยาเสพติด สุรา บุหรี่','สุขศึกษาและพัฒนาพฤติกรรมสุขภาพ','จัดเก็บรายได้หน่วยบริการ','ข้อมูลคุณภาพ'];
const progress=[92,78,88,81,74,69,85,90,72,66,83,95,87];
document.getElementById('moduleList').innerHTML=modules.map((m,i)=>`<div class="module"><b>${String(i+1).padStart(2,'0')}. ${m}</b><span>ความก้าวหน้า ${progress[i]}%</span></div>`).join('');
document.getElementById('bars').innerHTML=modules.slice(0,7).map((m,i)=>`<div class="bar"><label><span>${m}</span><b>${progress[i]}%</b></label><div class="track"><div class="fill" style="width:${progress[i]}%"></div></div></div>`).join('');
function newTask(){alert('เปิดฟอร์มเพิ่มงานใหม่ — ขั้นถัดไปจะเชื่อมฐานข้อมูลและระบบสิทธิ์ผู้ใช้งาน');}
