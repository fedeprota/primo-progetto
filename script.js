<<<<<<< HEAD
// ...script.js completo come nella versione aggiornata, con agenti, sidebar, badge click, modali, tracking...
// Per motivi di spazio, se vuoi il codice completo chiedi "mostrami tutto lo script.js".
// Qui inserisco la struttura base e la funzione di avvio:

// ...inserire qui il codice completo fornito in precedenza...
=======
const agents = [
  {id:'marketing-01',name:'Marketing Maestro',sector:'Marketing',price:2490,short:'Automatizza campagne e ottimizza ROI.',problems:['Bassa conversione','Spesa pubblicitaria inefficiente'],how:'Analizza canali e creatività per suggerire campagne ottimizzate.'},
  {id:'marketing-02',name:'Content Catalyst',sector:'Marketing',price:990,short:'Genera calendar editoriali e copy di prova.',problems:['Mancanza di contenuti','Incoerenza brand'],how:'Produce idee, copy e brief per team creativi.'},
  {id:'marketing-03',name:'Ad Optimizer',sector:'Marketing',price:1990,short:'Ottimizza spesa e targeting adv.',problems:['ROI basso','Targeting inefficace'],how:'Suggerisce budget allocation e creatività performanti.'},
  {id:'sales-01',name:'Sales Closer',sector:'Vendite',price:2190,short:'Prioritizza lead e suggerisce script di vendita.',problems:['Pipeline sanguinante','Basso tasso chiusura'],how:'Valuta lead score e propone azioni di follow-up.'},
  {id:'sales-02',name:'Deal Forecaster',sector:'Vendite',price:1790,short:'Previsioni pipeline e rischi deal.',problems:['Previsioni incerte','Ritardi chiusura'],how:'Calcola probabilità di chiusura e alert su rischi.'},
  {id:'finance-01',name:'Finance Sentinel',sector:'Finanza',price:3490,short:'Previsioni e rilevamento anomalie finanziarie.',problems:['Previsioni imprecise','Rischio non segnalato'],how:'Combina modelli previsionali con regole aziendali per alert.'},
  {id:'finance-02',name:'Cashflow Guardian',sector:'Finanza',price:1590,short:'Monitora liquidità e scenari di stress.',problems:['Short-term liquidity','Unexpected outflows'],how:'Simula scenari e suggerisce priorità pagamenti.'},
  {id:'hr-01',name:'HR Talent Scout',sector:'Risorse Umane',price:1790,short:'Screening candidati e matching.',problems:['Selezione lenta','Bias inconsapevole'],how:'Valuta CV e soft-skill per priorizzare candidati.'},
  {id:'hr-02',name:'Onboarding Buddy',sector:'Risorse Umane',price:990,short:'Automatizza onboarding e training iniziale.',problems:['Onboarding disorganizzato','Time-to-productivity lungo'],how:'Crea piani personalizzati e reminder per nuovi assunti.'},
  {id:'it-01',name:'Security Watcher',sector:'IT & Sicurezza',price:3990,short:'Monitoraggio sicurezza e rilevamento intrusioni.',problems:['Minacce non rilevate','Patch management'],how:'Analizza log e segnala anomalie prioritarie.'},
  {id:'it-02',name:'Infra Optimizer',sector:'IT & Sicurezza',price:2690,short:'Ottimizza costi cloud e performance.',problems:['Costo cloud elevato','Sovra-provisioning'],how:'Suggerisce right-sizing e risparmi operativi.'},
  {id:'product-01',name:'Product Insight',sector:'Prodotto',price:1990,short:'Analizza feedback e priorizza roadmap.',problems:['Roadmap non allineata','Feedback disperso'],how:'Clusterizza feedback e suggerisce roadmap impact-driven.'},
  {id:'cx-01',name:'Support Helper',sector:'Customer Support',price:1290,short:'Automatizza risposte e prioritizza ticket.',problems:['Tempi risposta lunghi','Customer churn'],how:'Classifica ticket e suggerisce risposte template.'},
  {id:'logistics-01',name:'Logistics Optimizer',sector:'Logistica',price:2990,short:'Ottimizza percorsi e scorte.',problems:['Costi trasporto elevati','Ritardi'],how:'Piani dinamici su traffico e domanda.'},
  {id:'manufacturing-01',name:'Factory Coach',sector:'Manifattura',price:2590,short:'Predictive maintenance e scheduling.',problems:['Fermi macchina','Bassi rendimenti'],how:'Rileva segnali di guasto e ottimizza turni.'},
  {id:'health-01',name:'Care Assistant',sector:'Sanità',price:3490,short:'Supporto triage e follow-up pazienti.',problems:['Overload clinico','Follow-up perso'],how:'Prioritizza pazienti e invia promemoria personalizzati.'},
  {id:'realestate-01',name:'Property Scout',sector:'Immobiliare',price:1390,short:'Valutazioni rapide e matching clienti.',problems:['Time-to-listing','Valutazioni inaccurate'],how:'Analizza mercato e suggerisce prezzo competitivo.'},
  {id:'retail-01',name:'Shelf Optimizer',sector:'Retail',price:1890,short:'Ottimizza assortimento e promozioni.',problems:['Stockout','Promozioni inefficaci'],how:'Suggerisce assortimento e calendari promozionali.'},
  {id:'education-01',name:'Learning Designer',sector:'Education',price:990,short:'Crea percorsi formativi su misura.',problems:['Engagement basso','Contenuti statici'],how:'Genera piani formativi e micro-learning.'},
  {id:'energy-01',name:'Grid Analyst',sector:'Energia',price:3290,short:'Previsioni consumo e ottimizzazione rete.',problems:['Peak loads','Inefficienza distribuzione'],how:'Prevede domanda e suggerisce ridistribuzione.'},
  {id:'agri-01',name:'Farm Advisor',sector:'Agricoltura',price:990,short:'Consigli colture e irrigazione.',problems:['Rendimenti bassi','Uso errato risorse'],how:'Analizza meteo e suolo per raccomandazioni.'},
  {id:'travel-01',name:'Trip Planner',sector:'Travel',price:1290,short:'Ottimizza itinerari e costi viaggio.',problems:['Costi viaggio elevati','Pianificazione complessa'],how:'Genera opzioni e ottimizza tempi e costi.'},
  {id:'hospitality-01',name:'Guest Experience',sector:'Hospitality',price:1490,short:'Migliora esperienza cliente e upsell.',problems:['Recensioni negative','Low RevPAR'],how:'Suggerisce offerte personalizzate e follow-up.'},
  {id:'auto-01',name:'Fleet Manager',sector:'Automotive',price:2390,short:'Gestione flotte e manutenzione predittiva.',problems:['Costi fleet elevati','Downtime'],how:'Programma manutenzioni e ottimizza rotte.'},
  {id:'telecom-01',name:'Network Planner',sector:'Telecom',price:2790,short:'Ottimizza capacity e QoS.',problems:['Congestione rete','SLA violati'],how:'Suggerisce upgrade e gestione traffic shaping.'},
  {id:'insurance-01',name:'Risk Assessor',sector:'Assicurazioni',price:3190,short:'Valutazione rischio e frodi.',problems:['Frodi non rilevate','Pricing errato'],how:'Analizza polizze e claim per segnali di rischio.'},
  {id:'rnd-01',name:'R&D Scout',sector:'R&D',price:1990,short:'Identifica trend e opportunità tecniche.',problems:['Idee disperse','Slow innovation'],how:'Cerca brevetti e segnala opportunità rilevanti.'},
  {id:'procurement-01',name:'Procure Smart',sector:'Procurement',price:1690,short:'Ottimizza fornitori e condizioni.',problems:['Costi acquisto elevati','Scarsa visibilità'],how:'Confronta fornitori e suggerisce negoziazioni.'},
  {id:'compliance-01',name:'Compliance Monitor',sector:'Compliance',price:2290,short:'Controlli e report automatici.',problems:['Regole non applicate','Rischio sanzioni'],how:'Scansiona processi e segnala gap di conformità.'},
  {id:'legal-01',name:'Contract Helper',sector:'Legale',price:1990,short:'Analizza clausole e rischi contrattuali.',problems:['Clausole rischiose','Lentezza revisione'],how:'Evidenzia punti critici e suggerisce revisioni.'},
  {id:'fintech-01',name:'Crypto Monitor',sector:'Fintech',price:2490,short:'Monitoraggio mercati e segnalazione opportunità.',problems:['Volatilità','Rischio di compliance'],how:'Analizza segnali di trading e rischi AML.'},
  {id:'analytics-01',name:'Insights Engine',sector:'Analytics',price:1590,short:'Report automatici e anomaly detection.',problems:['Dati non sfruttati','Insight lenti'],how:'Produce dashboard e insight azionabili.'},
  {id:'supply-01',name:'Supply Chain Lens',sector:'Supply Chain',price:2890,short:'Visibilità end-to-end e previsioni.',problems:['Ritardi fornitori','Rotte inefficienti'],how:'Identifica colli di bottiglia e soluzioni.'},
  {id:'ux-01',name:'UX Auditor',sector:'Design',price:990,short:'Analizza conversion funnel e micro UX.',problems:['Drop-off elevato','Flussi confusi'],how:'Suggerisce micro-improvement e test A/B.'},
  {id:'ads-01',name:'Performance Ads',sector:'Advertising',price:1790,short:'Automatizza bidding e creatività.',problems:['CTR basso','CPA alto'],how:'Ottimizza strategie di bidding e creatività.'},
  {id:'data-01',name:'Data Cleaner',sector:'Data',price:1290,short:'Pulizia e dedup dei dataset.',problems:['Dati sporchi','Incoerenza'],how:'Applica regole e segnala anomalie.'},
  {id:'qa-01',name:'QA Automator',sector:'Engineering',price:1390,short:'Genera test e report automatici.',problems:['Bug ripetuti','Testing lento'],how:'Crea suite test e priorizza bug critici.'},
  {id:'cx-02',name:'Churn Predictor',sector:'Customer Success',price:1690,short:'Prevede churn e suggerisce interventi.',problems:['Customer lost','Retention bassa'],how:'Identifica segnali e azioni di retention.'},
  {id:'pricing-01',name:'Price Optimizer',sector:'Commerciale',price:2190,short:'Ottimizza listini e promozioni.',problems:['Prezzi non competitivi','Margini bassi'],how:'Simula elasticità e suggerisce prezzi.'},
  {id:'sme-01',name:'SME Advisor',sector:'PMI',price:990,short:'Consigli operativi per piccole imprese.',problems:['Risorse limitate','Decisioni rapide'],how:'Fornisce checklist e priorità a impatto immediato.'},
  {id:'event-01',name:'Event Planner',sector:'Eventi',price:1190,short:'Pianifica eventi ottimizzati per ROI.',problems:['Bassa partecipazione','Costi evento elevati'],how:'Suggerisce format e canali promozionali.'},
  {id:'customer-01',name:'Loyalty Booster',sector:'Retail',price:1490,short:'Programmi fedeltà e personalizzazione.',problems:['Customer lifetime basso','Frequent buyers bassi'],how:'Progetta programmi e offerte mirate.'},
  {id:'bio-01',name:'Bio Researcher',sector:'Biotech',price:4290,short:'Supporto ricerca e screening ipotesi.',problems:['Lentezza R&D','Dataset complessi'],how:'Analizza letteratura e genera candidate hypotheses.'},
  {id:'media-01',name:'Media Buyer',sector:'Media',price:1390,short:'Ottimizza acquisto spazi e performance.',problems:['Sprechi in media buying','Misurazione difficile'],how:'Suggerisce allocazioni e KPI mirati.'},
  {id:'gov-01',name:'Public Policy AI',sector:'Pubblico',price:2990,short:'Analisi impatto politiche e scenari.',problems:['Decision making complesso','Stakeholder molteplici'],how:'Simula scenari e impatti su KPI pubblici.'},
  {id:'security-02',name:'Fraud Shield',sector:'Sicurezza',price:2790,short:'Rilevamento frodi e score transazioni.',problems:['Chargeback elevati','Transazioni sospette'],how:'Valuta pattern e segnala casi ad alto rischio.'},
  {id:'iot-01',name:'IoT Monitor',sector:'IoT',price:1890,short:'Monitoraggio device e ottimizzazione risorse.',problems:['Device offline','Consumi inefficaci'],how:'Rileva anomalie e propone azioni manutentive.'},
  {id:'crowd-01',name:'Crowd Insights',sector:'Market Research',price:1290,short:'Analizza sentiment e trend sociali.',problems:['Insight tardivi','Rumore dati alto'],how:'Filtra e sintetizza segnali rilevanti.'},
  {id:'sustain-01',name:'Sustainability Coach',sector:'Sostenibilità',price:1590,short:'Misura impatto e suggerisce riduzioni CO2.',problems:['Emissioni elevate','Reporting complesso'],how:'Calcola footprint e roadmap riduzione.'},
  {id:'hr-03',name:'Performance Coach',sector:'Risorse Umane',price:1190,short:'Valuta performance e suggerisce piani sviluppo.',problems:['Feedback incoerente','Talent stagnation'],how:'Fornisce suggerimenti per crescita individuale.'}
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
  // increment click metric even before email
  incrementClick(agentId);
  updateCardBadge(agentId);
  updateTotal();
  $('#emailAgentId').value = agentId;
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
  document.getElementById('emailForm').addEventListener('submit', e=>{
    e.preventDefault();
    const mail = $('#emailInput').value.trim();
    const aid = $('#emailAgentId').value;
    if(!mail) return;
    saveEmail(aid, mail);
    $('#emailInput').value = '';
    closeBuy();
    alert('Grazie — verrai contattato quando disponibile.');
  });

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
>>>>>>> c3d49d6deced836faa76832356da1e1b2cee41e5
