const record1 = "BS.nguyen_van_hai-KHOA_TIM_MACH-08:30-PHONG_302";
const record2 = "BS.le_thi_hoa-KHOA_NHI-13:00-PHONG_105";
const record3 = "BS.tran_quoc_bao-KHOA_NGOAI_THAN_KINH-15:45-PHONG_401";

const shiftRecords = [record1, record2, record3];

console.log("--- BẢNG PHÂN CÔNG CA KHÁM CỬA PHÒNG KHÁM ---");

for (let i = 0; i < shiftRecords.length; i++) {
  const record = shiftRecords[i];

  const parts = record.split("-");
  const rawDoctor = parts[0];
  const rawDept = parts[1];
  const time = parts[2];
  const rawRoom = parts[3];

  const nameWithoutPrefix = rawDoctor.replace("BS.", "").replaceAll("_", " ");

  const nameWords = nameWithoutPrefix.split(" ");
  let cleanDoctor = "";
  for (let j = 0; j < nameWords.length; j++) {
    const word = nameWords[j];
    const capitalizedWord =
      word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
    cleanDoctor = cleanDoctor + capitalizedWord + " ";
  }
  cleanDoctor = cleanDoctor.trim();

  const deptWithSpaces = rawDept.replaceAll("_", " ");

  const deptWords = deptWithSpaces.split(" ");
  let cleanDept = "";
  for (let k = 0; k < deptWords.length; k++) {
    const word = deptWords[k];
    const capitalizedWord =
      word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
    cleanDept = cleanDept + capitalizedWord + " ";
  }
  cleanDept = cleanDept.trim();

  const cleanRoom = rawRoom.replace("PHONG_", "Phòng ");

  console.log(`Bác sĩ phụ trách : ${cleanDoctor}`);
  console.log(`Chuyên khoa      : ${cleanDept}`);
  console.log(`Giờ khám         : ${time}`);
  console.log(`Phòng            : ${cleanRoom}`);
  console.log("-----------------------------------------");
}
