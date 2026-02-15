
// ...script.js completo come nella versione aggiornata, con agenti, sidebar, badge click, modali, tracking...
// Per motivi di spazio, se vuoi il codice completo chiedi "mostrami tutto lo script.js".
// Qui inserisco la struttura base e la funzione di avvio:

// ...inserire qui il codice completo fornito in precedenza...

const agents = [
  {
    id: 'customer-01',
    name: 'Customer Care Pro',
    sector: 'Assistenza Clienti',
    price: 1990,
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
    price: 2290,
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
    price: 2190,
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
    price: 1790,
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
    id: 'hr-01',
    name: 'HR Assistant',
    sector: 'Risorse Umane',
    price: 1890,
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
    price: 2090,
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
    price: 1990,
    short: 'Gestione finanze e previsioni smart.',
    problems: [
      'Previsioni di cassa e alert scadenze',
      'Analisi spese e ottimizzazione costi',
      'Generazione report automatici',
      'Gestione note spese e rimborsi',
      'Simulazione scenari finanziari'
    ],
    how: 'Automatizza report, previsioni, alert e ottimizzazione costi.'
  },
  {
    id: 'logistics-01',
    name: 'Logistics Optimizer',
    sector: 'Logistica',
    price: 1890,
    short: 'Ottimizza consegne, scorte e percorsi.',
    problems: [
      'Gestione scorte e riordini automatici',
      'Ottimizzazione percorsi consegna',
      'Monitoraggio spedizioni e tracking',
      'Previsione ritardi e alert',
      'Analisi costi trasporto'
    ],
    how: 'Automatizza riordini, ottimizza percorsi, monitora spedizioni e segnala ritardi.'
  }
];

// Storage keys
const CLICKS_KEY = 'agentClicks_v1'
const EMAILS_KEY = 'agentEmails_v1'

let currentSector = null;

function $(sel){return document.querySelector(sel)}
function $all(sel){return document.querySelectorAll(sel)}

function init(){
  renderAgents();
  renderSectors();
  updateTotal();
  attachUI();
}

function renderAgents(){
  const grid = $('#agentsGrid');
  grid.innerHTML = '';
  const clicks = getClicks();
  agents.forEach(a=>{
    if(currentSector && a.sector !== currentSector) return;
    const card = document.createElement('div');
    card.className = 'agent-card';
    card.innerHTML = `
      <div class="agent-top">
        <div class="agent-icon">${a.name.split(' ').map(w=>w[0]).slice(0,2).join('')}</div>
        <div>
          <div class="agent-title">${a.name}</div>
          <div class="agent-sector">${a.sector}</div>
        </div>
      </div>
      <div class="agent-desc">${a.short}</div>
      <div class="agent-footer">
        <div class="price">€${a.price.toLocaleString()}</div>
        <div class="card-right">
          <div class="click-badge" data-id="${a.id}">${clicks[a.id]||0}</div>
          <button class="buy small" data-id="${a.id}">Dettagli</button>
        </div>
      </div>`;
    const btn = card.querySelector('.buy');
    btn.addEventListener('click', (ev)=>{ ev.stopPropagation(); openDetails(a.id); });
    card.addEventListener('click', ()=>openDetails(a.id));
    grid.appendChild(card);
  })
}

function getSectors(){
  const map = {};
  agents.forEach(a=>{ map[a.sector] = (map[a.sector]||0)+1 });
  return Object.keys(map).sort().map(s=>({name:s,count:map[s]}));
}

function renderSectors(){
  const list = $('#sectorsList');
  list.innerHTML = '';
  const allBtn = document.createElement('div');
  allBtn.className = 'sector-item' + (currentSector? '': ' active');
  allBtn.textContent = 'Tutti i settori';
  allBtn.addEventListener('click', ()=>{ currentSector = null; renderSectors(); renderAgents(); });
  list.appendChild(allBtn);
  getSectors().forEach(s=>{
    const el = document.createElement('div');
    el.className = 'sector-item' + (currentSector===s.name? ' active':'');
    el.textContent = `${s.name} (${s.count})`;
    el.addEventListener('click', ()=>{ currentSector = s.name; renderSectors(); renderAgents(); });
    list.appendChild(el);
  })
}

