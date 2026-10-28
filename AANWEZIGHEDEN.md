# Aanwezigheden koppelen aan Google Sheets

De pagina `/aanwezigheden` leest en schrijft de leerlingenlijst en de aanwezigheden rechtstreeks in een Google Sheet.
Zonder de instellingen hieronder draait ze in **demo-modus** (gegevens in het geheugen, alleen lokaal).

## 1. Google Sheet aanmaken

1. Maak een nieuwe Google Sheet op je Drive, bijvoorbeeld "Tabieb2be aanwezigheden 2026-2027".
   Heb je al een Excel-bestand op Drive? Open het en kies **Bestand → Opslaan als Google Spreadsheet**:
   de koppeling werkt alleen met het Google Sheets-formaat.
2. Kopieer het ID uit de link: `https://docs.google.com/spreadsheets/d/`**`DIT-STUK`**`/edit`.

## 2. Serviceaccount aanmaken (eenmalig)

De site praat met de Sheet via een "serviceaccount": een robotaccount van Google zonder eigen wachtwoord.

1. Ga naar <https://console.cloud.google.com/> en maak een project aan (bv. "tabieb2be").
2. **APIs & Services → Library** → zoek **Google Sheets API** → **Enable**.
3. **APIs & Services → Credentials → Create credentials → Service account**. Geef een naam, rollen zijn niet nodig.
4. Open het serviceaccount → tabblad **Keys** → **Add key → Create new key → JSON**. Er wordt een bestand gedownload.
   Bewaar dit bestand veilig en zet het **nooit** in de projectmap of op GitHub.
5. Kopieer het e-mailadres van het serviceaccount (eindigt op `iam.gserviceaccount.com`).
6. Open je Google Sheet → **Delen** → plak dat e-mailadres → rol **Bewerker** → zet "mensen informeren" uit → **Delen**.

## 3. Instellingen

Lokaal in `.env.local` (dit bestand wordt niet meegecommit), en op Vercel onder
**Project → Settings → Environment Variables**:

| Naam | Waarde |
|---|---|
| `ATTENDANCE_SHEET_ID` | het ID uit stap 1 |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | `client_email` uit het JSON-bestand |
| `GOOGLE_PRIVATE_KEY` | `private_key` uit het JSON-bestand, volledig, tussen aanhalingstekens |
| `ATTENDANCE_PASSWORD` | een wachtwoord naar keuze voor de begeleiders |

Zie `.env.example` voor het formaat. Herstart daarna de dev-server of deploy opnieuw.

## 4. Sheet inrichten

Open `/aanwezigheden`, meld je aan en klik op **Sheet inrichten**. Dat maakt de tabbladen aan:

- **Leerlingen**: ID, Naam, Richting, Actief (JA/NEE), Opmerking
- **Lessen**: ID, Datum, Vak, Les (de geplande lessen uit `data/lessons.json` worden toegevoegd)
- **Aanwezigheden**: één rij per leerling, één kolom per les, met `aanwezig`, `te laat`, `afwezig` of `gewettigd`
- **Overzicht**: telt automatisch per leerling, met het aanwezigheidspercentage

Je kunt **Sheet inrichten** gerust opnieuw klikken: bestaande gegevens blijven staan.

## Werken in de Sheet zelf

- Je mag statussen rechtstreeks in de Sheet typen; de site leest ze bij het vernieuwen (↻).
- Leerlingen voeg je het best via de site toe: die zet ze in zowel **Leerlingen** als **Aanwezigheden** met hetzelfde ID.
- **Wijzig de ID-kolommen en de kolomkoppen in Aanwezigheden niet.** De site zoekt leerlingen op ID en lessen op
  hun kop ("datum titel"). Een les hernoemen doe je in beide tabbladen tegelijk.
- Excel nodig? **Bestand → Downloaden → Microsoft Excel (.xlsx)**.

## Privacy

De Sheet bevat namen van minderjarigen. Deel ze alleen met wie ze nodig heeft, deel het wachtwoord niet met leerlingen,
en vervang het gedeelde wachtwoord door echte logins zodra Supabase er is.

## Inchecken met QR-code

1. Open `/aanwezigheden`, kies de les en klik op **QR-code tonen**. Projecteer het scherm in de klas.
2. Leerlingen scannen de code met hun gsm-camera, vullen hun voor- en achternaam in en tikken op **Ik ben aanwezig**.
   Hun status wordt meteen `aanwezig` in de Sheet; de teller op het scherm loopt mee.
3. Wie niet ingecheckt is, staat op de gewone lijst nog open. Duid die zelf aan (bv. afwezig of te laat).

Beveiliging:
- De code vernieuwt elke 30 seconden en is 2 minuten geldig: een doorgestuurde foto werkt thuis snel niet meer.
- Eén gsm kan per les maar één leerling inchecken.
- Leerlingen zien nooit de namenlijst; een naam die niet in de lijst staat, wordt geweigerd.
- Hoofdletters, accenten en de volgorde voor-/achternaam maken niet uit.
