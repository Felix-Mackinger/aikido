# Anleitung - Aikido Website bearbeiten

## Inhalt
1. [Neue News posten](#neue-news-posten)
2. [Bestehende Seiten bearbeiten](#bestehende-seiten-bearbeiten)
3. [Deployment](#deployment)

---

## Neue News posten

### Schritt 1: Neue Datei erstellen

Erstelle eine neue Markdown-Datei im Ordner `src/content/news/`.

**Dateiname:** Verwende kurze, aussagekräftige Namen (Kleinbuchstaben, Bindestriche)
- ✅ `neue-trainingszeiten.md`
- ✅ `sommer-lehrgang-2026.md`
- ❌ `Neue_Trainingszeiten_Info.md`

### Schritt 2: Frontmatter ausfüllen

Jede News-Datei beginnt mit dem Frontmatter (Daten zwischen den `---`):

```
markdown
---
title: "Titel deiner News"
date: 2026-01-15
description: "Kurze Beschreibung für die Vorschau"
---
```

**Felder:**
| Feld | Erforderlich | Beschreibung |
|------|--------------|---------------|
| title | Ja | Titel der News |
| date | Ja | Datum im Format JJJJ-MM-TT |
| description | Nein | Kurze Beschreibung für die Übersicht |

### Schritt 3: Inhalt schreiben

Nach dem zweiten `---` kommt der eigentliche Inhalt:

```
markdown
---
title: "Neue Trainingszeiten"
date: 2026-01-15
description: "Ab Februar zusätzliche Einheit am Freitag."
---

Hier kommt der Text deiner News.

## Unterüberschrift

Du kannst auch **fetten**, *kursiven* oder [Links](https://example.com) verwenden.

- Punkt 1
- Punkt 2
- Punkt 3
```

### Unterstützte Formatierungen

- **Fett:** `**Text**` → **Text**
- *Kursiv:* `*Text*` → *Text*
- [Links](url) → `[Text](URL)`
- Listen mit `-` oder `*`
- Überschriften mit `##`, `###`, etc.

---

## Bestehende Seiten bearbeiten

Die Seiteninhalte befinden sich in `src/content/pages/`:

| Datei | Seite |
|-------|-------|
| `index.md` | Startseite |
| `news.md` | News-Übersicht |
| `termine.md` | Termine |
| `training.md` | Training |
| `kontakt.md` | Kontakt |
| `impressum.md` | Impressum |

### Seiten-Struktur

```
markdown
---
title: "Seitentitel"
order: 1
---

# Hauptüberschrift

Inhalt der Seite...
```

---

## Deployment

### Automatisches Deployment

Sobald du Änderungen auf GitHub pushst, wird die Website automatisch gebaut und deployed:

```
bash
# Änderungen hinzufügen
git add .

# Commit erstellen
git commit -m "Neue News veröffentlicht"

# Auf GitHub pushen
git push origin main
```

### Manuelles Deployment (optional)

```
bash
# Dependencies installieren
npm install

# Lokal entwickeln
npm run dev

# Für Production bauen
npm run build
```

### GitHub Pages URL

Deine Website ist unter folgendem Link erreichbar:
**https://felix-mackinger.github.io/aikido/**

---

## Tipps

1. **Datum formatieren:** Verwende das Format `JJJJ-MM-T` (z.B. `2026-01-15`)
2. **Bilder hinzufügen:** Lege Bilder in `public/images/` und verweise mit `/aikido/images/bildname.jpg`
3. **Vorschau:** Nutze `npm run dev` um die Seite lokal zu testen bevor du publishst

---

## Hilfe bei Problemen

Falls etwas nicht funktioniert:
1. Prüfe die Konsole auf Fehlermeldungen
2. Starte den Entwicklungsserver neu: `npm run dev`
3. Prüfe die Markdown-Syntax
