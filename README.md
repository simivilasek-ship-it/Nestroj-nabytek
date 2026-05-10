# Nestroj Nábytek — web

Webová prezentace rodinné firmy specializující se na zakázkovou výrobu nábytku na míru z Kravař.

**Web:** [nestroj-nabytek.cz](https://nestroj-nabytek.cz) *(připravováno)*

---

## O projektu

Jednostránkový statický web navržený jako firemní prezentace. Zahrnuje galerii realizací rozdělenou do kategorií, kontaktní formulář a mobilní verzi.

## Struktura stránek

| Soubor | Popis |
|---|---|
| `index.html` | Hlavní stránka (úvod, služby, postup, realizace, reference, kontakt) |
| `galerie.html` | Galerie realizací podle kategorií (`?k=kuchyne` atd.) |

## Kategorie realizací

- **Kuchyně** — `galerie.html?k=kuchyne`
- **Skříně** — `galerie.html?k=skrine`
- **Obývací pokoje** — `galerie.html?k=obyvaci-pokoje`
- **Koupelny** — `galerie.html?k=koupelny`
- **Stoly** — `galerie.html?k=stoly`

## Technologie

Čistý statický web — HTML, CSS, JavaScript. Žádný framework, žádný build systém. Hostovatelný kdekoliv (GitHub Pages, Netlify, Wedos…).

## Spuštění lokálně

```bash
# otevřít složku v prohlížeči, nebo použít live-server:
npx live-server .
```

## Kontakt na firmu

**+420 608 712 569** · l.nestroj@seznam.cz · Kravaře, Opavský region
