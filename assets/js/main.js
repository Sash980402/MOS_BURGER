// main.js - MOS Burgers web app

// JavaScript code for dynamic features will go here. 

const menuItems = [
  // Burgers
  { code: 'B1001', name: 'Classic Burger (Large)', category: 'Burgers', price: 750, discount: 0 },
  { code: 'B1002', name: 'Classic Burger (Regular)', category: 'Burgers', price: 1500, discount: 15 },
  { code: 'B1003', name: 'Turkey Burger', category: 'Burgers', price: 1600, discount: 0 },
  { code: 'B1004', name: 'Chicken Burger (Large)', category: 'Burgers', price: 1400, discount: 0 },
  { code: 'B1005', name: 'Chicken Burger (Regular)', category: 'Burgers', price: 800, discount: 20 },
  { code: 'B1006', name: 'Cheese Burger (Large)', category: 'Burgers', price: 1000, discount: 0 },
  { code: 'B1007', name: 'Cheese Burger (Regular)', category: 'Burgers', price: 600, discount: 0 },
  { code: 'B1008', name: 'Bacon Burger', category: 'Burgers', price: 650, discount: 15 },
  { code: 'B1009', name: 'Shawarma Burger', category: 'Burgers', price: 800, discount: 0 },
  { code: 'B1010', name: 'Olive Burger', category: 'Burgers', price: 1800, discount: 0 },
  { code: 'B1012', name: 'Double-Cheese Burger', category: 'Burgers', price: 1250, discount: 20 },
  { code: 'B1013', name: 'Crispy Chicken Burger (Regular)', category: 'Burgers', price: 1200, discount: 0 },
  { code: 'B1014', name: 'Crispy Chicken Burger (Large)', category: 'Burgers', price: 1600, discount: 10 },
  { code: 'B1015', name: 'Paneer Burger', category: 'Burgers', price: 900, discount: 0 },
  // Submarines
  { code: 'B1016', name: 'Crispy Chicken Submarine (Large)', category: 'Submarines', price: 2000, discount: 0 },
  { code: 'B1017', name: 'Crispy Chicken Submarine (Regular)', category: 'Submarines', price: 1500, discount: 0 },
  { code: 'B1018', name: 'Chicken Submarine (Large)', category: 'Submarines', price: 1800, discount: 3 },
  { code: 'B1019', name: 'Chicken Submarine (Regular)', category: 'Submarines', price: 1400, discount: 0 },
  { code: 'B1020', name: 'Grinder Submarine', category: 'Submarines', price: 2300, discount: 0 },
  { code: 'B1021', name: 'Cheese Submarine', category: 'Submarines', price: 2200, discount: 0 },
  { code: 'B1022', name: 'Double Cheese n Chicken Submarine', category: 'Submarines', price: 1900, discount: 16 },
  { code: 'B1023', name: 'Special Horgie Submarine', category: 'Submarines', price: 2800, discount: 0 },
  { code: 'B1024', name: 'MOS Special Submarine', category: 'Submarines', price: 3000, discount: 0 },
  // Fries
  { code: 'B1025', name: 'Steak Fries (Large)', category: 'Fries', price: 1200, discount: 0 },
  { code: 'B1026', name: 'Steak Fries (Medium)', category: 'Fries', price: 600, discount: 0 },
  { code: 'B1027', name: 'French Fries (Large)', category: 'Fries', price: 800, discount: 0 },
  { code: 'B1028', name: 'French Fries (Medium)', category: 'Fries', price: 650, discount: 0 },
  { code: 'B1029', name: 'French Fries (Small)', category: 'Fries', price: 450, discount: 0 },
  { code: 'B1030', name: 'Sweet Potato Fries (Large)', category: 'Fries', price: 600, discount: 0 },
  // Pasta
  { code: 'B1031', name: 'Chicken n Cheese Pasta', category: 'Pasta', price: 1600, discount: 15 },
  { code: 'B1032', name: 'Chicken Penne Pasta', category: 'Pasta', price: 1700, discount: 0 },
  { code: 'B1033', name: 'Ground Turkey Pasta Bake', category: 'Pasta', price: 2900, discount: 10 },
  { code: 'B1034', name: 'Creamy Shrimp Pasta', category: 'Pasta', price: 2000, discount: 0 },
  { code: 'B1035', name: 'Lemon Butter Pasta', category: 'Pasta', price: 1950, discount: 0 },
  { code: 'B1036', name: 'Tagliatelle Pasta', category: 'Pasta', price: 2400, discount: 1 },
  { code: 'B1037', name: 'Baked Ravioli', category: 'Pasta', price: 2000, discount: 1 },
  // Chicken
  { code: 'B1038', name: 'Fried Chicken (Small)', category: 'Chicken', price: 1200, discount: 0 },
  { code: 'B1039', name: 'Fried Chicken (Regular)', category: 'Chicken', price: 2300, discount: 10 },
  { code: 'B1040', name: 'Fried Chicken (Large)', category: 'Chicken', price: 3100, discount: 5 },
  { code: 'B1041', name: 'Hot Wings (Large)', category: 'Chicken', price: 2400, discount: 0 },
  { code: 'B1042', name: 'Devilled Chicken (Large)', category: 'Chicken', price: 900, discount: 0 },
  { code: 'B1043', name: 'BBQ Chicken (Regular)', category: 'Chicken', price: 2100, discount: 0 },
  // Beverages
  { code: 'B1044', name: 'Pepsi (330ml)', category: 'Beverages', price: 990, discount: 5 },
  { code: 'B1045', name: 'Coca-Cola (330ml)', category: 'Beverages', price: 1230, discount: 0 },
  { code: 'B1046', name: 'Sprite (330ml)', category: 'Beverages', price: 1500, discount: 3 },
  { code: 'B1047', name: 'Mirinda (330ml)', category: 'Beverages', price: 850, discount: 7 },
];


let cart = JSON.parse(localStorage.getItem('cart')) || [];
let orderDiscount = parseFloat(localStorage.getItem('orderDiscount')) || 0;

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('orderDiscount', orderDiscount);
}

function showNotification(message) {
  let notif = document.createElement('div');
  notif.className = 'notif';
  notif.innerText = message;
  document.body.appendChild(notif);
  setTimeout(() => notif.remove(), 2000);
}

function addToCart(item) {
  const found = cart.find(i => i.code === item.code);
  if (found) {
    found.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  saveCart();
  showNotification(`${item.name} added to cart!`);
}


function getMenuItems() {
  return JSON.parse(localStorage.getItem('menuItems') || 'null') || menuItems;
}
function saveMenuItems(items) {
  localStorage.setItem('menuItems', JSON.stringify(items));
}

function renderMenu(filter = '', category = '') {
  const menuList = document.getElementById('menu-list');
  const tabsDiv = document.getElementById('menu-category-tabs');
  if (!menuList) return;
  let items = getMenuItems();
 
  if (tabsDiv) {
    const cats = Array.from(new Set(items.map(i => i.category)));
    tabsDiv.innerHTML = `<button class="menu-tab${!category ? ' active' : ''}" data-cat="">All</button>` +
      cats.map(c => `<button class="menu-tab${category===c?' active':''}" data-cat="${c}">${c}</button>`).join('');
    tabsDiv.querySelectorAll('.menu-tab').forEach(btn => {
      btn.onclick = () => {
        tabsDiv.querySelectorAll('.menu-tab').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        renderMenu(document.getElementById('menu-search')?.value?.toLowerCase() || '', btn.dataset.cat);
      };
    });
  }
  menuList.innerHTML = '';
  
  let filtered = items.filter(item =>
    (item.name.toLowerCase().includes(filter) ||
     item.code.toLowerCase().includes(filter) ||
     item.category.toLowerCase().includes(filter)) &&
    (!category || item.category === category)
  );
  if (filtered.length === 0) {
    menuList.innerHTML = '<div style="text-align:center;padding:2rem;">No menu items found.</div>';
    return;
  }
  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.innerHTML = `
      <img src="${item.image || 'https://placehold.co/120x120?text=No+Image'}" alt="${item.name}">
      <h3>${item.name}</h3>
      <div class="price${item.discount ? ' discounted' : ''}">LKR ${item.price.toFixed(2)}</div>
      ${item.discount ? `<span class="discount-badge">-${item.discount}%</span>` : ''}
      <p style="margin:0.2rem 0 0.5rem 0;"><strong>Code:</strong> ${item.code}</p>
      <p style="margin:0.2rem 0 0.5rem 0;"><strong>Category:</strong> ${item.category}</p>
      <div class="menu-actions">
        <input type="number" min="1" value="1" class="qty-input" data-qty-for="${item.code}">
        <button class="button" data-add-cart="${item.code}"><i class="fa fa-cart-plus"></i> Add to Cart</button>
        <button class="button" data-edit-menu="${item.code}"><i class="fa fa-pen"></i></button>
        <button class="button" data-del-menu="${item.code}" style="background:#e63946;"><i class="fa fa-trash"></i></button>
      </div>
    `;
    menuList.appendChild(card);
  });
 
  menuList.querySelectorAll('[data-add-cart]').forEach(btn => {
    btn.onclick = () => {
      const code = btn.dataset.addCart;
      const item = getMenuItems().find(i => i.code === code);
      const qty = parseInt(menuList.querySelector(`.qty-input[data-qty-for="${code}"]`)?.value) || 1;
      if (item) {
        for (let i = 0; i < qty; i++) addToCart(item);
        showNotification(`${item.name} x${qty} added to cart!`);
      }
    };
  });
  menuList.querySelectorAll('[data-del-menu]').forEach(btn => {
    btn.onclick = () => deleteMenuItem(btn.dataset.delMenu);
  });
  menuList.querySelectorAll('[data-edit-menu]').forEach(btn => {
    btn.onclick = (e) => {
      
      document.querySelectorAll('.popup-inline, .popup-overlay').forEach(p => p.remove());
      
      let overlay = document.createElement('div');
      overlay.className = 'popup-overlay';
      document.body.appendChild(overlay);
      
      let popup = document.createElement('div');
      popup.className = 'popup-inline';
      popup.setAttribute('aria-live', 'polite');
      popup.innerHTML = `
        <button class='popup-close' title='Close' aria-label='Close'>&times;</button>
        <span class='popup-icon'><i class='fa fa-hamburger'></i></span>
        <strong style='font-size:1.2rem;'>Ready to update this menu item?</strong><br>
        <span style="display:block;margin:0.5rem 0 1.2rem 0;">Make your changes and keep your menu fresh!</span>
        <button class="button" id="continue-edit-menu" style="margin-right:0.5rem;"><i class="fa fa-arrow-right"></i> Yes, update!</button>
        <button class="button" id="cancel-edit-menu"><i class="fa fa-xmark"></i> Cancel</button>
      `;
      document.body.appendChild(popup);
      
      const rect = btn.getBoundingClientRect();
      popup.style.top = (window.scrollY + rect.bottom + 8) + 'px';
      popup.style.left = (window.scrollX + rect.left) + 'px';
      
      document.getElementById('continue-edit-menu').onclick = () => {
        popup.remove();
        overlay.remove();
        showEditMenuItemModal(btn.dataset.editMenu, btn);
      };
      document.getElementById('cancel-edit-menu').onclick = () => {
        popup.remove();
        overlay.remove();
      };
      popup.querySelector('.popup-close').onclick = () => {
        popup.remove();
        overlay.remove();
      };
     
      setTimeout(() => {
        document.addEventListener('mousedown', function handler(ev) {
          if (!popup.contains(ev.target)) {
            popup.remove();
            overlay.remove();
            document.removeEventListener('mousedown', handler);
          }
        });
      }, 0);
      
      document.addEventListener('keydown', function escHandler(ev) {
        if (ev.key === 'Escape') {
          popup.remove();
          overlay.remove();
          document.removeEventListener('keydown', escHandler);
        }
      });
    };
  });
}

function deleteMenuItem(code) {
  if (!confirm('Delete this menu item?')) return;
  let items = getMenuItems();
  items = items.filter(i => i.code !== code);
  saveMenuItems(items);
  renderMenu(document.getElementById('menu-search')?.value?.toLowerCase() || '', document.getElementById('menu-category-filter')?.value || '');
}