function openDetails(agentId){
  const a = agents.find(x=>x.id===agentId);
  if(!a) return;
  $('#modalTitle').textContent = a.name;
  $('#modalSector').textContent = a.sector;
  $('#modalDesc').textContent = a.short;
  $('#modalHow').textContent = a.how;
  $('#modalPrice').textContent = `€${a.price.toLocaleString()}`;
  const ul = $('#modalProblems'); ul.innerHTML = '';
  a.problems.forEach(p=>{const li=document.createElement('li'); li.textContent=p; ul.appendChild(li)})
  $('#buyBtn').dataset.id = a.id;
  $('#detailsModal').classList.remove('hidden');
}

function closeDetails(){ $('#detailsModal').classList.add('hidden') }

function openBuy(agentId){
  // increment click metric anche se non visibile
  incrementClick(agentId);
  updateCardBadge(agentId);
  updateTotal();
  $('#buyModal').classList.remove('hidden');
}

function closeBuy(){ $('#buyModal').classList.add('hidden') }

function incrementClick(agentId){
  const raw = localStorage.getItem(CLICKS_KEY);
  const obj = raw ? JSON.parse(raw) : {};
  obj[agentId] = (obj[agentId]||0)+1;
  localStorage.setItem(CLICKS_KEY, JSON.stringify(obj));
}

function updateCardBadge(agentId){
  const el = document.querySelector(`.click-badge[data-id="${agentId}"]`);
  if(el){
    const clicks = getClicks();
    el.textContent = clicks[agentId] || 0;
  }
}

function getClicks(){
  const raw = localStorage.getItem(CLICKS_KEY);
  return raw ? JSON.parse(raw) : {};
}

function saveEmail(agentId, email){
  const raw = localStorage.getItem(EMAILS_KEY);
  const arr = raw ? JSON.parse(raw) : [];
  arr.push({agentId,email,t:Date.now()});
  localStorage.setItem(EMAILS_KEY, JSON.stringify(arr));
}

function attachUI(){
  $('#closeDetails').addEventListener('click', closeDetails);
  $('#closeBuy').addEventListener('click', closeBuy);
  $('#buyBtn').addEventListener('click', ()=>{
    const id = $('#buyBtn').dataset.id; openBuy(id);
  });
  // Rimosso form email: ora solo messaggio test
  $('#openStats').addEventListener('click', showStats);
  $('#closeStats').addEventListener('click', ()=>$('#statsPanel').classList.add('hidden'));
  $('#exportCsv').addEventListener('click', exportCsv);
}

function updateTotal(){
  const clicks = getClicks();
  const total = Object.values(clicks).reduce((s,v)=>s+v,0);
  $('#totalBuys').textContent = `Acquisti: ${total}`;
}

function showStats(){
  const clicks = getClicks();
  const emails = JSON.parse(localStorage.getItem(EMAILS_KEY) || '[]');
  const content = $('#statsContent');
  content.innerHTML = '';
  const t = document.createElement('div');
  t.innerHTML = '<strong>Clic per agente:</strong>';
  const ul = document.createElement('ul');
  agents.forEach(a=>{const li=document.createElement('li'); li.textContent = `${a.name}: ${clicks[a.id]||0}`; ul.appendChild(li)});
  t.appendChild(ul);
  const em = document.createElement('div'); em.style.marginTop='12px'; em.innerHTML = `<strong>Email raccolte:</strong> (${emails.length})`;
  const emul = document.createElement('ul'); emails.slice().reverse().forEach(e=>{const li=document.createElement('li'); li.textContent = `${e.email} — ${e.agentId} — ${new Date(e.t).toLocaleString()}`; emul.appendChild(li)});
  content.appendChild(t); content.appendChild(em); content.appendChild(emul);
  $('#statsPanel').classList.remove('hidden');
}

function exportCsv(){
  const clicks = getClicks();
  const emails = JSON.parse(localStorage.getItem(EMAILS_KEY) || '[]');
  let csv = 'agentId,agentName,clicks\n';
  agents.forEach(a=>{csv += `${a.id},"${a.name}",${clicks[a.id]||0}\n`});
  csv += '\nEMAILS\nagentId,email,timestamp\n';
  emails.forEach(e=>{csv += `${e.agentId},${e.email},${new Date(e.t).toISOString()}\n`});
  const blob = new Blob([csv],{type:'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = 'agent-stats.csv'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}

window.addEventListener('load', init);
