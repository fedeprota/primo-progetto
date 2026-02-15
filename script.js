const agents = [
  {
    id: 'customer-01',
    name: 'Customer Care Pro',
    sector: 'Assistenza Clienti',
    price: 49,
    short: 'Gestisce assistenza clienti a 360°.',
    problems: [
      'Risponde automaticamente a email e recensioni',
      'Contatta clienti abituali per offerte e follow-up',
      'Cerca nuovi lead e gestisce richieste',
      'Fissa appuntamenti e richiama clienti',
      'Monitora la soddisfazione e segnala criticità'
    ],
    how: 'Automatizza risposte, invia follow-up, gestisce appuntamenti e monitora la reputazione online.'
  },
  {
    id: 'sales-01',
    name: 'Sales Booster',
    sector: 'Vendite',
    price: 59,
    short: 'Automatizza pipeline e chiusura vendite.',
    problems: [
      'Prioritizza lead caldi',
      'Suggerisce script di vendita personalizzati',
      'Invia preventivi automatici',
      'Gestisce follow-up e reminder',
      'Analizza motivi di perdita deal'
    ],
    how: 'Valuta lead, invia proposte, ricorda scadenze e suggerisce azioni per aumentare le chiusure.'
  },
  {
    id: 'marketing-01',
    name: 'Marketing Suite',
    sector: 'Marketing',
    price: 55,
    short: 'Gestione completa campagne e contenuti.',
    problems: [
      'Crea e programma campagne multicanale',
      'Genera contenuti e post social',
      'Analizza risultati e suggerisce ottimizzazioni',
      'Segmenta pubblico e personalizza offerte',
      'Gestisce newsletter e automazioni'
    ],
    how: 'Automatizza campagne, crea contenuti, analizza dati e ottimizza il budget marketing.'
  },
  {
    id: 'admin-01',
    name: 'Office Manager AI',
    sector: 'Amministrazione',
    price: 39,
    short: 'Supporto amministrativo e organizzativo.',
    problems: [
      'Gestisce appuntamenti e calendario',
      'Invia promemoria e documenti',
      'Organizza riunioni e prenotazioni',
      'Monitora scadenze e pagamenti',
      'Automatizza reportistica base'
    ],
    how: 'Automatizza la gestione di appuntamenti, scadenze, documenti e report.'
  },
  {
    id: 'restaurant-01',
    name: 'RistoBot',
    sector: 'Ristorazione',
    price: 45,
    short: 'Gestione completa per ristoranti e locali.',
    problems: [
      'Gestisce prenotazioni e tavoli',
      'Risponde a recensioni e richieste',
      'Invia promozioni a clienti abituali',
      'Ottimizza turni staff e ordini',
      'Monitora feedback e suggerisce miglioramenti'
    ],
    how: 'Automatizza prenotazioni, risposte, promozioni, gestione staff e analisi feedback.'
  },
  {
    id: 'hr-01',
    name: 'HR Assistant',
    sector: 'Risorse Umane',
    price: 39,
    short: 'Gestione selezione, onboarding e clima.',
    problems: [
      'Screening CV e pre-colloqui automatici',
      'Onboarding digitale e formazione',
      'Rileva segnali di malessere o turnover',
      'Gestisce richieste ferie e permessi',
      'Invia survey di clima aziendale'
    ],
    how: 'Automatizza selezione, onboarding, gestione richieste e monitoraggio clima.'
  },
  {
    id: 'it-01',
    name: 'IT Guardian',
    sector: 'IT & Sicurezza',
    price: 45,
    short: 'Protegge e ottimizza l’infrastruttura IT.',
    problems: [
      'Monitoraggio sicurezza e backup',
      'Gestione accessi e permessi',
      'Segnala anomalie e tentativi di intrusione',
      'Ottimizza costi cloud e risorse',
      'Supporto tecnico automatico base'
    ],
    how: 'Monitora sicurezza, segnala problemi, ottimizza risorse e automatizza supporto IT.'
  },
  {
    id: 'finance-01',
    name: 'Finance Helper',
    sector: 'Finanza',
    price: 39,
    short: 'Gestione finanze e previsioni smart.',
    problems: [
      'Previsioni di cassa e alert scadenze',
      'Analisi spese e ottimizzazione costi',
      'Generazione report automatici',
      'Gestione note spese e rimborsi',
      'Simulazione scenari finanziari'
    ],
    how: 'Automatizza report, previsioni, alert e ottimizzazione costi.'
  }
];

