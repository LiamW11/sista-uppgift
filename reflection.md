# Reflection – Git Workflow Mastery

Dokumentera era lärdomar och reflektioner här.

## Deltagare
- **Person 1:** Liam Wiklund
- **Person 2:** Melvin Stenholm
- **Datum:** 2025-12-17

---

## Rollback-övning: Revert vs Reset

### Vad är skillnaden mellan git revert och git reset?

**Git revert:**
```
git revert ångrar en commit genom att skapa en ny commit fast med gammalt innehåll.
```

**Git reset:**
```
git reset går tillbaka till en föregående commit och gör den till den nyaste i commithistoriken.
```

### När är det lämpligt att använda respektive kommando?

**Använd revert när:**
```
Det är bättre att använda git revert i situationer då du redan har delat ut koden till flera personer.
```

**Använd reset när:**
```
Det är bättre att använda git reset när du jobbar lokalt och vill justera eller ta bort gamla commits som inte har blivit pushade.
```

---

## Merge-konflikt

### Beskriv konflikten ni stötte på
```
Fil: index.html
Orsak: h1 hade två olika texter
```

### Hur löste ni konflikten?
```
Först pushades båda ändringarna upp.
Sedan gick vi in på github och mergade ena branchen först, vilket inte hade några konflikter.
Efter detta mergade vi den andra branchen och fick då en konflikt.
Denna konflikt löstes genom att gå in i githubs egna konflikthanterare och lösa konflikter genom att behålla båda texterna.
```

### Vad lärde ni er om konflikthantering?
```
Det är enklare att lösa konflikter i github.
```

---

## Commit-hygien och rebase

### Varför används --force-with-lease istället för --force?
```
 --force-with-lease används för att minska risken att skriva över andras arbete när du tvingar en push.
```

### När är det säkert att omskriva Git-historik?
```
Det är säkert att omskriva en Git-historik när alla inblandade är medvetna och att omskrivningen inte kommer påverka någons arbete negativt.
```

### Vilka risker finns med force-push?
```
Andras commits kan försvinna.
Oväntade konflikter kan uppstå.
Svårare att spåra allt arbete.
```

---

## Parprogrammering

### Hur fungerade driver/navigator-modellen?
```
Vi tyckte att det fungerade okej. Vi växlade roller mellan varje del och upplevde att det fungerade. Det var lärorikt att få se över någon annans kodande.
```

### Hur ofta bytte ni roller?
```
Vi växlade roller mellan varje del.
```

### Vad fungerade bra i samarbetet?
```
Att vi satt bredvid varanda och kunde hjälpa varandra fungerade bra. Att båda kunde komma med förslag och insikter bidrog till att applikationen blev bättre.
```

### Vad kan förbättras i samarbetet?
```
Kompetensen hos båda gruppmedlemmar.
```

---

## Git-kommandon: Självskattning

Skatta er kompetens 1–5 (1=osäker, 5=mycket säker)

| Kommando | Skattning | Kommentar |
|----------|-----------|-----------|
| `git branch` | ☐ 1 ☐ 2 ☐ 3 ☐ 4 X 5 | |
| `git checkout` | ☐ 1 ☐ 2 ☐ 3 ☐ 4 X 5 | |
| `git merge` | ☐ 1 ☐ 2 X 3 ☐ 4 ☐ 5 | |
| `git revert` | ☐ 1 ☐ 2 X 3 ☐ 4 ☐ 5 | |
| `git reset` | ☐ 1 ☐ 2 X 3 ☐ 4 ☐ 5 | |
| `git rebase` | ☐ 1 ☐ 2 ☐ 3 X 4 ☐ 5 | |
| `git rebase -i` | ☐ 1 ☐ 2 ☐ 3 X 4 ☐ 5 | |
| `git tag` | ☐ 1 ☐ 2 X 3 ☐ 4 ☐ 5 | |
| `git reflog` | ☐ 1 X 2 ☐ 3 ☐ 4 ☐ 5 | |
| Konfliktlösning | ☐ 1 ☐ 2 ☐ 3 ☐ 4 X 5 | |

---

## Retrospektiv

### Vad fungerade bra?
```
1. Samarbetet i gruppen var bra.
2. Att byta roller mellan varje del fungerade också bra.
3. Att kunna diskutera uppgiften och ta oss framåt tillsammans.
```

### Vad var utmanande?
```
1. Alla nya git-kommandon.
2. Commitmeddelanden.
3. Hur man squashar.
```

### Vad skulle ni göra annorlunda nästa gång?
```
1. Lägga mer fokus som navigator på att båda gruppmedlemmarna har koll på den kod de använder sig av.
2. Försöka byta roller oftare så att man får agera driver och navigator i alla delar.
```

### Vilka Git-färdigheter vill ni utveckla mer?
```
1. Squash
2. Reflog
3. Revert/Reset.
```

---

## Teknisk reflektion

### Vilka designbeslut tog ni för Task Manager?
```
Vi tänkte en enkel applikation där du kan mata in namn och ålder. Detta fungerade riktigt i en "task" struktur men funktionerna som driver applikationen är fortfarande likadana.
```

### Hur strukturerade ni JavaScript-koden?
```
Vi skapade en fil för allting. Det finns en funktion som ritar ut själva task-listan. Resterande funktioner används i denna funktion för att kunna rita ut task-listan korrekt och spara den till localstorage.
```

### Hur löste ni LocalStorage-persistens?
```
Vi skapade en funktion som sparade alla tasks som man hade till localstorage. Denna funktion används sedan för att hämta alla sparade task och sedan rita ut dem i task-listan.
```

---

## Nästa steg

### Konkreta åtgärder för att förbättra Git-färdigheter:
```
1. Ta fram flera uppgifter som liknar denna.
2. Be AI skapa quiz som vi kan träna på.
3. Läsa på från t.ex. w3s.
```

### Hur kan ni tillämpa dessa färdigheter i framtida projekt?
```
Vi kan använda git för att skapa en bättre dokumentation av arbetet och styra arbetsprocessen bättre. Vi kan även använda dessa färdigheter för att lösa eventuella problem som kan uppstå angående exempelvis konflikter.
```