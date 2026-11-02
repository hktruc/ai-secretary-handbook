# Quy chuẩn mở bài cho blog công nghệ

Mọi bài mới và bài cập nhật trong `draft/content.js` phải có `why` sau `dek`:

```js
why: {
  benefit: 'Một đoạn ngắn giải thích vấn đề người đọc gặp, vì sao kỹ năng này đáng học và giá trị cụ thể của việc học.',
  context: 'Một đoạn văn tự nhiên lồng ghép các tình huống cụ thể dưới đây; không dùng nhãn hay tiêu đề công thức.',
  situations: [
    'Một tình huống cụ thể: ai đang làm việc gì, với tài liệu hoặc đầu vào nào.',
    'Một tình huống khác có thể áp dụng cùng kỹ năng.'
  ]
},
```

## Biên tập

Viết như một bài blog chia sẻ kiến thức: mở bằng hoàn cảnh quen thuộc, chỉ ra chỗ vướng, dẫn tới một nhận xét hữu ích rồi mới mời người đọc thử cách làm. Hai đoạn cần nối ý tự nhiên, không phải điền đủ ô của một khung WHY/HOW. Mỗi bài chọn một cách vào riêng; tránh lặp “Bài này giúp bạn…” hoặc câu quảng cáo chung. Tình huống giả định phải được kể như khả năng người đọc gặp, không biến thành trải nghiệm có thật của tác giả.

- Viết riêng cho từng bài, không lặp đoạn quảng cáo chung. Khoảng 2 câu ngắn cho lợi ích, 2–3 tình huống cụ thể; tránh nhắc lại nguyên `dek` hoặc `outcome`.
- `benefit` và `context` hiển thị thành hai đoạn mở đầu không đề mục. Không đưa nhãn WHY/HOW, “Vì sao nên học?” hay “Khi nào áp dụng?” vào giao diện hoặc mục lục. Giữ `situations` làm dữ liệu biên tập để kiểm tra độ cụ thể.
- WHY trả lời “Vì sao nên học?” và “Khi nào dùng?”; HOW giữ các bước, mẫu lệnh và cách kiểm tra phía sau.
- Không hứa tăng hiệu suất, lượt xem, doanh thu hay độ chính xác nếu không có bằng chứng; không nói đã thử nghiệm khi chưa thử.
- Với case study, nêu vì sao đáng học từ trường hợp này và khi nào vận dụng nguyên tắc, không biến kết quả của nhà cung cấp thành cam kết cho người đọc. Giữ nguyên nhãn minh họa và giới hạn nguồn.
- Không thay đổi chủ đề, slug, nguồn, nội dung bước làm hoặc số liệu chỉ để thêm WHY. Ngày cập nhật nguồn không tự tăng nếu chưa kiểm tra lại nguồn.
- Reviewer phải đọc đối chiếu toàn bài: tình huống phù hợp với đầu vào/quyền riêng tư, lợi ích đúng phạm vi, không thêm tính năng hoặc sự kiện chưa có nguồn. Kiểm tra tự động chỉ xác nhận cấu trúc, không thay thế biên tập.

## Thứ tự hiển thị bắt buộc

Hai đoạn mở đầu tự nhiên (lợi ích, hoàn cảnh áp dụng; không có nhãn công thức) → Kết quả → Chuẩn bị → Các bước → Mẫu lệnh → Kiểm tra → Giới hạn → Nguồn.

Trước mỗi lần xuất bản:

```sh
node scripts/validate-content.cjs
node --check draft/content.js
node --check knowledge.js
```

Sau đó kiểm tra liên kết bài, mục lục các phần hướng dẫn, nội dung trên màn hình hẹp và tìm kiếm. Không xuất bản khi thiếu WHY hoặc dùng nội dung mẫu chưa được viết lại.
