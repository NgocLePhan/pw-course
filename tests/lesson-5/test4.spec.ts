import { test } from '@playwright/test';

test("Verify Bài học 4: Personal notes", async({page}) =>{
    const notes = [
        {title: "Nhà sáng lập Reddit: 'Giới trẻ đang chọn kiểu mạng xã hội mới'", contain: "Alexis Ohanian, đồng sáng lập Reddit, cho rằng thế hệ trẻ ngày nay đã học hỏi và ưa chuộng một cuộc sống ít 'game hóa' hơn, không còn chạy theo số lượng người theo dõi hay lượt thích."},
        {title: "TikTok Shop đối mặt 'bão' sản phẩm giả do AI", contain: "Kẻ lừa đảo dùng công cụ AI tạo sinh để tạo thương hiệu và sản phẩm giả, khiến TikTok phải tăng cường kiểm duyệt bằng cả AI lẫn con người."},
        {title: "Việt Nam có thể thuộc nhóm quốc gia có luật AI sớm nhất", contain: "Nếu Luật Trí tuệ nhân tạo được Quốc hội thông qua, Việt Nam thuộc nhóm những quốc gia đầu tiên trên thế giới có luật chuyên biệt về trí tuệ nhân tạo (AI), theo ông Hồ Đức Thắng."},
        {title: "6 nâng cấp dự kiến trên thế hệ Galaxy S26", contain: "Galaxy S26, thế hệ smartphone cao cấp ra mắt đầu năm sau của Samsung, được cho là sẽ trang bị chip Exynos 2600 2 nm, màn hình bảo mật và sạc nhanh 60 W."},
        {title: "Vì sao nhiều công ty tìm cách khai khoáng vũ trụ?", contain: "Tiểu hành tinh giàu khoáng sản, thiên thể băng và lớp đất Mặt Trăng có thể chứa những vật liệu quý, thu hút ngày càng nhiều công ty tìm cách khai thác."},
        {title: "Elon Musk: 'AI là cơn sóng thần hủy diệt công việc bàn giấy'", contain: "Elon Musk dự đoán AI khiến công việc văn phòng ngày nay trở nên lỗi thời, giống như tính toán bằng tay trong thời đại máy tính."},
        {title: "Meta có thể 'kiếm được 16 tỷ USD từ quảng cáo lừa đảo'", contain: "Tài liệu nội bộ rò rỉ cho thấy Meta từng dự đoán có thể thu về 10,1% trong tổng doanh thu 2024, tương đương 16 tỷ USD, từ quảng cáo lừa đảo trên các nền tảng của mình."},
        {title: "Đại diện DeepSeek lần đầu xuất hiện công khai từ khi nổi tiếng", contain: "Lần đầu xuất hiện sau gần một năm trở thành hiện tượng toàn cầu, đại diện DeepSeek đưa ra phát ngôn bi quan về tác động của AI đối với xã hội và việc làm"},
        {title: "Tạo bản sao AI thay thế CEO để trò chuyện với nhân viên", contain: "Nhiều công ty đang tạo bản sao kỹ thuật số của các lãnh đạo để làm việc và trò chuyện với nhân viên 24/7."},
        {title: "Tại sao con người không thể chìm ở Biển Chết?", contain: "Nằm giữa Jordan ở phía đông và Israel, Palestine ở phía tây, Biển Chết là kỳ quan địa chất nổi tiếng với độ mặn cực hạn và khả năng đẩy mọi vật nổi dễ dàng trên bề mặt."},
    ]

    await test.step("Go to Personal notes page", async() =>{
        await page.goto("https://material.playwrightvn.com/index.html");
        await page.locator("//a[@href='04-xpath-personal-notes.html']").click();
    })

    await test.step("Add 10 notes", async() =>{
        for(let note of notes){
            await page.locator("//input[@id='note-title']").fill(note.title);
            await page.locator("//textarea[@id='note-content']").fill(note.contain);
            await page.locator("//button[@id='add-note']").click();
        }
    })

    await test.step("Search title of node", async() =>{
        await page.locator("//input[@id='search']").fill("Vì sao nhiều công ty");
    })
})