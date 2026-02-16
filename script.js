const agents = [
  {
    id: 'customer-01',
    name: 'Customer Care Pro',
    sector: 'Assistenza Clienti',
    price: 245,
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
    price: 295,
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
    price: 275,
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
    price: 195,
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
    price: 225,
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
    price: 195,
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
    price: 225,
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
    price: 195,
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
const WAITLIST_KEY = 'waitlistEmails_v1';
const WAITLIST_ENDPOINT = 'https://formsubmit.co/ajax/prota296@gmail.com';
let currentSector = null;

function $(selector) {
  return document.querySelector(selector);
}

function init() {
  renderSectors();
  renderAgents();
  attachUI();
  maybeOpenDetailsFromUrl();
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
        <div class="price">€${agent.price.toLocaleString('it-IT')}/mese</div>
        <button class="buy" type="button" aria-label="Apri dettagli ${agent.name}" data-id="${agent.id}">Dettagli</button>
      </div>
    `;

    card.dataset.agentId = agent.id;
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
  allItem.setAttribute('role', 'tab');
  allItem.setAttribute('aria-selected', currentSector ? 'false' : 'true');
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
    item.setAttribute('role', 'tab');
    item.setAttribute('aria-selected', currentSector === sector.name ? 'true' : 'false');
    item.textContent = sector.name;
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
  $('#detailPrice').textContent = `€${agent.price.toLocaleString('it-IT')}/mese`;

  const winsList = $('#detailWins');
  if (winsList) {
    winsList.innerHTML = '';
    const topWins = [
      `Riduce i tempi di risposta in area ${agent.sector}`,
      `Aumenta la gestione dei lead senza aumentare il team`,
      `Mantiene follow-up costante con qualità operativa stabile`
    ];

    topWins.forEach((win) => {
      const li = document.createElement('li');
      li.textContent = win;
      winsList.appendChild(li);
    });
  }

  const problemsList = $('#detailProblems');
  problemsList.innerHTML = '';
  agent.problems.forEach((problem) => {
    const li = document.createElement('li');
    li.textContent = problem;
    problemsList.appendChild(li);
  });

  $('#detailBuyBtn').dataset.id = agent.id;
  const nextUrl = new URL(window.location.href);
  nextUrl.searchParams.set('agent', agent.id);
  window.history.replaceState({}, '', nextUrl.toString());

  $('#landingContent').classList.add('hidden');
  $('#detailsPage').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeDetailsPage() {
  $('#detailsPage').classList.add('hidden');
  $('#landingContent').classList.remove('hidden');

  const nextUrl = new URL(window.location.href);
  nextUrl.searchParams.delete('agent');
  window.history.replaceState({}, '', nextUrl.toString());
}

function maybeOpenDetailsFromUrl() {
  const url = new URL(window.location.href);
  const agentId = url.searchParams.get('agent');
  if (!agentId) return;

  const exists = agents.some((item) => item.id === agentId);
  if (!exists) {
    url.searchParams.delete('agent');
    window.history.replaceState({}, '', url.toString());
    return;
  }

  openDetailsPage(agentId);
}

function incrementClick(agentId) {
  const raw = localStorage.getItem(CLICKS_KEY);
  const current = raw ? JSON.parse(raw) : {};
  current[agentId] = (current[agentId] || 0) + 1;
  localStorage.setItem(CLICKS_KEY, JSON.stringify(current));
}

function openBuyModal(agentId) {
  const agent = agents.find((item) => item.id === agentId);
  incrementClick(agentId);
  $('#waitlistAgentId').value = agentId;
  $('#modalAgentName').textContent = agent ? agent.name : 'questo agente';
  $('#waitlistSuccess').classList.add('hidden');
  $('#buyModal').classList.remove('hidden');
}

function closeBuyModal() {
  $('#buyModal').classList.add('hidden');
}

function showToast(message) {
  const root = $('#toastRoot');
  if (!root) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  root.appendChild(toast);
  window.setTimeout(() => {
    toast.remove();
  }, 3500);
}

function initFaqAccordion() {
  const triggers = document.querySelectorAll('.accordion-trigger');
  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const expanded = trigger.getAttribute('aria-expanded') === 'true';
      trigger.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      const panelId = trigger.getAttribute('aria-controls');
      const panel = panelId ? document.getElementById(panelId) : null;
      if (!panel) return;
      panel.hidden = expanded;
    });
  });
}

function saveWaitlistLocal(payload) {
  const raw = localStorage.getItem(WAITLIST_KEY);
  const current = raw ? JSON.parse(raw) : [];
  current.push(payload);
  localStorage.setItem(WAITLIST_KEY, JSON.stringify(current));
}

async function submitWaitlist(event) {
  event.preventDefault();
  const email = $('#waitlistEmail').value.trim();
  const agentId = $('#waitlistAgentId').value;
  if (!email || !agentId) return;

  const agent = agents.find((item) => item.id === agentId);
  const payload = {
    email,
    agentId,
    agentName: agent ? agent.name : agentId,
    createdAt: new Date().toISOString()
  };

  saveWaitlistLocal(payload);

  try {
    const response = await fetch(WAITLIST_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        email,
        agente: payload.agentName,
        messaggio: `Richiesta disponibilità + sconto per ${payload.agentName}`,
        _subject: `Nuova richiesta waitlist - ${payload.agentName}`
      })
    });

    if (!response.ok) {
      throw new Error('Invio endpoint non riuscito');
    }
  } catch (error) {
    const subject = encodeURIComponent(`Richiesta waitlist - ${payload.agentName}`);
    const body = encodeURIComponent(`Email: ${email}\nAgente: ${payload.agentName}\nData: ${payload.createdAt}`);
    window.open(`mailto:prota296@gmail.com?subject=${subject}&body=${body}`, '_blank');
  }

  $('#waitlistEmail').value = '';
  $('#waitlistSuccess').textContent = 'Perfetto! Ti avviseremo appena disponibile e riceverai il 50% di sconto per i primi 3 mesi.';
  $('#waitlistSuccess').classList.remove('hidden');
  showToast('Richiesta inviata: promo 50% per i primi 3 mesi attivata.');
}

function attachUI() {
  const grid = $('#agentsGrid');
  if (grid) {
    grid.addEventListener('click', (event) => {
      const card = event.target.closest('.agent-card');
      if (!card) return;
      const id = card.dataset.agentId;
      if (!id) return;
      openDetailsPage(id);
    });
  }

  const backButton = $('#backToCatalog');
  if (backButton) {
    backButton.addEventListener('click', closeDetailsPage);
  }

  const howButton = $('#heroHowBtn');
  if (howButton) {
    howButton.addEventListener('click', () => {
      const target = $('#howSection');
      if (!target) return;
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
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

  const waitlistForm = $('#waitlistForm');
  if (waitlistForm) {
    waitlistForm.addEventListener('submit', submitWaitlist);
  }

  initFaqAccordion();
}

window.addEventListener('load', init);