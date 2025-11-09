### Bài 5: 

#### DOM (Document Object Model)

**Element**
    - EX: `<option value="usa">United States</option>`

1. Thẻ mở
    - EX: `<option>, <option value="usa">`

2. Thẻ đóng
    - EX: `</option>`

3. Thẻ tự đóng
    - EX: `<img src="image.jpg" alt="Image description"/>`
    
4. Thuộc tính
    - Ex: value="usa" (value là thuộc tính và usa là giá trị của thuộc tính)

5. Text
    - Ex: United States

**Thẻ HTML thường gặp**
- Thẻ `<div>` (viết tắt của divide): dùng để chia các khối trong trang web

- Thẻ `<h1></h1>` đến `<h6></h6>` (viết tắt của heading): dùng để tạo ra các header phân cấp theo thứ tự từ lớn đến bé.

- Thẻ `<form></form>`: dùng để chứa một form thông tin.

- Thẻ input: text, email, radio, checkbox, file, color, range, date

- Thẻ textarea: hiển thị ô input, dạng to.

- Thẻ radio button: tạo nút chọn một (radio).

- Thẻ checkbox: tạo nút chọn nhiều lựa chọn (checkbox).

- Thẻ list và dropdown: hiển thị danh sách hoặc menu thả xuống.

- Thẻ button: tạo nút bấm.

- Thẻ table: hiển thị bảng dữ liệu.
    + thead = table heading
        + tr = table row = 1 dòng
            + th: table heading: text in đậm

    + tbody
        + tr -> td = table data

- Thẻ date picker: tạo bộ chọn ngày.

- Thẻ slider: tạo thanh trượt.

- Thẻ iframe: hiển thị nội dung từ một trang web khác bên trong trang hiện tại.     

**Selector**
- là cách chọn phần tử trên trang
- Có nhiều kiểu: 
    + XPath selector (được dùng nhiều nhất)
    + CSS selector 
    + Playwright selector

**XPath selector**
- XPath = XML Path
- Có 2 loại:
    - Tuyệt đối: đi dọc theo cây DOM
        + bắt đầu bởi 1 /

    - Tương đối: tìm dựa vào đặc tính
        + bắt đầu bởi 2 //
        + //tenthe[@thuoctinh=”gia tri”]

- Note: Nên dùng XPath tương đối

**Playwright basic syntax**

- *test*
    - Đơn vị cơ bản để khai báo một test
    > import { test } from '@playwright/test';

    > test('<tên test>', async ({ page }) => {
    > // Code của test
    > });

- *step* 
    - Đơn vị nhỏ hơn test, để khai báo từng step của test case
    - Lưu ý: step nên được map 1-1 với test case để dễ dàng maintain.
    > await test.step('Tên step', async () => {
    >// Code here
    >});

- *Basic actions*
    - Navigate
    >await page.goto('https://pw-practice.playwrightvn.com/');

    - Click
        - Singel click
        >await page.locator("//button").click();

        - Double click
        >await page.locator("//button").dblclick();

        - Right click
        >page.locator("//button").click({
        >button: 'right'
        >})

        - Click chuột kèm bấm phím khác
        >page.locator("").click({
        >modifiers: ['Shift'],
        >})

    - Input
        - Fill: Giống việc bạn paste content vào một ô input
        >page.locator("//input").fill('Playwright Viet Nam');

        - pressSequentially: Giống việc bạn gõ từng chữ cái vào ô input
        >page.locator("//input").pressSequentially('Playwright
        Viet Nam', {
        delay: 100,
        });

    - Radio/checkbox
        -Lấy giá trị hiện tại đang là check hay không:
        >const isChecked =
        page.locator("//input").isChecked();

        -Check/ uncheck
        >page.locator("//input").check();
        page.locator("//input").setChecked(false);

    - Select
        >page.locator("//select").selectOption({value/index/label});

    - Button upload file
        -Phải để file upload trong repo, như vậy khi người khác chạy script sẽ ko bị lỗi
        >page.locator("//select").setInputFiles("link file");
    
- *Kiến thức bổ sung*
    - Hover
        >await page.locator("<xpath here>").hover();

    - Hàm text(): Hàm text()dùng để tìm ra phần tử có giá trị tương ứng.
       - Ex: 
        Với DOM sau:
        `<div @class=”playwright”>This is a text</div>`
        Thì để chọn phần tử này, ta dùng cú pháp như sau:
        >//div[text()=’This is a text’]

    - Hàm contains(): 
        - Đôi khi trong phần tử HTML, phần tử sẽ bị thừa khoảng trắng, hoặc có các giá trị không cố định trong text. 

        Ví dụ
        -  `<div> Tôi là Alex </div>` // Text này có 1 ký tự space ở đầu và ở đuôi
        - `<div> Bây giờ là: 08:07 </div>` // Thời gian sẽ tuỳ vào thời điểm truy cập trang web
Để chọn các phần tử này, ta cùng hàm contains(`<giá trị>, <giá trị contains>`). 

        Ví dụ
        >//div[contains(text(), ‘Tôi là Alex’)]
        //div[contains(text(), ‘Bây giờ là:’)]

    - Tương tác với confirmation dialog
        - phải khai báo trước khi thực hiện action để hiện ra confirm dialog
        >page.on('dialog', async dialog => dialog.accept());
