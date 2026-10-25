const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwA8HXI-RP3aW4UCst8Lsupime_GWuCnSRw3p-YFfQTyc5BN46R5kpnjXl6z1Ofv6pOJg/exec";

const INITIAL_GUESTS = [
  { id: 1, name: "Ігор Стоматолог", category: "Main", gender: "M", role: "Гость", status: "Да", isPaid: true, companions: [], contact: "https://www.instagram.com/stomatolog.igor", checkedIn: false },
  { id: 2, name: "Іван Стоматолог", category: "Main", gender: "M", role: "Гость", status: "Да", isPaid: true, companions: [], contact: "https://www.instagram.com/dr.szczecin", checkedIn: false },
  { id: 3, name: "Денис Фоменко", category: "Main", gender: "M", role: "Гость", status: "Да", isPaid: true, companions: [], contact: "https://www.instagram.com/__dfomenko_", checkedIn: false },
  { id: 4, name: "Валерія Кхолкіна", category: "Main", gender: "F", role: "Гость", status: "Да", isPaid: true, companions: [], contact: "https://www.instagram.com/valeriia_kholkina", checkedIn: false },
  { id: 5, name: "Юлія Коваль", category: "Main", gender: "F", role: "Гость", status: "Да", isPaid: false, companions: [], contact: "https://www.instagram.com/kovaliulenka_official", checkedIn: false },
  { id: 6, name: "Юлія Блонд", category: "Main", gender: "F", role: "Гость", status: "Да", isPaid: false, companions: [], contact: "https://www.instagram.com/juli__blond", checkedIn: false },
  { id: 7, name: "Михайло Бобров", category: "Main", gender: "M", role: "Гость", status: "Да", isPaid: false, companions: [], contact: "https://www.instagram.com/mishha.br", checkedIn: false },
  { id: 8, name: "Роман Аханісіан", category: "Main", gender: "M", role: "Гость", status: "Да", isPaid: false, companions: [], contact: "https://www.instagram.com/roman.ahanisian", checkedIn: false },
  { id: 9, name: "Володя Екін", category: "Main", gender: "M", role: "Гость", status: "Да", isPaid: false, companions: [], contact: "48576625076", checkedIn: false },
  { id: 10, name: "Юля Савела", category: "Main", gender: "F", role: "Гость", status: "Да", isPaid: false, companions: [{ name: "Мужчина (Пара)", gender: "M" }], contact: "https://www.instagram.com/______zdarova_bandity______", checkedIn: false },
  { id: 11, name: "Діана", category: "Main", gender: "F", role: "Гость", status: "Да", isPaid: false, companions: [], contact: "https://www.instagram.com/diankka_g", checkedIn: false },
  { id: 12, name: "Микита Лісовенко", category: "Main", gender: "M", role: "Гость", status: "Да", isPaid: false, companions: [], contact: "https://www.instagram.com/niko.niko.b0y", checkedIn: false },
  { id: 13, name: "Єлизавета Ткаченко", category: "Main", gender: "F", role: "Гость", status: "Да", isPaid: false, companions: [], contact: "https://www.instagram.com/lisavetyy", checkedIn: false },
  { id: 14, name: "Максим Косман", category: "Main", gender: "M", role: "Гость", status: "Да", isPaid: false, companions: [{ name: "Мужчина (Пара)", gender: "M" }], contact: "https://www.instagram.com/maksym.kosman", checkedIn: false },
  { id: 15, name: "Ліля Рудень", category: "Main", gender: "F", role: "Гость", status: "Да", isPaid: true, companions: [], contact: "https://www.instagram.com/lilya_ruden", checkedIn: false },
  { id: 16, name: "Марія Оката", category: "Main", gender: "F", role: "Гость", status: "Да", isPaid: true, companions: [], contact: "https://www.instagram.com/lonely_chi", checkedIn: false },
  { id: 17, name: "Юлія Похинок", category: "Main", gender: "F", role: "Гость", status: "Да", isPaid: false, companions: [{ name: "Женщина (Пара)", gender: "F" }], contact: "https://www.instagram.com/valeriia_kholkina", checkedIn: false },
  { id: 18, name: "Олександр Темщик", category: "Main", gender: "M", role: "Гость", status: "Да", isPaid: false, companions: [{ name: "Женщина (Пара)", gender: "F" }], contact: "https://www.instagram.com/_alllex_01", checkedIn: false },
  { id: 19, name: "Юлія Халас", category: "Main", gender: "F", role: "Гость", status: "Да", isPaid: false, companions: [{ name: "Мужчина (Пара)", gender: "M" }], contact: "https://www.instagram.com/yuliiahalas", checkedIn: false },
  { id: 20, name: "Ярик Барьбер", category: "Main", gender: "M", role: "Гость", status: "Да", isPaid: false, companions: [{ name: "Женщина (Пара)", gender: "F" }], contact: "https://www.instagram.com/jaro.barber.life", checkedIn: false },
  { id: 21, name: "Аліна Сорби", category: "Main", gender: "F", role: "Гость", status: "Да", isPaid: false, companions: [], contact: "https://www.instagram.com/alina_gracepro", checkedIn: false },
  { id: 22, name: "Фабіан Кубіцкі", category: "Main", gender: "M", role: "Гость", status: "Да", isPaid: false, companions: [], contact: "https://www.instagram.com/laserownia.depilacja", checkedIn: false },
  { id: 23, name: "Ярослав Листопад", category: "Main", gender: "M", role: "Гость", status: "Да", isPaid: false, companions: [{ name: "Женщина (Пара)", gender: "F" }], contact: "https://www.instagram.com/listopadach", checkedIn: false },
  { id: 24, name: "Микита Сальников", category: "Main", gender: "M", role: "Гость", status: "Да", isPaid: true, companions: [], contact: "https://www.instagram.com/viest_0v0", checkedIn: false },
  { id: 25, name: "Каріна Михальчук", category: "Main", gender: "F", role: "Гость", status: "Да", isPaid: true, companions: [], contact: "https://www.instagram.com/_m.karisha183", checkedIn: false },
  { id: 26, name: "Даша Михальчук", category: "Main", gender: "F", role: "Гость", status: "Да", isPaid: true, companions: [], contact: "https://www.instagram.com/_m.dasheo.www_", checkedIn: false },
  { id: 27, name: "Ксенія Гарькава", category: "Main", gender: "F", role: "Гость", status: "Да", isPaid: true, companions: [{ name: "Мужчина (Пара)", gender: "M" }], contact: "https://www.instagram.com/_mxsxxn", checkedIn: false },
  { id: 28, name: "Олександр Павливода", category: "Main", gender: "M", role: "Гость", status: "Да", isPaid: false, companions: [], contact: "", checkedIn: false },
  { id: 29, name: "Рудень Максим", category: "Staff", gender: "M", role: "Співробітник", status: "Да", isPaid: true, companions: [], contact: "", checkedIn: false },
  { id: 30, name: "Валера Ковальчук", category: "Staff", gender: "M", role: "Співробітник", status: "Да", isPaid: true, companions: [], contact: "", checkedIn: false },
  { id: 31, name: "Ольга Господінова", category: "Staff", gender: "F", role: "Співробітник", status: "Да", isPaid: false, companions: [{ name: "Супроводжуючий 1", gender: "F" }], contact: "", checkedIn: false },
  { id: 32, name: "Кривенко Едуард", category: "Staff", gender: "M", role: "Співробітник", status: "Да", isPaid: true, companions: [], contact: "", checkedIn: false },
  { id: 33, name: "Софія Закорецька", category: "Staff", gender: "F", role: "Співробітник", status: "Да", isPaid: false, companions: [], contact: "", checkedIn: false },
  { id: 34, name: "Максим Закорецький", category: "Staff", gender: "M", role: "Співробітник", status: "Да", isPaid: false, companions: [{ name: "Супроводжуючий 1", gender: "F" }, { name: "Супроводжуючий 2", gender: "F" }], contact: "", checkedIn: false },
  { id: 35, name: "Владислав Ловас", category: "Staff", gender: "M", role: "Співробітник", status: "Да", isPaid: false, companions: [], contact: "", checkedIn: false },
  { id: 36, name: "Анастасія Ромашова", category: "Staff", gender: "F", role: "Співробітник", status: "Да", isPaid: true, companions: [], contact: "", checkedIn: false },
  { id: 37, name: "Давид Охота", category: "Temp", gender: "M", role: "Тимчасовий", status: "Да", isPaid: false, companions: [], contact: "Спец-список", checkedIn: false },
  { id: 38, name: "Лукаш Лех", category: "Temp", gender: "M", role: "Тимчасовий", status: "Да", isPaid: false, companions: [], contact: "Спец-список", checkedIn: false },
  { id: 39, name: "Войтек Боровскі", category: "Temp", gender: "M", role: "Тимчасовий", status: "Да", isPaid: false, companions: [], contact: "Спец-список", checkedIn: false },
  { id: 40, name: "Мачек Архітектор", category: "Temp", gender: "M", role: "Тимчасовий", status: "Да", isPaid: false, companions: [], contact: "Спец-список", checkedIn: false },
  { id: 41, name: "Мачек Голанські", category: "Temp", gender: "M", role: "Тимчасовий", status: "Да", isPaid: false, companions: [], contact: "Спец-список", checkedIn: false },
  { id: 42, name: "Сергій Глацан", category: "Temp", gender: "M", role: "Тимчасовий", status: "Да", isPaid: false, companions: [], contact: "Спец-список", checkedIn: false },
  { id: 43, name: "Фрей Барбер", category: "Temp", gender: "M", role: "Тимчасовий", status: "Да", isPaid: false, companions: [], contact: "Спец-список", checkedIn: false }
];