function showEditMenuItemModal(code, anchorBtn) {
  let items = getMenuItems();
  let idx = items.findIndex(i => i.code === code);
  if (idx === -1) {
    localStorage.removeItem('menuItems');
    items = getMenuItems();
    idx = items.findIndex(i => i.code === code);
    if (idx === -1) {
      alert('Menu item not found. Try refreshing the page.');
      return;
    }
  }
  let item = {...items[idx]};
  let modal = document.createElement('div');
  modal.className = 'receipt-modal';
  modal.innerHTML = `
    <button class='popup-close' title='Close' aria-label='Close' style='position:absolute;top:14px;right:18px;background:none;border:none;color:#e63946;font-size:1.5rem;cursor:pointer;opacity:0.8;z-index:1;'>&times;</button>
    <div class="receipt-content" role="dialog" aria-modal="true" aria-label="Edit Menu Item" style="background:linear-gradient(135deg,#e63946 0%,#ffb3c1 100%);border-radius:18px;padding:2.2rem 2.2rem 1.5rem 2.2rem;box-shadow:0 12px 36px rgba(230,57,70,0.18),0 2px 8px rgba(0,0,0,0.10);color:#fff;min-width:320px;max-width:400px;animation:popupBounceIn 0.35s cubic-bezier(.68,-0.55,.27,1.55);">
      <span class='popup-icon' style='font-size:2.5rem;display:block;text-align:center;margin-bottom:0.5rem;'><i class='fa fa-hamburger'></i></span>
      <h2 style='text-align:center;margin-bottom:1rem;'>Edit Menu Item</h2>
      <form id="edit-menu-form">
        <label>Item Name:<br><input type="text" id="edit-menu-name" value="${item.name}" required style="border-radius:8px;padding:0.4rem 0.7rem;border:none;margin-bottom:0.5rem;width:100%;"></label><br>
        <label>Price (LKR):<br><input type="number" id="edit-menu-price" value="${item.price}" min="0" required style="border-radius:8px;padding:0.4rem 0.7rem;border:none;margin-bottom:0.5rem;width:100%;"></label><br>
        <label>Discount (%):<br><input type="number" id="edit-menu-discount" value="${item.discount || 0}" min="0" max="100" style="border-radius:8px;padding:0.4rem 0.7rem;border:none;margin-bottom:0.5rem;width:100%;"></label><br>
        <label>Category:<br><input type="text" id="edit-menu-category" value="${item.category}" required style="border-radius:8px;padding:0.4rem 0.7rem;border:none;margin-bottom:0.5rem;width:100%;"></label><br>
        <label>Image URL:<br><input type="text" id="edit-menu-image" value="${item.image || ''}" placeholder="https://..." style="border-radius:8px;padding:0.4rem 0.7rem;border:none;margin-bottom:0.5rem;width:100%;"></label><br>
        <button class="button" type="submit" style="background:#e63946;color:#fff;border-radius:24px;font-size:1.08rem;padding:0.6rem 1.4rem;margin-top:0.7rem;font-weight:600;box-shadow:0 2px 8px rgba(230,57,70,0.10);width:100%;"><i class="fa fa-floppy-disk"></i> Save</button>
      </form>
    </div>
  `;
  document.body.appendChild(modal);
  
  let overlay = document.createElement('div');
  overlay.className = 'popup-overlay';
  document.body.appendChild(overlay);
  
  if (anchorBtn) {
    modal.style.position = 'absolute';
    const rect = anchorBtn.getBoundingClientRect();
    modal.style.top = (window.scrollY + rect.bottom + 12) + 'px';
    modal.style.left = (window.scrollX + rect.left) + 'px';
    modal.style.margin = '0';
    modal.style.zIndex = 1003;
  }
 
  setTimeout(() => {
    modal.querySelector('input,select,textarea,button')?.focus();
  }, 100);
  document.getElementById('edit-menu-form').onsubmit = e => {
    e.preventDefault();
    item.name = document.getElementById('edit-menu-name').value.trim();
    item.price = parseFloat(document.getElementById('edit-menu-price').value);
    item.discount = parseFloat(document.getElementById('edit-menu-discount').value) || 0;
    item.category = document.getElementById('edit-menu-category').value.trim();
    item.image = document.getElementById('edit-menu-image').value.trim();
    items[idx] = item;
    saveMenuItems(items);
    modal.remove();
    overlay.remove();
    renderMenu(document.getElementById('menu-search')?.value?.toLowerCase() || '', document.querySelector('.menu-tab.active')?.dataset.cat || '');
    showNotification('Menu item updated!');
  };
 
  modal.querySelector('.popup-close').onclick = () => {
    modal.remove();
    overlay.remove();
  };
 
  document.addEventListener('keydown', function escHandler(ev) {
    if (ev.key === 'Escape') {
      modal.remove();
      overlay.remove();
      document.removeEventListener('keydown', escHandler);
    }
  });
  modal.querySelector('.receipt-content').focus();
  modal.tabIndex = -1;
}


function renderCart() {
  const cartItemsDiv = document.getElementById('cart-items');
  const orderSummaryDiv = document.getElementById('order-summary');
  if (!cartItemsDiv || !orderSummaryDiv) return;
  cart = JSON.parse(localStorage.getItem('cart')) || [];
  orderDiscount = parseFloat(localStorage.getItem('orderDiscount')) || 0;
  cartItemsDiv.innerHTML = '';
  if (cart.length === 0) {
    cartItemsDiv.innerHTML = `
      <div class="empty-cart" style="text-align:center;padding:4rem 2rem;color:#777;background:rgba(255,255,255,0.85);border-radius:20px;box-shadow:0 4px 16px rgba(0,0,0,0.08);margin:2rem 0;">
        <i class="fa fa-shopping-basket" style="font-size:5rem;color:#ddd;margin-bottom:1.5rem;display:block;animation:float 3s ease-in-out infinite;"></i>
        <h2 style="color:#999;margin-bottom:1rem;font-size:1.8rem;font-weight:600;">Your cart is empty</h2>
        <p style="margin-bottom:2.5rem;font-size:1.1rem;line-height:1.6;">Looks like you haven't added any delicious items yet!</p>
        <a href="menu.html" class="button" style="background:linear-gradient(135deg,#e63946 0%,#ffb3c1 100%);color:#fff;border:none;border-radius:30px;padding:1rem 2.5rem;font-size:1.2rem;font-weight:600;text-decoration:none;display:inline-block;box-shadow:0 4px 16px rgba(230,57,70,0.2);">
          <i class="fa fa-utensils"></i> Browse Menu
        </a>
      </div>
    `;
    orderSummaryDiv.innerHTML = '';
    return;
  }
  let subtotal = 0;
  cart.forEach((item, idx) => {
    const itemTotal = item.price * item.qty * (1 - (item.discount || 0) / 100);
    subtotal += itemTotal;
    const card = document.createElement('div');
    card.className = 'cart-item-card';
    card.style = 'display:flex;align-items:center;gap:1.5rem;background:rgba(255,255,255,0.92);backdrop-filter:blur(8px);border-radius:18px;box-shadow:0 4px 24px rgba(69,123,157,0.10);padding:1.5rem;margin-bottom:1.5rem;';
    card.innerHTML = `
      <img src="${item.image || 'https://placehold.co/80x80?text=No+Image'}" alt="${item.name}" style="width:80px;height:80px;border-radius:12px;object-fit:cover;">
      <div style="flex-grow:1;">
        <div style="font-size:1.15rem;font-weight:700;color:#1d3557;">${item.name}</div>
        <div style="font-size:1rem;color:#457b9d;">LKR ${item.price.toFixed(2)}${item.discount?' ('+item.discount+'% off)':''}</div>
      </div>
      <div style="display:flex;align-items:center;gap:0.7rem;">
        <button class="qty-btn" data-idx="${idx}" data-op="-1" style="background:linear-gradient(135deg,#e63946 0%,#ffb3c1 100%);color:#fff;border:none;border-radius:50%;width:32px;height:32px;font-size:1.2rem;cursor:pointer;">-</button>
        <input type="number" class="qty-input" value="${item.qty}" data-idx="${idx}" style="width:50px;text-align:center;border:1px solid #ccc;border-radius:8px;padding:0.4rem;">
        <button class="qty-btn" data-idx="${idx}" data-op="1" style="background:linear-gradient(135deg,#e63946 0%,#ffb3c1 100%);color:#fff;border:none;border-radius:50%;width:32px;height:32px;font-size:1.2rem;cursor:pointer;">+</button>
      </div>
      <div style="font-size:1.15rem;font-weight:700;color:#e63946;width:120px;text-align:right;">LKR ${itemTotal.toFixed(2)}</div>
      <button class="remove-btn" data-idx="${idx}" style="background:none;border:none;color:#e63946;font-size:1.2rem;cursor:pointer;"><i class="fa fa-trash"></i></button>
    `;
    cartItemsDiv.appendChild(card);
  });
 
  cartItemsDiv.querySelectorAll('.qty-btn').forEach(btn => {
    btn.onclick = () => {
      const idx = +btn.dataset.idx;
      const op = +btn.dataset.op;
      cart[idx].qty += op;
      if (cart[idx].qty < 1) cart[idx].qty = 1;
      saveCart();
      renderCart();
    };
  });
  cartItemsDiv.querySelectorAll('.qty-input').forEach(input => {
    input.onchange = (e) => {
      const idx = +e.target.dataset.idx;
      let val = parseInt(e.target.value);
      if (isNaN(val) || val < 1) val = 1;
      cart[idx].qty = val;
      saveCart();
      renderCart();
    };
  });
  cartItemsDiv.querySelectorAll('.remove-btn').forEach(btn => {
    btn.onclick = () => {
      cart.splice(+btn.dataset.idx, 1);
      saveCart();
      renderCart();
    };
  });
  
  const finalAmount = subtotal * (1 - orderDiscount / 100);
  orderSummaryDiv.innerHTML = `
    <div class="order-summary-card" style="background:rgba(255,255,255,0.92);backdrop-filter:blur(8px);border-radius:18px;box-shadow:0 4px 24px rgba(69,123,157,0.10);padding:1.5rem;">
      <h2 style="text-align:center;color:#e63946;margin-top:0;margin-bottom:1.5rem;"><i class="fa fa-receipt"></i> Order Summary</h2>
      
      <div style="background:linear-gradient(90deg,#f1faee 60%,#e9ecef 100%);border-radius:12px;padding:1.2rem;margin-bottom:1.5rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.7rem;font-size:1.08rem;">
          <span><i class="fa fa-money-bill"></i> Subtotal</span>
          <span>LKR ${subtotal.toFixed(2)}</span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.7rem;font-size:1.08rem;">
          <span><i class="fa fa-tag"></i> Order Discount</span>
          <input type="number" id="order-discount-input" min="0" max="100" value="${orderDiscount}" style="width:60px;text-align:right;border:1px solid #ccc;border-radius:8px;padding:0.4rem;">%
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;font-size:1.3rem;font-weight:700;color:#e63946;margin-top:1rem;padding-top:1rem;border-top:2px solid #e63946;">
          <span><i class="fa fa-sack-dollar"></i> Final Total</span>
          <span>LKR ${finalAmount.toFixed(2)}</span>
        </div>
      </div>

      <button class="button" id="checkout-btn" style="width:100%;font-size:1.2rem;padding:1rem;background:linear-gradient(135deg,#e63946 0%,#ffb3c1 100%);color:#fff;font-weight:700;margin-bottom:0.7rem;">
        <i class="fa fa-cart-shopping"></i> Checkout
      </button>
      <button class="button" id="clear-cart-btn" style="width:100%;background:#fff;color:#e63946;border:1.5px solid #e63946;">
        <i class="fa fa-trash"></i> Clear Cart
      </button>
    </div>
  `;
 
  document.getElementById('clear-cart-btn').onclick = () => {
    if (confirm('Are you sure you want to clear the cart?')) {
      cart = [];
      saveCart();
      renderCart();
    }
  };
  document.getElementById('order-discount-input').onchange = (e => {
    let val = parseFloat(e.target.value);
    if (isNaN(val) || val < 0) val = 0;
    if (val > 100) val = 100;
    orderDiscount = val;
    saveCart();
    renderCart();
  });
  document.getElementById('checkout-btn').onclick = showCheckoutModal;
}


function getOrders() {
  return JSON.parse(localStorage.getItem('orders') || '[]');
}
function saveOrders(orders) {
  localStorage.setItem('orders', JSON.stringify(orders));
}


