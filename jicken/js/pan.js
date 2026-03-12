// ═══════════════════════════════════════════
// pan.js — Cart / Pan management
// ═══════════════════════════════════════════

let pan = [];

function addToPan(item) {
  const existing = pan.find(i => i.id === item.id);
  if (existing) {
    existing.qty++;
  } else {
    pan.push({ ...item, qty: 1 });
  }
  renderPan();
  showSnackbar('Added to Pan: ' + item.name);
  updateFloatPan();
}

function removeFromPan(id) {
  pan = pan.filter(i => i.id !== id);
  renderPan();
  updateFloatPan();
}

function changeQty(id, delta) {
  const item = pan.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromPan(id);
  else { renderPan(); updateFloatPan(); }
}

function clearPan() {
  pan = [];
  renderPan();
  updateFloatPan();
}

function renderPan() {
  const container = document.getElementById('panItems');
  const countEl = document.getElementById('panCount');
  const subtotalEl = document.getElementById('panSubtotal');
  const totalEl = document.getElementById('panTotal');
  const checkoutBtn = document.getElementById('checkoutBtn');

  if (pan.length === 0) {
    container.innerHTML = '<div class="pan-empty"><div class="pan-empty-ico">🍳</div><div class="pan-empty-txt">Your pan is empty.<br>Add items to get started!</div></div>';
    countEl.textContent = '0';
    subtotalEl.textContent = 'P0';
    totalEl.textContent = 'P0';
    checkoutBtn.disabled = true;
    return;
  }

  let total = 0, count = 0;
  container.innerHTML = '';

  pan.forEach(item => {
    total += item.price * item.qty;
    count += item.qty;
    const div = document.createElement('div');
    div.className = 'pan-item';
    div.innerHTML = `
      <div class="pan-item-inf">
        <div class="pan-item-name">${item.name}</div>
        <div class="pan-item-price">P${item.price.toLocaleString()} each</div>
        <div class="pan-item-qty">
          <button class="qty-btn" onclick="changeQty('${item.id}',-1)">-</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${item.id}',1)">+</button>
        </div>
      </div>
      <button class="pan-rm" onclick="removeFromPan('${item.id}')">x</button>
    `;
    container.appendChild(div);
  });

  countEl.textContent = count;
  subtotalEl.textContent = 'P' + total.toLocaleString();
  totalEl.textContent = 'P' + total.toLocaleString();
  checkoutBtn.disabled = false;
}

function updateFloatPan() {
  const fp = document.getElementById('floatPan');
  const fpCount = document.getElementById('floatPanCount');
  const fpTotal = document.getElementById('floatPanTotal');
  if (pan.length > 0 && currentPage !== 'kiosk') {
    fp.classList.add('show');
    let total = 0, count = 0;
    pan.forEach(i => { total += i.price * i.qty; count += i.qty; });
    fpCount.textContent = count;
    fpTotal.textContent = 'P' + total.toLocaleString();
  } else {
    fp.classList.remove('show');
  }
}

function showSnackbar(msg) {
  const sb = document.getElementById('snackbar');
  sb.textContent = msg;
  sb.classList.add('show');
  clearTimeout(sb._timer);
  sb._timer = setTimeout(() => sb.classList.remove('show'), 2500);
}

function checkout() {
  if (pan.length === 0) return;
  let total = pan.reduce((s, i) => s + i.price * i.qty, 0);
  alert('Order placed! Total: P' + total.toLocaleString() + '\nThank you! Your order will be prepared shortly.');
  clearPan();
}
