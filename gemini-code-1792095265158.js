document.addEventListener('DOMContentLoaded', () => {
  // تفاعلات السلة الواجهة البرمجية الأساسية
  const cartBtn = document.querySelector('.cartBtn');
  const cartPanel = document.querySelector('.cartPanel');
  const cartShade = document.querySelector('.cartShade');
  const closeCartBtn = document.querySelector('.cartHead button');

  function toggleCart(show) {
    if (!cartPanel) return;
    if (show) {
      cartPanel.removeAttribute('hidden');
      if (cartShade) cartShade.removeAttribute('hidden');
    } else {
      cartPanel.setAttribute('hidden', '');
      if (cartShade) cartShade.setAttribute('hidden', '');
    }
  }

  if (cartBtn) {
    cartBtn.addEventListener('click', () => toggleCart(true));
  }
  if (closeCartBtn) {
    closeCartBtn.addEventListener('click', () => toggleCart(false));
  }
  if (cartShade) {
    cartShade.addEventListener('click', () => toggleCart(false));
  }

  // تصفية المنتجات عبر الأزرار (Chips)
  const chips = document.querySelectorAll('.chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('on'));
      chip.classList.add('on');
      // يمكن إضافة منطق الفلترة هنا حسب الحاجة
    });
  });
});