# Agenti AI — Prototipo dimostrativo

Sito statico per mostrare agenti AI per diversi settori, tracciare quanti cliccano "Compra" e raccogliere email interessate.

Come usare
- Apri `index.html` nel browser (doppio click o drag nel browser).
- Clicca su un agente per vedere dettagli e pulsante "Compra".
- Cliccando "Compra" si apre la richiesta di email (nessun pagamento), il click viene tracciato in `localStorage`.
- Usa "Visualizza statistiche" per vedere i click per agente e le email raccolte. Usa "Esporta CSV" per scaricare i dati.

Visualizzare localmente
- Metodo rapido (File): apri `index.html` con il browser (doppio click). Alcune funzionalità funzionano comunque.
- Metodo consigliato (server locale): apri PowerShell nella cartella del progetto e lancia un server statico:

```powershell
python -m http.server 8000
# poi apri http://localhost:8000 nel browser
```

Deploy automatico su GitHub Pages (workflow)
- Ho aggiunto un workflow GitHub Actions che pubblica la root del repository sulla branch `gh-pages` ad ogni push su `main`.
- Dopo aver pushato (o fatto upload) i file su GitHub, vai su: https://github.com/fedeprota/nuovo-progetto/settings/pages
	- Nella sezione "Build and deployment" seleziona `gh-pages` come branch e `/ (root)` come folder, poi salva.
	- Dopo qualche minuto il sito sarà disponibile a: `https://fedeprota.github.io/nuovo-progetto/`

Nota sulla privacy e i dati
- I click e le email sono salvati in `localStorage` del browser. Se vuoi raccolta centralizzata, posso aggiungere un piccolo backend o integrare Google Analytics/Hotjar.

Nota
- Questa è una demo client-side: i dati rimangono nel browser locale. Per raccolta centralizzata serve un backend.