let guests = [];
let currentCategory = 'all';

if (localStorage.getItem('halloween_auth') === 'true') {
  document.getElementById('authModal').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  initApp();
}

function handleAuth(e) {
  e.preventDefault();
  const pin = document.getElementById('pinInput').value;
  if (pin === '2026') {
    localStorage.setItem('halloween_auth', 'true');
    document.getElementById('authModal').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
    initApp();
  } else {
    alert('Невірний PIN-код!');
  }
}

async function initApp() {
  if (!SCRIPT_URL || SCRIPT_URL.includes("ТУТ_ВАШЕ")) {
    guests = INITIAL_GUESTS;
    renderApp();
    return;
  }

  try {
    const res = await fetch(SCRIPT_URL);
    const data = await res.json();
    if (data && data.length > 0) {
      guests = data.map(g => ({
        ...g,
        isPaid: g.isPaid === true || g.isPaid === "true" || g.isPaid === "TRUE",
        checkedIn: g.checkedIn === true || g.checkedIn === "true" || g.checkedIn === "TRUE",
        companions: typeof g.companions === 'string' ? JSON.parse(g.companions || '[]') : (g.companions || [])
      }));
    } else {
      guests = INITIAL_GUESTS;
      saveData();
    }
  } catch (err) {
    console.error("Помилка завантаження:", err);
    guests = INITIAL_GUESTS;
  }
  renderApp();
}

