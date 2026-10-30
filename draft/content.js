window.HANDBOOK_CONTENT = {
  updated: '2026-10-30',
  topics: [
    { id: 'learning', label: 'Học tập & ngôn ngữ', icon: 'Aa' },
    { id: 'creativity', label: 'Sáng tạo', icon: '✦' },
    { id: 'organization', label: 'Tổ chức cá nhân', icon: '✓' },
    { id: 'money', label: 'Hành chính tiền bạc', icon: '₫' },
    { id: 'daily', label: 'Đời sống hằng ngày', icon: '☼' }
  ],
  articles: [
    {
      slug: 'hoc-pdf-voi-notebooklm', type: 'tutorial', topic: 'learning',
      title: 'Học một bộ PDF bằng NotebookLM mà vẫn kiểm tra được nguồn',
      dek: 'Biến hai tài liệu dài thành bản đồ kiến thức và câu hỏi ôn tập, nhưng luôn quay lại câu gốc trước khi tin kết luận.',
      updated: '2026-10-27', readTime: '10 phút', level: 'Cơ bản',
      outcome: 'Một bảng 5 khái niệm, 5 câu hỏi tự kiểm tra và danh sách chỗ tài liệu chưa đủ bằng chứng; mỗi kết luận quan trọng có trích dẫn mở được.',
      preparation: ['Hai PDF bạn được phép sử dụng.', 'Xóa thông tin liên hệ cá nhân khỏi bản đưa lên AI.', 'Mở thử trang có bảng, biểu đồ và bản quét để biết PDF có đọc được chữ.'],
      steps: [
        { title: 'Làm sạch nguồn', body: 'Đặt tên tệp rõ, kiểm tra chữ có chọn được và xóa dữ liệu cá nhân thật sự thay vì chỉ phủ hình chữ nhật.' },
        { title: 'Tạo notebook và thêm nguồn', body: 'Mở notebooklm.google.com, tạo notebook mới, thêm hai PDF rồi đợi chúng xuất hiện trong danh sách nguồn. Chỉ dùng địa chỉ chính thức.' },
        { title: 'Đối chiếu một đoạn khó', body: 'Mở từng nguồn đã nhập và so một đoạn quan trọng với PDF gốc. Nếu bảng sai, thêm bản chép lại đã kiểm chứng và ghi rõ nguồn của bản chép.' },
        { title: 'Hỏi trên đúng nguồn', body: 'Chỉ chọn hai nguồn cần dùng, chạy prompt và mở từng trích dẫn để đọc cả câu gốc lẫn đoạn xung quanh.' },
        { title: 'Tự trả lời trước', body: 'Trả lời câu ôn tập rồi mới xin phản hồi. Khi hai PDF mâu thuẫn, đặt hai phát biểu cạnh nhau kèm phiên bản để người phụ trách quyết định.' },
        { title: 'Lưu kết quả đã kiểm chứng', body: 'Chép ghi chú sang nơi riêng, giữ tên tài liệu và vị trí đoạn; không biến câu trả lời AI thành nguồn gốc mới.' }
      ],
      prompt: 'Tôi chuẩn bị hướng dẫn tình nguyện viên mới. Chỉ dùng hai nguồn đã chọn. Lập bảng 5 khái niệm gồm: giải thích dễ hiểu, ví dụ áp dụng, nguồn hỗ trợ. Mỗi kết luận thực tế phải có trích dẫn mở được. Tách rõ nội dung có trong nguồn, suy luận của bạn và thông tin còn thiếu. Nếu tài liệu không nói, ghi “Chưa tìm thấy trong nguồn”. Sau đó hỏi tôi từng câu ôn tập, chưa đưa đáp án trước khi tôi trả lời.',
      example: { label: 'Ví dụ minh họa — không phải dữ liệu thật', input: 'Hai PDF giả định về hướng dẫn câu lạc bộ và kế hoạch hoạt động.', output: 'Bảng khái niệm có citation, một mục được đánh dấu “Chưa tìm thấy trong nguồn” và câu hỏi ôn tập chưa lộ đáp án.' },
      checklist: ['Mỗi quy định có đoạn nguồn thực sự hỗ trợ.', 'Số liệu, phủ định và ngoại lệ còn nguyên.', 'Câu hỏi có đáp án trong tài liệu.', 'Người mới đọc không bị dẫn đến hành động sai.'],
      limits: { cost: 'Hạn mức tùy tài khoản; chia bộ tài liệu theo chủ đề trước khi cân nhắc mua thêm.', privacy: 'Không tải hồ sơ học sinh, ghi âm kín hoặc tài liệu chưa được phép.', caution: 'Nguồn cũ tạo câu trả lời cũ; citation không bảo đảm suy luận đúng. Tên sản phẩm/nút có thể thay đổi theo đợt triển khai.' },
      sources: [
        { title: 'NotebookLM starter kit', publisher: 'Google Public Policy', date: 'Truy cập 27/10/2026', url: 'https://publicpolicy.google/gemini-notebook-starter-kit/' },
        { title: 'Chat with your notebook and verify citations', publisher: 'Google Support', date: 'Truy cập 27/10/2026', url: 'https://support.google.com/gemininotebook/answer/16179559?hl=en' }
      ]
    },
    {
      slug: 'video-dai-thanh-clip-ngan', type: 'tutorial', topic: 'creativity',
      title: 'Từ video dài tới clip ngắn mà không làm sai lời người nói',
      dek: 'Tạo clip 45–60 giây có transcript đã sửa, mốc thời gian và phụ đề được duyệt — không cần giọng hay hình ảnh giả.',
      updated: '2026-10-27', readTime: '12 phút', level: 'Trung cấp',
      outcome: 'Một transcript đã sửa, 3 dàn ý có mốc thời gian, clip nháp và phụ đề đã được người thật duyệt.',
      preparation: ['Video 5–15 phút có quyền biên tập.', 'Sự đồng ý của người xuất hiện, đặc biệt với trẻ em.', 'Tên người nói đúng chính tả và một mục tiêu duy nhất cho khán giả.'],
      steps: [
        { title: 'Thử transcript trên đoạn ngắn', body: 'Nhập video vào Descript, thử một đoạn để đánh giá tiếng Việt và giọng địa phương trước khi dùng credits cho toàn bộ.' },
        { title: 'Sửa phần dễ gây hậu quả', body: 'Nghe lại tên riêng, con số, thuật ngữ và câu có từ “không”. Đánh dấu chỗ không nghe rõ thay vì đoán.' },
        { title: 'Lập dàn ý trước khi cắt', body: 'Đưa transcript được phép chia sẻ vào AI, yêu cầu ba dàn ý và buộc mỗi đoạn đi kèm mốc thời gian cùng lời gốc.' },
        { title: 'Tạo clip nháp', body: 'Trong Descript, dùng AI Tools → Repurpose → Create clips, chọn số clip, độ dài, bố cục và chủ đề; mở composition mới để xem lại.' },
        { title: 'Nghe cả trước và sau điểm cắt', body: 'Mốc chatbot có thể sai. Nếu thiếu điều kiện hoặc ngữ cảnh, kéo dài clip hoặc đổi câu; không sửa lời người nói cho hợp thông điệp.' },
        { title: 'Duyệt phụ đề rồi mới xuất nháp', body: 'Kiểm tra chữ trên màn hình dọc, âm lượng, quyền nhạc/hình; xuất về máy và nhờ người không dự sự kiện kể lại điều họ hiểu.' }
      ],
      prompt: 'Đây là transcript kèm mốc thời gian của video do tôi có quyền biên tập. Khán giả: tình nguyện viên mới. Mục tiêu: hiểu một cách đặt câu hỏi mở. Đề xuất 3 dàn ý clip 45–60 giây: mở vấn đề, ví dụ, kết luận. Với mỗi đoạn, ghi thời gian bắt đầu/kết thúc và lời nói gốc liên quan. Không tạo câu trích dẫn mới; không ghép làm thay đổi ý người nói. Chỉ ra ngữ cảnh phải giữ và thông tin chưa xác minh.',
      example: { label: 'Ví dụ minh họa — không phải dữ liệu thật', input: 'Transcript giả định của video tập huấn 8 phút.', output: 'Ba dàn ý; mỗi dàn ý có đoạn gốc, mốc thời gian và cảnh báo ngữ cảnh không được cắt.' },
      checklist: ['Tên, con số và từ phủ định đúng.', 'Câu nói không bị đảo ý.', 'Phụ đề khớp âm thanh.', 'Không lộ danh sách người tham dự.', 'Nhạc và hình phụ có quyền sử dụng.'],
      limits: { cost: 'Create clips dùng AI Credits; kiểm tra media minutes và quyền export trước khi làm hàng loạt.', privacy: 'Không tải video ngoài phạm vi đồng ý; đặc biệt thận trọng với trẻ em.', caution: 'Đoạn hấp dẫn chưa chắc chính xác; quy trình không chứng minh clip sẽ tăng lượt xem.' },
      sources: [
        { title: 'Video transcript generator', publisher: 'Descript', date: 'Truy cập 27/10/2026', url: 'https://www.descript.com/tools/video-transcript-generator' },
        { title: 'Create clips from your content', publisher: 'Descript Help', date: 'Truy cập 27/10/2026', url: 'https://help.descript.com/repurpose/create-clips-from-your-content' },
        { title: 'Repurpose tools and AI Credits', publisher: 'Descript Help', date: 'Truy cập 27/10/2026', url: 'https://help.descript.com/descript-tour/repurpose-tools' }
      ]
    },
    {
      slug: 'nghien-cuu-web-co-nguon', type: 'tutorial', topic: 'learning',
      title: 'Biến chatbot thành trợ lý lập hồ sơ bằng chứng',
      dek: 'Tìm web theo câu hỏi hẹp, kiểm từng URL và chỉ viết kết luận sau khi bảng nguồn đã được xác nhận.',
      updated: '2026-10-27', readTime: '10 phút', level: 'Cơ bản',
      outcome: 'Một bảng gồm nhận định, URL trực tiếp, tổ chức, ngày, đoạn hỗ trợ và giới hạn; sau đó mới tạo bản thông tin một trang.',
      preparation: ['Một câu hỏi hẹp.', 'Phạm vi người dùng/quốc gia.', 'Ngày chốt thông tin.', 'Tách câu hỏi tính năng khỏi câu hỏi hiệu quả.'],
      steps: [
        { title: 'Viết câu hỏi kiểm tra được', body: 'Hỏi công cụ cho phép gì, giới hạn nào và theo tài liệu vào ngày nào; đừng bắt đầu bằng “viết bài hay về AI”.' },
        { title: 'Mở Search thay vì giả lập tìm kiếm', body: 'Trong ChatGPT chọn View all tools → Search. Nếu tài khoản không có, tự tìm trên trình duyệt; không yêu cầu mô hình giả vờ đã duyệt web.' },
        { title: 'Xin bảng nguồn trước kết luận', body: 'Ưu tiên tài liệu chính thức và nghiên cứu gốc, tách sự kiện, suy luận và câu hỏi bỏ ngỏ.' },
        { title: 'Mở từng URL mạnh nhất', body: 'Kiểm tra đúng tài liệu, phiên bản và đối tượng. Trang nói “có thể hỗ trợ” không chứng minh hiệu quả lớn.' },
        { title: 'Tìm nguồn độc lập cho hiệu quả', body: 'Nếu không có, ghi rõ. Hai số khác nhau phải so mẫu, thời gian và định nghĩa thay vì lấy trung bình tùy tiện.' },
        { title: 'Viết chỉ từ hàng đã xác nhận', body: 'Đặt link sát câu, giữ điều kiện và nêu điều chưa biết; lưu bảng nguồn cùng bản viết.' }
      ],
      prompt: 'Hãy tìm trên web để trả lời: [câu hỏi cụ thể]. Phạm vi: [quốc gia, nhóm người dùng, thời gian]. Ngày chốt: [ngày]. Ưu tiên tài liệu chính thức và nghiên cứu gốc; không dùng bài quảng cáo làm bằng chứng độc lập về hiệu quả. Lập bảng: nhận định, URL trực tiếp, tác giả/tổ chức, ngày, đoạn hỗ trợ, giới hạn. Tách sự kiện, suy luận và câu hỏi còn bỏ ngỏ. Không tìm thấy thì nói rõ; không tạo tên bài, DOI hoặc số liệu. Chưa đưa khuyến nghị trước khi xong bảng nguồn.',
      example: { label: 'Ví dụ minh họa — không phải dữ liệu thật', input: 'Công cụ A xuất được định dạng nào trong tài khoản giáo dục vào ngày chốt?', output: 'Bảng nguồn tách tính năng nhà cung cấp công bố khỏi bằng chứng độc lập về hiệu quả học tập.' },
      checklist: ['URL mở đúng trang.', 'Ngày truy cập không bị gọi là ngày nghiên cứu.', '“Người dùng thích” không biến thành “học tốt hơn”.', 'Điều kiện trả phí/quốc gia/tuổi không bị bỏ.', 'Nhận định mạnh có bằng chứng tương xứng.'],
      limits: { cost: 'Hạn mức Search tùy tài khoản; thử câu hỏi hẹp trước.', privacy: 'Truy vấn web có thể đi qua nhà cung cấp tìm kiếm; không đưa tên học sinh hoặc việc nội bộ.', caution: 'Search vẫn có thể đưa nguồn sai hoặc thiếu; không thay thẩm định y tế, pháp lý hay an toàn trẻ em.' },
      sources: [{ title: 'Searching the web with ChatGPT', publisher: 'OpenAI Help Center', date: 'Truy cập 27/10/2026', url: 'https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt' }]
    },
    {
      slug: 'lam-sach-bang-khao-sat', type: 'tutorial', topic: 'organization',
      title: 'Làm sạch bảng khảo sát mà không tải dữ liệu học sinh',
      dek: 'Học quy trình bằng dữ liệu giả: phát hiện lỗi, duyệt từng biến đổi và giữ nhật ký trước/sau.',
      updated: '2026-10-27', readTime: '12 phút', level: 'Trung cấp',
      outcome: 'Một bảng sạch, bảng hàng bị loại, nhật ký biến đổi và báo cáo ngắn có mẫu số — không cần tên, email hay nhận xét cá nhân.',
      preparation: ['Bản gốc ở nơi tổ chức phê duyệt.', 'Bản sao đã bỏ nhận dạng hoặc 20 dòng dữ liệu giả.', 'Quy tắc trước: điểm 1–5, phút không âm, ô trống là thiếu.'],
      steps: [
        { title: 'Giảm dữ liệu trước', body: 'Xóa cột nhận dạng. Mã S001 vẫn có thể nhận diện lại; với nhóm nhỏ chỉ dùng số tổng hợp hoặc dữ liệu giả.' },
        { title: 'Chuẩn hóa cấu trúc', body: 'Mỗi hàng là một quan sát, dòng đầu là tên cột, không ô gộp; ghi rõ đơn vị và định dạng ngày.' },
        { title: 'Yêu cầu kiểm tra, chưa sửa', body: 'Đính kèm CSV/XLSX giả hoặc bảng nhỏ không nhạy cảm; xin báo cáo kiểu dữ liệu, thiếu, ngoài phạm vi và hàng có thể trùng.' },
        { title: 'Duyệt lỗi theo loại', body: 'Khoảng trắng có thể cắt; “51” không tự đổi thành “5”; hai hàng giống nhau chưa chắc trùng người.' },
        { title: 'Tự đối chiếu phép tính', body: 'Mở tệp kết quả, đếm hàng, cộng tay một nhóm và xem ba dòng trước/sau. Xin công thức hoặc mã, không tin câu “đã kiểm tra”.' },
        { title: 'Tách mô tả khỏi giải thích', body: 'Điểm trung bình khác nhau không chứng minh nguyên nhân nếu nhóm khác nhau; tránh công bố nhóm quá nhỏ.' }
      ],
      prompt: 'Tệp này chứa dữ liệu giả lập. Hãy kiểm tra trước, chưa sửa âm thầm. Quy tắc: diem_hai_long là số nguyên 1–5; so_phut không âm; ô trống là thiếu; không tự điền; không tự xóa hàng trùng. Báo cáo số hàng, cột, kiểu dữ liệu, ô thiếu, giá trị ngoài phạm vi và hàng có thể trùng. Đề xuất cách xử lý, chờ tôi duyệt. Sau khi duyệt, xuất bảng sạch và nhật ký trước/sau cho từng thay đổi. Tính số phản hồi hợp lệ và điểm trung bình theo nhóm; ghi mẫu số.',
      example: { label: 'Ví dụ minh họa — không phải dữ liệu thật', input: '20 dòng giả với các cột ma_buoi, nhom_noi_dung, diem_hai_long, so_phut.', output: 'Danh sách lỗi chưa tự sửa; sau duyệt có bảng sạch, bảng loại và nhật ký từng thay đổi.' },
      checklist: ['Hàng đầu vào = hàng giữ + hàng loại.', 'Ô thiếu không thành 0.', 'Biểu đồ có đơn vị và cỡ mẫu.', 'Tệp xuất không còn sheet ẩn/cột nhận dạng.', 'Không suy luận năng lực từ điểm hài lòng.'],
      limits: { cost: 'Tải tệp và hạn mức tùy tài khoản.', privacy: 'Tắt huấn luyện không đồng nghĩa không lưu trữ hoặc được phép xử lý hồ sơ trẻ em; tuân theo chính sách tổ chức.', caution: 'Dùng dữ liệu giả để học quy trình trước; AI có thể sửa sai hoặc tính sai nếu không đối chiếu.' },
      sources: [
        { title: 'Data analysis with ChatGPT', publisher: 'OpenAI Help Center', date: 'Truy cập 27/10/2026', url: 'https://help.openai.com/en/articles/8437071-data-analysis-with-chatgpt' },
        { title: 'Data controls in ChatGPT', publisher: 'OpenAI Help Center', date: 'Truy cập 27/10/2026', url: 'https://help.openai.com/en/articles/7730893-data-controls-in-chatgpt' }
      ]
    },
    {
      slug: 'prototype-web-co-kiem-thu', type: 'tutorial', topic: 'creativity',
      title: 'Từ ý tưởng tới ứng dụng web mẫu có bài kiểm thử nghiệm thu',
      dek: 'Tạo prototype lịch hoạt động bằng dữ liệu giả, rồi tự chạy sáu ca thử trước khi nghĩ tới publish hay dữ liệu thật.',
      updated: '2026-10-27', readTime: '12 phút', level: 'Trung cấp',
      outcome: 'Một preview mobile/desktop có tìm kiếm và lọc, danh sách sáu ca nghiệm thu cùng lỗi còn mở; chưa phải hệ thống đăng ký thật.',
      preparation: ['5 sự kiện giả và 3 chủ đề.', 'Yêu cầu viết bằng hành vi quan sát được.', 'Phạm vi cấm: đăng nhập, database, email, API, thanh toán và dữ liệu cá nhân.'],
      steps: [
        { title: 'Chốt hành vi và điều chưa làm', body: 'Người xem tìm tên, lọc chủ đề, mở chi tiết và thấy trạng thái không kết quả; ghi rõ không kết nối lịch thật.' },
        { title: 'Tạo bản Build nhỏ', body: 'Trong Lovable chọn Build, dán prompt, yêu cầu nêu giả định trước và cách tự kiểm thử sau.' },
        { title: 'Thao tác trong Preview', body: 'Dùng chế độ điện thoại và máy tính; chưa bấm Publish chỉ để xem thử.' },
        { title: 'Chạy sáu ca nghiệm thu', body: 'Thử tìm đúng, không có, kết hợp lọc, xóa lọc, bàn phím và màn 360px; ghi kết quả thực tế.' },
        { title: 'Báo lỗi có thể tái hiện', body: 'Nêu màn hình, chuỗi thao tác, kết quả sai và kết quả mong đợi; mỗi lượt sửa một nhóm lỗi rồi chạy lại.' },
        { title: 'Nhờ người khác làm nhiệm vụ', body: 'Quan sát chỗ họ không hiểu. Chỉ cân nhắc công bố khi không còn lỗi chặn và dữ liệu giả được ghi rõ.' }
      ],
      prompt: 'Tạo prototype tiếng Việt cho lịch hoạt động câu lạc bộ. Chỉ dùng 5 sự kiện giả, ghi nhãn “Dữ liệu minh họa”. Có tìm kiếm, lọc chủ đề, thẻ và trang chi tiết. Ngày dd/mm/yyyy, giờ và múi giờ Việt Nam. Không đăng nhập, database, email, API, thanh toán hoặc lưu dữ liệu cá nhân. Dùng tốt trên điện thoại/máy tính và bằng bàn phím. Khi không có kết quả, hiện thông báo và nút xóa bộ lọc. Trước khi xây, nêu giả định; sau khi xây, liệt kê cách tự kiểm thử.',
      example: { label: 'Ví dụ minh họa — không phải dữ liệu thật', input: '5 sự kiện giả của một câu lạc bộ.', output: 'Prototype có tìm/lọc và trạng thái rỗng, kèm bảng kết quả sáu ca thử.' },
      checklist: ['Tìm đúng chỉ hiện sự kiện phù hợp.', 'zzzz hiện thông báo, không trang trắng.', 'Lọc và tìm áp dụng cùng lúc.', 'Xóa lọc khôi phục đủ 5 thẻ.', 'Tab/Enter có tiêu điểm rõ.', '360px không tràn ngang.'],
      limits: { cost: 'Build dùng credits; hosting/backend có thể phát sinh riêng. Kiểm tra hạn mức trước khi mở rộng.', privacy: 'Preview không bảo đảm an toàn; không kết nối dữ liệu thật ở vòng này.', caution: 'Đạt sáu ca thử chưa biến prototype thành hệ thống an toàn; sản phẩm thật cần rà phân quyền, lưu trữ và vận hành.' },
      sources: [
        { title: 'Lovable quick start', publisher: 'Lovable Docs', date: 'Truy cập 27/10/2026', url: 'https://docs.lovable.dev/introduction/getting-started' },
        { title: 'Preview projects', publisher: 'Lovable Docs', date: 'Truy cập 27/10/2026', url: 'https://docs.lovable.dev/features/projects/preview' }
      ]
    },
    {
      slug: 'nhin-lai-chi-tieu-gia-dinh', type: 'tutorial', topic: 'money',
      title: 'Nhìn lại chi tiêu gia đình bằng bảng mẫu, không kết nối ngân hàng',
      dek: 'Hiểu tiền đi vào nhóm nào và chọn một thay đổi nhỏ cho tuần sau mà không tải sao kê gốc hay giao quyền quyết định cho AI.',
      updated: '2026-10-27', readTime: '10 phút', level: 'Cơ bản',
      outcome: 'Một bảng phân nhóm, tổng theo nhóm, danh sách khoản cần xác nhận và một hành động nhỏ do chính bạn chọn.',
      preparation: ['15–30 giao dịch tự ghi hoặc hoàn toàn giả.', 'Ba cột: ngay, mo_ta_chung, so_tien.', 'Danh sách nhóm do bạn định nghĩa: thiết yếu, linh hoạt, chưa phân loại.'],
      steps: [
        { title: 'Giảm dữ liệu trước khi dùng AI', body: 'Bỏ địa điểm, số tài khoản, mã giao dịch, người nhận và ghi chú sức khỏe. Nếu vẫn nhạy cảm, dùng bộ mẫu cùng cấu trúc.' },
        { title: 'Thống nhất cách ghi', body: 'Dùng VND, một hàng mỗi khoản; hoàn tiền là loại riêng và chuyển giữa tài khoản của mình không phải chi mới.' },
        { title: 'Để bạn quyết định nhóm', body: 'Tải CSV đã giảm thiểu hoặc dán bảng nhỏ. Khoản mơ hồ phải ghi “Cần tôi xác nhận”; AI không được tự gọi chăm sóc gia đình là lãng phí.' },
        { title: 'Đối chiếu phép tính', body: 'Kiểm ít nhất 5 khoản và mọi mục chưa rõ. Tự cộng tổng trong bảng tính; nếu lệch, sửa bảng trước khi bàn tới hành động.' },
        { title: 'Chọn một thay đổi nhỏ', body: 'Ví dụ: ghi lại toàn bộ chi ăn ngoài trong tuần tới rồi so cùng định nghĩa nhóm. Bạn tự đặt mức phù hợp hoàn cảnh.' },
        { title: 'So theo tuần, không suy rộng', body: 'So số khoản, tổng và dữ liệu thiếu; ghi sự kiện bất thường như sửa xe. Một tuần chưa đại diện cả năm.' }
      ],
      prompt: 'Đây là giao dịch giả lập hoặc đã giảm thiểu thông tin, đơn vị VND. Không cần kết nối ngân hàng và không yêu cầu dữ liệu nhận dạng. Phân loại theo các nhóm tôi cung cấp; khoản mơ hồ ghi “Cần tôi xác nhận”, không đoán. Tách hoàn tiền và chuyển nội bộ. Tính tổng từng nhóm, tổng chi, khoản hoàn và chi ròng; trình bày công thức. Không xóa hàng trùng nếu chưa hỏi. Nêu ba câu hỏi giúp tôi tự chọn một thay đổi nhỏ, không đánh giá đạo đức và không tư vấn đầu tư.',
      example: { label: 'Ví dụ minh họa — không phải dữ liệu thật', input: '20 dòng giả với mô tả chung như thực phẩm, đi lại và một khoản chuyển nội bộ.', output: 'Bảng tổng theo nhóm, khoản mơ hồ giữ nguyên, công thức chi ròng và ba câu hỏi tự phản tư.' },
      checklist: ['Tổng đúng đến đơn vị đồng.', 'Không đếm chuyển nội bộ hai lần.', 'Khoản chưa rõ vẫn còn.', 'Không lộ người hoặc địa điểm.', 'Hành động là điều bạn thực sự muốn làm.'],
      limits: { cost: 'Có thể thử bằng bảng nhỏ; hạn mức phân tích tùy tài khoản.', privacy: 'Không tải sao kê gốc để nhờ AI tự ẩn danh. Data Controls không đồng nghĩa không lưu trữ.', caution: 'Đây là tổ chức thông tin, không phải tư vấn đầu tư. AI không biết nghĩa vụ gia đình hay mọi khoản tiền mặt.' },
      sources: [
        { title: 'Data analysis with ChatGPT', publisher: 'OpenAI Help Center', date: 'Truy cập 27/10/2026', url: 'https://help.openai.com/en/articles/8437071-data-analysis-with-chatgpt' },
        { title: 'Data controls in ChatGPT', publisher: 'OpenAI Help Center', date: 'Truy cập 27/10/2026', url: 'https://help.openai.com/en/articles/7730893-data-controls-in-chatgpt' }
      ]
    },
    {
      slug: '15-phut-ke-lai-bang-giong-rieng', type: 'tutorial', topic: 'daily',
      title: '15 phút mỗi ngày: học cách diễn đạt và kể lại bằng giọng riêng',
      dek: 'Từ vài trang đã đọc, chọn ba từ hoặc cách diễn đạt hay rồi tự kể lại câu chuyện — AI chỉ hỏi gợi mở và sửa hai điểm quan trọng.',
      updated: '2026-10-27', readTime: '8 phút', level: 'Cơ bản',
      outcome: 'Mỗi ngày có 3 từ/cách diễn đạt dùng được, một đoạn kể 60–90 giây hoặc 5–7 câu và một lỗi đã tự sửa.',
      preparation: ['1–3 trang sách hoặc bài đọc được phép dùng.', 'Giấy ghi chép và đồng hồ 15 phút.', 'Ưu tiên tiếng Việt; có thể đổi sang ngoại ngữ đang học như một biến thể.'],
      steps: [
        { title: 'Phút 0–2: nhớ trước khi hỏi', body: 'Đóng bài đọc, viết điều còn nhớ và nghĩa ba từ hôm qua. Tự đếm số ý đúng và số từ dùng đúng trong câu.' },
        { title: 'Phút 2–5: đọc thật', body: 'Đọc đoạn chọn, gạch ba từ hoặc cách diễn đạt giàu sắc thái có thể dùng trong đời sống; viết một câu tóm tắt bằng lời mình.' },
        { title: 'Phút 5–8: để AI hỏi', body: 'Dán đoạn ngắn được phép dùng. Yêu cầu AI hỏi từng câu về nghĩa trong ngữ cảnh, chưa cho đáp án và chưa viết hộ câu chuyện.' },
        { title: 'Phút 8–12: tự kể rồi sửa', body: 'Kể 5–7 câu hoặc 60–90 giây bằng giọng riêng, dùng ba từ mới. AI chỉ nêu hai lỗi quan trọng và lý do; bạn tự sửa một lượt.' },
        { title: 'Phút 12–15: đo sau', body: 'Đóng bài và phản hồi AI, viết lại ba nghĩa, ba câu mới và một lỗi còn lặp. Ngày mai kiểm tra trước khi xem ghi chú.' },
        { title: 'Nhìn lại sau 7 ngày', body: 'Đếm số từ dùng lại được khi không có gợi ý và mức chính xác của câu chuyện. Đây là mốc cá nhân, không phải điểm chuẩn hóa.' }
      ],
      prompt: 'Tôi đang luyện diễn đạt tiếng Việt và kể chuyện bằng giọng riêng. Đây là đoạn ngắn tôi được phép sử dụng: [đoạn]. Ba từ hoặc cách diễn đạt muốn học: [1, 2, 3]. Hỏi từng câu để tôi đoán nghĩa và sắc thái từ ngữ cảnh, chưa cho đáp án. Sau câu trả lời, giải thích ngắn và phân biệt nghĩa trong đoạn với cách dùng khác. Tiếp theo yêu cầu tôi kể lại bằng 5–7 câu có ba cách diễn đạt đó. Không viết hộ trước. Chỉ sửa hai điểm quan trọng nhất, nói lý do và giữ giọng kể của tôi. Nếu điều gì không có trong đoạn, ghi rõ đó là ví dụ bạn tự tạo. [Biến thể tùy chọn: áp dụng cùng quy trình cho ngoại ngữ đang học.]',
      example: { label: 'Ví dụ minh họa — không phải dữ liệu thật', input: 'Một đoạn truyện ngắn công khai và ba cách diễn đạt: “chần chừ”, “nhẹ nhõm”, “ngoảnh lại”.', output: 'Ba câu hỏi nghĩa/sắc thái, rồi yêu cầu người học tự kể; phản hồi chỉ sửa hai điểm và không thay giọng kể.' },
      checklist: ['Tự tạo câu thay vì nhận diện đáp án.', 'Kể đúng ý chính bằng lời của mình.', 'Dùng được ít nhất một cách diễn đạt không cần gợi ý.', 'Chỉ ghi đạt khi thật sự nhớ.', 'Không chia sẻ chuyện gia đình có tên thật.'],
      limits: { cost: 'Văn bản ngắn, không cần giả định gói trả phí; hạn mức tùy công cụ.', privacy: 'Không tải cả sách có bản quyền hoặc câu chuyện riêng có tên thật; dùng nhân vật giả khi cần.', caution: 'AI có thể sửa quá tay hoặc giải thích sắc thái sai. Giữ ý của bạn và tra từ điển đáng tin khi chưa chắc.' },
      sources: [{ title: 'Chat with sources and inspect citations', publisher: 'Google Support', date: 'Truy cập 27/10/2026', url: 'https://support.google.com/gemininotebook/answer/16179559?hl=en' }]
    },
    {
      slug: 'tao-the-nho-tu-ghi-chu', type: 'tutorial', topic: 'learning',
      title: 'Biến ghi chú thành thẻ nhớ tương tác mà không học thuộc lỗi của AI',
      dek: 'Tạo một bộ flashcard nhỏ từ ghi chú đã kiểm chứng, tự nhớ trước khi lật thẻ và sửa ngay những câu mơ hồ hoặc sai nguồn.',
      updated: '2026-10-28', readTime: '8 phút', level: 'Cơ bản',
      outcome: 'Một bộ 12–20 thẻ hỏi–đáp ngắn trong ChatGPT, có nhãn nguồn ở từng thẻ, danh sách thẻ cần sửa và một lượt ôn chỉ tập trung vào phần chưa nhớ.',
      preparation: [
        'Một trang ghi chú hoặc đề cương bạn được phép sử dụng và đã đối chiếu với tài liệu gốc.',
        'Chọn một mục tiêu hẹp, chẳng hạn 10 khái niệm của một chương; không đưa cả môn học vào một bộ.',
        'Xóa tên người, thông tin lớp học và dữ liệu riêng trước khi tải hoặc dán nội dung.'
      ],
      steps: [
        { title: 'Chốt phạm vi và nguồn', body: 'Ghi tên tài liệu, chương hoặc trang được dùng. Đánh dấu chỗ còn nghi ngờ để AI không biến chúng thành đáp án chắc chắn.' },
        { title: 'Tạo bộ thẻ ngay trong cuộc trò chuyện', body: 'Mở một chat ChatGPT, dán đoạn ghi chú ngắn hoặc tải tệp khi tài khoản cho phép, rồi yêu cầu tạo 12–20 flashcard. ChatGPT hiển thị thẻ tương tác trong câu trả lời.' },
        { title: 'Kiểm từng mặt sau trước khi học', body: 'Mở toàn bộ đáp án một lượt và so với ghi chú gốc. Sửa thẻ thiếu điều kiện, có hai ý trong một câu hoặc dùng từ tuyệt đối mà nguồn không nói.' },
        { title: 'Tự nhớ rồi mới lật', body: 'Đọc mặt trước, nói hoặc viết câu trả lời của mình trước khi chạm để lật thẻ. Chọn dấu kiểm khi thực sự nhớ; chọn dấu X khi cần luyện lại.' },
        { title: 'Đảo thứ tự và ôn phần chưa nhớ', body: 'Dùng Shuffle để tránh nhớ theo vị trí. Mở nhóm thẻ chưa biết trong Library hoặc yêu cầu ChatGPT đưa bộ thẻ trở lại, rồi ôn riêng nhóm đó.' },
        { title: 'Sửa bộ thẻ sau lượt ôn', body: 'Yêu cầu tách thẻ quá dài, viết lại định nghĩa khó hiểu hoặc thêm một thẻ cho lỗ hổng vừa phát hiện. So lại thay đổi với nguồn trước khi giữ.' }
      ],
      prompt: 'Từ phần ghi chú tôi được phép sử dụng dưới đây, hãy tạo 15 flashcard tương tác để tôi tự nhớ trước khi xem đáp án. Mỗi thẻ chỉ kiểm tra một ý. Mặt trước là câu hỏi ngắn; mặt sau gồm câu trả lời 1–2 câu và nhãn “Nguồn: [mục/trang]”. Chỉ dùng nội dung tôi cung cấp. Chỗ nào ghi chú chưa đủ hoặc còn mâu thuẫn, không tạo đáp án chắc chắn; hãy đưa vào danh sách “Cần kiểm tra lại”. Trước khi tạo thẻ, hãy nêu 3 điểm dễ bị hiểu sai. Sau khi tôi ôn, giúp tôi tách thẻ quá dài và ôn lại riêng các thẻ tôi đánh dấu chưa nhớ. [Dán ghi chú đã giảm thông tin riêng tư]',
      example: {
        label: 'Ví dụ minh họa — không phải dữ liệu thật',
        input: 'Một trang ghi chú giả định về vòng tuần hoàn nước, có ghi rõ ba mục và số trang.',
        output: '15 thẻ tương tác; mỗi thẻ hỏi một ý, mặt sau có nhãn nguồn, cùng danh sách hai câu cần kiểm tra lại thay vì tự điền.'
      },
      checklist: [
        'Mỗi thẻ chỉ hỏi một ý và có thể trả lời ngắn.',
        'Mặt sau khớp ghi chú gốc, giữ nguyên điều kiện và từ phủ định.',
        'Không có thẻ nào biến suy luận thành dữ kiện.',
        'Bạn tự trả lời trước khi lật và chỉ đánh dấu biết khi không cần gợi ý.',
        'Thẻ sai hoặc mơ hồ đã được sửa trong cuộc trò chuyện và kiểm lại với nguồn.'
      ],
      limits: {
        cost: 'Theo tài liệu OpenAI kiểm tra ngày 28/10/2026, flashcards có trên web và mobile cho các gói ChatGPT; hạn mức sử dụng và tải tệp vẫn tùy tài khoản.',
        privacy: 'Thẻ được tự động lưu vào Library. Không đưa ghi chú có dữ liệu cá nhân, tài liệu nội bộ hoặc nội dung chưa được phép lên dịch vụ.',
        caution: 'ChatGPT có thể tạo thẻ sai hoặc đơn giản hóa quá mức. Flashcard giúp luyện nhớ, không chứng minh bạn đã hiểu sâu; luôn kiểm đáp án với nguồn trước kỳ thi hay quyết định quan trọng.'
      },
      sources: [
        { title: 'Flashcards in ChatGPT', publisher: 'OpenAI Help Center', date: 'Truy cập 28/10/2026', url: 'https://help.openai.com/en/articles/20001533-flashcards-in-chatgpt' },
        { title: 'ChatGPT release notes — Create flashcards in ChatGPT', publisher: 'OpenAI Help Center', date: 'Truy cập 28/10/2026', url: 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes' },
        { title: 'Data controls in ChatGPT', publisher: 'OpenAI Help Center', date: 'Truy cập 28/10/2026', url: 'https://help.openai.com/en/articles/7730893-data-controls-in-chatgpt' }
      ]
    },
    {
      slug: 'luyen-phan-xa-ngoai-ngu-bang-voice', type: 'tutorial', topic: 'learning',
      title: 'Luyện phản xạ ngoại ngữ 10 phút bằng Voice rồi tự kiểm tra transcript',
      dek: 'Tập một tình huống giao tiếp ngắn, yêu cầu AI chờ bạn nói hết và dùng phần chữ sau cuộc gọi để tìm đúng hai điểm cần sửa.',
      updated: '2026-10-29', readTime: '9 phút', level: 'Cơ bản',
      outcome: 'Một lượt hội thoại 6–8 câu theo tình huống, transcript để đối chiếu, hai cách diễn đạt được sửa và một lượt nói lại ngắn hơn nhưng rõ hơn.',
      preparation: [
        'Tai nghe hoặc nơi tương đối yên tĩnh; tiếng ồn và lời nói chồng lên nhau có thể làm Voice nghe sai.',
        'Một tình huống hẹp như hỏi đường, đặt món hoặc giới thiệu công việc; không luyện nhiều chủ đề cùng lúc.',
        'Ba từ hoặc mẫu câu bạn muốn chủ động dùng và một tờ ghi chú để tự chấm sau buổi tập.',
        'Không dùng tên thật, địa chỉ, lịch trình riêng hoặc nội dung bí mật trong tình huống luyện nói.'
      ],
      steps: [
        { title: 'Chọn đúng ngôn ngữ trước khi nói', body: 'Nếu Voice thường nhận sai, mở Settings → Voice → Language và chọn ngôn ngữ bạn luyện. Bạn cũng có thể yêu cầu đổi ngôn ngữ ngay trong cuộc gọi.' },
        { title: 'Mở Voice và đặt luật cho phiên 10 phút', body: 'Trên web hoặc ứng dụng, chọn biểu tượng Voice ở ô nhập. Nói prompt bên dưới: AI đóng một vai, hỏi từng câu, chờ bạn nói “xong” rồi mới phản hồi.' },
        { title: 'Tự trả lời trước khi nhận gợi ý', body: 'Mỗi lượt hãy nói 1–3 câu bằng vốn hiện có. Nếu bí, xin một từ khóa chứ không xin cả câu hoàn chỉnh; mục tiêu là tạo phản xạ của bạn.' },
        { title: 'Chỉ sửa hai điểm có tác động lớn', body: 'Sau 6–8 lượt, yêu cầu AI nêu hai lỗi làm người nghe khó hiểu nhất và một cách nói tự nhiên hơn. Không để AI sửa mọi câu thành giọng của nó.' },
        { title: 'Kết thúc và đọc transcript', body: 'Thoát Voice rồi mở lại cuộc trò chuyện. Transcript được thêm vào lịch sử nhưng có thể không khớp nguyên văn; đánh dấu nơi hệ thống nghe sai và nơi chính bạn dùng sai.' },
        { title: 'Nói lại một lượt có mục tiêu', body: 'Chọn ba câu quan trọng, nói lại chậm hơn với hai sửa đổi vừa kiểm chứng. Tự ghi: đã dùng được mẫu câu nào, chỗ nào vẫn cần tra từ điển hoặc hỏi người giỏi ngôn ngữ.' }
      ],
      prompt: 'Hãy luyện hội thoại [ngôn ngữ] với tôi trong 10 phút. Tình huống: [ví dụ: hỏi đường đến nhà ga]. Trình độ hiện tại của tôi: [mô tả việc làm được]. Bạn đóng vai [vai đối thoại] và chỉ hỏi một câu mỗi lượt. Hãy chờ đến khi tôi nói “xong” mới phản hồi; nếu tôi im lặng, cho một từ khóa, không nói hộ cả câu. Trong lúc nói, ưu tiên hiểu ý và giữ cuộc trò chuyện tự nhiên. Sau 6–8 lượt, chỉ chọn hai lỗi làm người nghe khó hiểu nhất, giải thích ngắn và cho một cách diễn đạt tự nhiên hơn. Sau khi tôi nói lại, tóm tắt ba mẫu câu tôi đã tự dùng được. Không chấm điểm phát âm chuẩn hóa và không suy đoán trình độ từ một buổi tập.',
      example: {
        label: 'Ví dụ minh họa — không phải dữ liệu thật',
        input: 'Người học giả định luyện tiếng Anh ở tình huống hỏi đường, muốn dùng “Could you tell me…?”, “Is it within walking distance?” và “Thank you for your help”.',
        output: 'Bảy lượt hỏi–đáp ngắn; AI chờ tín hiệu “xong”, chỉ gợi một từ khi bí, sau đó nêu hai lỗi ảnh hưởng khả năng hiểu và yêu cầu nói lại ba câu.'
      },
      checklist: [
        'Bạn nói phần lớn thời gian và tự tạo câu trước khi xin gợi ý.',
        'AI không ngắt khi bạn chưa nói “xong”.',
        'Phản hồi chỉ tập trung vào hai lỗi quan trọng, không viết lại toàn bộ lời nói.',
        'Transcript được xem là bản tham khảo, không phải bản ghi nguyên văn.',
        'Từ mới hoặc cách phát âm chưa chắc đã được kiểm lại bằng từ điển hay nguồn ngôn ngữ đáng tin.',
        'Không có thông tin riêng tư xuất hiện trong cuộc trò chuyện.'
      ],
      limits: {
        cost: 'Theo OpenAI ngày 29/10/2026: Free có quyền truy cập Voice giới hạn; Go và Plus có tối đa 3 giờ Live trong 24 giờ; các gói Pro và workspace có hạn mức/đơn giá khác. Kiểm tra màn hình gói trước khi dùng dài.',
        privacy: 'Live/Advanced lưu clip âm thanh cùng transcript xuất hiện trong lịch sử; clip được giữ 30 ngày. Việc chia sẻ clip để huấn luyện có điều khiển riêng trong Data Controls. Không luyện bằng dữ liệu cá nhân hoặc hội thoại thật của người khác.',
        caution: 'Voice có thể nghe nhầm vì tiếng ồn, ngắt quãng hoặc nói chồng. Transcript không nhất thiết nguyên văn, và phản hồi phát âm không thay giáo viên hay bài đánh giá ngôn ngữ chuẩn hóa.'
      },
      sources: [
        { title: 'ChatGPT Voice', publisher: 'OpenAI Help Center', date: 'Cập nhật và truy cập 29/10/2026', url: 'https://help.openai.com/en/articles/20001274-chatgpt-voice' },
        { title: 'Data controls in ChatGPT', publisher: 'OpenAI Help Center', date: 'Truy cập 29/10/2026', url: 'https://help.openai.com/en/articles/7730893-data-controls-in-chatgpt' }
      ]
    },
    {
      slug: 'tao-poster-bang-chatgpt-images', type: 'tutorial', topic: 'creativity',
      title: 'Tạo poster từ mẫu rồi kiểm chữ và sửa đúng vùng bằng ChatGPT Images',
      dek: 'Dùng một mẫu có sẵn để làm poster minh họa, khóa nội dung trước khi trang trí và kiểm từng dòng chữ trước khi lưu bản nháp.',
      updated: '2026-10-30', readTime: '9 phút', level: 'Cơ bản',
      outcome: 'Một poster nháp đúng tỷ lệ, có tiêu đề và thông tin tối thiểu đã kiểm, kèm danh sách thay đổi để tránh mỗi lần sửa lại làm hỏng phần đang đúng.',
      preparation: [
        'Một mục tiêu duy nhất cho poster, chẳng hạn thông báo buổi đọc sách giả định.',
        'Nội dung đã chốt gồm tiêu đề, ngày, giờ và lời kêu gọi hành động; dùng dữ liệu minh họa nếu chỉ tập quy trình.',
        'Tỷ lệ cần dùng như 4:5 cho bài đăng hoặc 16:9 cho màn hình.',
        'Màu chủ đạo và mô tả phong cách bằng từ chung; không yêu cầu bắt chước tác phẩm hoặc nhân vật có bản quyền.'
      ],
      steps: [
        { title: 'Khóa nội dung trước khi tạo ảnh', body: 'Viết riêng từng dòng chữ và tự kiểm chính tả. Chỉ giữ thông tin bắt buộc; poster càng nhiều chữ càng khó rà và dễ phát sinh lỗi.' },
        { title: 'Mở Images và chọn một mẫu gần mục tiêu', body: 'Trong thanh bên chọn Images → Templates, mở nhóm phù hợp như poster rồi chọn mẫu. Templates chưa có trong Work mode theo tài liệu kiểm tra ngày 30/10/2026.' },
        { title: 'Mô tả cả nội dung lẫn bố cục', body: 'Dán prompt bên dưới, ghi rõ tỷ lệ, thứ bậc tiêu đề, vùng trống và nguyên văn từng dòng. Nếu công cụ hỏi thêm, chỉ trả lời các chi tiết thực sự quan trọng.' },
        { title: 'Kiểm chữ trước khi đánh giá vẻ đẹp', body: 'Phóng to ảnh và đối chiếu từng ký tự, con số, dấu tiếng Việt và thứ tự thông tin với bản nội dung đã khóa. Nếu một dòng sai, chưa dùng poster.' },
        { title: 'Sửa từng vùng nhỏ', body: 'Mở ảnh, chọn Select và tô đúng vùng cần đổi; mô tả một thay đổi mỗi lượt. Vùng chọn có thể không chính xác và chỉnh sửa có thể lan ra ngoài, nên so cả phần xung quanh.' },
        { title: 'Chốt tỷ lệ và lưu bản nháp', body: 'Dùng Aspect ratio khi cần định dạng khác, rồi kiểm lại chữ và mép ảnh vì tái tạo tỷ lệ có thể làm bố cục đổi. Chọn Save để tải bản nháp; chưa đăng tự động lên mạng xã hội.' }
      ],
      prompt: 'Tạo một poster minh họa bằng tiếng Việt cho [mục đích]. Tỷ lệ: [4:5 hoặc 16:9]. Đối tượng xem: [nhóm chung]. Phong cách: nền sáng, rõ ràng, thân thiện, tương phản cao. Thứ bậc: tiêu đề lớn ở trên, thông tin chính ở giữa, lời kêu gọi ngắn ở cuối. Chỉ dùng nguyên văn các dòng sau, không tự thêm tên, ngày, logo hoặc lời hứa: 1) “[tiêu đề]”; 2) “[ngày và giờ minh họa]”; 3) “[địa điểm hoặc hình thức]”; 4) “[lời kêu gọi]”. Giữ vùng trống quanh chữ, không đặt chữ lên chi tiết rối. Đây là dữ liệu minh họa. Sau khi tạo, hãy liệt kê lại chính xác các dòng chữ đã đưa vào để tôi đối chiếu.',
      example: {
        label: 'Ví dụ minh họa — không phải dữ liệu thật',
        input: 'Poster giả định 4:5 cho “15 phút đọc cùng nhau”, ngày 05/11/2026, hình thức trực tuyến, màu kem và xanh teal.',
        output: 'Một poster nháp có bốn dòng chữ theo thứ bậc; người làm đối chiếu từng dòng, khoanh vùng một lỗi dấu tiếng Việt và sửa riêng vùng đó trước khi lưu.'
      },
      checklist: [
        'Mọi chữ, số, ngày và dấu tiếng Việt khớp bản nội dung đã khóa.',
        'Không có tên, logo, địa điểm hoặc lời hứa do AI tự thêm.',
        'Vùng vừa sửa đúng và phần xung quanh không bị biến đổi ngoài ý muốn.',
        'Tỷ lệ, độ tương phản và khoảng trống đọc được trên màn hình đích.',
        'Hình tham chiếu, biểu tượng và phông chữ dùng trong phạm vi bạn có quyền.',
        'Tệp đang là bản nháp; một người khác đã nhìn lại trước khi công bố.'
      ],
      limits: {
        cost: 'ChatGPT Images có trên mọi gói ở web, iOS và Android; hạn mức tạo/chỉnh ảnh phụ thuộc gói. Images with thinking hiện có cho Plus, Pro và Business. Không cần nâng gói chỉ để thử một poster nhỏ.',
        privacy: 'Ảnh tạo ra được tự động lưu trong Images. Ảnh tải lên tuân theo Data Controls của tài khoản; không dùng chân dung riêng, giấy tờ, ảnh trẻ em hoặc hình chưa được phép. Xóa cuộc trò chuyện nếu muốn xóa ảnh khỏi My images.',
        caution: 'Vùng chọn không luôn chính xác và sửa có thể lan ra ngoài. AI có thể viết sai chữ hoặc tạo chi tiết không phù hợp; đây là công cụ làm nháp, không thay bước kiểm nội dung, quyền sử dụng và duyệt trước khi đăng.'
      },
      sources: [
        { title: 'Images in ChatGPT', publisher: 'OpenAI Help Center', date: 'Cập nhật 28/10/2026; truy cập 30/10/2026', url: 'https://help.openai.com/en/articles/11084440-images-in-chatgpt' },
        { title: 'ChatGPT Image Inputs FAQ', publisher: 'OpenAI Help Center', date: 'Truy cập 30/10/2026', url: 'https://help.openai.com/en/articles/8400551-chatgpt-image-inputs-faq' },
        { title: 'Data controls in ChatGPT', publisher: 'OpenAI Help Center', date: 'Truy cập 30/10/2026', url: 'https://help.openai.com/en/articles/7730893-data-controls-in-chatgpt' }
      ]
    }
  ],
  cases: [
    {
      slug: 'case-morgan-stanley', type: 'case-study', topic: 'organization', title: 'Morgan Stanley: trợ lý tri thức cần đánh giá, không chỉ cần chatbot',
      dek: 'Một chỉ số sử dụng cao cho thấy mức chấp nhận, không phải độ chính xác hay doanh thu.', updated: '2026-10-27', readTime: '5 phút', level: 'Cơ bản',
      outcome: 'Thiết kế thử nhỏ 10 câu hỏi cho một kho quy trình, ghi câu đúng, thiếu nguồn và không nên trả lời.', preparation: ['Một tập tài liệu được quản lý.', '10 câu hỏi đại diện.', 'Người phụ trách duyệt kết quả.'],
      steps: [{title:'Đọc đúng loại nguồn',body:'Đây là câu chuyện khách hàng của nhà cung cấp, không phải thử nghiệm độc lập.'},{title:'Không đổi nghĩa số liệu',body:'Hơn 98% chủ động dùng là mức sử dụng, không phải 98% câu trả lời đúng.'},{title:'Thu nhỏ để thử',body:'Đánh giá 10 câu hỏi quy trình trước khi mở rộng; ghi lỗi và câu không nên trả lời.'}],
      prompt: 'Dựa trên bộ tài liệu đã duyệt, trả lời 10 câu hỏi thử nghiệm. Với mỗi câu, ghi nguồn, mức chắc chắn, thông tin thiếu và khi nào cần chuyển cho người phụ trách. Không trả lời ngoài tài liệu.',
      example: {label:'Ví dụ minh họa — không phải dữ liệu thật',input:'10 câu hỏi giả về quy trình câu lạc bộ.',output:'Bảng 10 dòng gồm đúng nguồn, thiếu nguồn hoặc không nên trả lời.'},
      checklist:['Không gọi mức sử dụng là độ chính xác.','Có người chịu trách nhiệm đánh giá.','Câu ngoài phạm vi được từ chối.'],
      limits:{cost:'Chi phí phụ thuộc hệ thống được chọn; thử nhỏ trước.',privacy:'Chỉ dùng tài liệu được phép và kho đã quản lý.',caution:'Không suy rộng kết quả của ngân hàng sang tổ chức giáo dục nhỏ.'},
      sources:[{title:'Morgan Stanley — AI knowledge assistant',publisher:'OpenAI customer story',date:'Truy cập 27/10/2026',url:'https://openai.com/index/morgan-stanley/'}]
    },
    {
      slug: 'case-khan-academy', type: 'case-study', topic: 'learning', title: 'Khan Academy: AI gia sư phải nằm trong hoạt động học',
      dek: 'Thêm hộp chat chưa đủ; giá trị xuất hiện khi AI khuyến khích người học giải thích cách suy nghĩ trong bài tập.', updated: '2026-10-27', readTime: '5 phút', level: 'Cơ bản',
      outcome: 'Thiết kế một hoạt động nhỏ: học viên tự trả lời, AI gợi câu hỏi, giáo viên kiểm tra lập luận và đo cả chất lượng lẫn tham gia.', preparation:['Một bài tập cụ thể.','Tiêu chí cho lập luận tốt.','Giáo viên duyệt đầu ra.'],
      steps:[{title:'Đọc đúng mức bằng chứng',body:'Nguồn là lời nhìn lại của tổ chức triển khai, không phải đánh giá độc lập.'},{title:'Đặt AI vào quy trình',body:'Yêu cầu người học trả lời trước; AI hỏi gợi mở thay vì đưa đáp án ngay.'},{title:'Đo hai mặt',body:'Theo dõi chất lượng giải thích và mức tham gia; không lấy số liệu toàn nền tảng làm hiệu quả riêng của AI.'}],
      prompt:'Tôi sẽ đưa câu trả lời của học viên cho một bài tập. Không đưa đáp án ngay. Hãy hỏi một câu giúp họ giải thích bước suy nghĩ tiếp theo, chỉ ra điểm cần kiểm tra và chờ phản hồi. Giáo viên sẽ duyệt trước khi dùng.',
      example:{label:'Ví dụ minh họa — không phải dữ liệu thật',input:'Một câu trả lời sai nhưng có một bước lập luận đúng.',output:'AI hỏi về bước mâu thuẫn thay vì chấm sai và đưa lời giải hoàn chỉnh.'},
      checklist:['Học viên trả lời trước AI.','AI hỏi gợi mở, không làm hộ.','Giáo viên kiểm tra lập luận.','Không tuyên bố hiệu quả nhân quả chưa có nguồn.'],
      limits:{cost:'Hạn mức tùy công cụ/lớp học.',privacy:'Không đưa hồ sơ cá nhân vào prompt.',caution:'Đây là thiết kế thử nghiệm đề xuất, chưa được chạy tại BKE.'},
      sources:[{title:'Khanmigo’s first chapter — a note from Sal Khan',publisher:'Khan Academy',date:'2026; truy cập 27/10/2026',url:'https://blog.khanacademy.org/khanmigos-first-chapter-changed-how-i-think-about-ai-a-note-from-sal-khan/'}]
    }
  ]
};
