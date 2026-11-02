# Quy chuẩn biên tập AI dạo chơi

AI dạo chơi là blog công nghệ thực hành cho người mới. Học cách tổ chức bài dễ đọc của một tạp chí công nghệ, nhưng không chạy theo tin nóng, thông số quảng cáo hay lời hứa về hiệu quả chưa đo. Mỗi bài theo đuổi **một vấn đề hoặc một việc cụ thể**; người đọc phải biết mình đang làm gì, vì sao cần làm và kiểm kết quả ở đâu.

## Chọn câu chuyện trước khi viết hướng dẫn

- Tiêu đề gọi đúng việc người đọc cần làm, đối tượng hoặc kết quả. Chỉ đưa tên công cụ vào khi nó giúp chọn bài; không ép mọi tiêu đề thành danh sách mẹo.
- `dek` là một đến hai câu dẫn, nêu vấn đề và hướng giải quyết; không kể lại toàn bộ tiêu đề hay mở bài.
- Mở từ hoàn cảnh quen thuộc, chỉ ra chỗ vướng, đưa ra một nhận xét hữu ích rồi dẫn tới cách làm. Giữ một tình huống xuyên bài, thay vì thay người dùng và mục đích ở mỗi phần.
- Mỗi bài cần cách vào riêng. Không lặp “Bài này giúp bạn…” hoặc biến đoạn mở thành các ô WHY/HOW. Không dựng trải nghiệm ngôi “tôi”, lời người dùng hay kết quả thử nghiệm nếu không có bằng chứng.

## Dữ liệu mở bài

Mọi bài mới và bài cập nhật trong `draft/content.js` phải có `why` sau `dek`:

```js
why: {
  benefit: 'Đoạn mở bằng một hoàn cảnh cụ thể và điều người đọc đang vướng, viết riêng cho bài này.',
  context: 'Đoạn nối tiếp nêu điều đáng chú ý và dẫn tự nhiên tới cách làm hoặc công cụ, trong đúng phạm vi bài.',
  situations: [
    'Một tình huống cụ thể: ai đang làm việc gì, với tài liệu hoặc đầu vào nào.',
    'Một tình huống khác có thể áp dụng cùng kỹ năng.'
  ]
},
```

Tên trường là quy ước dữ liệu, không phải nhãn để đưa lên trang. `benefit` và `context` hiển thị thành hai đoạn mở đầu không đề mục, khoảng 50–120 từ tổng cộng. Giữ `situations` làm dữ liệu biên tập với 2–3 tình huống cụ thể; không chuyển chúng thành danh sách lặp lại hai đoạn mở. Tránh chép nguyên `dek` hoặc `outcome`.

Với case study, giải thích nguyên tắc đáng học và hoàn cảnh có thể thử vận dụng. Phân biệt lời kể của nhà cung cấp, tổ chức triển khai và đánh giá độc lập; không suy rộng kết quả của một tổ chức thành cam kết cho người đọc.

## Viết thân bài có nhịp

Mỗi mục giải quyết một câu hỏi hoặc thao tác. Dùng `steps.title` để gọi tên hành động có nghĩa, như “Mở trích dẫn và đọc cả đoạn xung quanh”, thay vì “Bước tiếp theo”. Đánh số khi thứ tự thực sự quan trọng; không biến mọi đoạn giải thích thành checklist.

Sau một thao tác khó, thêm một câu giải thích vì sao cần làm hoặc điều người đọc nên nhìn thấy. Ví dụ, mở được trích dẫn mới chỉ là điểm bắt đầu: còn phải đọc xem đoạn gốc có hỗ trợ đúng kết luận hay không. Đặt điều kiện tài khoản, quyền sử dụng tài liệu và cảnh báo ảnh hưởng đến quyết định ngay trước thao tác liên quan.

Prompt phục vụ việc đang làm, không thay toàn bộ bài bằng một khối lệnh. Nói rõ phần nào người đọc cần thay và dùng dữ liệu minh họa nào. Giữ một hoặc hai lỗi dễ gặp nổi bật trong thân; dùng checklist cuối bài để rà lại, tránh lặp nguyên văn mọi cảnh báo ở nhiều chỗ.

Kết bài có thể nhắc một kết quả nên lưu và một bài đọc tiếp đúng nhu cầu. Không bắt buộc thêm đoạn tổng kết khẩu hiệu, lời khen công cụ hoặc lời hứa tiết kiệm thời gian.

## Hình minh họa, chú thích và nguồn