async function loadFromCloud() {
  document.getElementById('syncStatus').innerText = "⏳ Синхронізація...";
  await initApp();
  document.getElementById('syncStatus').innerText = "☁️ Онлайн хмара";
}

async function saveData() {
  renderApp();
  if (!SCRIPT_URL || SCRIPT_URL.includes("ТУТ_ВАШЕ")) return;

  try {
    document.getElementById('syncStatus').innerText = "💾 Збереження...";
    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(guests)
    });
    document.getElementById('syncStatus').innerText = "☁️ Онлайн хмара";
  } catch (err) {
    console.error("Помилка збереження:", err);
    document.getElementById('syncStatus').innerText = "⚠️ Помилка зв'язку";
  }
}

function setCategoryFilter(cat) {
  currentCategory = cat;
  ['All', 'Main', 'Staff', 'Temp'].forEach(c => {
    const btn = document.getElementById('btnFilter' + c);
    if (btn) {
      if (c.toLowerCase() === cat.toLowerCase()) {
        btn.className = "px-3.5 py-2 text-xs font-semibold rounded-xl border border-orange-500 bg-orange-500/20 text-orange-400";
      } else {
        btn.className = "px-3.5 py-2 text-xs font-semibold rounded-xl border border-slate-700 bg-slate-800 text-slate-400 hover:text-slate-200";
      }
    }
  });
  renderApp();
}