const CLICKS_KEY = 'agentClicks_v1';
let currentSector = null;

function $(selector) {
  return document.querySelector(selector);
}

function init() {
  renderSectors();
  renderAgents();
  attachUI();
}

function renderAgents() {
  const grid = $('#agentsGrid');
  if (!grid) return;

  grid.innerHTML = '';

  agents.forEach((agent) => {
    if (currentSector && agent.sector !== currentSector) return;

    const card = document.createElement('article');
    card.className = 'agent-card';
    card.innerHTML = `
      <div class="agent-top">
        <div class="agent-icon">${agent.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}</div>
        <div>
          <div class="agent-title">${agent.name}</div>
          <div class="agent-sector">${agent.sector}</div>
        </div>
      </div>
      <div class="agent-desc">${agent.short}</div>
      <div class="agent-footer">
        <div class="price">€${agent.price}/mese</div>
        <button class="buy" data-id="${agent.id}">Dettagli</button>
      </div>
    `;

    const detailsButton = card.querySelector('.buy');
    detailsButton.addEventListener('click', (event) => {
      event.stopPropagation();
      openDetailsPage(agent.id);
    });

    card.addEventListener('click', () => openDetailsPage(agent.id));
    grid.appendChild(card);
  });
}

function getSectors() {
  const counts = {};
  agents.forEach((agent) => {
    counts[agent.sector] = (counts[agent.sector] || 0) + 1;
  });

  return Object.keys(counts)
    .sort()
    .map((name) => ({ name, count: counts[name] }));
}

function renderSectors() {
  const list = $('#sectorsList');
  if (!list) return;

  list.innerHTML = '';

  const allItem = document.createElement('button');
  allItem.className = `sector-item${currentSector ? '' : ' active'}`;
  allItem.type = 'button';
  allItem.textContent = 'Tutti i settori';
  allItem.addEventListener('click', () => {
    currentSector = null;
    renderSectors();
    renderAgents();
  });
  list.appendChild(allItem);

  getSectors().forEach((sector) => {
    const item = document.createElement('button');
    item.className = `sector-item${currentSector === sector.name ? ' active' : ''}`;
    item.type = 'button';
    item.textContent = `${sector.name} (${sector.count})`;
    item.addEventListener('click', () => {
      currentSector = sector.name;
      renderSectors();
      renderAgents();
    });
    list.appendChild(item);
  });
}

function openDetailsPage(agentId) {
  const agent = agents.find((item) => item.id === agentId);
  if (!agent) return;

  $('#detailSector').textContent = agent.sector;
  $('#detailTitle').textContent = agent.name;
  $('#detailDescription').textContent = agent.short;
  $('#detailHow').textContent = agent.how;
  $('#detailPrice').textContent = `€${agent.price}/mese`;

  const problemsList = $('#detailProblems');
  problemsList.innerHTML = '';
  agent.problems.forEach((problem) => {
    const li = document.createElement('li');
    li.textContent = problem;
    problemsList.appendChild(li);
  });

  $('#detailBuyBtn').dataset.id = agent.id;

  $('#catalogPage').classList.add('hidden');
  $('#detailsPage').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeDetailsPage() {
  $('#detailsPage').classList.add('hidden');
  $('#catalogPage').classList.remove('hidden');
}

function incrementClick(agentId) {
  const raw = localStorage.getItem(CLICKS_KEY);
  const current = raw ? JSON.parse(raw) : {};
  current[agentId] = (current[agentId] || 0) + 1;
  localStorage.setItem(CLICKS_KEY, JSON.stringify(current));
}

function openBuyModal(agentId) {
  incrementClick(agentId);
  $('#buyModal').classList.remove('hidden');
}

function closeBuyModal() {
  $('#buyModal').classList.add('hidden');
}

function attachUI() {
  const backButton = $('#backToCatalog');
  if (backButton) {
    backButton.addEventListener('click', closeDetailsPage);
  }

  const detailBuyButton = $('#detailBuyBtn');
  if (detailBuyButton) {
    detailBuyButton.addEventListener('click', () => {
      const id = detailBuyButton.dataset.id;
      if (!id) return;
      openBuyModal(id);
    });
  }

  const closeBuyButton = $('#closeBuy');
  if (closeBuyButton) {
    closeBuyButton.addEventListener('click', closeBuyModal);
  }
}

window.addEventListener('load', init);