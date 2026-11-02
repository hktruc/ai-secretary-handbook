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

## Giao diện và cấu trúc đọc

AI dạo chơi được tổ chức như một blog/tạp chí công nghệ thực hành cho người mới, không phải trang tin nóng. Trang chủ dẫn vào nội dung qua:

- **Bài dẫn:** một bài được biên tập chọn để người mới có điểm bắt đầu rõ ràng.
- **Các bài được chọn:** gợi ý theo nhu cầu thực hành, không phải bảng xếp hạng lượt đọc hay độ phổ biến.
- **Trang chủ đề:** cửa vào các bài cùng lĩnh vực học tập, sáng tạo, tổ chức cá nhân, hành chính tiền bạc và đời sống.
- **Thư viện đầy đủ:** tìm kiếm và lọc toàn bộ hướng dẫn cùng tình huống có nguồn.

Không gắn nhãn tin mới, thịnh hành hoặc số lượt đọc nếu không có dữ liệu chứng minh. Cấu trúc tạp chí giúp tìm bài và đọc dễ hơn; không thay đổi bản chất cẩm nang miễn phí hay tạo thêm tuyên bố về hiệu quả công cụ.

`knowledge.js` dựng giao diện và định tuyến; `draft/content.js` chứa nội dung bài viết. Các stylesheet quản lý lớp trình bày, không chứa dữ liệu thành viên.

Mọi bài viết tiếp tục miễn phí tại `#bai-viet/<slug>`. Mục lục trong bài dùng `#bai-viet/<slug>/<section>` để không rời bài khi chuyển mục. Giữ các slug và anchor đã công bố khi đổi giao diện. Không có bước build; có thể kiểm cú pháp bằng `node --check knowledge.js` và `node --check draft/content.js`.

### Trạng thái thành viên

Đăng nhập Google **chưa hoạt động**. Nút được vô hiệu hóa và giải thích công khai; không giả lập đăng nhập, không thu thập đăng ký, không có dữ liệu thành viên hoặc nội dung riêng trong mã tĩnh. Phần tài khoản/thành viên đã được hoãn phát triển. Quyết định cho giai đoạn sau: đăng nhập Google thành công thì dùng được ngay với quyền thành viên; quyền quản trị vẫn tách riêng. Cấu hình xác thực/backend, OAuth và bảo vệ dữ liệu phía máy chủ chưa được triển khai. Không đặt OAuth secret/token trong mã nguồn công khai. Chưa thay đổi hosting hoặc tạo dịch vụ mới.

## Thêm hoặc sửa bài viết

Mỗi bài giải quyết một vấn đề hoặc một việc cụ thể. Mở bằng hai đoạn văn tự nhiên dẫn từ hoàn cảnh, chỗ vướng đến điều đáng học và cách làm; không đưa nhãn WHY/HOW lên giao diện. Các trường `why.benefit`, `why.context` và 2–3 `why.situations` giữ cấu trúc biên tập phía dữ liệu.

Dùng tiêu đề thao tác có nghĩa, đoạn nối ngắn và ví dụ xuyên suốt. Hình nguyên gốc hoặc ảnh chụp được phép phải có alt text, chú thích, nguồn/tác giả và ngày phù hợp; sơ đồ minh họa không được giả làm ảnh giao diện thật. Không nhận đã thử nghiệm hoặc đưa kết quả đo khi chưa có bằng chứng. Giữ nguồn chính, ngày kiểm tra thực sự và giới hạn của từng nhận định.

Xem [mẫu và checklist biên tập](docs/article-template.md). Trước khi xuất bản, chạy `node scripts/validate-content.cjs`, kiểm cú pháp JS rồi rà bài, hình, liên kết cũ, mục lục, tìm kiếm và màn hình hẹp. Kiểm tra cấu trúc không thay thế đọc duyệt tính chính xác hoặc thử thao tác thật.