function calculateStats() {
  let totalPax = 0, payingPax = 0, tempPax = 0, collectedPLN = 0, checkedInCount = 0;
  
  guests.forEach(g => {
    const groupSize = 1 + (g.companions ? g.companions.length : 0);
    totalPax += groupSize;

    if (g.category === 'Temp') {
      tempPax += groupSize;
    } else {
      payingPax += groupSize;
      if (g.isPaid) {
        collectedPLN += groupSize * 100;
      }
    }
    if (g.checkedIn) checkedInCount += groupSize;
  });

  document.getElementById('statsContainer').innerHTML = `
    <div class="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/50">
      <p class="text-xs text-slate-400 font-medium">Загальний потік</p>
      <p class="text-2xl font-black text-white mt-1">${totalPax} <span class="text-xs font-normal text-slate-400">осіб</span></p>
      <p class="text-[10px] text-slate-500 mt-1">${payingPax} платні • ${tempPax} тимчасові</p>
    </div>
    <div class="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/50">
      <p class="text-xs text-slate-400 font-medium">Зібрано каси</p>
      <p class="text-2xl font-black text-emerald-400 mt-1">${collectedPLN} <span class="text-xs font-normal text-slate-400">PLN</span></p>
      <p class="text-[10px] text-slate-500 mt-1">Ціль: ${payingPax * 100} PLN</p>
    </div>
    <div class="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/50">
      <p class="text-xs text-slate-400 font-medium">Прийшли (Чек-ін)</p>
      <p class="text-2xl font-black text-orange-400 mt-1">${checkedInCount} <span class="text-xs font-normal text-slate-400">осіб</span></p>
      <p class="text-[10px] text-slate-500 mt-1">${Math.round((checkedInCount/totalPax)*100 || 0)}% від списку</p>
    </div>
    <div class="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/50">
      <p class="text-xs text-slate-400 font-medium">Статуси оплати</p>
      <p class="text-2xl font-black text-indigo-400 mt-1">${guests.filter(g=>g.isPaid).length}/${guests.length}</p>
      <p class="text-[10px] text-slate-500 mt-1">Оплачених броней</p>
    </div>
  `;
}

