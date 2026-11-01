# AI dạo chơi

Website tĩnh bằng HTML/CSS/JS với các hướng dẫn AI thực hành cho học tập, sáng tạo, tổ chức cá nhân, hành chính tiền bạc và đời sống. Mỗi bài có bước làm, prompt, ví dụ minh họa, checklist, giới hạn và nguồn chính.

## Chạy tại máy

Mở trực tiếp `index.html`, hoặc chạy một HTTP server tĩnh trong thư mục dự án. Dự án không có dependency, backend, analytics hay bước build.

## Triển khai GitHub Pages

Mã nguồn hỗ trợ đường dẫn con của GitHub Pages vì mọi tài nguyên dùng đường dẫn tương đối. Nội dung trong repo chỉ là cẩm nang chung; đầu việc, báo cáo và dữ liệu cá nhân không được lưu tại đây.

## Cấu hình liên kết Notion cá nhân

Website công khai không chứa URL database riêng. Nếu muốn thêm lối tắt cá nhân, hãy giữ URL trong bookmark riêng của trình duyệt hoặc trong một tệp cấu hình cục bộ không commit. Không commit token tích hợp, API key, mật khẩu hoặc URL có thông tin nhạy cảm.

## Quyền riêng tư

Trang không gửi hoặc lưu nội dung người dùng, không dùng `localStorage`, cookie hay form thu thập dữ liệu. Tìm kiếm chỉ lọc nội dung cẩm nang có sẵn trong bộ nhớ của trang.

## Giao diện AI dạo chơi

Dashboard công khai dành cho người mới học AI: Tổng quan, Lộ trình học AI, Thư viện khám phá, Cộng đồng và Đăng ký tham gia. `dashboard.css` là lớp giao diện navy/champagne/ivory; `knowledge.js` dựng giao diện và định tuyến; `draft/content.js` giữ nguyên nội dung các bài viết.

Mọi bài viết tiếp tục miễn phí tại `#bai-viet/<slug>`. Mục lục trong bài dùng `#bai-viet/<slug>/<section>` để không rời bài khi chuyển mục. Không có bước build; có thể kiểm tra cú pháp bằng `node --check knowledge.js` và `node --check draft/content.js`.

### Trạng thái thành viên

Đăng nhập Google **chưa hoạt động**. Nút được vô hiệu hóa và giải thích công khai; không giả lập đăng nhập, không thu thập đăng ký, không có dữ liệu thành viên hoặc nội dung riêng trong mã tĩnh. Để mở chức năng này cần chọn và cấu hình dịch vụ xác thực/backend, OAuth callback/origin, bảo vệ dữ liệu phía máy chủ, và quyết định chính sách thành viên (tự động hoặc xét duyệt). Không đặt OAuth secret/token trong mã nguồn công khai. Chưa thay đổi hosting hoặc tạo dịch vụ mới.
