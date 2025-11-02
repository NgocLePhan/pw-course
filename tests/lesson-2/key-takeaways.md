# Tổng hợp kiến thức

### Bài 1: Getting Started

*Right Click -> Show mor -> Git Bash (Windown)*

**Cấu hình Git**
- Username:  
    >git config --global user.name“username”
- Email:  
    >git config --global user.email“email address”
- Config branch default: 
    >git config --global init.defaultBranch main

**Tạo SSH Key**
> ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

**Lấy SSH key**
> cat ~/.ssh/id_rsa.pub

**cài đặt Playwright Thư mục**
> npm init playwright@latest

### Bài 2: Git & Javascript basic

**Version Control System (VCS)**
- Local: máy cá nhân
- Centralize: máy chủ tập trung
- Distributed: lưu nhiều máy khác nhau

**Git & other VCS**
- Tính năng: dễ dùng, nhiều tính vượt trội: branching, tốc độ xử lý nhanh
- Không tốt chi phí
- Phổ biến

**Git & GitHub**

| Git | GitHub |
|:----------|:---------|
| phần mềm | dịch vụ web |
| trên máy local | một Website |
| commandline tool | có UI |
|công cụ quản lý phiên bản,đưa file vào Git repository | nơi để upload Git repository lên |
| Có các tính năng của VCS | Có các tính năng của VCS và một số tính năng khác |

**Git-three states**
- Working Directory: file mới hoặc file thay đổi
- Staging Area: Các file đưa vào vùng chuẩn bị commit (tạo ra các phiên bản)
- Repository: Các commit (phiên bản)

**Git- Key takeaways**
- Khởi tạo thư mục quản ly bởi Git: 
    >git init
- Khởi tạo cấu hình:

    1. Cho 1 repo
        > git config user.name “<name>”
        > git config user.email “<email>”

    2. Cho toàn bộ máy tính (default)
        > git config --global user.name “user”
        > git config --global user.email “email”

- Thêm file vào vùng staging
    > git add .
    > git add <tên file>

- Xem trạng thái file: git status
- Commit: 
    > git commit -m”message”
- Kiểm tra lịch sử commit: 
    > git log

**Trong lớp học, dùng convention sau: <type>: <short_description>**
- type: loại commit
    1. chore: sửa nhỏ lẻ, chính tả, xóa file không dùng tới,...
    2. feat: thêm tính năng mới, test case mới
    3. fix: sửa lỗi 1 test trước đó

** Javascript**

*Variable*
- Variable = biến, dùng để lưu trữ giá trị, có thể thay đổi giá trị được.
- Constant = hằng số. Dùng để khai báo các giá trị không thể thay đổi.
- Thường sẽ dùng let và const, KHÔNG dùng var

*Data type*
- Có 8 loại kiểu dữ liệu: String, Number, Bigint, Boolean, Undefined, Null, Symbol, Object.

*Comparison operator*
- Các toán tử so sánh:
1. So sánh hơn kém: >, <
2. So sánh bằng: ==, ===,!=, !==, >=, <=

*Unary operator*
- Dùng để tăng hoặc giảm giá trị (i++, i--)

*Arithmetic operator*
- Dùng tính toán giá trị biểu thức (+; -; *; /)

*Conditional*
- điều kiện, dùng để kiểm tra có nên thực hiện một đoạn logic không.(if (<điều kiện>) { // code })

*Loops*
- vòng lặp (for(<khởi tạo>; <điều kiện dừng>; <điều kiện tăng>) {// code })

**VSCode**
- Mac: Option + Shift + F
- Window: Alt + Shift + F