function renderApp() {
  calculateStats();
  const query = (document.getElementById('searchInput').value || '').toLowerCase();
  const cardsContainer = document.getElementById('cardsView');
  cardsContainer.innerHTML = '';

  const filtered = guests.filter(g => {
    const matchesCat = currentCategory === 'all' || g.category === currentCategory;
    const matchesSearch = g.name.toLowerCase().includes(query) || (g.contact && g.contact.toLowerCase().includes(query));
    return matchesCat && matchesSearch;
  });

  filtered.forEach(g => {
    const isInstagram = g.contact && g.contact.includes('instagram.com');
    const compCount = g.companions ? g.companions.length : 0;
    const catName = g.category === 'Temp' ? 'Тимчасовий' : (g.category === 'Staff' ? 'Персонал' : 'Основний');
    const catClass = g.category === 'Temp' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : (g.category === 'Staff' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30');

    const card = document.createElement('div');
    card.className = `bg-slate-800/80 rounded-2xl p-5 border ${g.checkedIn ? 'border-orange-500/50 bg-orange-950/10' : 'border-slate-700/60'} transition hover:border-slate-600 flex flex-col justify-between`;

    card.innerHTML = `
      <div>
        <div class="flex justify-between items-start gap-2 mb-3">
          <div>
            <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${catClass}">${catName}</span>
            <h3 class="text-base font-bold text-white mt-1.5">${g.name}</h3>
          </div>
          <div class="flex items-center gap-1">
            <button onclick="openEditGuestModal('${g.id}')" class="text-slate-400 hover:text-orange-400 p-1.5 transition"><i class="fa-solid fa-pen text-xs"></i></button>
            <button onclick="deleteGuest('${g.id}')" class="text-slate-500 hover:text-red-400 p-1.5 transition"><i class="fa-solid fa-trash-can text-xs"></i></button>
          </div>
        </div>

        <div class="space-y-2 mb-4 text-xs">
          <div class="flex items-center gap-2 text-slate-300">
            <i class="fa-solid fa-user-group text-slate-500 w-4"></i>
            <span>Супровід: <strong class="text-white">${compCount} осіб</strong></span>
            <div class="ml-auto flex items-center gap-1">
              <button onclick="removeCompanion('${g.id}')" class="w-5 h-5 bg-slate-700 hover:bg-red-600/50 text-slate-200 rounded flex items-center justify-center font-bold" title="Зменшити">-</button>
              <button onclick="addCompanion('${g.id}')" class="w-5 h-5 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded flex items-center justify-center font-bold" title="Додати">+</button>
            </div>
          </div>
          ${g.contact ? `
            <div class="flex items-center gap-2 text-slate-300">
              <i class="${isInstagram ? 'fa-brands fa-instagram text-pink-400' : 'fa-solid fa-phone text-emerald-400'} w-4"></i>
              ${isInstagram ? `<a href="${g.contact}" target="_blank" class="text-pink-400 hover:underline truncate">Instagram профіль</a>` : `<span class="truncate">${g.contact}</span>`}
            </div>
          ` : ''}
        </div>
      </div>

      <div class="pt-3 border-t border-slate-700/50 flex items-center justify-between gap-2">
        <button onclick="togglePaid('${g.id}')" class="px-3 py-1.5 rounded-xl text-xs font-semibold border transition ${g.isPaid ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' : 'bg-red-500/20 text-red-400 border-red-500/40'}">
          ${g.isPaid ? 'Оплачено (' + ((1 + compCount) * 100) + ' PLN)' : 'Не оплачено'}
        </button>
        <button onclick="toggleCheckIn('${g.id}')" class="px-3 py-1.5 rounded-xl text-xs font-semibold transition ${g.checkedIn ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' : 'bg-slate-700 hover:bg-slate-600 text-slate-200'}">
          ${g.checkedIn ? '✓ На вечірці' : 'Чек-ін'}
        </button>
      </div>
    `;
    cardsContainer.appendChild(card);
  });

  if (!document.getElementById('rosterModal').classList.contains('hidden')) {
    renderRosterTable();
  }
}

function togglePaid(id) {
  const g = guests.find(x => x.id == id);
  if (g) { g.isPaid = !g.isPaid; saveData(); }
}

function toggleCheckIn(id) {
  const g = guests.find(x => x.id == id);
  if (g) { g.checkedIn = !g.checkedIn; saveData(); }
}

function addCompanion(id) {
  const g = guests.find(x => x.id == id);
  if (g) {
    if (!g.companions) g.companions = [];
    g.companions.push({ name: `Супроводжуючий ${g.companions.length + 1}`, gender: 'F' });
    saveData();
  }
}

function removeCompanion(id) {
  const g = guests.find(x => x.id == id);
  if (g && g.companions && g.companions.length > 0) {
    g.companions.pop();
    saveData();
  }
}

function deleteGuest(id) {
  if (confirm('Ви впевнені, що хочете видалити цього гостя?')) {
    guests = guests.filter(x => x.id != id);
    saveData();
  }
}

function openAddGuestModal() {
  document.getElementById('editGuestId').value = '';
  document.getElementById('modalTitle').innerHTML = '<i class="fa-solid fa-user-plus text-orange-500"></i> Зареєструвати нового гостя';
  document.getElementById('newGuestName').value = '';
  document.getElementById('newGuestContact').value = '';
  document.getElementById('newGuestCategory').value = 'Main';
  document.getElementById('newGuestGender').value = 'M';
  document.getElementById('newGuestPaid').checked = false;
  document.getElementById('addGuestModal').classList.remove('hidden');
}

function openEditGuestModal(id) {
  const g = guests.find(x => x.id == id);
  if (!g) return;
  document.getElementById('editGuestId').value = g.id;
  document.getElementById('modalTitle').innerHTML = '<i class="fa-solid fa-pen text-orange-500"></i> Редагувати дані гостя';
  document.getElementById('newGuestName').value = g.name;
  document.getElementById('newGuestContact').value = g.contact || '';
  document.getElementById('newGuestCategory').value = g.category || 'Main';
  document.getElementById('newGuestGender').value = g.gender || 'M';
  document.getElementById('newGuestPaid').checked = g.isPaid;
  document.getElementById('addGuestModal').classList.remove('hidden');
}

function closeAddGuestModal() { document.getElementById('addGuestModal').classList.add('hidden'); }

function handleSaveGuest(e) {
  e.preventDefault();
  const editId = document.getElementById('editGuestId').value;
  const name = document.getElementById('newGuestName').value;
  const category = document.getElementById('newGuestCategory').value;
  const gender = document.getElementById('newGuestGender').value;
  const contact = document.getElementById('newGuestContact').value;
  const isPaid = document.getElementById('newGuestPaid').checked;

  if (editId) {
    const g = guests.find(x => x.id == editId);
    if (g) {
      g.name = name;
      g.category = category;
      g.gender = gender;
      g.contact = contact;
      g.isPaid = isPaid;
      g.role = category === 'Temp' ? 'Тимчасовий' : (category === 'Staff' ? 'Співробітник' : 'Гость');
    }
  } else {
    guests.push({
      id: Date.now(),
      name, category, gender,
      role: category === 'Temp' ? 'Тимчасовий' : (category === 'Staff' ? 'Співробітник' : 'Гость'),
      status: 'Да', isPaid,
      companions: [], contact, checkedIn: false
    });
  }

  closeAddGuestModal();
  saveData();
}

function toggleExpandedRoster() {
  const modal = document.getElementById('rosterModal');
  modal.classList.toggle('hidden');
  if (!modal.classList.contains('hidden')) renderRosterTable();
}

function renderRosterTable() {
  const query = (document.getElementById('rosterSearchInput').value || '').toLowerCase();
  const tbody = document.getElementById('rosterTableBody');
  tbody.innerHTML = '';

  guests.filter(g => g.name.toLowerCase().includes(query)).forEach((g, idx) => {
    const compCount = g.companions ? g.companions.length : 0;
    const catName = g.category === 'Temp' ? 'Тимчасовий' : (g.category === 'Staff' ? 'Персонал' : 'Основний');
    
    const tr = document.createElement('tr');
    tr.className = "hover:bg-slate-800/40 transition border-b border-slate-800/40";
    tr.innerHTML = `
      <td class="p-3 font-mono text-slate-500">${idx + 1}</td>
      <td class="p-3 font-semibold text-white">${g.name}</td>
      <td class="p-3"><span class="text-[10px] px-2 py-0.5 rounded bg-slate-800 border border-slate-700">${catName}</span></td>
      <td class="p-3">
        <div class="flex items-center gap-1.5">
          <span>+${compCount}</span>
          <button onclick="removeCompanion('${g.id}')" class="px-1.5 py-0.5 bg-slate-800 hover:bg-red-600/40 rounded text-slate-300 font-bold">-</button>
          <button onclick="addCompanion('${g.id}')" class="px-1.5 py-0.5 bg-slate-800 hover:bg-slate-700 rounded text-slate-300 font-bold">+</button>
        </div>
      </td>
      <td class="p-3 text-slate-400 truncate max-w-[140px]">${g.contact || '—'}</td>
      <td class="p-3">
        <button onclick="togglePaid('${g.id}')" class="px-2 py-1 rounded text-[11px] font-semibold ${g.isPaid ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-red-500/20 text-red-400 border border-red-500/40'}">
          ${g.isPaid ? 'Оплачено' : 'Ні'}
        </button>
      </td>
      <td class="p-3">
        <button onclick="toggleCheckIn('${g.id}')" class="px-2 py-1 rounded text-[11px] font-semibold ${g.checkedIn ? 'bg-orange-500 text-white' : 'bg-slate-800 hover:bg-slate-700 text-slate-400'}">
          ${g.checkedIn ? '✓ Прийшов' : 'Очікуємо'}
        </button>
      </td>
      <td class="p-3 text-right flex items-center justify-end gap-1">
        <button onclick="openEditGuestModal('${g.id}')" class="text-slate-400 hover:text-orange-400 px-1.5 py-1" title="Редагувати"><i class="fa-solid fa-pen text-xs"></i></button>
        <button onclick="deleteGuest('${g.id}')" class="text-red-400 hover:underline px-1 py-1" title="Видалити">Видалити</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function exportToExcel() {
  const dataToExport = guests.map((g, idx) => ({
    "№": idx + 1,
    "Ім'я та Прізвище": g.name,
    "Категорія": g.category === 'Temp' ? 'Тимчасові гості' : (g.category === 'Staff' ? 'Персонал' : 'Основний'),
    "Стать": g.gender,
    "Оплата": g.isPaid ? "Оплачено" : "Не оплачено",
    "Супровід (к-ть)": g.companions ? g.companions.length : 0,
    "Контакт / Instagram": g.contact,
    "Чек-ін": g.checkedIn ? "Так" : "Ні"
  }));

  const worksheet = XLSX.utils.json_to_sheet(dataToExport);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Гості Хеллоуїна");
  XLSX.writeFile(workbook, "Halloween_CRM_Cloud.xlsx");
}