- Một hình phục vụ một thao tác hoặc một quyết định: chọn nguồn, xem quan hệ giữa các phần, mở trích dẫn hay nhận ra chỗ phải kiểm. Đặt hình gần đoạn cần giải thích; không thêm robot hoặc logo chỉ để lấp chỗ trống.
- Ưu tiên sơ đồ, hình minh họa nguyên gốc hoặc ảnh chụp thật được phép dùng. Hình tự vẽ mô tả luồng phải ghi rõ là **sơ đồ minh họa**, không dựng giao diện giả rồi gọi là ảnh chụp ứng dụng.
- Mỗi hình có alt text mô tả thông tin cần hiểu và chú thích giải thích điều nên chú ý. Ghi tác giả/nguồn hoặc “Minh họa: AI dạo chơi”; ghi ngày tạo hình hay ngày chụp đúng thực tế. Với ảnh chụp giao diện, ghi thêm ngôn ngữ và phiên bản nếu xác định được.
- Không để lộ tên tài khoản, email, tài liệu thật, ảnh trẻ em hoặc nội dung chưa được phép. Dữ liệu giả phải có nhãn ngay trong hình hoặc chú thích, không chỉ ở cuối bài.
- Ảnh chụp cũ không chứng minh vị trí nút hiện tại. Kiểm lại thao tác trước khi dùng ảnh như hướng dẫn; nếu chưa kiểm được, nói rõ giới hạn thay vì gắn nhãn đã thử.

## Bằng chứng và tính chính xác

Dẫn nguồn chính cạnh thông tin dễ thay đổi như tính năng, menu, hạn mức và chi phí; danh sách cuối bài giúp kiểm tra lại. Ghi đúng ngày truy cập hoặc ngày kiểm tra thực sự. Ngày tạo hình, sửa văn và ngày xác minh nguồn là những việc khác nhau, không tự đổi thành một ngày “đã kiểm chứng”.

Không hứa tăng hiệu suất, lượt xem, doanh thu hay độ chính xác khi chưa có bằng chứng tương xứng. Nếu mô tả thử nghiệm thật, phải có đầu vào, phạm vi, cách kiểm và kết quả quan sát; nếu chỉ dựa vào tài liệu hãng hoặc đưa ví dụ giả, ghi đúng như vậy. Giữ nguyên nhãn minh họa và giới hạn nguồn trong các case study.

Reviewer đọc đối chiếu toàn bài: tình huống có khớp đầu vào và quyền riêng tư không, lợi ích có đúng phạm vi không, có vô tình thêm tính năng hoặc sự kiện chưa có nguồn không? Không thay slug, chủ đề, số liệu, nguồn hoặc các bước kỹ thuật chỉ để làm câu văn hấp dẫn hơn.

## Cấu trúc đọc và các liên kết cũ

Hai đoạn mở tự nhiên → đoạn kết quả cụ thể không đề mục → Chuẩn bị → Các bước → Mẫu lệnh → Kiểm tra → Giới hạn → Nguồn. Hình và đoạn nối đặt cạnh phần chúng giải thích.

Không hiển thị nhãn WHY/HOW, “Vì sao nên học?”, “Khi nào áp dụng?” hoặc “Kết quả / Bạn sẽ làm được gì?” trên bài và mục lục. Giữ đoạn `outcome` và anchor cũ; dùng tiêu đề hướng dẫn hữu ích cùng các tiêu đề thao tác cụ thể. Rà cả nhãn nhỏ, thẻ, mục lục và trang chủ, không chỉ trường `why`.

## Trước khi xuất bản

```sh
node scripts/validate-content.cjs
node --check draft/content.js
node --check knowledge.js
```

Kiểm tra tự động xác nhận cấu trúc, không thay việc đọc duyệt và xác minh kỹ thuật. Sau đó kiểm liên kết bài cũ, mục lục, thứ tự đoạn mở trước hướng dẫn, hình/alt/chú thích, tìm kiếm và màn hình hẹp. Không xuất bản khi thiếu mở bài hoặc còn nội dung mẫu chưa viết lại.

Trang chủ có bài dẫn, phần biên tập chọn, cửa vào từng chủ đề và thư viện đầy đủ. Chọn bài vì nó phù hợp nhu cầu người mới; không gọi là “đọc nhiều”, “thịnh hành”, “mới nhất” hay “đã thử” khi chưa có dữ liệu tương ứng. Học nhịp trình bày của báo công nghệ không đồng nghĩa biến cẩm nang thành trang tin tức.
