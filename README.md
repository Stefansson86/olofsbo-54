# 🌲 Det Stora Skattäventyret! 🏆

Välkommen till **Det Stora Skattäventyret**, en interaktiv och modern webbapplikation skapad för **Frans (5 år)**, **Alma (7 år)** och **Lykke (8 år)**. Spelet går ut på att de ska lösa 9 olika anpassade gåtor och tankenötter tillsammans för att hitta den gömda skatten (godiset) som ligger gömd **bakom björken**.

## 📱 Funktioner i spelet
- **Turas om-system:** Appen påminner barnen om att lämna över mobilen till nästa spelare inför varje uppdrag, vilket förhindrar att en person håller i telefonen hela tiden.
- **Anpassade uppgifter:** Uppgifterna är anpassade efter barnens åldrar (lättare djurgåtor för Frans, matematik/ordpussel för Alma, och lite klurigare gåtor/symbolchiffer för Lykke).
- **Inbyggda ljudeffekter:** Charmiga retro-ljud (chimes, surr och fanfarer) som spelas direkt i webbläsaren via Web Audio API (inga externa tunga ljudfiler behövs!).
- **Canvas-konfetti:** Färgsprakande konfetti som sprutar över hela skärmen vid rätt svar.
- **Sparad progression:** Spelet sparar automatiskt var barnen är i `localStorage`, så om de råkar stänga ner sidan eller ladda om, börjar de precis där de slutade.
- **Responsiv design:** Anpassad speciellt för mobiltelefoner (perfekt för att springa runt med under skattjakten!).

---

## 🚀 Hur man spelar

### Lokalt på datorn eller mobilen
1. Öppna filen `index.html` direkt i valfri webbläsare (t.ex. Chrome, Safari eller Edge).
2. Det går också att köra en lokal webbserver om man vill testa mobilt över Wifi:
   ```bash
   npx http-server
   ```

---

## 🌐 Hosta på GitHub Pages

Eftersom detta är en helt statisk webbapplikation (HTML, CSS och JS) är den perfekt att hosta helt gratis på **GitHub Pages**. 

Följ dessa enkla steg för att lägga upp den:

1. **Ladda upp koden till GitHub:**
   Skapa ett nytt repository på ditt GitHub-konto (t.ex. med namnet `skattejakt`) och pusha upp filerna (`index.html`, `style.css`, `app.js` samt mappen `assets/`).

2. **Aktivera GitHub Pages:**
   - Gå till ditt repository på GitHub.
   - Klicka på fliken **Settings** (Inställningar) längst upp till höger.
   - Leta upp menyn till vänster och klicka på **Pages** (under sektionen "Code and automation").
   - Under **Build and deployment** -> **Source**, se till att det står **Deploy from a branch**.
   - Under **Branch**, välj din huvudgren (oftast `main` eller `master`) och välj mappen `/ (root)`.
   - Klicka på **Save** (Spara).

3. **Klart!**
   Inom någon minut kommer GitHub att ha byggt din sida. Du hittar din länk längst upp på Pages-sidan (den ser ut ungefär så här: `https://ditt-användarnamn.github.io/skattejakt/`).

Kopiera länken och öppna den på telefonen när det är dags att starta skattjakten! 🍬🎉
