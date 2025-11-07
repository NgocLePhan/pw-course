/*1. Khởi động Tàu Vũ trụ K11
Để bắt đầu hành trình, bạn cần khởi động Tàu Vũ trụ K11 bằng cách tạo một chương trình
JavaScript thực hiện các yêu cầu sau:*/
// - Hành tinh khởi đầu: Tạo một biến departurePlanet với giá trị "Trái Đất".
const departurePlanet = "Trái Đất";

//- Nhiệm vụ: Tạo một biến mission với giá trị "Khám phá Vũ trụ K11".
const mission = "Khám phá Vũ trụ E101";

//- Phi hành đoàn: Tạo một mảng crew chứa tên các thành viên phi hành đoàn: Tên các thành viên trong lớp.
const crew = ["Ngọc", "Lan", "Hòa", "Doanh", "Dũng", "Hải", "Thành"];

/*- Khởi động Tàu: Viết một hàm launchShip nhận mảng crew làm đầu vào và trả về
một thông điệp "Chuẩn bị khởi động! Phi hành đoàn gồm: <danh sách
tên thành viên phi hành đoàn> sẽ đồng hành cùng bạn trong chuyến
phiêu lưu <mission>!".*/
function launchShip(crew) {
    let crewMember = "";

    for (let i = 0; i < crew.length; i++) {
        if (i === crew.length - 1) {
            crewMember += crew[i] + " ";
        } else {
            crewMember += crew[i] + ", ";
        }
    }

    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crewMember}sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`;
}

/*- Kết nối với Trung tâm Điều khiển: Gọi hàm launchShip và in thông điệp chào mừng ra console.*/
console.log(launchShip(crew));

/*2. Du hành đến hành tinh bí ẩn
Tàu vũ trụ K11 của bạn đã cất cánh và đang trên đường đến một hành tinh bí ẩn. Để điều
hướng chính xác, bạn cần viết một hàm calculateDistance để tính toán khoảng cách đến
hành tinh đó.
Hàm calculateDistance nhận hai tham số là speed (tốc độ tàu vũ trụ) và time (thời gian
di chuyển) và trả về khoảng cách tính toán được.
Sau đó, gọi hàm calculateDistance với tốc độ 1000km/h và thời gian 24 giờ và in kết
quả ra console.*/
function calculateDistance(speed, time) {
    let distance = 0;
    distance = speed * time; // Qua˜ng đường=Vận tốc×Thời gian
    return distance;
}

const dis = calculateDistance(1000, 24);
console.log(`Quảng đường đến hành tinh bí ẩn là ${dis}km`);

/*3. Hành tinh kỳ lạ
Tàu vũ trụ K11 đã đến được hành tinh bí ẩn. Hành tinh này có một đặc điểm rất thú vị: thời gian
trên hành tinh này được tính theo hệ thập lục phân (hexadecimal).
Bạn cần viết một hàm convertTimeToHex để chuyển đổi thời gian từ hệ thập phân (decimal)
sang hệ thập lục phân. Hàm này nhận một tham số là time (thời gian) và trả về giá trị thời
gian đã được chuyển đổi sang hệ thập lục phân.
Sau đó, gọi hàm convertTimeToHex với thời gian là 120 giây và in kết quả ra console.*/
function convertTimeToHex(currentTime) {
    let hexadecimalTime = currentTime.toString(16);
    return hexadecimalTime;
};

const covertTime = convertTimeToHex(120);
console.log(`Thời gian sau khi chuyển đổi: ${covertTime}`);

/*4. Khám phá kho báu
Hành tinh bí ẩn này ẩn chứa một kho báu vô giá. Để tìm được kho báu, bạn cần giải mã một
dãy mật mã.
Mật mã được tạo thành từ các chữ cái viết thường và chữ cái viết hoa, cách nhau bởi dấu
cách.
Bạn cần viết một hàm decryptCode để giải mã mật mã. Hàm này nhận một tham số là code
(mật mã) và trả về mật mã đã được giải mã. Quy tắc giải mã như sau:
- Chữ cái viết thường sẽ được chuyển thành chữ cái viết hoa.
- Chữ cái viết hoa sẽ được chuyển thành chữ cái viết thường.
- Ví dụ: Decrypt Code sẽ được giải mã thành dECRYPT cODE.
Sau đó, gọi hàm decryptCode với mật mã là K11 Challenge và in kết quả ra console.*/
function decryptCode(code) {
    let resultCode = "";

    for (let i = 0; i < code.length; i++) {
        const character = code[i];

        //check từ ký tự viết thường thành viết hoa
        if (character === character.toLowerCase()) {
            resultCode += character.toUpperCase();
        }
        //check từ ký tự viết hoa thành viết thường
        else if (character === character.toUpperCase()) {
            resultCode += character.toLowerCase();
        }
    }
    return resultCode;
}

const result = decryptCode("E101 Challenge");
console.log(`Mật mã là: ${result}`);

/*5. Trở về Trái Đất
Sau khi khám phá kho báu, bạn cần điều khiển tàu vũ trụ K11 trở về Trái Đất.
Bạn cần viết một hàm returnToEarth để thực hiện hành động này. Hàm này không nhận
tham số đầu vào và không trả về giá trị. Hàm này chỉ đơn giản in một thông điệp "Chuẩn bị
trở về Trái Đất!" ra console.
Gọi hàm returnToEarth để hoàn thành nhiệm vụ.*/
function returnToEarth() {
    return "Chuẩn bị trở về Trái Đất!";
}

console.log(returnToEarth());