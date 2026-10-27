const searchInput = document.querySelector('#search-input');
const searchStatus = document.querySelector('#search-status');
const searchableSections = [...document.querySelectorAll('.searchable')];
const noResults = document.querySelector('#no-results');
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');

const normalize = (value) => value.toLocaleLowerCase('vi').normalize('NFD').replace(/[\u0300-\u036f]/g, '');

searchInput.addEventListener('input', () => {
  const query = normalize(searchInput.value.trim());
  let count = 0;
  searchableSections.forEach((section) => {
    const haystack = normalize(`${section.dataset.search || ''} ${section.textContent}`);
    const visible = !query || haystack.includes(query);
    section.classList.toggle('is-hidden', !visible);
    if (visible) count += 1;
  });
  noResults.hidden = count !== 0;
  searchStatus.textContent = query ? `${count} mục phù hợp.` : 'Gõ từ khóa để lọc nội dung.';
});

document.addEventListener('click', async (event) => {
  const button = event.target.closest('[data-copy]');
  if (!button) return;
  const feedback = document.querySelector('.copy-feedback');
  try {
    await navigator.clipboard.writeText(button.dataset.copy);
    const original = button.textContent;
    button.textContent = 'Đã sao chép ✓';
    if (feedback) feedback.textContent = 'Mẫu câu đã được sao chép vào bộ nhớ tạm.';
    window.setTimeout(() => { button.textContent = original; }, 1800);
  } catch {
    const area = document.createElement('textarea');
    area.value = button.dataset.copy;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    document.execCommand('copy');
    area.remove();
    button.textContent = 'Đã sao chép ✓';
    window.setTimeout(() => { button.textContent = 'Sao chép mẫu'; }, 1800);
  }
});

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

nav.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});
