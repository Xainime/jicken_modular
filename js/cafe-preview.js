// ═══════════════════════════════════════════
// cafe-preview.js — Drink preview panel
// ═══════════════════════════════════════════

let _selectedDrink = null;

// Emoji map for drink categories when no image is available
const drinkEmoji = {
  lattes: '☕', americano: '🖤', milktea: '🧋',
  milkseries: '🥛', frappe: '🧊', fruittea: '🍵', fruitsoda: '🫧'
};

function previewDrink(name, cat, tab, sizes, imgSrc) {
  // Deselect previous
  document.querySelectorAll('.drink-card.selected')
    .forEach(c => c.classList.remove('selected'));

  // Select current card — find by matching name text
  document.querySelectorAll('.drink-card').forEach(card => {
    if (card.querySelector('.drink-name')?.textContent.trim() === name) {
      card.classList.add('selected');
    }
  });

  // Store selected drink
  _selectedDrink = { name, cat, tab, sizes, imgSrc: imgSrc || null };

  // Show content, hide empty state
  document.getElementById('cpEmpty').style.display = 'none';
  const content = document.getElementById('cpContent');
  content.style.display = 'flex';

  // Set info
  document.getElementById('cpCat').textContent = cat;
  document.getElementById('cpName').textContent = name;

  // Handle image vs placeholder
  const img = document.getElementById('cpImg');
  const placeholder = document.getElementById('cpPlaceholder');
  if (imgSrc && !imgSrc.includes('/*')) {
    img.src = imgSrc;
    img.style.display = 'block';
    placeholder.style.display = 'none';
  } else {
    img.style.display = 'none';
    placeholder.style.display = 'flex';
    document.getElementById('cpPlaceholderEmoji').textContent = drinkEmoji[tab] || '☕';
  }

  // Build size buttons
  const sizeBtns = document.getElementById('cpSizeBtns');
  sizeBtns.innerHTML = '';
  sizes.forEach((s, i) => {
    const btn = document.createElement('button');
    btn.className = 'cp-size-btn' + (i === 0 ? ' selected' : '');
    btn.textContent = `${s.size} — P${s.price}`;
    btn.onclick = () => {
      document.querySelectorAll('.cp-size-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      _selectedDrink.selectedSize = s;
    };
    sizeBtns.appendChild(btn);
  });

  // Default to first size
  _selectedDrink.selectedSize = sizes[0];

  // Scroll preview into view on mobile
  if (window.innerWidth <= 768) {
    document.getElementById('cafePreview')
      .scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function addDrinkToCart() {
  if (!_selectedDrink) return;
  const { name, selectedSize } = _selectedDrink;
  addToPan({
    id: 'drink_' + name.toLowerCase().replace(/\s+/g, '_'),
    name: `${name} (${selectedSize.size})`,
    price: selectedSize.price,
    cat: 'Cafe Drink',
    img: null,
    desc: ''
  });
}