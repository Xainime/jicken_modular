// ═══════════════════════════════════════════
// modal.js — Item detail modal logic
// ═══════════════════════════════════════════

let currentModal = null;

function openModal(item) {
  currentModal = item;
  document.getElementById('modalCat').textContent = item.cat;
  document.getElementById('modalName').textContent = item.name;
  document.getElementById('modalDesc').textContent = item.desc;
  document.getElementById('modalPrice').innerHTML = '<sup>P</sup>' + item.price.toLocaleString();

  const incList = document.getElementById('modalInc');
  const incTitle = document.getElementById('modalIncTitle');
  incList.innerHTML = '';
  if (item.includes && item.includes.length > 0) {
    incTitle.style.display = 'block';
    item.includes.forEach(i => {
      const li = document.createElement('li');
      li.textContent = i;
      incList.appendChild(li);
    });
  } else {
    incTitle.style.display = 'none';
  }

  document.getElementById('itemModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('itemModal')) return;
  document.getElementById('itemModal').classList.remove('open');
  document.body.style.overflow = '';
  currentModal = null;
}

function addFromModal() {
  if (currentModal) addToPan(currentModal);
  document.getElementById('itemModal').classList.remove('open');
  document.body.style.overflow = '';
  currentModal = null;
}

function orderFromModal() {
  const item = currentModal;
  document.getElementById('itemModal').classList.remove('open');
  document.body.style.overflow = '';
  currentModal = null;
  if (item) {
    addToPan(item);
    const catMap = {
      'Jicken Bucket': 'buckets', 'Unlimited 1 Hour': 'unlimited',
      'Ala Carte': 'alacarte', 'Tipid Set': 'tipidsets',
      'Bilao Wings': 'bilao', 'Appetizer': 'appetizers',
      'Drink': 'appetizers', 'Add-On': 'addons',
      'Cafe Latte': 'cafe', 'Milk Tea': 'cafe', 'Frappe': 'cafe', 'Fruit Tea': 'cafe'
    };
    const idMap = {
      'bucket10': 'bucket10', 'bucket15': 'bucket15', 'bucket20': 'bucket20',
      'duo': 'duo', 'familia': 'familia', 'tropa': 'tropa', 'barkada': 'barkada'
    };
    openKiosk(catMap[item.cat] || 'buckets', idMap[item.id] || null);
  }
}