function showCheckoutModal() {
  const customers = getCustomers();
  if (customers.length === 0) {
    alert('No customers found. Please add a customer first to proceed with checkout.');
    window.location.href = 'customers.html'; 
    return;
  }


  if (customers.length === 1) {
    processOrderAndShowReceipt(customers[0]);
  } else {
    
    let modal = document.createElement('div');
    modal.className = 'receipt-modal'; 
    modal.style = 'position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;z-index:1007;';
    
    
    let overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    overlay.style = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(30,33,44,0.45);z-index:1006;backdrop-filter:blur(2px);';
    document.body.appendChild(overlay);

    modal.innerHTML = `
      <div class="receipt-content" role="dialog" aria-modal="true" aria-label="Select Customer for Checkout" style="background:linear-gradient(135deg,#e63946 0%,#ffb3c1 100%);border-radius:18px;padding:2.2rem;box-shadow:0 12px 36px rgba(230,57,70,0.18),0 2px 8px rgba(0,0,0,0.10);color:#fff;min-width:320px;max-width:400px;animation:popupBounceIn 0.35s cubic-bezier(.68,-0.55,.27,1.55);">
        <button class='popup-close' title='Close' aria-label='Close' style='position:absolute;top:14px;right:18px;background:none;border:none;color:#fff;font-size:1.5rem;cursor:pointer;opacity:0.8;z-index:1;'>&times;</button>
        <span class='popup-icon' style='font-size:2.5rem;display:block;text-align:center;margin-bottom:0.5rem;'><i class='fa fa-user-check'></i></span>
        <h2 style="text-align:center;margin-bottom:1.2rem;">Select Customer</h2>
        <select id="checkout-customer" style="width:100%;padding:0.7rem;border-radius:10px;border:none;margin-bottom:1.5rem;font-size:1.1rem;color:#1d3557;">
          <option value="">-- Select a customer --</option>
          ${customers.map((c, i) => `<option value="${i}">${c.name} - ${c.contact}</option>`).join('')}
        </select>
        <div style="display:flex;gap:1rem;">
          <button class="button" id="proceed-checkout" style="flex:2;background:#a8dadc;color:#1d3557;border-radius:24px;font-size:1.08rem;padding:0.7rem 1.6rem;font-weight:700;">Proceed & Finalize</button>
          <button class="button" id="close-checkout-modal" style="flex:1;background:#fff;color:#e63946;border-radius:24px;font-size:1.08rem;padding:0.7rem 1.6rem;font-weight:600;border:1.5px solid #e63946;">Cancel</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const closeModal = () => {
      modal.remove();
      overlay.remove();
    };

    modal.querySelector('.popup-close').onclick = closeModal;
    document.getElementById('close-checkout-modal').onclick = closeModal;
    document.getElementById('proceed-checkout').onclick = () => {
      const idx = document.getElementById('checkout-customer').value;
      if (idx === '') {
        alert('Please select a customer.');
        return;
      }
      const customer = customers[idx];
      closeModal();
      processOrderAndShowReceipt(customer);
    };

    document.addEventListener('keydown', function escHandler(ev) {
      if (ev.key === 'Escape') {
        closeModal();
        document.removeEventListener('keydown', escHandler);
      }
    });
    setTimeout(() => document.getElementById('checkout-customer')?.focus(), 100);
  }
}

function processOrderAndShowReceipt(customer) {
  const cartData = JSON.parse(localStorage.getItem('cart')) || [];
  if (cartData.length === 0) {
    alert("Your cart is empty.");
    return;
  }
  const orderDiscount = parseFloat(localStorage.getItem('orderDiscount')) || 0;
  const orderTotal = cartData.reduce((sum, item) => sum + item.price * item.qty * (1 - (item.discount || 0) / 100), 0);
  const finalAmount = orderTotal * (1 - orderDiscount / 100);
  const order = {
    id: 'ORD' + Date.now(),
    customerContact: customer.contact,
    customerName: customer.name,
    items: cartData,
    orderDiscount,
    orderTotal,
    finalAmount,
    date: new Date().toISOString()
  };

  const orders = getOrders();
  orders.push(order);
  saveOrders(orders);

 
  showOrderDetails(orders.length - 1, true);


  localStorage.removeItem('cart');
  localStorage.removeItem('orderDiscount');
  cart = [];
  orderDiscount = 0;
  
  if (document.getElementById('cart-items-column')) {
    renderCart();
  }
}

function setCheckoutButtonEvent() {
  const orderSummaryDiv = document.getElementById('order-summary');
  if (orderSummaryDiv) {
    const checkoutBtn = orderSummaryDiv.querySelector('.button:last-child');
    if (checkoutBtn && checkoutBtn.textContent === 'Checkout') {
      checkoutBtn.onclick = showCheckoutModal;
    }
  }
}


function showReceipt(customer) {
  let modal = document.createElement('div');
  modal.className = 'receipt-modal';
  const cartData = JSON.parse(localStorage.getItem('cart')) || [];
  const orderDiscount = parseFloat(localStorage.getItem('orderDiscount')) || 0;
  const orderTotal = cartData.reduce((sum, item) => sum + item.price * item.qty * (1 - (item.discount || 0) / 100), 0);
  const finalAmount = orderTotal * (1 - orderDiscount / 100);
  modal.innerHTML = `
    <div class="receipt-content" style="background:linear-gradient(135deg,#fff 60%,#f1faee 100%);border-radius:22px;box-shadow:0 8px 32px rgba(69,123,157,0.13);padding:2.5rem 2.5rem 2rem 2.5rem;max-width:440px;margin:auto;position:relative;color:#1d3557;">
      <div style="display:flex;align-items:center;justify-content:center;margin-bottom:1.2rem;">
        <span style='font-size:3.2rem;color:#e63946;'><i class="fa fa-receipt"></i></span>
      </div>
      <div style="background:linear-gradient(90deg,#e63946 60%,#ffb3c1 100%);border-radius:16px 16px 0 0;padding:1.2rem 1.5rem 0.7rem 1.5rem;margin:-2.5rem -2.5rem 1.5rem -2.5rem;box-shadow:0 2px 8px rgba(230,57,70,0.10);color:#fff;text-align:center;">
        <h2 style="margin:0;font-size:2rem;letter-spacing:0.5px;"><i class="fa fa-burger"></i> Order Placed!</h2>
        <div style="font-size:1.1rem;margin-top:0.5rem;">
          <i class="fa fa-user"></i> <strong>${customer.name}</strong> (${customer.contact})
        </div>
      </div>
      <div style="max-height: 30vh; overflow-y: auto; padding-right: 1rem; margin-bottom: 1rem;">
      <table style="width:100%;border-collapse:separate;border-spacing:0 0.5rem;margin-bottom:1.2rem;">
        <thead>
          <tr style="background:#f1faee;color:#1d3557;font-size:1.08rem;">
            <th style="text-align:left;padding:0.5rem 0.6rem;border-radius:8px 0 0 8px;">Item</th>
            <th style="text-align:center;">Qty</th>
            <th style="text-align:right;">Price</th>
            <th style="text-align:center;">Disc.</th>
            <th style="text-align:right;padding-right:0.6rem;border-radius:0 8px 8px 0;">Total</th>
          </tr>
        </thead>
        <tbody>
          ${cartData.map(item => `
            <tr style="background:#fff;box-shadow:0 1px 4px rgba(69,123,157,0.07);border-radius:8px;">
              <td style="padding:0.5rem 0.6rem;border-radius:8px 0 0 8px;">${item.name}</td>
              <td style="text-align:center;">${item.qty}</td>
              <td style="text-align:right;">LKR ${item.price.toFixed(2)}</td>
              <td style="text-align:center;">${item.discount ? `<span style='color:#e63946;font-weight:600;'>${item.discount}%</span>` : '-'}</td>
              <td style="text-align:right;padding-right:0.6rem;font-weight:600;color:#457b9d;border-radius:0 8px 8px 0;">LKR ${(item.price * item.qty * (1 - (item.discount || 0) / 100)).toFixed(2)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      </div>
      <div style="background:linear-gradient(90deg,#f1faee 60%,#e9ecef 100%);border-radius:12px;padding:1.2rem 1.5rem;margin-bottom:1.2rem;box-shadow:0 1px 4px rgba(69,123,157,0.07);">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;font-size:1.08rem;">
          <span><i class="fa fa-money-bill"></i> <strong>Total</strong></span>
          <span>LKR ${orderTotal.toFixed(2)}</span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;font-size:1.08rem;">
          <span><i class="fa fa-tag"></i> <strong>Order Discount</strong></span>
          <span>${orderDiscount}%</span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;font-size:1.18rem;font-weight:700;color:#e63946;margin-top:0.7rem;">
          <span><i class="fa fa-sack-dollar"></i> Final Amount</span>
          <span>LKR ${finalAmount.toFixed(2)}</span>
        </div>
      </div>
      <div style="display:flex;gap:1rem;justify-content:center;margin-bottom:1.2rem;">
        <button class="button" id="close-receipt-modal" style="width:100%;font-size:1.1rem;padding:0.9rem;background:#457b9d;color:#fff;font-weight:600;border-radius:12px;">
          <i class="fa fa-check"></i> Done
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  document.getElementById('close-receipt-modal').onclick = () => {
    modal.remove();
    cart = [];
    orderDiscount = 0;
    saveCart();
    renderCart();
  };
}

function getCustomers() {
  return JSON.parse(localStorage.getItem('customers') || '[]');
}
function saveCustomers(customers) {
  localStorage.setItem('customers', JSON.stringify(customers));
}
function renderCustomers(filter = '') {
  const tbody = document.getElementById('customer-table-body');
  const emptyState = document.getElementById('customer-empty-state');
  if (!tbody) return;
  const customers = getCustomers();
  tbody.innerHTML = '';
  let count = 0;
  customers.forEach((cust, idx) => {
    if (
      cust.name.toLowerCase().includes(filter) ||
      cust.contact.toLowerCase().includes(filter) ||
      (cust.email || '').toLowerCase().includes(filter)
    ) {
      count++;
      const tr = document.createElement('tr');
      tr.style.background = (count % 2 === 0) ? '#f8f9fa' : '#fff';
      tr.style.transition = 'box-shadow 0.18s, background 0.18s';
      tr.onmouseover = () => tr.style.boxShadow = '0 2px 12px rgba(69,123,157,0.10)';
      tr.onmouseout = () => tr.style.boxShadow = '';
      tr.innerHTML = `
        <td style='display:flex;align-items:center;gap:0.7rem;'><span style='font-size:1.5rem;color:#e63946;'><i class="fa fa-user-circle"></i></span> <span>${cust.name}</span></td>
        <td>${cust.contact}</td>
        <td>${cust.email || ''}</td>
        <td>${cust.address || ''}</td>
        <td style='text-align:center;'>
          <div style='display:flex;gap:0.3rem;justify-content:center;'>
            <button class="button" data-edit="${idx}"><i class="fa fa-pen"></i></button>
            <button class="button" data-del="${idx}" style="background:#e63946;"><i class="fa fa-trash"></i></button>
            <button class="button" data-orders="${cust.contact}" style="background:#457b9d;"><i class="fa fa-eye"></i></button>
          </div>
        </td>
      `;
      tbody.appendChild(tr);
    }
  });

  if (emptyState) emptyState.style.display = count === 0 ? '' : 'none';

  tbody.querySelectorAll('[data-edit]').forEach(btn => {
    btn.onclick = () => startEditCustomer(+btn.dataset.edit);
  });

  tbody.querySelectorAll('[data-del]').forEach(btn => {
    btn.onclick = () => deleteCustomer(+btn.dataset.del);
  });

  tbody.querySelectorAll('[data-orders]').forEach(btn => {
    btn.onclick = () => showCustomerOrders(btn.dataset.orders);
  });
}
function addOrUpdateCustomer(e) {
  e.preventDefault();
  const name = document.getElementById('cust-name').value.trim();
  const contact = document.getElementById('cust-contact').value.trim();
  const email = document.getElementById('cust-email').value.trim();
  const address = document.getElementById('cust-address').value.trim();
  if (!name || !contact) return alert('Name and contact are required!');
  let customers = getCustomers();
  if (window.editCustIdx !== undefined) {

    customers[window.editCustIdx] = { name, contact, email, address };
    window.editCustIdx = undefined;
    document.getElementById('cust-save-btn').textContent = 'Add Customer';
    document.getElementById('cust-cancel-btn').style.display = 'none';
  } else {

    if (customers.some(c => c.contact === contact)) return alert('Contact number already exists!');
    customers.push({ name, contact, email, address });
  }
  saveCustomers(customers);
  renderCustomers();
  e.target.reset();
}
function startEditCustomer(idx) {
  const customers = getCustomers();
  const cust = customers[idx];
  document.getElementById('cust-name').value = cust.name;
  document.getElementById('cust-contact').value = cust.contact;
  document.getElementById('cust-email').value = cust.email || '';
  document.getElementById('cust-address').value = cust.address || '';
  window.editCustIdx = idx;
  document.getElementById('cust-save-btn').textContent = 'Update Customer';
  document.getElementById('cust-cancel-btn').style.display = '';
}
function deleteCustomer(idx) {
  if (!confirm('Delete this customer?')) return;
  let customers = getCustomers();
  customers.splice(idx, 1);
  saveCustomers(customers);
  renderCustomers();
}
function cancelEditCustomer() {
  window.editCustIdx = undefined;
  document.getElementById('customer-form').reset();
  document.getElementById('cust-save-btn').textContent = 'Add Customer';
  document.getElementById('cust-cancel-btn').style.display = 'none';
}

function showCustomerOrders(contact) {
  const orders = getOrders().filter(order => order.customerContact === contact);
  const customer = getCustomers().find(c => c.contact === contact);

  let overlay = document.createElement('div');
  overlay.className = 'popup-overlay';
  overlay.style = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(30,33,44,0.45);z-index:1004;backdrop-filter:blur(2px);';
  document.body.appendChild(overlay);

  let modal = document.createElement('div');
  modal.className = 'receipt-modal-cust-orders';
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%,-50%) scale(0.95)';
  modal.style.zIndex = '1005';
  modal.style.transition = 'transform 0.25s cubic-bezier(.68,-0.55,.27,1.55), opacity 0.18s';
  modal.style.opacity = '0';
  setTimeout(() => {
    modal.style.transform = 'translate(-50%,-50%) scale(1)';
    modal.style.opacity = '1';
  }, 10);
  modal.innerHTML = `
    <div class="receipt-content" style="background:linear-gradient(135deg,#fff 60%,#f1faee 100%);border-radius:22px;box-shadow:0 8px 32px rgba(69,123,157,0.13);padding:2.5rem 2.5rem 2rem 2.5rem;max-width:440px;margin:auto;position:relative;color:#1d3557;">
      <button class='popup-close' title='Close' aria-label='Close' style='position:absolute;top:14px;right:18px;background:none;border:none;color:#e63946;font-size:1.5rem;cursor:pointer;opacity:0.8;z-index:1;'>&times;</button>
      <div style="display:flex;align-items:center;justify-content:center;margin-bottom:1.2rem;">
        <span style='font-size:3.2rem;color:#e63946;'><i class="fa fa-receipt"></i></span>
      </div>
      <div style="background:linear-gradient(90deg,#e63946 60%,#ffb3c1 100%);border-radius:16px 16px 0 0;padding:1.2rem 1.5rem 0.7rem 1.5rem;margin:-2.5rem -2.5rem 1.5rem -2.5rem;box-shadow:0 2px 8px rgba(230,57,70,0.10);color:#fff;text-align:center;">
        <h2 style="margin:0;font-size:2rem;letter-spacing:0.5px;"><i class="fa fa-burger"></i> Order History: ${customer ? customer.name : contact}</h2>
        <div style="font-size:1.1rem;margin-top:0.5rem;">
          <i class="fa fa-user"></i> <strong>${customer ? customer.name : ''}</strong> (${customer ? customer.contact : ''})<br>
          ${customer && customer.email ? `<i class='fa fa-envelope'></i> <strong>${customer.email}</strong><br>` : ''}
          ${customer && customer.address ? `<i class='fa fa-location-dot'></i> <strong>${customer.address}</strong><br>` : ''}
        </div>
      </div>
      <div style="max-height: 30vh; overflow-y: auto; padding-right: 1rem; margin-bottom: 1rem;">
      <table style="width:100%;border-collapse:separate;border-spacing:0 0.5rem;margin-bottom:1.2rem;">
        <thead>
          <tr style="background:#f1faee;color:#1d3557;font-size:1.08rem;">
            <th style="text-align:left;padding:0.7rem 0.6rem;border-radius:8px 0 0 8px;">Order ID</th>
            <th>Date</th>
            <th>Total</th>
            <th style="text-align:center;padding-right:0.6rem;border-radius:0 8px 8px 0;">Actions</th>
          </tr>
        </thead>
        <tbody>
          ${orders.length === 0 ? '<tr><td colspan="4" style="text-align:center;padding:2rem;">No orders found.</td></tr>' : orders.map((order, idx) => `
            <tr style="background:#fff;box-shadow:0 1px 4px rgba(69,123,157,0.07);border-radius:8px;">
              <td style="padding:0.7rem 0.6rem;border-radius:8px 0 0 8px;font-weight:600;color:#457b9d;">${order.id}</td>
              <td>${new Date(order.date).toLocaleString()}</td>
              <td>LKR ${order.finalAmount.toFixed(2)}</td>
              <td style="text-align:center;padding:0.5rem;"><button class="button" data-view-order="${order.id}"><i class="fa fa-eye"></i> View</button></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      </div>
      <button class="button" id="close-cust-orders" style="background:#fff;color:#e63946;border:1.5px solid #e63946;font-weight:700;margin-top:1rem;"><i class="fa fa-xmark"></i> Close</button>
    </div>
  `;
  document.body.appendChild(modal);
  const closeModal = () => {
    modal.style.opacity = '0';
    modal.style.transform = 'translate(-50%,-50%) scale(0.95)';
    setTimeout(() => {
      modal.remove();
      overlay.remove();
    }, 200);
  };
  modal.querySelector('.popup-close').onclick = closeModal;
  document.getElementById('close-cust-orders').onclick = closeModal;
  modal.querySelectorAll('[data-view-order]').forEach(btn => {
    btn.onclick = () => {
      const orderId = btn.dataset.viewOrder;
      const orderIdx = getOrders().findIndex(o => o.id === orderId);
      if (orderIdx > -1) showOrderDetails(orderIdx);
    };
  });
  document.addEventListener('keydown', function escHandler(ev) {
    if (ev.key === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', escHandler);
    }
  });
}


document.addEventListener('DOMContentLoaded', () => {

  const menuList = document.getElementById('menu-list');
  if (menuList) {
    const searchDiv = document.createElement('div');
    searchDiv.innerHTML = '<input id="menu-search" type="text" placeholder="Search by name, code, or category..." style="width:100%;padding:0.5rem;margin-bottom:1.5rem;border-radius:8px;border:1px solid #ccc;">';
    menuList.parentNode.insertBefore(searchDiv, menuList);
    document.getElementById('menu-search').addEventListener('input', e => {
      renderMenu(e.target.value.toLowerCase(), document.getElementById('menu-category-tabs')?.querySelector('.menu-tab.active')?.dataset.cat || '');
    });

    const printBtn = document.getElementById('print-menu-btn');
    if (printBtn) {
      printBtn.onclick = () => window.print();
    }

    const catFilter = document.getElementById('menu-category-filter');
    if (catFilter) {
      const items = getMenuItems();
      const cats = Array.from(new Set(items.map(i => i.category)));
      catFilter.innerHTML = '<option value="">All Categories</option>' + cats.map(c => `<option value="${c}">${c}</option>`).join('');
      catFilter.addEventListener('change', e => {
        renderMenu(document.getElementById('menu-search')?.value?.toLowerCase() || '', catFilter.value);
      });
    }
    renderMenu();

    const addBtn = document.getElementById('add-menu-btn');
    if (addBtn) {
      addBtn.onclick = (e) => {

        document.querySelectorAll('.popup-inline, .popup-overlay').forEach(p => p.remove());
    
        let overlay = document.createElement('div');
        overlay.className = 'popup-overlay';
        document.body.appendChild(overlay);
       
        let popup = document.createElement('div');
        popup.className = 'popup-inline';
        popup.setAttribute('aria-live', 'polite');
        popup.innerHTML = `
          <button class='popup-close' title='Close' aria-label='Close'>&times;</button>
          <span class='popup-icon'><i class='fa fa-hamburger'></i></span>
          <strong style='font-size:1.2rem;'>Ready to add a delicious new menu item?</strong><br>
          <span style="display:block;margin:0.5rem 0 1.2rem 0;">Let's make your menu even better!</span>
          <button class="button" id="continue-add-menu" style="margin-right:0.5rem;"><i class="fa fa-arrow-right"></i> Yes, let's go!</button>
          <button class="button" id="cancel-add-menu"><i class="fa fa-xmark"></i> Cancel</button>
        `;
        document.body.appendChild(popup);
       
        const rect = addBtn.getBoundingClientRect();
        popup.style.top = (window.scrollY + rect.bottom + 8) + 'px';
        popup.style.left = (window.scrollX + rect.left) + 'px';
      
        document.getElementById('continue-add-menu').onclick = () => {
          popup.remove();
          overlay.remove();
          showAddMenuItemModal(addBtn);
        };
        document.getElementById('cancel-add-menu').onclick = () => {
          popup.remove();
          overlay.remove();
        };
        popup.querySelector('.popup-close').onclick = () => {
          popup.remove();
          overlay.remove();
        };
        
        setTimeout(() => {
          document.addEventListener('mousedown', function handler(ev) {
            if (!popup.contains(ev.target)) {
              popup.remove();
              overlay.remove();
              document.removeEventListener('mousedown', handler);
            }
          });
        }, 0);
      
        document.addEventListener('keydown', function escHandler(ev) {
          if (ev.key === 'Escape') {
            popup.remove();
            overlay.remove();
            document.removeEventListener('keydown', escHandler);
          }
        });
      };
    }
  }

  if (document.getElementById('cart-items')) {
    renderCart();
    setCheckoutButtonEvent();
  }
  
  if (document.getElementById('customer-form')) {
    renderCustomers();
    document.getElementById('customer-form').onsubmit = addOrUpdateCustomer;
    document.getElementById('cust-cancel-btn').onclick = cancelEditCustomer;
    const searchInput = document.getElementById('customer-search');
    if (searchInput) {
      searchInput.addEventListener('input', e => {
        renderCustomers(e.target.value.toLowerCase());
      });
    }
  }
  if (document.getElementById('order-history-body')) {
    renderOrderHistory();
    const searchInput = document.getElementById('order-history-search');
    if (searchInput) {
      searchInput.addEventListener('input', e => {
        renderOrderHistory(e.target.value.toLowerCase());
      });
    }
  }
  if (document.getElementById('monthly-sales-chart')) {
    loadChartJs(renderAnalyticsCharts);
  }
  renderReportsDashboard();
});


const origRenderCart = renderCart;
renderCart = function() {
  origRenderCart.apply(this, arguments);
  setCheckoutButtonEvent();
};

function renderOrderHistory(filter = '') {
  const tbody = document.getElementById('order-history-body');
  if (!tbody) return;
  const orders = getOrders();
  tbody.innerHTML = '';
  orders.slice().reverse().forEach((order, idx) => {
    if (
      order.id.toLowerCase().includes(filter) ||
      order.customerName.toLowerCase().includes(filter) ||
      order.customerContact.toLowerCase().includes(filter) ||
      new Date(order.date).toLocaleString().toLowerCase().includes(filter)
    ) {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${order.id}</td>
        <td>${order.customerName} (${order.customerContact})</td>
        <td>${new Date(order.date).toLocaleString()}</td>
        <td>LKR ${order.finalAmount.toFixed(2)}</td>
        <td>
          <button class="button" data-view="${orders.length-1-idx}"><i class="fa fa-eye"></i></button>
          <button class="button" data-edit-order="${orders.length-1-idx}"><i class="fa fa-pen"></i></button>
          <button class="button" data-del-order="${orders.length-1-idx}" style="background:#e63946;"><i class="fa fa-trash"></i></button>
        </td>
      `;
      tbody.appendChild(tr);
    }
  });
  tbody.querySelectorAll('[data-view]').forEach(btn => {
    btn.onclick = () => showOrderDetails(+btn.dataset.view);
  });
  tbody.querySelectorAll('[data-del-order]').forEach(btn => {
    btn.onclick = () => deleteOrder(+btn.dataset.delOrder);
  });
  tbody.querySelectorAll('[data-edit-order]').forEach(btn => {
    btn.onclick = () => editOrderModal(+btn.dataset.editOrder);
  });
}

function editOrderModal(idx) {
  const orders = getOrders();
  const order = JSON.parse(JSON.stringify(orders[idx]))
  let modal = document.createElement('div');
  modal.className = 'receipt-modal';
  function renderEditContent() {
    let itemsRows = order.items.map((item, i) => `
      <tr>
        <td>${item.name}</td>
        <td><input type="number" min="1" value="${item.qty}" data-idx="${i}" style="width:60px;"></td>
        <td>LKR ${item.price.toFixed(2)}</td>
        <td>${item.discount ? item.discount + '%' : '-'}</td>
        <td>LKR ${(item.price * item.qty * (1 - (item.discount || 0) / 100)).toFixed(2)}</td>
        <td><button class="button" data-remove-item="${i}" style="background:#e63946;"><i class="fa fa-trash"></i></button></td>
      </tr>
    `).join('');
    let orderTotal = order.items.reduce((sum, item) => sum + item.price * item.qty * (1 - (item.discount || 0) / 100), 0);
    let finalAmount = orderTotal * (1 - (order.orderDiscount || 0) / 100);
    modal.innerHTML = `
      <div class="receipt-content" role="dialog" aria-modal="true" aria-label="Edit Order" style="background:linear-gradient(135deg,#fff 60%,#f1faee 100%);border-radius:22px;box-shadow:0 8px 32px rgba(69,123,157,0.13);padding:2.5rem 2.5rem 2rem 2.5rem;max-width:440px;margin:auto;position:relative;color:#1d3557;">
        <h2>Edit Order</h2>
        <div style="margin-bottom:1rem;">
          <strong>Order ID:</strong> ${order.id}<br>
          <strong>Date:</strong> ${new Date(order.date).toLocaleString()}<br>
          <strong>Customer:</strong> ${order.customerName} (${order.customerContact})<br>
        </div>
        <table style="width:100%;border-collapse:collapse;">
          <thead>
            <tr><th>Item</th><th>Qty</th><th>Price</th><th>Discount</th><th>Total</th><th>Remove</th></tr>
          </thead>
          <tbody>
            ${itemsRows}
          </tbody>
        </table>
        <div style="margin:1rem 0;">
          <label>Order Discount: <input type="number" min="0" max="100" value="${order.orderDiscount || 0}" id="edit-order-discount" style="width:60px;"> %</label>
        </div>
        <hr>
        <p>Total: LKR ${orderTotal.toFixed(2)}</p>
        <h3>Final Amount: LKR ${finalAmount.toFixed(2)}</h3>
        <button class="button" id="save-edit-order"><i class="fa fa-floppy-disk"></i> Save</button>
        <button class="button" id="close-edit-order"><i class="fa fa-xmark"></i> Cancel</button>
      </div>
    `;

    modal.querySelectorAll('input[type="number"][data-idx]').forEach(input => {
      input.addEventListener('change', e => {
        let val = parseInt(e.target.value);
        if (isNaN(val) || val < 1) val = 1;
        order.items[+input.dataset.idx].qty = val;
        renderEditContent();
      });
    });
    modal.querySelectorAll('[data-remove-item]').forEach(btn => {
      btn.addEventListener('click', e => {
        order.items.splice(+btn.dataset.removeItem, 1);
        renderEditContent();
      });
    });

    modal.querySelector('#edit-order-discount').addEventListener('change', e => {
      let val = parseFloat(e.target.value);
      if (isNaN(val) || val < 0) val = 0;
      if (val > 100) val = 100;
      order.orderDiscount = val;
      renderEditContent();
    });

    modal.querySelector('#save-edit-order').onclick = () => {
      if (order.items.length === 0) return alert('Order must have at least one item.');
      order.orderTotal = order.items.reduce((sum, item) => sum + item.price * item.qty * (1 - (item.discount || 0) / 100), 0);
      order.finalAmount = order.orderTotal * (1 - (order.orderDiscount || 0) / 100);
      const orders = getOrders();
      orders[idx] = order;
      saveOrders(orders);
      modal.remove();
      renderOrderHistory(document.getElementById('order-history-search')?.value?.toLowerCase() || '');
      if (typeof renderAnalyticsCharts === 'function') renderAnalyticsCharts();
    };

    modal.querySelector('#close-edit-order').onclick = () => modal.remove();
    modal.querySelector('.receipt-content').focus();
    modal.tabIndex = -1;
    modal.onkeydown = e => { if (e.key === 'Escape') modal.remove(); };
  }
  renderEditContent();
  document.body.appendChild(modal);
}

function deleteOrder(idx) {
  if (!confirm('Delete this order?')) return;
  const orders = getOrders();
  orders.splice(idx, 1);
  saveOrders(orders);
  renderOrderHistory(document.getElementById('order-history-search')?.value?.toLowerCase() || '');
  if (typeof renderAnalyticsCharts === 'function') renderAnalyticsCharts();
}

function showOrderDetails(idx, isNewReceipt = false) {
  const orders = getOrders();
  const order = orders[idx];

  let overlay = document.createElement('div');
  overlay.className = 'popup-overlay';
  overlay.style = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(30,33,44,0.45);z-index:1006;backdrop-filter:blur(2px);';
  document.body.appendChild(overlay);

  let modal = document.createElement('div');
  modal.className = 'receipt-modal';
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%,-50%) scale(0.95)';
  modal.style.zIndex = '1007';
  modal.style.transition = 'transform 0.3s cubic-bezier(.68,-0.55,.27,1.55), opacity 0.2s';
  modal.style.opacity = '0';
  modal.style.transform = 'translate(-50%, -50%) scale(0.95)';
  setTimeout(() => {
    modal.style.transform = 'translate(-50%,-50%) scale(1)';
    modal.style.opacity = '1';
  }, 10);
  modal.innerHTML = `
    <div class="receipt-content" style="background:linear-gradient(135deg,#fff 60%,#f1faee 100%);border-radius:22px;box-shadow:0 8px 32px rgba(69,123,157,0.13);padding:2.5rem 2.5rem 2rem 2.5rem;max-width:440px;margin:auto;position:relative;color:#1d3557;">
      <div style="display:flex;align-items:center;justify-content:center;margin-bottom:1.2rem;">
        <span style='font-size:3.2rem;color:#e63946;'><i class="fa fa-receipt"></i></span>
      </div>
      <div style="background:linear-gradient(90deg,#e63946 60%,#ffb3c1 100%);border-radius:16px 16px 0 0;padding:1.2rem 1.5rem 0.7rem 1.5rem;margin:-2.5rem -2.5rem 1.5rem -2.5rem;box-shadow:0 2px 8px rgba(230,57,70,0.10);color:#fff;text-align:center;">
        <h2 style="margin:0;font-size:2rem;letter-spacing:0.5px;"><i class="fa fa-burger"></i> ${isNewReceipt ? 'Order Placed!' : 'Order Details'}</h2>
        <div style="font-size:1.1rem;margin-top:0.5rem;">
          <i class="fa fa-user"></i> <strong>${order.customerName}</strong> (${order.customerContact})<br>
          <i class='fa fa-calendar-alt'></i> <strong>${new Date(order.date).toLocaleString()}</strong><br>
          ${order.id}
        </div>
      </div>
      <div style="max-height: 30vh; overflow-y: auto; padding-right: 1rem; margin-bottom: 1rem;">
      <table style="width:100%;border-collapse:separate;border-spacing:0 0.5rem;margin-bottom:1.2rem;">
        <thead>
          <tr style="background:#f1faee;color:#1d3557;font-size:1.08rem;">
            <th style="text-align:left;padding:0.5rem 0.6rem;border-radius:8px 0 0 8px;">Item</th>
            <th style="text-align:center;">Qty</th>
            <th style="text-align:right;">Price</th>
            <th style="text-align:center;">Disc.</th>
            <th style="text-align:right;padding-right:0.6rem;border-radius:0 8px 8px 0;">Total</th>
          </tr>
        </thead>
        <tbody>
          ${order.items.map(item => `
            <tr style="background:#fff;box-shadow:0 1px 4px rgba(69,123,157,0.07);border-radius:8px;">
              <td style="padding:0.5rem 0.6rem;border-radius:8px 0 0 8px;">${item.name}</td>
              <td style="text-align:center;">${item.qty}</td>
              <td style="text-align:right;">LKR ${item.price.toFixed(2)}</td>
              <td style="text-align:center;">${item.discount ? `<span style='color:#e63946;font-weight:600;'>${item.discount}%</span>` : '-'}</td>
              <td style="text-align:right;padding-right:0.6rem;font-weight:600;color:#457b9d;border-radius:0 8px 8px 0;">LKR ${(item.price * item.qty * (1 - (item.discount || 0) / 100)).toFixed(2)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      </div>
      <div style="background:linear-gradient(90deg,#f1faee 60%,#e9ecef 100%);border-radius:12px;padding:1.2rem 1.5rem;margin-bottom:1.2rem;box-shadow:0 1px 4px rgba(69,123,157,0.07);">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;font-size:1.08rem;">
          <span><i class="fa fa-money-bill"></i> <strong>Total</strong></span>
          <span>LKR ${order.orderTotal.toFixed(2)}</span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;font-size:1.08rem;">
          <span><i class="fa fa-tag"></i> <strong>Order Discount</strong></span>
          <span>${order.orderDiscount}%</span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;font-size:1.18rem;font-weight:700;color:#e63946;margin-top:0.7rem;">
          <span><i class="fa fa-sack-dollar"></i> Final Amount</span>
          <span>LKR ${order.finalAmount.toFixed(2)}</span>
        </div>
      </div>
      <div style="display:flex;gap:1rem;justify-content:center;margin-bottom:1.2rem;">
        <button class="button" id="close-receipt-modal" style="width:100%;font-size:1.1rem;padding:0.9rem;background:#457b9d;color:#fff;font-weight:600;border-radius:12px;">
          <i class="fa fa-check"></i> Done
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  function closeModal() {
    modal.style.opacity = '0';
    modal.style.transform = 'translate(-50%,-50%) scale(0.95)';
    setTimeout(() => { modal.remove(); overlay.remove(); }, 180);
  }
  document.getElementById('close-receipt-modal').onclick = closeModal;
  overlay.onclick = closeModal;
  document.addEventListener('keydown', function escHandler(ev) {
    if (ev.key === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', escHandler);
    }
  });
}

function loadChartJs(callback) {
  if (window.Chart) return callback();
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
  script.onload = callback;
  document.head.appendChild(script);
}

function renderAnalyticsCharts() {
  const orders = getOrders();

  const salesByMonth = {};
  orders.forEach(order => {
    const d = new Date(order.date);
    const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
    salesByMonth[key] = (salesByMonth[key] || 0) + order.finalAmount;
  });
  const months = Object.keys(salesByMonth).sort();
  const sales = months.map(m => salesByMonth[m]);

  const itemSales = {};
  orders.forEach(order => {
    order.items.forEach(item => {
      itemSales[item.name] = (itemSales[item.name] || 0) + item.qty;
    });
  });
  const topItems = Object.entries(itemSales).sort((a,b) => b[1]-a[1]).slice(0,7);

  const customerSales = {};
  orders.forEach(order => {
    customerSales[order.customerName] = (customerSales[order.customerName] || 0) + order.finalAmount;
  });
  const topCustomers = Object.entries(customerSales).sort((a,b) => b[1]-a[1]).slice(0,7);

  if (window.Chart) {

    new Chart(document.getElementById('monthly-sales-chart').getContext('2d'), {
      type: 'bar',
      data: {
        labels: months,
        datasets: [{
          label: 'Sales (LKR)',
          data: sales,
          backgroundColor: '#457b9d',
        }]
      },
      options: {responsive:true, plugins:{legend:{display:false}}, scales:{y:{beginAtZero:true}}}
    });

    new Chart(document.getElementById('top-items-chart').getContext('2d'), {
      type: 'bar',
      data: {
        labels: topItems.map(i=>i[0]),
        datasets: [{
          label: 'Qty Sold',
          data: topItems.map(i=>i[1]),
          backgroundColor: '#e63946',
        }]
      },
      options: {responsive:true, plugins:{legend:{display:false}}, scales:{y:{beginAtZero:true}}}
    });

    new Chart(document.getElementById('top-customers-chart').getContext('2d'), {
      type: 'bar',
      data: {
        labels: topCustomers.map(c=>c[0]),
        datasets: [{
          label: 'Total Spent (LKR)',
          data: topCustomers.map(c=>c[1]),
          backgroundColor: '#1d3557',
        }]
      },
      options: {responsive:true, plugins:{legend:{display:false}}, scales:{y:{beginAtZero:true}}}
    });
  }
}

function showAddMenuItemModal(anchorBtn) {
  let modal = document.createElement('div');
  modal.className = 'receipt-modal';

  const menuItemsList = getMenuItems();
  const categories = Array.from(new Set(menuItemsList.map(i => i.category))).sort();
  modal.innerHTML = `
    <button class='popup-close' title='Close' aria-label='Close' style='position:absolute;top:14px;right:18px;background:none;border:none;color:#e63946;font-size:1.5rem;cursor:pointer;opacity:0.8;z-index:1;'>&times;</button>
    <div class="receipt-content" role="dialog" aria-modal="true" aria-label="Add Menu Item" style="background:linear-gradient(135deg,#e63946 0%,#ffb3c1 100%);border-radius:18px;padding:2.2rem 2.2rem 1.5rem 2.2rem;box-shadow:0 12px 36px rgba(230,57,70,0.18),0 2px 8px rgba(0,0,0,0.10);color:#fff;min-width:320px;max-width:400px;animation:popupBounceIn 0.35s cubic-bezier(.68,-0.55,.27,1.55);">
      <span class='popup-icon' style='font-size:2.5rem;display:block;text-align:center;margin-bottom:0.5rem;'><i class='fa fa-hamburger'></i></span>
      <h2 style='text-align:center;margin-bottom:1rem;'>Add a New Menu Item</h2>
      <form id="add-menu-form">
        <label>Item Name:<br><input type="text" id="add-menu-name" required style="border-radius:8px;padding:0.4rem 0.7rem;border:none;margin-bottom:0.5rem;width:100%;"></label><br>
        <label>Item Code:<br><input type="text" id="add-menu-code" required style="border-radius:8px;padding:0.4rem 0.7rem;border:none;margin-bottom:0.5rem;width:100%;"></label><br>
        <label>Price (LKR):<br><input type="number" id="add-menu-price" min="0" required style="border-radius:8px;padding:0.4rem 0.7rem;border:none;margin-bottom:0.5rem;width:100%;"></label><br>
        <label>Discount (%):<br><input type="number" id="add-menu-discount" min="0" max="100" style="border-radius:8px;padding:0.4rem 0.7rem;border:none;margin-bottom:0.5rem;width:100%;"></label><br>
        <label>Category:<br>
          <select id="add-menu-category" required style="border-radius:8px;padding:0.4rem 0.7rem;border:none;margin-bottom:0.5rem;width:100%;">
            <option value="" disabled selected>Select category</option>
            ${categories.map(cat => `<option value="${cat}">${cat}</option>`).join('')}
            <option value="__other__">Other...</option>
          </select>
          <input type="text" id="add-menu-category-other" placeholder="Enter new category" style="display:none;border-radius:8px;padding:0.4rem 0.7rem;border:none;margin-top:0.5rem;width:100%;">
        </label><br>
        <label>Image URL:<br><input type="text" id="add-menu-image" placeholder="https://..." style="border-radius:8px;padding:0.4rem 0.7rem;border:none;margin-bottom:0.5rem;width:100%;"></label><br>
        <button class="button" type="submit" style="background:#e63946;color:#fff;border-radius:24px;font-size:1.08rem;padding:0.6rem 1.4rem;margin-top:0.7rem;font-weight:600;box-shadow:0 2px 8px rgba(230,57,70,0.10);width:100%;"><i class="fa fa-plus"></i> Add</button>
      </form>
    </div>
  `;
  document.body.appendChild(modal);

  let overlay = document.createElement('div');
  overlay.className = 'popup-overlay';
  document.body.appendChild(overlay);

  if (anchorBtn) {
    modal.style.position = 'absolute';
    const rect = anchorBtn.getBoundingClientRect();
    modal.style.top = (window.scrollY + rect.bottom + 12) + 'px';
    modal.style.left = (window.scrollX + rect.left) + 'px';
    modal.style.margin = '0';
    modal.style.zIndex = 1003;
  }

  setTimeout(() => {
    modal.querySelector('input,select,textarea,button')?.focus();
  }, 100);

  const catSelect = modal.querySelector('#add-menu-category');
  const catOther = modal.querySelector('#add-menu-category-other');
  catSelect.onchange = function() {
    if (this.value === '__other__') {
      catOther.style.display = '';
      catOther.required = true;
    } else {
      catOther.style.display = 'none';
      catOther.required = false;
    }
  };
  document.getElementById('add-menu-form').onsubmit = e => {
    e.preventDefault();
    const name = document.getElementById('add-menu-name').value.trim();
    const code = document.getElementById('add-menu-code').value.trim();
    const price = parseFloat(document.getElementById('add-menu-price').value);
    const discount = parseFloat(document.getElementById('add-menu-discount').value) || 0;
    let category = catSelect.value;
    if (category === '__other__') {
      category = catOther.value.trim();
    }
    const image = document.getElementById('add-menu-image').value.trim();
    if (!name || !code || isNaN(price) || !category) return alert('Please fill all required fields.');
    let items = getMenuItems();
    if (items.some(i => i.code === code)) return alert('Item code already exists!');
    items.push({ code, name, price, discount, category, image });
    saveMenuItems(items);
    modal.remove();
    overlay.remove();
    renderMenu(document.getElementById('menu-search')?.value?.toLowerCase() || '', document.querySelector('.menu-tab.active')?.dataset.cat || '');
    showNotification('Menu item added!');
  };

  modal.querySelector('.popup-close').onclick = () => {
    modal.remove();
    overlay.remove();
  };

  document.addEventListener('keydown', function escHandler(ev) {
    if (ev.key === 'Escape') {
      modal.remove();
      overlay.remove();
      document.removeEventListener('keydown', escHandler);
    }
  });
  modal.querySelector('.receipt-content').focus();
  modal.tabIndex = -1;
}


function getInitials(name) {
  if (!name) return '';
  const parts = name.trim().split(' ');
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length-1][0]).toUpperCase();
}

function getCustomerStats(customers) {
  const now = new Date();
  const thisMonth = now.getFullYear() + '-' + String(now.getMonth()+1).padStart(2,'0');
  let vip = 0, newly = 0, top = null, topSpent = 0;
  const orders = getOrders();
  customers.forEach(c => {
  
    const custOrders = orders.filter(o => o.customerContact === c.contact);
    if (custOrders.length >= 3 || c.vip) vip++;
    if (custOrders.some(o => o.date.startsWith(thisMonth))) newly++;
    const spent = custOrders.reduce((sum,o)=>sum+o.finalAmount,0);
    if (spent > topSpent) { topSpent = spent; top = c.name; }
  });
  return {
    total: customers.length,
    vip,
    newly,
    top: top || '-'
  };
}

function renderCustomerCards(filter = '', tag = '') {
  const grid = document.getElementById('customer-cards-grid');
  const emptyState = document.getElementById('customer-empty-state');
  const statTotal = document.getElementById('stat-total');
  const statVip = document.getElementById('stat-vip');
  const statNew = document.getElementById('stat-new');
  const statTop = document.getElementById('stat-top');
  if (!grid) return;
  let customers = getCustomers();
  let filtered = customers.filter(c =>
    (!filter || c.name.toLowerCase().includes(filter) || c.contact.toLowerCase().includes(filter) || (c.email||'').toLowerCase().includes(filter)) &&
    (!tag || (tag==='vip'?
      (getOrders().filter(o=>o.customerContact===c.contact).length>=3 || c.vip)
      :tag==='new'?getOrders().filter(o=>o.customerContact===c.contact&&o.date.startsWith(new Date().getFullYear()+'-'+String(new Date().getMonth()+1).padStart(2,'0'))).length>0:true))
  );

  const stats = getCustomerStats(customers);
  if (statTotal) statTotal.textContent = stats.total;
  if (statVip) statVip.textContent = stats.vip;
  if (statNew) statNew.textContent = stats.newly;
  if (statTop) statTop.textContent = stats.top;

  grid.innerHTML = '';
  if (filtered.length === 0) {
    if (emptyState) emptyState.style.display = '';
    return;
  } else {
    if (emptyState) emptyState.style.display = 'none';
  }

  filtered = filtered.slice().reverse();
  filtered.forEach((cust, idx) => {
    const origIdx = customers.findIndex(c => c.contact === cust.contact);
    const card = document.createElement('div');
    card.className = 'customer-card';
    card.style = 'background:rgba(255,255,255,0.92);backdrop-filter:blur(8px);border-radius:18px;box-shadow:0 4px 24px rgba(69,123,157,0.10);padding:2.2rem 1.5rem 1.2rem 1.5rem;position:relative;transition:box-shadow 0.18s,transform 0.18s;cursor:pointer;overflow:visible;display:flex;flex-direction:column;gap:0.7rem;';
    card.onmouseover = () => { card.style.boxShadow = '0 8px 32px rgba(230,57,70,0.13)'; card.style.transform = 'translateY(-4px) scale(1.03)'; };
    card.onmouseout = () => { card.style.boxShadow = '0 4px 24px rgba(69,123,157,0.10)'; card.style.transform = ''; };
   
    const info = document.createElement('div');
    info.innerHTML = `<div style=\"font-size:1.25rem;font-weight:700;color:#1d3557;margin-bottom:0.2rem;display:flex;align-items:center;gap:0.6em;\">${cust.name}
      ${(getOrders().filter(o=>o.customerContact===cust.contact).length>=3 || cust.vip)?'<span style=\"background:linear-gradient(90deg,#ffd700 60%,#fffbe6 100%);color:#bfa100;font-size:0.95rem;font-weight:700;border-radius:8px;padding:0.18em 0.7em;display:inline-flex;align-items:center;gap:0.3em;box-shadow:0 1px 4px rgba(255,215,0,0.13);margin-left:0.2em;\"><i class=\"fa fa-star\"></i> VIP</span>':''}
      </div>
      <div style=\"color:#457b9d;font-size:1.05rem;margin-bottom:0.2rem;\"><i class='fa fa-phone'></i> ${cust.contact}</div>
      <div style=\"color:#888;font-size:0.98rem;margin-bottom:0.2rem;\"><i class='fa fa-envelope'></i> ${cust.email||'-'}</div>
      <div style=\"color:#888;font-size:0.98rem;\"><i class='fa fa-location-dot'></i> ${cust.address||'-'}</div>`;
    
    const divider = document.createElement('div');
    divider.style = 'height:1px;width:100%;background:linear-gradient(90deg,#f1faee 60%,#e9ecef 100%);margin:1.1rem 0 0.7rem 0;';
   
    const actions = document.createElement('div');
    actions.style = 'display:flex;gap:1.1rem;justify-content:flex-end;align-items:center;margin-top:0.2rem;';
    actions.innerHTML = `
      <button class=\"button\" title=\"View\" data-view=\"${origIdx}\" style=\"background:#457b9d;font-size:1.1rem;padding:0.7rem 1.3rem;border-radius:10px;border:1.5px solid #457b9d;display:flex;align-items:center;gap:0.4em;\"><i class=\"fa fa-eye\"></i> <span style='font-size:1rem;'>View</span></button>
      <button class=\"button\" title=\"Edit\" data-edit=\"${origIdx}\" style=\"font-size:1.1rem;padding:0.7rem 1.3rem;border-radius:10px;display:flex;align-items:center;gap:0.4em;\"><i class=\"fa fa-pen\"></i> <span style='font-size:1rem;'>Edit</span></button>
      <button class=\"button\" title=\"Delete\" data-del=\"${origIdx}\" style=\"background:#e63946;font-size:1.1rem;padding:0.7rem 1.3rem;border-radius:10px;border:1.5px solid #e63946;display:flex;align-items:center;gap:0.4em;\"><i class=\"fa fa-trash\"></i> <span style='font-size:1rem;'>Delete</span></button>
    `;
  
    card.appendChild(info);
    card.appendChild(divider);
    card.appendChild(actions);
    grid.appendChild(card);
   
    actions.querySelector('[data-view]').onclick = e => { e.stopPropagation(); showCustomerProfileModal(origIdx, card); };
    actions.querySelector('[data-edit]').onclick = e => { e.stopPropagation(); showCustomerFormModal(origIdx); };
    actions.querySelector('[data-del]').onclick = e => { e.stopPropagation(); deleteCustomer(origIdx); renderCustomerCards(); };
    card.onclick = () => showCustomerProfileModal(origIdx, card);
  });
}


function showCustomerProfileModal(idx, anchorCard) {
  const customers = getCustomers();
  const cust = customers[idx];
  const modal = document.getElementById('customer-profile-modal');
  if (!modal) return;
  
  document.querySelectorAll('.popup-overlay').forEach(o => o.remove());
  
  let overlay = document.createElement('div');
  overlay.className = 'popup-overlay';
  overlay.style = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(30,33,44,0.18);z-index:1002;backdrop-filter:blur(1.5px);';
  document.body.appendChild(overlay);
  modal.style.display = '';
  modal.style.position = 'absolute';
  modal.style.zIndex = '1003';
  modal.style.transition = 'transform 0.22s cubic-bezier(.68,-0.55,.27,1.55), opacity 0.18s';
  modal.style.opacity = '0';
  modal.style.transform = 'scale(0.97)';
  if (anchorCard) {
    const rect = anchorCard.getBoundingClientRect();
    const modalWidth = 440;
    const modalHeight = 340;
    let left = rect.right + 24;
    let top = window.scrollY + rect.top + rect.height/2 - modalHeight/2;
    if (left + modalWidth > window.innerWidth - 24) left = rect.left - modalWidth - 24;
    if (top < 24) top = 24;
    if (top + modalHeight > window.scrollY + window.innerHeight - 24) top = window.scrollY + window.innerHeight - modalHeight - 24;
    modal.style.left = left + 'px';
    modal.style.top = top + 'px';
    modal.style.maxWidth = modalWidth + 'px';
    modal.style.minWidth = '320px';
  } else {
    modal.style.position = 'fixed';
    modal.style.left = '50%';
    modal.style.top = '50%';
    modal.style.transform = 'translate(-50%,-50%) scale(0.97)';
    modal.style.maxWidth = '440px';
    modal.style.minWidth = '320px';
  }
  setTimeout(() => {
    modal.style.opacity = '1';
    modal.style.transform = modal.style.transform.replace('scale(0.97)', 'scale(1)');
  }, 10);
  modal.innerHTML = `
    <div class="receipt-content" style="background:linear-gradient(135deg,#fff 60%,#f1faee 100%);border-radius:22px;box-shadow:0 8px 32px rgba(69,123,157,0.13);padding:2.5rem 2.5rem 2rem 2.5rem;max-width:420px;margin:auto;position:relative;color:#1d3557;">
      <button class='popup-close' title='Close' aria-label='Close' style='position:absolute;top:14px;right:18px;background:none;border:none;color:#e63946;font-size:1.5rem;cursor:pointer;opacity:0.8;z-index:1;'>&times;</button>
      <div style="display:flex;align-items:center;gap:1.2rem;margin-bottom:1.2rem;">
        <div>
          <div style="font-size:1.3rem;font-weight:700;color:#1d3557;">${cust.name}</div>
          <div style="color:#457b9d;font-size:1.05rem;"><i class='fa fa-phone'></i> ${cust.contact}</div>
        </div>
      </div>
      <div style="color:#888;font-size:1.05rem;margin-bottom:0.7rem;"><i class='fa fa-envelope'></i> ${cust.email||'-'}</div>
      <div style="color:#888;font-size:1.05rem;margin-bottom:1.2rem;"><i class='fa fa-location-dot'></i> ${cust.address||'-'}</div>
      <div style="margin-bottom:1.2rem;"><button class="button" id="view-orders-btn" style="background:#457b9d;"><i class="fa fa-clock-rotate-left"></i> View Orders</button></div>
      <button class="button" id="close-cust-profile" style="background:#fff;color:#e63946;border:1.5px solid #e63946;font-weight:700;"><i class="fa fa-xmark"></i> Close</button>
    </div>
  `;
  const closeModal = () => {
    modal.style.opacity = '0';
    modal.style.transform = modal.style.transform.replace('scale(1)', 'scale(0.97)');
    setTimeout(() => {
      modal.style.display = 'none';
      overlay.remove();
    }, 200);
  };
  modal.querySelector('.popup-close').onclick = closeModal;
  modal.querySelector('#close-cust-profile').onclick = closeModal;
  modal.querySelector('#view-orders-btn').onclick = () => {
    modal.style.display = 'none';
    overlay.remove();
    showCustomerOrders(cust.contact);
  };
  document.addEventListener('keydown', function escHandler(ev) {
    if (ev.key === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', escHandler);
    }
  });
}

function showCustomerFormModal(idx) {
  const customers = getCustomers();
  const cust = idx !== undefined ? customers[idx] : {};
  const modal = document.getElementById('customer-form-modal');
  if (!modal) return;
  document.querySelectorAll('.popup-overlay').forEach(o => o.remove());
  let overlay = document.createElement('div');
  overlay.className = 'popup-overlay';
  overlay.style = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(30,33,44,0.45);z-index:1002;backdrop-filter:blur(2px);';
  document.body.appendChild(overlay);
  modal.style.display = '';
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%,-50%) scale(0.95)';
  modal.style.zIndex = '1003';
  modal.style.transition = 'transform 0.25s cubic-bezier(.68,-0.55,.27,1.55), opacity 0.18s';
  modal.style.opacity = '0';
  setTimeout(() => {
    modal.style.transform = 'translate(-50%,-50%) scale(1)';
    modal.style.opacity = '1';
  }, 10);
  modal.innerHTML = `
    <div class="receipt-content" style="background:linear-gradient(135deg,#fff 60%,#f1faee 100%);border-radius:22px;box-shadow:0 8px 32px rgba(69,123,157,0.13);padding:2.5rem 2.5rem 2rem 2.5rem;max-width:440px;margin:auto;position:relative;color:#1d3557;">
      <button class='popup-close' title='Close' aria-label='Close' style='position:absolute;top:14px;right:18px;background:none;border:none;color:#e63946;font-size:1.5rem;cursor:pointer;opacity:0.8;z-index:1;'>&times;</button>
      <h2 style='text-align:center;margin-bottom:1rem;'>${idx!==undefined?'Edit':'Add'} Customer</h2>
      <form id="modal-customer-form">
        <label>Name:<br><input type="text" id="modal-cust-name" value="${cust.name||''}" required placeholder="e.g. John Doe" style="border-radius:8px;padding:0.4rem 0.7rem;border:none;margin-bottom:0.5rem;width:100%;"></label><br>
        <label>Contact Number:<br><input type="text" id="modal-cust-contact" value="${cust.contact||''}" required pattern="[0-9]+" minlength="7" placeholder="e.g. 0771234567" style="border-radius:8px;padding:0.4rem 0.7rem;border:none;margin-bottom:0.5rem;width:100%;"></label><br>
        <label>Email:<br><input type="email" id="modal-cust-email" value="${cust.email||''}" placeholder="e.g. john.doe@example.com" style="border-radius:8px;padding:0.4rem 0.7rem;border:none;margin-bottom:0.5rem;width:100%;"></label><br>
        <label>Address:<br><input type="text" id="modal-cust-address" value="${cust.address||''}" placeholder="e.g. 123 Main St, Colombo" style="border-radius:8px;padding:0.4rem 0.7rem;border:none;margin-bottom:0.5rem;width:100%;"></label><br>
        <div style="display:flex;align-items:center;gap:0.5em;margin:0.7em 0 1.1em 0;font-weight:600;"><input type="checkbox" id="modal-cust-vip" ${cust.vip?'checked':''} style="width:1.2em;height:1.2em;accent-color:#ffd700;"> <span style="color:#bfa100;"><i class="fa fa-star"></i> VIP</span></div>
        <button class="button" type="submit" style="background:#e63946;color:#fff;border-radius:24px;font-size:1.08rem;padding:0.6rem 1.4rem;margin-top:0.7rem;font-weight:600;box-shadow:0 2px 8px rgba(230,57,70,0.10);width:100%;"><i class="fa fa-floppy-disk"></i> Save</button>
      </form>
      <button class="button" id="close-cust-form" style="background:#fff;color:#e63946;border:1.5px solid #e63946;font-weight:700;margin-top:1rem;\"><i class="fa fa-xmark"></i> Cancel</button>
    </div>
  `;
  const closeModal = () => {
    modal.style.opacity = '0';
    modal.style.transform = 'translate(-50%,-50%) scale(0.95)';
    setTimeout(() => {
      modal.style.display = 'none';
      overlay.remove();
    }, 200);
  };
  modal.querySelector('.popup-close').onclick = closeModal;
  modal.querySelector('#close-cust-form').onclick = closeModal;
  document.getElementById('modal-customer-form').onsubmit = e => {
    e.preventDefault();
    const name = document.getElementById('modal-cust-name').value.trim();
    const contact = document.getElementById('modal-cust-contact').value.trim();
    const email = document.getElementById('modal-cust-email').value.trim();
    const address = document.getElementById('modal-cust-address').value.trim();
    const vip = document.getElementById('modal-cust-vip').checked;
    let customers = getCustomers();
    if (idx !== undefined) {
      customers[idx] = { name, contact, email, address, vip };
    } else {
      customers.push({ name, contact, email, address, vip });
    }
    saveCustomers(customers);
    renderCustomerCards();
    closeModal();
  };
  document.addEventListener('keydown', function escHandler(ev) {
    if (ev.key === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', escHandler);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('customer-cards-grid')) {
    renderCustomerCards();
    const searchInput = document.getElementById('customer-search');
    if (searchInput) {
      searchInput.addEventListener('input', e => {
        renderCustomerCards(e.target.value.toLowerCase(), document.getElementById('customer-filter')?.value || '');
      });
    }
    const filterInput = document.getElementById('customer-filter');
    if (filterInput) {
      filterInput.addEventListener('change', e => {
        renderCustomerCards(document.getElementById('customer-search')?.value?.toLowerCase() || '', filterInput.value);
      });
    }
    const addBtn = document.getElementById('add-customer-btn');
    if (addBtn) {
      addBtn.onclick = () => showCustomerFormModal();
    }
  }
 
}); 

function renderReportsDashboard() {
  if (!document.getElementById('report-stats-row')) return;
  const orders = getOrders();
  if (!orders.length) return;
  const dateFromInput = document.getElementById('report-date-from');
  const dateToInput = document.getElementById('report-date-to');
  const allDates = orders.map(o => new Date(o.date));
  const minDate = new Date(Math.min(...allDates));
  const maxDate = new Date(Math.max(...allDates));
  if (!dateFromInput.value) dateFromInput.value = minDate.toISOString().slice(0,10);
  if (!dateToInput.value) dateToInput.value = maxDate.toISOString().slice(0,10);

  function filterOrdersByDate() {
    const from = new Date(dateFromInput.value);
    const to = new Date(dateToInput.value);
    to.setHours(23,59,59,999); 
    return orders.filter(o => {
      const d = new Date(o.date);
      return d >= from && d <= to;
    });
  }

  function updateDashboard() {
    const filteredOrders = filterOrdersByDate();
    const totalSales = filteredOrders.reduce((sum, o) => sum + (o.finalAmount || 0), 0);
    animateStat('stat-total-sales-value', totalSales, 'LKR ');
    animateStat('stat-total-orders-value', filteredOrders.length, '', 0);
    
    let topCustomer = '-';
    if (filteredOrders.length) {
      const customers = getCustomers();
      const spentByCustomer = {};
      filteredOrders.forEach(o => {
        spentByCustomer[o.customerContact] = (spentByCustomer[o.customerContact] || 0) + (o.finalAmount || 0);
      });
      let top = Object.entries(spentByCustomer).sort((a,b) => b[1]-a[1])[0];
      if (top) {
        const cust = customers.find(c => c.contact === top[0]);
        topCustomer = cust ? `${cust.name} (${cust.contact})` : top[0];
      }
    }
    document.getElementById('stat-top-customer-value').textContent = topCustomer;
 
    let topItem = '-';
    if (filteredOrders.length) {
      const itemCounts = {};
      filteredOrders.forEach(o => o.items.forEach(i => {
        itemCounts[i.name] = (itemCounts[i.name] || 0) + i.qty;
      }));
      let best = Object.entries(itemCounts).sort((a,b) => b[1]-a[1])[0];
      if (best) topItem = best[0];
    }
    document.getElementById('stat-top-item-value').textContent = topItem;

    const salesByMonth = {};
    filteredOrders.forEach(order => {
      const d = new Date(order.date);
      const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
      salesByMonth[key] = (salesByMonth[key] || 0) + (order.finalAmount || 0);
    });
    const months = Object.keys(salesByMonth).sort();
    const sales = months.map(m => salesByMonth[m]);
    if (document.getElementById('monthly-sales-chart')) {
      if (window.monthlySalesChart) window.monthlySalesChart.destroy();
      window.monthlySalesChart = new Chart(document.getElementById('monthly-sales-chart').getContext('2d'), {
        type: 'line',
        data: {
          labels: months,
          datasets: [{
            label: 'Sales (LKR)',
            data: sales,
            borderColor: '#e63946',
            backgroundColor: 'rgba(230,57,70,0.08)',
            tension: 0.35,
            pointRadius: 4,
            pointBackgroundColor: '#e63946',
            fill: true
          }]
        },
        options: {
          plugins: { legend: { display: false } },
          scales: { x: { grid: {display:false} }, y: { grid: {color:'#eee'} } },
          responsive: true,
          maintainAspectRatio: false
        }
      });
    }

    const itemCounts = {};
    filteredOrders.forEach(o => o.items.forEach(i => {
      itemCounts[i.name] = (itemCounts[i.name] || 0) + i.qty;
    }));
    const topItems = Object.entries(itemCounts).sort((a,b) => b[1]-a[1]).slice(0,6);
    if (document.getElementById('top-items-chart')) {
      if (window.topItemsChart) window.topItemsChart.destroy();
      window.topItemsChart = new Chart(document.getElementById('top-items-chart').getContext('2d'), {
        type: 'bar',
        data: {
          labels: topItems.map(i=>i[0]),
          datasets: [{
            label: 'Qty Sold',
            data: topItems.map(i=>i[1]),
            backgroundColor: ['#e63946','#ffb3c1','#a8dadc','#457b9d','#ffd700','#1d3557'],
            borderRadius: 8
          }]
        },
        options: {
          plugins: { legend: { display: false } },
          indexAxis: 'y',
          scales: { x: { grid: {color:'#eee'} }, y: { grid: {display:false} } },
          responsive: true,
          maintainAspectRatio: false
        }
      });
    }

    const tbody = document.getElementById('order-history-body');
    if (tbody) {
      const searchInput = document.getElementById('order-history-search');
      function renderOrderHistoryTable(filter = '') {
        tbody.innerHTML = '';
        filteredOrders.slice().reverse().forEach((order, idx) => {
          if (
            order.id.toLowerCase().includes(filter) ||
            order.customerName.toLowerCase().includes(filter) ||
            order.customerContact.toLowerCase().includes(filter) ||
            new Date(order.date).toLocaleString().toLowerCase().includes(filter)
          ) {
            const tr = document.createElement('tr');
            tr.innerHTML = `
              <td>${order.customerName} (${order.customerContact})</td>
              <td>${new Date(order.date).toLocaleString()}</td>
              <td>LKR ${order.finalAmount.toFixed(2)}</td>
              <td style="text-align:center;">
                <button class="button" data-view="${orders.indexOf(order)}"><i class="fa fa-eye"></i> View</button>
              </td>
            `;
            tbody.appendChild(tr);
          }
        });
        tbody.querySelectorAll('[data-view]').forEach(btn => {
          btn.onclick = () => showOrderDetails(+btn.dataset.view);
        });
      }
      renderOrderHistoryTable();
      if (searchInput) {
        searchInput.oninput = e => {
          renderOrderHistoryTable(e.target.value.toLowerCase());
        };
      }
    }

    const banner = document.getElementById('insights-banner');
    const bannerText = document.getElementById('insights-banner-text');

    const from = new Date(dateFromInput.value);
    const to = new Date(dateToInput.value);
    const periodDays = Math.max(1, Math.round((to-from)/(1000*60*60*24))+1);
    const prevFrom = new Date(from); prevFrom.setDate(prevFrom.getDate()-periodDays);
    const prevTo = new Date(from); prevTo.setDate(prevTo.getDate()-1);
    const prevOrders = orders.filter(o => {
      const d = new Date(o.date);
      return d >= prevFrom && d <= prevTo;
    });
    const prevSales = prevOrders.reduce((sum, o) => sum + (o.finalAmount || 0), 0);
    if (filteredOrders.length && prevOrders.length) {
      const change = totalSales - prevSales;
      const pct = prevSales ? (change/prevSales)*100 : 0;
      if (Math.abs(pct) > 5) {
        banner.style.display = 'flex';
        bannerText.innerHTML = pct > 0
          ? `<i class='fa fa-arrow-up'></i> Sales up <b>${pct.toFixed(1)}%</b> vs previous period!`
          : `<i class='fa fa-arrow-down'></i> Sales down <b>${Math.abs(pct).toFixed(1)}%</b> vs previous period.`;
        banner.style.background = pct > 0
          ? 'linear-gradient(90deg,#a8ff78 0%,#78ffd6 100%)'
          : 'linear-gradient(90deg,#e63946 0%,#ffb3c1 100%)';
        banner.style.color = pct > 0 ? '#1d3557' : '#fff';
      } else {
        banner.style.display = 'none';
      }
    } else {
      banner.style.display = 'none';
    }
  }


  function animateStat(id, value, prefix = '', decimals = 2) {
    const el = document.getElementById(id);
    if (!el) return;
    const start = parseFloat(el.textContent.replace(/[^\d.]/g, '')) || 0;
    const end = value;
    const duration = 600;
    const startTime = performance.now();
    function animate(now) {
      const progress = Math.min(1, (now - startTime) / duration);
      const current = start + (end - start) * progress;
      el.textContent = prefix + current.toFixed(decimals);
      if (progress < 1) requestAnimationFrame(animate);
      else el.textContent = prefix + end.toFixed(decimals);
    }
    requestAnimationFrame(animate);
  }


  dateFromInput.onchange = updateDashboard;
  dateToInput.onchange = updateDashboard;

  updateDashboard();


  document.getElementById('export-sales-btn')?.addEventListener('click', () => {
    const data = filterOrdersByDate();
    const headers = ['OrderID', 'CustomerName', 'CustomerContact', 'Date', 'Total', 'Discount', 'FinalAmount'];
    const rows = data.map(o => [o.id, o.customerName, o.customerContact, o.date, o.orderTotal, o.orderDiscount, o.finalAmount]);
    exportToCSV('sales-report.csv', headers, rows);
  });

  document.getElementById('export-order-history-btn')?.addEventListener('click', () => {
    const data = filterOrdersByDate();
    let rows = [];
    const headers = ['OrderID', 'Date', 'Customer', 'ItemCode', 'ItemName', 'Qty', 'Price', 'ItemDiscount', 'ItemTotal'];
    data.forEach(o => {
      o.items.forEach(i => {
        rows.push([o.id, o.date, o.customerName, i.code, i.name, i.qty, i.price, i.discount, i.price * i.qty * (1-(i.discount||0)/100)]);
      });
    });
    exportToCSV('order-history-report.csv', headers, rows);
  });

  function isAdmin() {
    return localStorage.getItem('loggedInUser') === 'admin';
  }

  document.getElementById('export-pdf-btn')?.addEventListener('click', () => {
    if (!isAdmin()) {
      showNotification('Only administrators can export PDF reports.');
      return;
    }

    const { jsPDF } = window.jspdf;
    const reportContainer = document.querySelector('.reports-container');
    const pdfButton = document.getElementById('export-pdf-btn');
    
    const originalButtonText = pdfButton.innerHTML;
    pdfButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
    pdfButton.disabled = true;

    html2canvas(reportContainer, {
      scale: 2,
      useCORS: true,
      logging: false,
      windowWidth: reportContainer.scrollWidth,
      windowHeight: reportContainer.scrollHeight
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'p',
        unit: 'px',
        format: [canvas.width / 2, canvas.height / 2]
      });
      
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width / 2, canvas.height / 2);
      pdf.save('mos-burgers-report.pdf');
      
      pdfButton.innerHTML = originalButtonText;
      pdfButton.disabled = false;
      showNotification('PDF report downloaded successfully!');
    }).catch(error => {
      console.error('PDF generation failed:', error);
      pdfButton.innerHTML = originalButtonText;
      pdfButton.disabled = false;
      showNotification('Failed to generate PDF report. Please try again.');
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    const pdfButton = document.getElementById('export-pdf-btn');
    if (pdfButton) {
      pdfButton.style.display = isAdmin() ? '' : 'none';
    }
  });
}

function exportToCSV(filename, headers, rows) {
  let csvContent = "data:text/csv;charset=utf-8," 
    + headers.join(",") + "\n" 
    + rows.map(e => e.map(cell => `"${String(cell ?? '').replace(/"/g, '""')}"`).join(",")).join("\n");

  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showNotification(`${filename} downloaded.`);
}


(function enforceLogin() {
  const publicPages = ['login.html', 'reset-password.html', 'index.html', 'menu.html'];
  const currentPage = window.location.pathname.split('/').pop();
  if (!publicPages.includes(currentPage)) {
    if (!localStorage.getItem('loggedInUser')) {
      window.location.href = 'login.html';
    }
  }
})();

function updateAuthLinks() {
  const isLoggedIn = localStorage.getItem('loggedInUser');
  const loginLink = document.getElementById('login-link');
  const logoutLink = document.getElementById('logout-link');
  const userSpan = document.getElementById('current-user');
  const regLink = document.getElementById('register-user-link');
  const loginsLink = document.getElementById('user-logins-link');
  
  if (loginLink) loginLink.style.display = isLoggedIn ? 'none' : '';
  if (logoutLink) logoutLink.style.display = isLoggedIn ? '' : 'none';
  if (userSpan) userSpan.textContent = isLoggedIn ? `Logged in as: ${isLoggedIn}` : '';
  if (regLink) regLink.style.display = isLoggedIn === 'admin' ? '' : 'none';
  if (loginsLink) loginsLink.style.display = isLoggedIn === 'admin' ? '' : 'none';
}

document.getElementById('logout-link').onclick = function() {
  const username = localStorage.getItem('loggedInUser');
  if (username) {
    let logs = JSON.parse(localStorage.getItem('userLogs') || '[]');
    for (let i = logs.length - 1; i >= 0; i--) {
      if (logs[i].username === username && !logs[i].logout) {
        logs[i].logout = new Date().toISOString();
        break;
      }
    }
    localStorage.setItem('userLogs', JSON.stringify(logs));
  }
  localStorage.removeItem('loggedInUser');
  updateAuthLinks();
  location.reload();
};

function updateCurrentUserDisplay() {
  const userSpan = document.getElementById('current-user');
  const isLoggedIn = localStorage.getItem('loggedInUser');
  if (userSpan) {
    userSpan.textContent = isLoggedIn ? `Logged in as: ${isLoggedIn}` : '';
  }
}
document.addEventListener('DOMContentLoaded', updateCurrentUserDisplay);

document.addEventListener('DOMContentLoaded', function() {
  const floatingCartBtn = document.getElementById('floating-cart-btn');
  const cartModal = document.getElementById('cart-modal');
  const cartModalOverlay = document.getElementById('cart-modal-overlay');
  const cartModalContent = document.getElementById('cart-modal-content');
  const cartCountBadge = document.getElementById('cart-count-badge');

  function updateCartCountBadge() {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cartData.reduce((sum, item) => sum + (item.qty || 1), 0);
    cartCountBadge.textContent = count;
    floatingCartBtn.style.display = (window.innerWidth <= 900) ? 'flex' : 'none';
  }

  function openCartModal() {
    cartModal.style.display = 'block';
    cartModalOverlay.style.display = 'block';
    setTimeout(() => { cartModal.classList.add('open'); }, 10);
    cartModalContent.innerHTML = document.getElementById('order-summary').innerHTML;
  }
  function closeCartModal() {
    cartModal.classList.remove('open');
    setTimeout(() => {
      cartModal.style.display = 'none';
      cartModalOverlay.style.display = 'none';
    }, 250);
  }
  if (floatingCartBtn) floatingCartBtn.onclick = openCartModal;
  if (cartModalOverlay) cartModalOverlay.onclick = closeCartModal;
  if (document.getElementById('close-cart-modal')) document.getElementById('close-cart-modal').onclick = closeCartModal;
  window.addEventListener('resize', updateCartCountBadge);
  updateCartCountBadge();
  const origSaveCart = saveCart;
  saveCart = function() {
    origSaveCart.apply(this, arguments);
    updateCartCountBadge();
  };
  const origRenderCart = renderCart;
  renderCart = function() {
    origRenderCart.apply(this, arguments);
    updateCartCountBadge();
    if (window.innerWidth <= 900 && cartModal.classList.contains('open')) {
      cartModalContent.innerHTML = document.getElementById('order-summary').innerHTML;
    }
  };
});
function renderCustomerStats() {
  const customers = getCustomers();
  const stats = getCustomerStats(customers);
  
  const totalEl = document.getElementById('stat-total');
  const vipEl = document.getElementById('stat-vip');
  const newEl = document.getElementById('stat-new');
  const topEl = document.getElementById('stat-top');
  
  if (totalEl) totalEl.textContent = stats.total;
  if (vipEl) vipEl.textContent = stats.vip;
  if (newEl) newEl.textContent = stats.new;
  if (topEl) topEl.textContent = stats.topCustomer || '-';
}

function generateReports(event) {
  if (!isAdmin() && document.getElementById('export-pdf-btn')) {
    document.getElementById('export-pdf-btn').remove();
  }

  const dateRange = document.getElementById('date-range').value;
  const reportType = document.getElementById('report-type').value;
  
  const button = event.target;
  const originalText = button.innerHTML;
  button.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Generating...';
  button.disabled = true;

  setTimeout(() => {
    updateAllReports(dateRange, reportType);
    button.innerHTML = originalText;
    button.disabled = false;
    showNotification('Reports generated successfully!');
  }, 500);
}

function getFilteredData(dateRange = 'all') {
  const allOrders = getOrders();
  const allCustomers = getCustomers();
  const allMenuItems = getMenuItems();

  let startDate;
  const now = new Date();

  switch (dateRange) {
    case 'today':
      startDate = new Date(now.setHours(0, 0, 0, 0));
      break;
    case 'week':
      startDate = new Date(now.setDate(now.getDate() - 7));
      break;
    case 'month':
      startDate = new Date(now.setMonth(now.getMonth() - 1));
      break;
    case 'quarter':
      startDate = new Date(now.setMonth(now.getMonth() - 3));
      break;
    case 'year':
      startDate = new Date(now.setFullYear(now.getFullYear() - 1));
      break;
    default:
      startDate = new Date(0); 
  }

  const filteredOrders = allOrders.filter(o => new Date(o.date) >= startDate);
  
  return { orders: filteredOrders, customers: allCustomers, menuItems: allMenuItems };
}

function updateAllReports(dateRange, reportType) {
  const { orders, customers, menuItems } = getFilteredData(dateRange);

  if (reportType === 'all' || reportType === 'menu') {
    updateMenuOverview(menuItems);
    updateCategoryPerformance(orders, menuItems);
    updateTopSellingItems(orders, menuItems);
  }
  if (reportType === 'all' || reportType === 'sales') {
    updateSalesSummary(orders);
  }
  if (reportType === 'all' || reportType === 'customer') {
    updateCustomerAnalytics(customers, orders);
  }
  if (reportType === 'all' || reportType === 'orders') {
    updateOrderStatus(orders);
    updateRecentOrders(orders);
  }
}

function updateMenuOverview(menuItems) {
  const categories = [...new Set(menuItems.map(item => item.category))];
  const discountedItems = menuItems.filter(item => item.discount > 0).length;
  const avgPrice = menuItems.length > 0 ? menuItems.reduce((sum, item) => sum + item.price, 0) / menuItems.length : 0;
  
  document.getElementById('total-menu-items').textContent = menuItems.length;
  document.getElementById('total-categories').textContent = categories.length;
  document.getElementById('discounted-items').textContent = discountedItems;
  document.getElementById('avg-price').textContent = `LKR ${avgPrice.toFixed(2)}`;
}

function updateSalesSummary(orders) {
  const totalRevenue = orders.reduce((sum, order) => sum + order.finalAmount, 0);
  const avgOrder = orders.length > 0 ? totalRevenue / orders.length : 0;
  const totalDiscounts = orders.reduce((sum, o) => {
      const orderDiscountAmount = o.orderTotal * (o.orderDiscount / 100);
      const itemDiscountAmount = o.items.reduce((itemSum, item) => itemSum + (item.price * item.qty * (item.discount / 100)), 0);
      return sum + orderDiscountAmount + itemDiscountAmount;
  }, 0);

  document.getElementById('total-orders').textContent = orders.length;
  document.getElementById('total-revenue').textContent = `LKR ${totalRevenue.toFixed(2)}`;
  document.getElementById('avg-order').textContent = `LKR ${avgOrder.toFixed(2)}`;
  document.getElementById('total-discounts').textContent = `LKR ${totalDiscounts.toFixed(2)}`;
}

function updateCustomerAnalytics(customers, orders) {
  const vipCustomers = customers.filter(c => c.vip).length;
  const newCustomers = customers.filter(c => {
    const customerDate = new Date(c.dateAdded || 0);
    const monthAgo = new Date();
    monthAgo.setMonth(monthAgo.getMonth() - 1);
    return customerDate > monthAgo;
  }).length;
  
  const customerSpending = orders.reduce((acc, order) => {
    acc[order.customerName] = (acc[order.customerName] || 0) + order.finalAmount;
    return acc;
  }, {});

  const topCustomer = Object.keys(customerSpending).length > 0
    ? Object.keys(customerSpending).reduce((a, b) => customerSpending[a] > customerSpending[b] ? a : b)
    : '-';

  document.getElementById('total-customers').textContent = customers.length;
  document.getElementById('vip-customers').textContent = vipCustomers;
  document.getElementById('new-customers').textContent = newCustomers;
  document.getElementById('top-customer').textContent = topCustomer;
}

function updateCategoryPerformance(orders, menuItems) {
  const categorySales = {};
  menuItems.forEach(item => {
    categorySales[item.category] = 0;
  });

  orders.forEach(order => {
    order.items.forEach(item => {
      const menuItem = menuItems.find(m => m.code === item.code);
      if (menuItem) {
        categorySales[menuItem.category] += item.qty;
      }
    });
  });

  const categoryStatsDiv = document.getElementById('category-stats');
  categoryStatsDiv.innerHTML = '';
  Object.entries(categorySales).sort(([,a],[,b]) => b - a).forEach(([category, sales]) => {
    const statDiv = document.createElement('div');
    statDiv.className = 'report-stat';
    statDiv.innerHTML = `<span class="stat-label">${category}</span><span class="stat-value">${sales} sold</span>`;
    categoryStatsDiv.appendChild(statDiv);
  });
}

function updateTopSellingItems(orders, menuItems) {
  const itemSales = {};
  orders.forEach(order => {
    order.items.forEach(item => {
      itemSales[item.code] = (itemSales[item.code] || 0) + item.qty;
    });
  });

  const topItemsDiv = document.getElementById('top-selling-items');
  topItemsDiv.innerHTML = '';
  Object.entries(itemSales).sort(([,a],[,b]) => b - a).slice(0, 5).forEach(([code, sales], index) => {
    const menuItem = menuItems.find(m => m.code === code);
    if(menuItem) {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'top-item';
      itemDiv.innerHTML = `<span class="rank">${index + 1}</span><span class="name">${menuItem.name}</span><span class="sales">${sales} sold</span>`;
      topItemsDiv.appendChild(itemDiv);
    }
  });
}

function updateOrderStatus(orders) {
  document.getElementById('completed-orders').textContent = orders.length;
  document.getElementById('pending-orders').textContent = 0;
  document.getElementById('cancelled-orders').textContent = 0;
  document.getElementById('success-rate').textContent = '100%';
}

function updateRecentOrders(orders) {
    const recentOrdersDiv = document.getElementById('recent-orders-table');
    if (orders.length === 0) {
        recentOrdersDiv.innerHTML = '<p style="text-align: center; padding: 2rem;">No orders found for the selected period.</p>';
        return;
    }
    const table = document.createElement('table');
    table.className = 'order-history-table';
    table.innerHTML = `
        <thead><tr><th>Order ID</th><th>Customer</th><th>Items</th><th>Total</th><th>Date</th><th>Status</th></tr></thead>
        <tbody>
            ${orders.slice(-10).reverse().map(order => `
                <tr>
                    <td>#${order.id.slice(-6)}</td>
                    <td>${order.customerName}</td>
                    <td>${order.items.length}</td>
                    <td>LKR ${order.finalAmount.toFixed(2)}</td>
                    <td>${new Date(order.date).toLocaleDateString()}</td>
                    <td><span style="color: #28a745;">Completed</span></td>
                </tr>
            `).join('')}
        </tbody>
    `;
    recentOrdersDiv.innerHTML = '';
    recentOrdersDiv.appendChild(table);
}

function exportReport(type) {
  if (!isAdmin()) {
    showNotification('Only administrators can export reports.');
    return;
  }

  if (type === 'pdf') {
    const { jsPDF } = window.jspdf;
    const reportContainer = document.querySelector('.reports-container');
    const pdfButton = document.getElementById('export-pdf-btn');
    
    if (pdfButton) {
      const originalButtonText = pdfButton.innerHTML;
      pdfButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
      pdfButton.disabled = true;

      html2canvas(reportContainer, {
        scale: 2,
        useCORS: true,
        logging: false,
        windowWidth: reportContainer.scrollWidth,
        windowHeight: reportContainer.scrollHeight
      }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'p',
          unit: 'px',
          format: [canvas.width / 2, canvas.height / 2]
        });
        
        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width / 2, canvas.height / 2);
        pdf.save('mos-burgers-report.pdf');
        
        pdfButton.innerHTML = originalButtonText;
        pdfButton.disabled = false;
        showNotification('PDF report downloaded successfully!');
      }).catch(error => {
        console.error('PDF generation failed:', error);
        pdfButton.innerHTML = originalButtonText;
        pdfButton.disabled = false;
        showNotification('Failed to generate PDF report. Please try again.');
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const pdfButton = document.getElementById('export-pdf-btn');
  if (pdfButton) {
    const newPdfButton = pdfButton.cloneNode(true);
    pdfButton.parentNode.replaceChild(newPdfButton, pdfButton);

    newPdfButton.addEventListener('click', () => exportReport('pdf'));

    if (!isAdmin()) {
      newPdfButton.style.display = 'none';
    }
  }
});

function printReport(type) {
  window.print();
}

document.addEventListener('DOMContentLoaded', () => {
    const reportsPage = document.querySelector('.reports-container');
    if(reportsPage) {
        updateAllReports('month', 'all');

        document.getElementById('export-pdf-btn')?.addEventListener('click', () => {
            const { jsPDF } = window.jspdf;
            const pdfButton = document.getElementById('export-pdf-btn');
            
            const originalButtonText = pdfButton.innerHTML;
            pdfButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
            pdfButton.disabled = true;

            const buttonsToHide = reportsPage.querySelectorAll('button, .report-actions');
            buttonsToHide.forEach(btn => btn.style.visibility = 'hidden');

            html2canvas(reportsPage, { scale: 2, useCORS: true, logging: false })
                .then(canvas => {
                    const imgData = canvas.toDataURL('image/png', 1.0);
                    const pdf = new jsPDF({ orientation: 'p', unit: 'px', format: [canvas.width, canvas.height], hotfixes: ['px_scaling'] });
                    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
                    
                    const pdfBlob = pdf.output('blob');
                    const blobUrl = URL.createObjectURL(pdfBlob);

                    const link = document.createElement('a');
                    link.href = blobUrl;
                    link.download = 'MOS_Burgers_Report.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    URL.revokeObjectURL(blobUrl);

                    showNotification('PDF Download Started!');
                })
                .catch(err => {
                    console.error("Error generating PDF:", err);
                    alert("Could not generate PDF. See console for details.");
                })
                .finally(() => {
                    buttonsToHide.forEach(btn => btn.style.visibility = 'visible');
                    pdfButton.innerHTML = originalButtonText;
                    pdfButton.disabled = false;
                });
        });
    }
});


function exportToCSV(filename, headers, rows) {
  let csvContent = "data:text/csv;charset=utf-8," 
    + headers.join(",") + "\n" 
    + rows.map(e => e.map(cell => `"${String(cell ?? '').replace(/"/g, '""')}"`).join(",")).join("\n");

  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
