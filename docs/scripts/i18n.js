(function () {
  'use strict';

  const BASE_URL = window.__SITE_BASE__ || '/';
  const STORAGE_KEY = 'aikido-lang';
  const DEFAULT_LANG = 'de';

  const LANGUAGES = {
    de: { code: 'DE', htmlLang: 'de' },
    en: { code: 'EN', htmlLang: 'en' },
    fr: { code: 'FR', htmlLang: 'fr' },
    ja: { code: 'JA', htmlLang: 'ja' },
  };

  const TRANSLATIONS = {
    de: {
      common: {
        language: 'Sprache',
        theme: 'Theme',
        theme_light: 'Hell',
        theme_dark: 'Dunkel',
      },
      nav: {
        about: 'Über uns',
        training: 'Training',
        schedule: 'Trainingsplan',
        events: 'Termine',
        news: 'Aktuelles',
        gallery: 'Galerie',
        contact: 'Kontakt',
      },
      footer: {
        dojo_title: 'WTA Hochburg-Ach',
        updates_title: 'Aktuelles',
        news_and_events: 'Aktuelles & Termine',
        event_overview: 'Terminübersicht',
        legal_and_privacy: 'Impressum & Datenschutz',
        times_title: 'Trainingszeiten',
        times_monday: 'Montag: 18:00 - 19:30',
        times_friday_questions: 'Freitag: 16:00 - 17:00 Vertiefung',
        times_friday_training: 'Freitag: 17:00 - 18:30 Training',
        times_saturday: 'Samstag: 10:00 - 12:00 Waffen in ungeraden Wochen',
        contact_title: 'Kontakt',
        address_line1: 'Athaler Straße 1',
        address_line2: '5122 Duttendorf',
        copyright: '© {year} Wanomichi Takemusu Aikido Hochburg-Ach',
        tagline: 'Aikido - der Weg der Harmonie | 合気道',
      },
      news: {
        title: 'Aktuelles und Termine',
        intro_lead: 'Derzeit finden alle Trainings statt.',
        intro_copy: 'Die Timeline beginnt beim heutigen Tag. Einträge, die mehr als sieben Tage zurückliegen, wandern automatisch in das Archiv.',
        timeline_title: 'Timeline',
        current_empty_title: 'Zurzeit gibt es keine aktuellen Einträge.',
        current_empty_text: 'Sobald neue Termine oder Hinweise veröffentlicht werden, erscheinen sie hier.',
        archive_title: 'Vergangene Termine und Galerie',
        archive_empty_title: 'Noch keine archivierten Einträge.',
        archive_empty_text: 'Vergangene Termine und Rückblicke erscheinen hier, sobald sie älter als sieben Tage sind.',
        archive_note: 'Weitere Bilder können ergänzend auf der Seite <a href="/foto-galerie">Galerie</a> gepflegt werden.',
        tag_page: 'Seite',
        tag_modal: 'Popup',
        tag_large: 'Groß',
        read_page: 'Zur Seite',
        read_modal: 'Im Popup lesen',
        back_to_overview: 'Zur Übersicht',
        loading: 'Laden...',
        load_error: 'Der Inhalt konnte gerade nicht geladen werden.',
      },
      pages: {
        index: {
          hero: `
            <h1>Wanomichi Takemusu Aikido Hochburg-Ach</h1>
            <p>Traditionelles Aikido in Duttendorf - offen für Anfänger:innen und Fortgeschrittene.</p>
            <div class="hero-cta-group">
              <a href="/ueber-uns" class="button button-primary">Über uns</a>
              <a href="/kontakt" class="button button-secondary">Kontakt</a>
            </div>
          `,
          origin: `
            <h2>Woher kommt Aikido?</h2>
            <p class="lead-text">Aikido ist eine japanische Kampfkunst, die von O'Sensei Ueshiba Morihei (1883-1969) um 1920 entwickelt wurde und die er bis zu seinem Tod 1969 stetig weiterentwickelt hat.</p>
            <p>O'Sensei hat in seinem Leben unterschiedliche Kampfschulen gemeistert. Unter anderem Sumo, Jujutsu (Yagyu-ryu und Daito-ryu), Kenjutsu, Judo, Bajonett- und Speerkampf. Die Körpertechniken des Aikido basieren hauptsächlich auf den Formen des Yagyu-ryu und Daito-ryu Jujutsu.</p>
            <p>Im Laufe der Zeit änderte O'Sensei die Form von der geradlinigen hin zur kreisförmigen Aufnahme der Angriffe und ergänzte die Techniken um Aspekte des Kotodama. So wurden die Wurzeln des Aikido geboren, die um 1922 unter dem Namen Aiki-Bujutsu bekannt wurden.</p>
            <p>Aus dem Grundsatz des Jujutsu entwickelte sich im Aikido die Idee, Druck kreisförmig aufzunehmen, umzulenken und ohne Gegengewalt zu neutralisieren. So können auch körperlich überlegene Gegner kontrolliert werden.</p>
            <p>1925 wurde aus Aiki-Bujutsu Aiki-Budo, um 1942 nannte O'Sensei seinen Weg schließlich Aikido - den Weg der Harmonie und Liebe.</p>
          `,
          what: `
            <h2>Was ist Aikido?</h2>
            <p class="lead-text">Dies ist eine sehr schwierige Frage, die auch erfahrene Aikidoka nicht so ohne weiteres beantworten können.</p>
            <p>Aikido ist eine japanische Kampfkunst, deren Körpertechniken auf den Schulen des Yagyu-ryu und Daito-ryu Jujutsu basieren, wobei der Tötungsgedanke herausgenommen wurde. Angriffe werden durch Kreisbewegungen umgelenkt, anstatt sich ihnen direkt entgegenzustellen.</p>
            <p>Zum Körpertechnik-Programm (Taijutsu) gehören auch viele Verhebelungen. Ziel ist es, dass weder dem Angreifer (uke, der Gebende) noch dem Angegriffenen (nage, der Empfangende) Schaden entsteht.</p>
            <p>Abgerundet wird das Training durch Buki Waza. Im Aikiken, Aikijo und Tanto-Training lernt man nicht nur den Umgang mit den Waffen, sondern auch den eigenen Körper besser kennen.</p>
          `,
          audience: `
            <h2>Für wen ist Aikido?</h2>
            <p class="lead-text">Aikido ist für Menschen jeden Alters geeignet. Du brauchst keine Vorkenntnisse, nur Neugier und Offenheit.</p>
            <div class="suitability-grid">
              <div class="suitability-item">
                <span class="suitability-icon">🏃</span>
                <div>
                  <h3>Bewegung ohne Druck</h3>
                  <p>Ideal für alle, die harmonische Bewegung ohne Konkurrenz suchen.</p>
                </div>
              </div>
              <div class="suitability-item">
                <span class="suitability-icon">🧠</span>
                <div>
                  <h3>Stressabbau</h3>
                  <p>Ein ruhiger und konzentrierter Ausgleich zum hektischen Alltag.</p>
                </div>
              </div>
              <div class="suitability-item">
                <span class="suitability-icon">⚖️</span>
                <div>
                  <h3>Balance und Haltung</h3>
                  <p>Fördert Körperbewusstsein, Stabilität und eine aufrechte Haltung.</p>
                </div>
              </div>
              <div class="suitability-item">
                <span class="suitability-icon">🌏</span>
                <div>
                  <h3>Japanische Kultur</h3>
                  <p>Spannend für Menschen mit Interesse an japanischer Philosophie und Tradition.</p>
                </div>
              </div>
            </div>
          `,
          cta: `
            <h2>Neugierig geworden?</h2>
            <p>Ein Probetraining ist zu den Trainingszeiten am Montag und Freitag möglich. Bitte nimm davor kurz Kontakt mit uns auf.</p>
            <div class="cta-buttons">
              <a href="/ueber-uns" class="button button-primary">Trainingszeiten</a>
              <a href="/kontakt" class="button button-outline">Kontakt</a>
            </div>
          `,
        },
        about: {
          intro: `
            <h1>Über uns</h1>
            <p class="lead-text">Der Verein wurde am 10.2.2026 gegründet.</p>
            <p>Unsere Ausrichtung ist von der Arbeit und dem Austausch mit Edmund Kern und Daniel Toutain geprägt.</p>
          `,
          times: `
            <h2>Trainingszeiten</h2>
            <div class="training-schedule">
              <ul>
                <li><span class="day">Montag</span> <span class="time">18:00 - 19:30</span> <span class="level">Training</span></li>
                <li><span class="day">Freitag</span> <span class="time">16:00 - 17:00</span> <span class="level">Fragen und Vertiefung</span></li>
                <li><span class="day">Freitag</span> <span class="time">17:00 - 18:30</span> <span class="level">Training</span></li>
                <li><span class="day">Samstag</span> <span class="time">10:00 - 12:00</span> <span class="level">Waffentraining in ungeraden Wochen</span></li>
              </ul>
            </div>
          `,
          location: `
            <h2>Trainingsort</h2>
            <p>Mehrzweckhalle der neuen Mittelschule<br />Athaler Straße 1<br />5122 Duttendorf</p>
          `,
          teacher: `
            <h2>Lehrer</h2>
            <div class="feature-grid">
              <div class="feature-card">
                <h3>Christian Dostal</h3>
                <p><strong>3. Dan Wanomichi Takemusu Aiki</strong></p>
                <p>Christian hat seine Aikido-Laufbahn 2004 in Steyr begonnen. Weitere Informationen folgen.</p>
                <p><em>Foto folgt.</em></p>
              </div>
            </div>
          `,
          etiquette: `
            <h2>Etikette</h2>
            <p><em>Folgt noch.</em></p>
          `,
          trial: `
            <h2>Probetraining</h2>
            <p>Ein Probetraining ist zu den Trainingszeiten am Montag und Freitag möglich.</p>
            <p>Bitte davor auf jeden Fall Kontakt aufnehmen, damit wir Bescheid wissen.</p>
            <p>Zum Probetraining bitte lange Sportbekleidung oder einen Trainingsanzug sowie Hausschuhe mitbringen. Trainiert wird barfuß oder in rutschfesten Socken.</p>
          `,
        },
        training: {
          intro: `
            <h1>Training</h1>
            <p class="lead-text">Unser Training folgt der Lehre von Saito Morihiro Sensei und verbindet Körperarbeit, Achtsamkeit und Waffentraining.</p>
          `,
          what: `
            <h2>Was ist Aikido?</h2>
            <p>Dies ist eine sehr schwierige Frage, die auch erfahrene Aikidoka nicht so ohne weiteres beantworten können.</p>
            <p>Aikido ist eine japanische Kampfkunst, deren Körpertechniken auf den Schulen des Yagyu-ryu und Daito-ryu Jujutsu basieren, wobei der Tötungsgedanke herausgenommen wurde. Angriffe werden durch Kreisbewegungen umgelenkt, anstatt sich ihnen direkt entgegenzustellen.</p>
            <p>Zum Taijutsu gehören auch viele Verhebelungen. Ziel ist es, dass weder dem Angreifer (uke) noch dem Angegriffenen (nage) Schaden entsteht.</p>
          `,
          weapons: `
            <h2>Waffentraining</h2>
            <p>Abgerundet wird das Training durch Buki Waza. Im Aikiken mit dem Holzschwert, im Aikijo mit dem Holzstab und im Tanto-Training mit dem Holzmesser lernt man seinen Körper noch genauer kennen.</p>
          `,
          times: `
            <h2>Trainingszeiten</h2>
            <div class="training-schedule">
              <ul>
                <li><span class="day">Montag</span> <span class="time">18:00 - 19:30</span> <span class="level">Training</span></li>
                <li><span class="day">Freitag</span> <span class="time">16:00 - 17:00</span> <span class="level">Fragen und Vertiefung</span></li>
                <li><span class="day">Freitag</span> <span class="time">17:00 - 18:30</span> <span class="level">Training</span></li>
                <li><span class="day">Samstag</span> <span class="time">10:00 - 12:00</span> <span class="level">Waffentraining in ungeraden Wochen</span></li>
              </ul>
            </div>
          `,
          trial: `
            <h2>Probetraining</h2>
            <p>Ein Probetraining ist zu den Trainingszeiten am Montag und Freitag möglich.</p>
            <p>Bitte nimm davor auf jeden Fall Kontakt mit uns auf, damit wir Bescheid wissen.</p>
            <p>Zum Probetraining bitte lange Sportbekleidung oder einen Trainingsanzug sowie Hausschuhe anziehen. Trainiert wird barfuß oder in rutschfesten Socken.</p>
            <p><a href="/kontakt" class="button">Kontakt aufnehmen</a></p>
          `,
        },
        plan: {
          intro: `
            <h1>Trainingsplan</h1>
            <p class="lead-text">Unsere regulären Einheiten finden in der Mehrzweckhalle der neuen Mittelschule in Duttendorf statt.</p>
          `,
          schedule: `
            <h2>Wochenübersicht</h2>
            <div class="training-schedule">
              <ul>
                <li><span class="day">Montag</span> <span class="time">18:00 - 19:30</span> <span class="level">Training</span></li>
                <li><span class="day">Freitag</span> <span class="time">16:00 - 17:00</span> <span class="level">Fragen und Vertiefung</span></li>
                <li><span class="day">Freitag</span> <span class="time">17:00 - 18:30</span> <span class="level">Training</span></li>
                <li><span class="day">Samstag</span> <span class="time">10:00 - 12:00</span> <span class="level">Waffentraining in ungeraden Wochen</span></li>
              </ul>
            </div>
            <p class="schedule-note">Bitte melde dich vor einem ersten Besuch kurz bei uns, damit wir dich gut empfangen können.</p>
          `,
        },
        events: {
          intro: `
            <h1>Termine</h1>
            <p class="lead-text">Derzeit finden alle Trainings statt.</p>
            <p>Unsere laufende Timeline mit aktuellen und vergangenen Einträgen findest du auf der Seite <a href="/news">Aktuelles</a>. Dort beginnen die sichtbaren Termine beim heutigen Tag, während ältere Einträge automatisch ins Archiv wandern.</p>
          `,
          upcoming: `
            <h2>Kommende Termine</h2>
            <div class="horizontal-timeline future-events">
              <div class="timeline-event">
                <div class="event-date">12.-13.09.2026</div>
                <h4>Lehrgang in Hochburg-Ach</h4>
                <p>Lehrgang mit Daniel und Sonia Toutain in Hochburg-Ach.</p>
                <p><em>Ausschreibung folgt.</em></p>
              </div>
              <div class="timeline-event">
                <div class="event-date">14.-18.09.2026</div>
                <h4>Ushi Deshi in Birach</h4>
                <p>Ushi Deshi mit Daniel und Sonia Toutain in Birach.</p>
                <p><em>Ausschreibung folgt.</em></p>
              </div>
            </div>
          `,
          archive: `
            <h2>Vergangene Termine und Galerie</h2>
            <p>Vergangene Termine, Ausschreibungen und künftig auch Bilder sammeln wir im Archiv und in der Galerie.</p>
            <p><a href="/foto-galerie" class="button">Zur Galerie</a></p>
          `,
        },
        legal: {
          content: `
            <h1>Impressum & Kontakt</h1>
            <h2>Impressum</h2>
            <div class="legal-section">
              <p><strong>Wanomichi Takemusu Aikido Hochburg-Ach</strong><br />Christian Dostal<br />Birkenweg 29<br />5122 Hochburg-Ach</p>
              <p><strong>Telefon:</strong> <a href="tel:+436504600020">+43 650 4600020</a><br /><strong>E-Mail:</strong> <a href="mailto:dojo@aikido-hochburg-ach.at">dojo@aikido-hochburg-ach.at</a><br /><strong>ZVR-Zahl:</strong> 1580789299</p>
            </div>
            <h2>Haftungshinweis</h2>
            <div class="legal-section">
              <p>Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p>
            </div>
            <h2>Datenschutz</h2>
            <div class="legal-section">
              <p><em>Folgt noch.</em></p>
            </div>
            <h2>Ansprechpartner</h2>
            <div class="legal-section">
              <p><strong>Obmann:</strong> Christian Dostal<br /><strong>Telefonnummer:</strong> <a href="tel:+436504600020">+43 650 4600020</a><br /><strong>E-Mail:</strong> <a href="mailto:dojo@aikido-hochburg-ach.at">dojo@aikido-hochburg-ach.at</a></p>
              <p><strong>Obmannstellvertreterin:</strong> Karin Sturm<br /><strong>Telefonnummer:</strong> +49 xxx<br /><strong>E-Mail:</strong> <a href="mailto:dojo@aikido-hochburg-ach.at">dojo@aikido-hochburg-ach.at</a></p>
              <p><strong>Kassierin:</strong> Sandra Šolaja-Pelzer<br /><strong>Telefonnummer:</strong> +49 xxx<br /><strong>E-Mail:</strong> <a href="mailto:dojo@aikido-hochburg-ach.at">dojo@aikido-hochburg-ach.at</a></p>
            </div>
            <h2>Kontakt</h2>
            <div class="legal-section">
              <p>Nachricht senden an <a href="mailto:dojo@aikido-hochburg-ach.at">dojo@aikido-hochburg-ach.at</a></p>
              <p><strong>Instagram:</strong> derzeit noch nicht hinterlegt<br /><strong>Facebook:</strong> derzeit noch nicht hinterlegt</p>
            </div>
            <h2>Links</h2>
            <div class="legal-section">
              <ul>
                <li><a href="https://www.wanomichi.fr/" target="_blank" rel="noopener noreferrer">https://www.wanomichi.fr/</a></li>
                <li><a href="http://www.aikido-braunau.at" target="_blank" rel="noopener noreferrer">www.aikido-braunau.at</a></li>
                <li><a href="https://aikido.uni-jena.de/takemusu/" target="_blank" rel="noopener noreferrer">https://aikido.uni-jena.de/takemusu/</a></li>
              </ul>
            </div>
          `,
        },
        contact: {
          header: `
            <h1>Kontakt</h1>
            <p class="lead">Fragen zum Training oder zum Probetraining? Wir freuen uns auf deine Nachricht.</p>
          `,
          direct_title: 'Direkter Kontakt',
          card_email: `
            <h3>E-Mail</h3>
            <a href="mailto:dojo@aikido-hochburg-ach.at" class="contact-link">dojo@aikido-hochburg-ach.at</a>
          `,
          card_phone: `
            <h3>Telefon</h3>
            <a href="tel:+436504600020" class="contact-link">+43 650 4600020</a>
          `,
          card_location: `
            <h3>Trainingsort</h3>
            <p>Mehrzweckhalle der neuen Mittelschule<br />Athaler Straße 1<br />5122 Duttendorf</p>
          `,
          people_title: 'Ansprechpartner',
          person_christian: `
            <h3>Christian Dostal</h3>
            <p>Obmann</p>
            <a href="tel:+436504600020" class="contact-link">+43 650 4600020</a>
            <a href="mailto:dojo@aikido-hochburg-ach.at" class="contact-link">dojo@aikido-hochburg-ach.at</a>
          `,
          person_karin: `
            <h3>Karin Sturm</h3>
            <p>Obmannstellvertreterin</p>
            <p class="contact-note">Telefonnummer: +49 xxx</p>
            <a href="mailto:dojo@aikido-hochburg-ach.at" class="contact-link">dojo@aikido-hochburg-ach.at</a>
          `,
          person_sandra: `
            <h3>Sandra Šolaja-Pelzer</h3>
            <p>Kassierin</p>
            <p class="contact-note">Telefonnummer: +49 xxx</p>
            <a href="mailto:dojo@aikido-hochburg-ach.at" class="contact-link">dojo@aikido-hochburg-ach.at</a>
          `,
          times_title: 'Trainingszeiten',
          schedule_training: `
            <h3>Reguläres Training</h3>
            <div class="training-schedule">
              <ul>
                <li><span class="day">Montag</span> <span class="time">18:00 - 19:30</span> <span class="level">Training</span></li>
                <li><span class="day">Freitag</span> <span class="time">16:00 - 17:00</span> <span class="level">Fragen und Vertiefung</span></li>
                <li><span class="day">Freitag</span> <span class="time">17:00 - 18:30</span> <span class="level">Training</span></li>
                <li><span class="day">Samstag</span> <span class="time">10:00 - 12:00</span> <span class="level">Waffentraining in ungeraden Wochen</span></li>
              </ul>
            </div>
          `,
          schedule_trial: `
            <h3>Probetraining</h3>
            <p>Ein Probetraining ist am Montag und Freitag möglich.</p>
            <p>Bitte nimm davor auf jeden Fall Kontakt mit uns auf, damit wir Bescheid wissen.</p>
            <p>Lange Sportbekleidung oder Trainingsanzug sowie Hausschuhe mitbringen. Trainiert wird barfuß oder in rutschfesten Socken.</p>
          `,
          map_title: 'Google Maps',
          map_copy: `
            <h3>Mehrzweckhalle der neuen Mittelschule</h3>
            <p>Die Halle liegt in Duttendorf in der Gemeinde Hochburg-Ach. Über Google Maps kannst du die Route direkt öffnen.</p>
          `,
          map_button: 'In Google Maps öffnen',
          closing: `
            <h2>Schreib uns</h2>
            <p>Für Fragen zum Training, zu Terminen oder zum Probetraining erreichst du uns direkt per E-Mail.</p>
            <p><a href="mailto:dojo@aikido-hochburg-ach.at" class="button button-primary">dojo@aikido-hochburg-ach.at</a></p>
          `,
        },
      },
      meta: {
        home: 'Wanomichi Takemusu Aikido Hochburg-Ach',
        'ueber-uns': 'Über uns',
        training: 'Training',
        trainingsplan: 'Trainingsplan',
        termine: 'Termine',
        news: 'Aktuelles',
        kontakt: 'Kontakt',
        legal: 'Impressum & Datenschutz',
        impressum: 'Impressum & Datenschutz',
      },
    },
    en: {
      common: {
        language: 'Language',
        theme: 'Theme',
        theme_light: 'Light',
        theme_dark: 'Dark',
      },
      nav: {
        about: 'About',
        training: 'Training',
        schedule: 'Schedule',
        events: 'Events',
        news: 'Updates',
        gallery: 'Gallery',
        contact: 'Contact',
      },
      footer: {
        dojo_title: 'WTA Hochburg-Ach',
        updates_title: 'Updates',
        news_and_events: 'News & Events',
        event_overview: 'Event overview',
        legal_and_privacy: 'Legal & Privacy',
        times_title: 'Training times',
        times_monday: 'Monday: 18:00 - 19:30',
        times_friday_questions: 'Friday: 16:00 - 17:00 questions & review',
        times_friday_training: 'Friday: 17:00 - 18:30 practice',
        times_saturday: 'Saturday: 10:00 - 12:00 weapons on odd weeks',
        contact_title: 'Contact',
        address_line1: 'Athaler Street 1',
        address_line2: '5122 Duttendorf',
        copyright: '© {year} Wanomichi Takemusu Aikido Hochburg-Ach',
        tagline: 'Aikido - the way of harmony | 合気道',
      },
      news: {
        title: 'News and Events',
        intro_lead: 'All regular training sessions are currently taking place.',
        intro_copy: 'The timeline starts with the current day. Entries older than seven days automatically move into the archive.',
        timeline_title: 'Timeline',
        current_empty_title: 'There are no current entries right now.',
        current_empty_text: 'New seminars, updates and notices will appear here.',
        archive_title: 'Past Events and Gallery',
        archive_empty_title: 'No archived entries yet.',
        archive_empty_text: 'Past events and recaps will appear here once they are older than seven days.',
        archive_note: 'Additional pictures can be curated on the <a href="/foto-galerie">gallery</a> page.',
        tag_page: 'Page',
        tag_modal: 'Popup',
        tag_large: 'Large',
        read_page: 'Open page',
        read_modal: 'Open popup',
        back_to_overview: 'Back to overview',
        loading: 'Loading...',
        load_error: 'The content could not be loaded right now.',
      },
      pages: {
        index: {
          hero: `
            <h1>Wanomichi Takemusu Aikido Hochburg-Ach</h1>
            <p>Traditional Aikido in Duttendorf - open to beginners and experienced practitioners alike.</p>
            <div class="hero-cta-group">
              <a href="/ueber-uns" class="button button-primary">About us</a>
              <a href="/kontakt" class="button button-secondary">Contact</a>
            </div>
          `,
          origin: `
            <h2>Where does Aikido come from?</h2>
            <p class="lead-text">Aikido is a Japanese martial art developed by O'Sensei Morihei Ueshiba around 1920 and refined until his death in 1969.</p>
            <p>Ueshiba mastered several classical martial disciplines, including Sumo, Jujutsu, Kenjutsu and Judo. Aikido draws strongly from Yagyu-ryu and Daito-ryu Jujutsu while removing the intention to destroy the opponent.</p>
            <p>Over time he transformed straight-line responses into circular movement, adding spiritual ideas such as Kotodama. This became the basis of Aiki-Bujutsu and later Aikido.</p>
            <p>The circular principle allows force to be received, redirected and neutralized from a stable center instead of answered with force against force.</p>
            <p>In later life Ueshiba emphasized harmony and love ever more strongly and finally named his art Aikido - the way of harmony and love.</p>
          `,
          what: `
            <h2>What is Aikido?</h2>
            <p class="lead-text">Even experienced Aikidoka rarely answer this question in just one sentence.</p>
            <p>Aikido is a Japanese martial art based on body techniques rooted in Yagyu-ryu and Daito-ryu Jujutsu, but without the idea of killing.</p>
            <p>Attacks are guided away through circular movement instead of direct confrontation. Joint controls and positioning make it possible to manage stronger opponents without seeking damage.</p>
            <p>Our practice follows the line of Morihiro Saito Sensei and includes weapons work with bokken, jo and tanto to deepen body awareness.</p>
          `,
          audience: `
            <h2>Who is Aikido for?</h2>
            <p class="lead-text">Aikido is suitable for people of all ages. Curiosity and openness are enough to start.</p>
            <div class="suitability-grid">
              <div class="suitability-item"><span class="suitability-icon">🏃</span><div><h3>Movement without pressure</h3><p>Ideal for people who want flowing movement without competition.</p></div></div>
              <div class="suitability-item"><span class="suitability-icon">🧠</span><div><h3>Stress relief</h3><p>A calm and focused counterweight to a hectic everyday life.</p></div></div>
              <div class="suitability-item"><span class="suitability-icon">⚖️</span><div><h3>Balance and posture</h3><p>Supports awareness, stability and grounded movement.</p></div></div>
              <div class="suitability-item"><span class="suitability-icon">🌏</span><div><h3>Japanese culture</h3><p>Appealing for anyone interested in Japanese philosophy and tradition.</p></div></div>
            </div>
          `,
          cta: `
            <h2>Interested?</h2>
            <p>A trial session is possible on Monday and Friday. Please contact us briefly beforehand so we can welcome you properly.</p>
            <div class="cta-buttons">
              <a href="/ueber-uns" class="button button-primary">Training times</a>
              <a href="/kontakt" class="button button-outline">Contact</a>
            </div>
          `,
        },
        about: {
          intro: `
            <h1>About us</h1>
            <p class="lead-text">The club was founded on 10 February 2026.</p>
            <p>Our direction is strongly shaped by the work and exchange with Edmund Kern and Daniel Toutain.</p>
          `,
          times: `
            <h2>Training times</h2>
            <div class="training-schedule">
              <ul>
                <li><span class="day">Monday</span> <span class="time">18:00 - 19:30</span> <span class="level">Practice</span></li>
                <li><span class="day">Friday</span> <span class="time">16:00 - 17:00</span> <span class="level">Questions and review</span></li>
                <li><span class="day">Friday</span> <span class="time">17:00 - 18:30</span> <span class="level">Practice</span></li>
                <li><span class="day">Saturday</span> <span class="time">10:00 - 12:00</span> <span class="level">Weapons on odd weeks</span></li>
              </ul>
            </div>
          `,
          location: `
            <h2>Training location</h2>
            <p>Multi-purpose hall of the new middle school<br />Athaler Street 1<br />5122 Duttendorf</p>
          `,
          teacher: `
            <h2>Teacher</h2>
            <div class="feature-grid">
              <div class="feature-card">
                <h3>Christian Dostal</h3>
                <p><strong>3rd Dan Wanomichi Takemusu Aiki</strong></p>
                <p>Christian began his Aikido path in Steyr in 2004. More details will follow.</p>
                <p><em>Photo to follow.</em></p>
              </div>
            </div>
          `,
          etiquette: `
            <h2>Etiquette</h2>
            <p><em>Coming soon.</em></p>
          `,
          trial: `
            <h2>Trial practice</h2>
            <p>A trial session is possible on Monday and Friday.</p>
            <p>Please contact us beforehand so that we know you are coming.</p>
            <p>Please wear long sports clothing or a tracksuit and bring indoor shoes. Training is barefoot or in non-slip socks.</p>
          `,
        },
        training: {
          intro: `
            <h1>Training</h1>
            <p class="lead-text">Our practice follows the teaching of Morihiro Saito Sensei and combines body work, attentiveness and weapons training.</p>
          `,
          what: `
            <h2>What is Aikido?</h2>
            <p>Aikido is a Japanese martial art based on body techniques from Yagyu-ryu and Daito-ryu Jujutsu, while removing the intention to kill.</p>
            <p>Attacks are redirected through circular movement instead of met head-on. Joint controls and body alignment allow stronger partners to be managed without seeking damage.</p>
          `,
          weapons: `
            <h2>Weapons training</h2>
            <p>Weapons practice complements body training. Bokken, jo and tanto practice sharpen timing, posture and body awareness.</p>
          `,
          times: `
            <h2>Training times</h2>
            <div class="training-schedule">
              <ul>
                <li><span class="day">Monday</span> <span class="time">18:00 - 19:30</span> <span class="level">Practice</span></li>
                <li><span class="day">Friday</span> <span class="time">16:00 - 17:00</span> <span class="level">Questions and review</span></li>
                <li><span class="day">Friday</span> <span class="time">17:00 - 18:30</span> <span class="level">Practice</span></li>
                <li><span class="day">Saturday</span> <span class="time">10:00 - 12:00</span> <span class="level">Weapons on odd weeks</span></li>
              </ul>
            </div>
          `,
          trial: `
            <h2>Trial session</h2>
            <p>A trial session is possible on Monday and Friday.</p>
            <p>Please contact us first so that we can plan for your visit.</p>
            <p>Please wear long sports clothes or a tracksuit and bring indoor shoes. Training is barefoot or in non-slip socks.</p>
            <p><a href="/kontakt" class="button">Contact us</a></p>
          `,
        },
        plan: {
          intro: `
            <h1>Schedule</h1>
            <p class="lead-text">Our regular sessions take place in the multi-purpose hall of the new middle school in Duttendorf.</p>
          `,
          schedule: `
            <h2>Weekly overview</h2>
            <div class="training-schedule">
              <ul>
                <li><span class="day">Monday</span> <span class="time">18:00 - 19:30</span> <span class="level">Practice</span></li>
                <li><span class="day">Friday</span> <span class="time">16:00 - 17:00</span> <span class="level">Questions and review</span></li>
                <li><span class="day">Friday</span> <span class="time">17:00 - 18:30</span> <span class="level">Practice</span></li>
                <li><span class="day">Saturday</span> <span class="time">10:00 - 12:00</span> <span class="level">Weapons on odd weeks</span></li>
              </ul>
            </div>
            <p class="schedule-note">Please get in touch before your first visit so we can welcome you properly.</p>
          `,
        },
        events: {
          intro: `
            <h1>Events</h1>
            <p class="lead-text">All regular training sessions are currently taking place.</p>
            <p>You can find the live timeline with current and past entries on the <a href="/news">updates</a> page. Visible items start at the current day while older entries move into the archive automatically.</p>
          `,
          upcoming: `
            <h2>Upcoming events</h2>
            <div class="horizontal-timeline future-events">
              <div class="timeline-event">
                <div class="event-date">12-13 Sep 2026</div>
                <h4>Seminar in Hochburg-Ach</h4>
                <p>Seminar with Daniel and Sonia Toutain in Hochburg-Ach.</p>
                <p><em>Announcement link coming soon.</em></p>
              </div>
              <div class="timeline-event">
                <div class="event-date">14-18 Sep 2026</div>
                <h4>Ushi Deshi in Birach</h4>
                <p>Ushi Deshi with Daniel and Sonia Toutain in Birach.</p>
                <p><em>Announcement link coming soon.</em></p>
              </div>
            </div>
          `,
          archive: `
            <h2>Past events and gallery</h2>
            <p>Past events, announcements and in the future also pictures are collected in the archive and gallery.</p>
            <p><a href="/foto-galerie" class="button">Open gallery</a></p>
          `,
        },
        legal: {
          content: `
            <h1>Legal notice & contact</h1>
            <h2>Legal notice</h2>
            <div class="legal-section">
              <p><strong>Wanomichi Takemusu Aikido Hochburg-Ach</strong><br />Christian Dostal<br />Birkenweg 29<br />5122 Hochburg-Ach</p>
              <p><strong>Phone:</strong> <a href="tel:+436504600020">+43 650 4600020</a><br /><strong>Email:</strong> <a href="mailto:dojo@aikido-hochburg-ach.at">dojo@aikido-hochburg-ach.at</a><br /><strong>Registration number:</strong> 1580789299</p>
            </div>
            <h2>Disclaimer</h2>
            <div class="legal-section">
              <p>Despite careful checks, we assume no liability for external links. The operators of linked pages are solely responsible for their content.</p>
            </div>
            <h2>Privacy</h2>
            <div class="legal-section"><p><em>Coming soon.</em></p></div>
            <h2>Contacts</h2>
            <div class="legal-section">
              <p><strong>Chairman:</strong> Christian Dostal<br /><strong>Phone:</strong> <a href="tel:+436504600020">+43 650 4600020</a><br /><strong>Email:</strong> <a href="mailto:dojo@aikido-hochburg-ach.at">dojo@aikido-hochburg-ach.at</a></p>
              <p><strong>Vice chair:</strong> Karin Sturm<br /><strong>Phone:</strong> +49 xxx<br /><strong>Email:</strong> <a href="mailto:dojo@aikido-hochburg-ach.at">dojo@aikido-hochburg-ach.at</a></p>
              <p><strong>Treasurer:</strong> Sandra Šolaja-Pelzer<br /><strong>Phone:</strong> +49 xxx<br /><strong>Email:</strong> <a href="mailto:dojo@aikido-hochburg-ach.at">dojo@aikido-hochburg-ach.at</a></p>
            </div>
            <h2>Links</h2>
            <div class="legal-section">
              <ul>
                <li><a href="https://www.wanomichi.fr/" target="_blank" rel="noopener noreferrer">https://www.wanomichi.fr/</a></li>
                <li><a href="http://www.aikido-braunau.at" target="_blank" rel="noopener noreferrer">www.aikido-braunau.at</a></li>
                <li><a href="https://aikido.uni-jena.de/takemusu/" target="_blank" rel="noopener noreferrer">https://aikido.uni-jena.de/takemusu/</a></li>
              </ul>
            </div>
          `,
        },
        contact: {
          header: `
            <h1>Contact</h1>
            <p class="lead">Questions about training or trial practice? We would love to hear from you.</p>
          `,
          direct_title: 'Direct contact',
          card_email: `<h3>Email</h3><a href="mailto:dojo@aikido-hochburg-ach.at" class="contact-link">dojo@aikido-hochburg-ach.at</a>`,
          card_phone: `<h3>Phone</h3><a href="tel:+436504600020" class="contact-link">+43 650 4600020</a>`,
          card_location: `<h3>Training location</h3><p>Multi-purpose hall of the new middle school<br />Athaler Street 1<br />5122 Duttendorf</p>`,
          people_title: 'Contacts',
          person_christian: `<h3>Christian Dostal</h3><p>Chairman</p><a href="tel:+436504600020" class="contact-link">+43 650 4600020</a><a href="mailto:dojo@aikido-hochburg-ach.at" class="contact-link">dojo@aikido-hochburg-ach.at</a>`,
          person_karin: `<h3>Karin Sturm</h3><p>Vice chair</p><p class="contact-note">Phone: +49 xxx</p><a href="mailto:dojo@aikido-hochburg-ach.at" class="contact-link">dojo@aikido-hochburg-ach.at</a>`,
          person_sandra: `<h3>Sandra Šolaja-Pelzer</h3><p>Treasurer</p><p class="contact-note">Phone: +49 xxx</p><a href="mailto:dojo@aikido-hochburg-ach.at" class="contact-link">dojo@aikido-hochburg-ach.at</a>`,
          times_title: 'Training times',
          schedule_training: `
            <h3>Regular practice</h3>
            <div class="training-schedule">
              <ul>
                <li><span class="day">Monday</span> <span class="time">18:00 - 19:30</span> <span class="level">Practice</span></li>
                <li><span class="day">Friday</span> <span class="time">16:00 - 17:00</span> <span class="level">Questions and review</span></li>
                <li><span class="day">Friday</span> <span class="time">17:00 - 18:30</span> <span class="level">Practice</span></li>
                <li><span class="day">Saturday</span> <span class="time">10:00 - 12:00</span> <span class="level">Weapons on odd weeks</span></li>
              </ul>
            </div>
          `,
          schedule_trial: `
            <h3>Trial practice</h3>
            <p>A trial session is possible on Monday and Friday.</p>
            <p>Please contact us beforehand so we know you are coming.</p>
            <p>Please bring long sports clothes or a tracksuit and indoor shoes. Training is barefoot or in non-slip socks.</p>
          `,
          map_title: 'Google Maps',
          map_copy: `<h3>Multi-purpose hall of the new middle school</h3><p>The hall is located in Duttendorf, municipality of Hochburg-Ach. You can open the route directly in Google Maps.</p>`,
          map_button: 'Open in Google Maps',
          closing: `<h2>Write to us</h2><p>For questions about training, seminars or trial practice you can contact us directly by email.</p><p><a href="mailto:dojo@aikido-hochburg-ach.at" class="button button-primary">dojo@aikido-hochburg-ach.at</a></p>`,
        },
      },
      meta: {
        home: 'Wanomichi Takemusu Aikido Hochburg-Ach',
        'ueber-uns': 'About us',
        training: 'Training',
        trainingsplan: 'Schedule',
        termine: 'Events',
        news: 'Updates',
        kontakt: 'Contact',
        legal: 'Legal notice & privacy',
        impressum: 'Legal notice & privacy',
      },
    },
    fr: {
      common: {
        language: 'Langue',
        theme: 'Thème',
        theme_light: 'Clair',
        theme_dark: 'Sombre',
      },
      nav: {
        about: 'À propos',
        training: 'Entraînement',
        schedule: 'Horaires',
        events: 'Événements',
        news: 'Actualités',
        gallery: 'Galerie',
        contact: 'Contact',
      },
      footer: {
        dojo_title: 'WTA Hochburg-Ach',
        updates_title: 'Actualités',
        news_and_events: 'Actualités & événements',
        event_overview: 'Vue des événements',
        legal_and_privacy: 'Mentions légales & confidentialité',
        times_title: 'Horaires',
        times_monday: 'Lundi : 18:00 - 19:30',
        times_friday_questions: 'Vendredi : 16:00 - 17:00 questions et approfondissement',
        times_friday_training: 'Vendredi : 17:00 - 18:30 entraînement',
        times_saturday: 'Samedi : 10:00 - 12:00 armes les semaines impaires',
        contact_title: 'Contact',
        address_line1: 'Athaler Straße 1',
        address_line2: '5122 Duttendorf',
        copyright: '© {year} Wanomichi Takemusu Aikido Hochburg-Ach',
        tagline: 'Aikido - la voie de l’harmonie | 合気道',
      },
      news: {
        title: 'Actualités et événements',
        intro_lead: 'Tous les entraînements ont actuellement lieu comme prévu.',
        intro_copy: 'La timeline commence au jour actuel. Les entrées plus anciennes que sept jours passent automatiquement dans les archives.',
        timeline_title: 'Timeline',
        current_empty_title: 'Aucune entrée actuelle pour le moment.',
        current_empty_text: 'Les nouveaux stages et informations apparaîtront ici.',
        archive_title: 'Événements passés et galerie',
        archive_empty_title: 'Pas encore d’archives.',
        archive_empty_text: 'Les événements passés et les retours apparaîtront ici au bout de sept jours.',
        archive_note: 'Des photos complémentaires peuvent être ajoutées sur la page <a href="/foto-galerie">galerie</a>.',
        tag_page: 'Page',
        tag_modal: 'Popup',
        tag_large: 'Grand',
        read_page: 'Ouvrir la page',
        read_modal: 'Ouvrir le popup',
        back_to_overview: 'Retour à la vue d’ensemble',
        loading: 'Chargement...',
        load_error: 'Le contenu ne peut pas être chargé actuellement.',
      },
      pages: {
        index: {
          hero: `
            <h1>Wanomichi Takemusu Aikido Hochburg-Ach</h1>
            <p>Aikido traditionnel à Duttendorf - ouvert aux débutants et aux pratiquants avancés.</p>
            <div class="hero-cta-group">
              <a href="/ueber-uns" class="button button-primary">À propos</a>
              <a href="/kontakt" class="button button-secondary">Contact</a>
            </div>
          `,
          origin: `
            <h2>D’où vient l’Aikido ?</h2>
            <p class="lead-text">L’Aikido est un art martial japonais développé par O'Sensei Morihei Ueshiba vers 1920 et affiné jusqu’en 1969.</p>
            <p>Ueshiba a étudié plusieurs écoles martiales classiques. L’Aikido reprend surtout les formes du Yagyu-ryu et du Daito-ryu Jujutsu, tout en retirant l’idée de destruction.</p>
            <p>Avec le temps, la réponse linéaire s’est transformée en mouvement circulaire. Cette approche permet de recevoir, rediriger et neutraliser la force sans affrontement frontal.</p>
            <p>Plus tard, O'Sensei a mis de plus en plus l’accent sur l’harmonie et l’amour, ce qui a conduit au nom Aikido.</p>
          `,
          what: `
            <h2>Qu’est-ce que l’Aikido ?</h2>
            <p class="lead-text">Même les Aikidoka expérimentés répondent rarement à cette question en une seule phrase.</p>
            <p>L’Aikido est un art martial japonais basé sur des techniques corporelles issues du Jujutsu, sans intention de tuer.</p>
            <p>Les attaques sont déviées par le mouvement circulaire plutôt que rencontrées de face. Les contrôles articulaires et le placement permettent de gérer un partenaire plus fort sans chercher à le blesser.</p>
            <p>Notre pratique suit la lignée de Morihiro Saito Sensei et comprend aussi le travail aux armes.</p>
          `,
          audience: `
            <h2>Pour qui est l’Aikido ?</h2>
            <p class="lead-text">L’Aikido convient à tous les âges. Il faut seulement de la curiosité et de l’ouverture.</p>
            <div class="suitability-grid">
              <div class="suitability-item"><span class="suitability-icon">🏃</span><div><h3>Mouvement sans pression</h3><p>Pour les personnes qui recherchent un mouvement fluide sans compétition.</p></div></div>
              <div class="suitability-item"><span class="suitability-icon">🧠</span><div><h3>Réduction du stress</h3><p>Un contrepoint calme et concentré au quotidien.</p></div></div>
              <div class="suitability-item"><span class="suitability-icon">⚖️</span><div><h3>Équilibre et posture</h3><p>Développe stabilité, présence et conscience du corps.</p></div></div>
              <div class="suitability-item"><span class="suitability-icon">🌏</span><div><h3>Culture japonaise</h3><p>Pour toutes les personnes attirées par la philosophie et la tradition japonaises.</p></div></div>
            </div>
          `,
          cta: `
            <h2>Intéressé ?</h2>
            <p>Un entraînement d’essai est possible le lundi et le vendredi. Merci de nous prévenir avant de venir.</p>
            <div class="cta-buttons">
              <a href="/ueber-uns" class="button button-primary">Horaires</a>
              <a href="/kontakt" class="button button-outline">Contact</a>
            </div>
          `,
        },
        about: {
          intro: `<h1>À propos</h1><p class="lead-text">L’association a été fondée le 10 février 2026.</p><p>Notre orientation est marquée par le travail et les échanges avec Edmund Kern et Daniel Toutain.</p>`,
          times: `<h2>Horaires</h2><div class="training-schedule"><ul><li><span class="day">Lundi</span> <span class="time">18:00 - 19:30</span> <span class="level">Entraînement</span></li><li><span class="day">Vendredi</span> <span class="time">16:00 - 17:00</span> <span class="level">Questions et approfondissement</span></li><li><span class="day">Vendredi</span> <span class="time">17:00 - 18:30</span> <span class="level">Entraînement</span></li><li><span class="day">Samedi</span> <span class="time">10:00 - 12:00</span> <span class="level">Armes les semaines impaires</span></li></ul></div>`,
          location: `<h2>Lieu d’entraînement</h2><p>Salle polyvalente de la nouvelle école moyenne<br />Athaler Straße 1<br />5122 Duttendorf</p>`,
          teacher: `<h2>Enseignant</h2><div class="feature-grid"><div class="feature-card"><h3>Christian Dostal</h3><p><strong>3e Dan Wanomichi Takemusu Aiki</strong></p><p>Christian a commencé son parcours d’Aikido à Steyr en 2004. Plus d’informations suivront.</p><p><em>Photo à venir.</em></p></div></div>`,
          etiquette: `<h2>Étiquette</h2><p><em>À venir.</em></p>`,
          trial: `<h2>Entraînement d’essai</h2><p>Un entraînement d’essai est possible le lundi et le vendredi.</p><p>Merci de prendre contact avec nous avant de venir.</p><p>Merci de porter une tenue longue de sport ou un survêtement et d’apporter des chaussures d’intérieur. On s’entraîne pieds nus ou avec des chaussettes antidérapantes.</p>`,
        },
        training: {
          intro: `<h1>Entraînement</h1><p class="lead-text">Notre pratique suit l’enseignement de Morihiro Saito Sensei et relie travail du corps, attention et armes.</p>`,
          what: `<h2>Qu’est-ce que l’Aikido ?</h2><p>L’Aikido est un art martial japonais basé sur des techniques corporelles du Jujutsu, sans intention de tuer.</p><p>Les attaques sont redirigées par un mouvement circulaire au lieu d’être rencontrées de face. Les contrôles et le placement permettent de gérer un partenaire plus fort sans chercher à le blesser.</p>`,
          weapons: `<h2>Travail aux armes</h2><p>Le bokken, le jo et le tanto complètent le travail du corps et approfondissent le timing, la posture et la conscience corporelle.</p>`,
          times: `<h2>Horaires</h2><div class="training-schedule"><ul><li><span class="day">Lundi</span> <span class="time">18:00 - 19:30</span> <span class="level">Entraînement</span></li><li><span class="day">Vendredi</span> <span class="time">16:00 - 17:00</span> <span class="level">Questions et approfondissement</span></li><li><span class="day">Vendredi</span> <span class="time">17:00 - 18:30</span> <span class="level">Entraînement</span></li><li><span class="day">Samedi</span> <span class="time">10:00 - 12:00</span> <span class="level">Armes les semaines impaires</span></li></ul></div>`,
          trial: `<h2>Essai</h2><p>Une séance d’essai est possible le lundi et le vendredi.</p><p>Merci de nous prévenir avant votre première visite.</p><p>Merci de porter une tenue longue de sport ou un survêtement et d’apporter des chaussures d’intérieur.</p><p><a href="/kontakt" class="button">Nous contacter</a></p>`,
        },
        plan: {
          intro: `<h1>Horaires</h1><p class="lead-text">Nos séances régulières ont lieu dans la salle polyvalente de la nouvelle école moyenne à Duttendorf.</p>`,
          schedule: `<h2>Vue hebdomadaire</h2><div class="training-schedule"><ul><li><span class="day">Lundi</span> <span class="time">18:00 - 19:30</span> <span class="level">Entraînement</span></li><li><span class="day">Vendredi</span> <span class="time">16:00 - 17:00</span> <span class="level">Questions et approfondissement</span></li><li><span class="day">Vendredi</span> <span class="time">17:00 - 18:30</span> <span class="level">Entraînement</span></li><li><span class="day">Samedi</span> <span class="time">10:00 - 12:00</span> <span class="level">Armes les semaines impaires</span></li></ul></div><p class="schedule-note">Merci de prendre contact avec nous avant une première visite.</p>`,
        },
        events: {
          intro: `<h1>Événements</h1><p class="lead-text">Tous les entraînements ont actuellement lieu comme prévu.</p><p>La timeline en direct se trouve sur la page <a href="/news">actualités</a>. Les entrées visibles commencent au jour actuel et les plus anciennes passent ensuite aux archives.</p>`,
          upcoming: `<h2>Événements à venir</h2><div class="horizontal-timeline future-events"><div class="timeline-event"><div class="event-date">12-13 sept. 2026</div><h4>Stage à Hochburg-Ach</h4><p>Stage avec Daniel et Sonia Toutain à Hochburg-Ach.</p><p><em>Annonce à venir.</em></p></div><div class="timeline-event"><div class="event-date">14-18 sept. 2026</div><h4>Ushi Deshi à Birach</h4><p>Ushi Deshi avec Daniel et Sonia Toutain à Birach.</p><p><em>Annonce à venir.</em></p></div></div>`,
          archive: `<h2>Événements passés et galerie</h2><p>Les événements passés, annonces et plus tard les photos sont regroupés dans les archives et la galerie.</p><p><a href="/foto-galerie" class="button">Ouvrir la galerie</a></p>`,
        },
        legal: {
          content: `<h1>Mentions légales & contact</h1><h2>Mentions légales</h2><div class="legal-section"><p><strong>Wanomichi Takemusu Aikido Hochburg-Ach</strong><br />Christian Dostal<br />Birkenweg 29<br />5122 Hochburg-Ach</p><p><strong>Téléphone :</strong> <a href="tel:+436504600020">+43 650 4600020</a><br /><strong>Email :</strong> <a href="mailto:dojo@aikido-hochburg-ach.at">dojo@aikido-hochburg-ach.at</a><br /><strong>Numéro d’enregistrement :</strong> 1580789299</p></div><h2>Responsabilité</h2><div class="legal-section"><p>Malgré un contrôle attentif, nous déclinons toute responsabilité pour les contenus des liens externes.</p></div><h2>Protection des données</h2><div class="legal-section"><p><em>À venir.</em></p></div>`,
        },
        contact: {
          header: `<h1>Contact</h1><p class="lead">Des questions sur l’entraînement ou sur une séance d’essai ? Nous serons heureux d’avoir de vos nouvelles.</p>`,
          direct_title: 'Contact direct',
          card_email: `<h3>Email</h3><a href="mailto:dojo@aikido-hochburg-ach.at" class="contact-link">dojo@aikido-hochburg-ach.at</a>`,
          card_phone: `<h3>Téléphone</h3><a href="tel:+436504600020" class="contact-link">+43 650 4600020</a>`,
          card_location: `<h3>Lieu d’entraînement</h3><p>Salle polyvalente de la nouvelle école moyenne<br />Athaler Straße 1<br />5122 Duttendorf</p>`,
          people_title: 'Personnes de contact',
          person_christian: `<h3>Christian Dostal</h3><p>Président</p><a href="tel:+436504600020" class="contact-link">+43 650 4600020</a><a href="mailto:dojo@aikido-hochburg-ach.at" class="contact-link">dojo@aikido-hochburg-ach.at</a>`,
          person_karin: `<h3>Karin Sturm</h3><p>Vice-présidente</p><p class="contact-note">Téléphone : +49 xxx</p><a href="mailto:dojo@aikido-hochburg-ach.at" class="contact-link">dojo@aikido-hochburg-ach.at</a>`,
          person_sandra: `<h3>Sandra Šolaja-Pelzer</h3><p>Trésorière</p><p class="contact-note">Téléphone : +49 xxx</p><a href="mailto:dojo@aikido-hochburg-ach.at" class="contact-link">dojo@aikido-hochburg-ach.at</a>`,
          times_title: 'Horaires',
          schedule_training: `<h3>Entraînement régulier</h3><div class="training-schedule"><ul><li><span class="day">Lundi</span> <span class="time">18:00 - 19:30</span> <span class="level">Entraînement</span></li><li><span class="day">Vendredi</span> <span class="time">16:00 - 17:00</span> <span class="level">Questions et approfondissement</span></li><li><span class="day">Vendredi</span> <span class="time">17:00 - 18:30</span> <span class="level">Entraînement</span></li><li><span class="day">Samedi</span> <span class="time">10:00 - 12:00</span> <span class="level">Armes les semaines impaires</span></li></ul></div>`,
          schedule_trial: `<h3>Séance d’essai</h3><p>Une séance d’essai est possible le lundi et le vendredi.</p><p>Merci de nous prévenir avant de venir.</p><p>Merci d’apporter une tenue de sport longue et des chaussures d’intérieur.</p>`,
          map_title: 'Google Maps',
          map_copy: `<h3>Salle polyvalente de la nouvelle école moyenne</h3><p>La salle se trouve à Duttendorf, commune de Hochburg-Ach. Tu peux ouvrir l’itinéraire directement dans Google Maps.</p>`,
          map_button: 'Ouvrir dans Google Maps',
          closing: `<h2>Écris-nous</h2><p>Pour les questions sur l’entraînement, les stages ou les séances d’essai, tu peux nous contacter directement par email.</p><p><a href="mailto:dojo@aikido-hochburg-ach.at" class="button button-primary">dojo@aikido-hochburg-ach.at</a></p>`,
        },
      },
      meta: {
        home: 'Wanomichi Takemusu Aikido Hochburg-Ach',
        'ueber-uns': 'À propos',
        training: 'Entraînement',
        trainingsplan: 'Horaires',
        termine: 'Événements',
        news: 'Actualités',
        kontakt: 'Contact',
        legal: 'Mentions légales & confidentialité',
        impressum: 'Mentions légales & confidentialité',
      },
    },
    ja: {
      common: {
        language: '言語',
        theme: 'テーマ',
        theme_light: 'ライト',
        theme_dark: 'ダーク',
      },
      nav: {
        about: '道場について',
        training: '稽古',
        schedule: '稽古時間',
        events: '行事',
        news: 'お知らせ',
        gallery: 'ギャラリー',
        contact: '連絡先',
      },
      footer: {
        dojo_title: 'WTA Hochburg-Ach',
        updates_title: 'お知らせ',
        news_and_events: 'お知らせと行事',
        event_overview: '行事一覧',
        legal_and_privacy: '法的情報とプライバシー',
        times_title: '稽古時間',
        times_monday: '月曜日: 18:00 - 19:30',
        times_friday_questions: '金曜日: 16:00 - 17:00 質問と復習',
        times_friday_training: '金曜日: 17:00 - 18:30 稽古',
        times_saturday: '土曜日: 10:00 - 12:00 奇数週は武器稽古',
        contact_title: '連絡先',
        address_line1: 'Athaler Straße 1',
        address_line2: '5122 Duttendorf',
        copyright: '© {year} Wanomichi Takemusu Aikido Hochburg-Ach',
        tagline: '合気道 - 調和の道 | 合気道',
      },
      news: {
        title: 'お知らせと行事',
        intro_lead: '現在、すべての通常稽古は予定通り行われています。',
        intro_copy: 'タイムラインは今日から始まります。7日より古い項目は自動的にアーカイブへ移動します。',
        timeline_title: 'タイムライン',
        current_empty_title: '現在表示できる項目はありません。',
        current_empty_text: '新しい講習会や案内がここに表示されます。',
        archive_title: '過去の行事とギャラリー',
        archive_empty_title: 'まだアーカイブはありません。',
        archive_empty_text: '7日を過ぎた項目はここに表示されます。',
        archive_note: '<a href="/foto-galerie">ギャラリー</a> のページにも写真を追加できます。',
        tag_page: 'ページ',
        tag_modal: 'ポップアップ',
        tag_large: '大',
        read_page: 'ページを開く',
        read_modal: 'ポップアップを開く',
        back_to_overview: '一覧へ戻る',
        loading: '読み込み中...',
        load_error: '現在この内容を読み込めません。',
      },
      pages: {
        index: {
          hero: `
            <h1>Wanomichi Takemusu Aikido Hochburg-Ach</h1>
            <p>Duttendorfで行う伝統的な合気道。初心者から経験者まで参加できます。</p>
            <div class="hero-cta-group">
              <a href="/ueber-uns" class="button button-primary">道場について</a>
              <a href="/kontakt" class="button button-secondary">連絡先</a>
            </div>
          `,
          origin: `
            <h2>合気道の起源</h2>
            <p class="lead-text">合気道は植芝盛平翁によって1920年頃に形作られ、1969年まで発展し続けました。</p>
            <p>植芝翁は柔術、剣術、柔道など多くの武道を修めました。合気道はとくに柳生流と大東流柔術の身体技法を基礎にしています。</p>
            <p>直線的な受けから円の動きへと変化し、相手の力を受け流し、中心から導き変えることが重要になりました。</p>
            <p>晩年には調和と愛の意味がより強く強調され、合気道という名称に結実しました。</p>
          `,
          what: `
            <h2>合気道とは何か</h2>
            <p class="lead-text">経験者にとっても一言で答えることは難しい問いです。</p>
            <p>合気道は日本の武道であり、攻撃を正面からぶつけ返すのではなく、円の動きで受け流し導きます。</p>
            <p>関節技や姿勢、間合いを通して、相手を傷つけずに制することを目指します。</p>
            <p>私たちの稽古には木剣、杖、短刀による武器稽古も含まれ、身体理解を深めます。</p>
          `,
          audience: `
            <h2>誰のための合気道か</h2>
            <p class="lead-text">合気道は年齢を問わず学べます。必要なのは好奇心と開かれた気持ちだけです。</p>
            <div class="suitability-grid">
              <div class="suitability-item"><span class="suitability-icon">🏃</span><div><h3>競争のない動き</h3><p>勝ち負けではなく、流れるような動きを求める人に向いています。</p></div></div>
              <div class="suitability-item"><span class="suitability-icon">🧠</span><div><h3>心の静けさ</h3><p>忙しい日常に対する落ち着いた時間になります。</p></div></div>
              <div class="suitability-item"><span class="suitability-icon">⚖️</span><div><h3>姿勢と安定</h3><p>身体感覚、安定感、軸を育てます。</p></div></div>
              <div class="suitability-item"><span class="suitability-icon">🌏</span><div><h3>日本文化</h3><p>日本の哲学や伝統に関心のある人にも魅力があります。</p></div></div>
            </div>
          `,
          cta: `
            <h2>興味がありますか</h2>
            <p>体験稽古は月曜日と金曜日に可能です。来る前に一度ご連絡ください。</p>
            <div class="cta-buttons">
              <a href="/ueber-uns" class="button button-primary">稽古時間</a>
              <a href="/kontakt" class="button button-outline">連絡先</a>
            </div>
          `,
        },
        about: {
          intro: `<h1>道場について</h1><p class="lead-text">クラブは2026年2月10日に設立されました。</p><p>Edmund Kern氏とDaniel Toutain氏との交流が、私たちの方向性に大きく影響しています。</p>`,
          times: `<h2>稽古時間</h2><div class="training-schedule"><ul><li><span class="day">月曜日</span> <span class="time">18:00 - 19:30</span> <span class="level">稽古</span></li><li><span class="day">金曜日</span> <span class="time">16:00 - 17:00</span> <span class="level">質問と復習</span></li><li><span class="day">金曜日</span> <span class="time">17:00 - 18:30</span> <span class="level">稽古</span></li><li><span class="day">土曜日</span> <span class="time">10:00 - 12:00</span> <span class="level">奇数週は武器稽古</span></li></ul></div>`,
          location: `<h2>稽古場所</h2><p>新しい中学校の多目的ホール<br />Athaler Straße 1<br />5122 Duttendorf</p>`,
          teacher: `<h2>指導者</h2><div class="feature-grid"><div class="feature-card"><h3>Christian Dostal</h3><p><strong>3段 Wanomichi Takemusu Aiki</strong></p><p>Christianは2004年にSteyrで合気道を始めました。詳細は後日追加されます。</p><p><em>写真は後日追加予定です。</em></p></div></div>`,
          etiquette: `<h2>礼法</h2><p><em>準備中です。</em></p>`,
          trial: `<h2>体験稽古</h2><p>体験稽古は月曜日と金曜日に参加できます。</p><p>事前にご連絡ください。</p><p>長袖・長ズボンの運動着と室内履きをご用意ください。稽古は裸足または滑りにくい靴下で行います。</p>`,
        },
        training: {
          intro: `<h1>稽古</h1><p class="lead-text">私たちの稽古は齋藤守弘先生の系統に従い、身体技法、注意深さ、武器稽古を結びます。</p>`,
          what: `<h2>合気道とは</h2><p>合気道は柔術の身体技法を基礎にしながら、相手を傷つける意図を外した日本の武道です。</p><p>攻撃は円の動きで導き、正面衝突を避けます。関節技や身体の使い方により、より強い相手にも対応できます。</p>`,
          weapons: `<h2>武器稽古</h2><p>木剣、杖、短刀の稽古は、間合い、姿勢、身体感覚を深めます。</p>`,
          times: `<h2>稽古時間</h2><div class="training-schedule"><ul><li><span class="day">月曜日</span> <span class="time">18:00 - 19:30</span> <span class="level">稽古</span></li><li><span class="day">金曜日</span> <span class="time">16:00 - 17:00</span> <span class="level">質問と復習</span></li><li><span class="day">金曜日</span> <span class="time">17:00 - 18:30</span> <span class="level">稽古</span></li><li><span class="day">土曜日</span> <span class="time">10:00 - 12:00</span> <span class="level">奇数週は武器稽古</span></li></ul></div>`,
          trial: `<h2>体験稽古</h2><p>体験稽古は月曜日と金曜日に参加できます。</p><p>初回の前にご連絡ください。</p><p>長袖・長ズボンの運動着と室内履きをご持参ください。</p><p><a href="/kontakt" class="button">連絡する</a></p>`,
        },
        plan: {
          intro: `<h1>稽古時間</h1><p class="lead-text">通常稽古はDuttendorfの新しい中学校の多目的ホールで行われます。</p>`,
          schedule: `<h2>週間スケジュール</h2><div class="training-schedule"><ul><li><span class="day">月曜日</span> <span class="time">18:00 - 19:30</span> <span class="level">稽古</span></li><li><span class="day">金曜日</span> <span class="time">16:00 - 17:00</span> <span class="level">質問と復習</span></li><li><span class="day">金曜日</span> <span class="time">17:00 - 18:30</span> <span class="level">稽古</span></li><li><span class="day">土曜日</span> <span class="time">10:00 - 12:00</span> <span class="level">奇数週は武器稽古</span></li></ul></div><p class="schedule-note">初めて来る前にご連絡ください。</p>`,
        },
        events: {
          intro: `<h1>行事</h1><p class="lead-text">現在、すべての通常稽古は予定通り行われています。</p><p>現在のタイムラインは <a href="/news">お知らせ</a> ページにあります。古い項目は自動的にアーカイブへ移動します。</p>`,
          upcoming: `<h2>今後の行事</h2><div class="horizontal-timeline future-events"><div class="timeline-event"><div class="event-date">2026年9月12-13日</div><h4>Hochburg-Ach 講習会</h4><p>Daniel と Sonia Toutain による講習会です。</p><p><em>案内は後日追加されます。</em></p></div><div class="timeline-event"><div class="event-date">2026年9月14-18日</div><h4>Birach Ushi Deshi</h4><p>Daniel と Sonia Toutain による Ushi Deshi です。</p><p><em>案内は後日追加されます。</em></p></div></div>`,
          archive: `<h2>過去の行事とギャラリー</h2><p>過去の行事、案内、そして今後は写真もアーカイブとギャラリーにまとめます。</p><p><a href="/foto-galerie" class="button">ギャラリーへ</a></p>`,
        },
        legal: {
          content: `<h1>法的情報と連絡先</h1><h2>法的情報</h2><div class="legal-section"><p><strong>Wanomichi Takemusu Aikido Hochburg-Ach</strong><br />Christian Dostal<br />Birkenweg 29<br />5122 Hochburg-Ach</p><p><strong>電話:</strong> <a href="tel:+436504600020">+43 650 4600020</a><br /><strong>メール:</strong> <a href="mailto:dojo@aikido-hochburg-ach.at">dojo@aikido-hochburg-ach.at</a><br /><strong>登録番号:</strong> 1580789299</p></div><h2>免責事項</h2><div class="legal-section"><p>外部リンクの内容について当団体は責任を負いません。</p></div><h2>個人情報保護</h2><div class="legal-section"><p><em>準備中です。</em></p></div>`,
        },
        contact: {
          header: `<h1>連絡先</h1><p class="lead">稽古や体験についての質問があれば、どうぞご連絡ください。</p>`,
          direct_title: '直接連絡',
          card_email: `<h3>メール</h3><a href="mailto:dojo@aikido-hochburg-ach.at" class="contact-link">dojo@aikido-hochburg-ach.at</a>`,
          card_phone: `<h3>電話</h3><a href="tel:+436504600020" class="contact-link">+43 650 4600020</a>`,
          card_location: `<h3>稽古場所</h3><p>新しい中学校の多目的ホール<br />Athaler Straße 1<br />5122 Duttendorf</p>`,
          people_title: '担当者',
          person_christian: `<h3>Christian Dostal</h3><p>会長</p><a href="tel:+436504600020" class="contact-link">+43 650 4600020</a><a href="mailto:dojo@aikido-hochburg-ach.at" class="contact-link">dojo@aikido-hochburg-ach.at</a>`,
          person_karin: `<h3>Karin Sturm</h3><p>副会長</p><p class="contact-note">電話: +49 xxx</p><a href="mailto:dojo@aikido-hochburg-ach.at" class="contact-link">dojo@aikido-hochburg-ach.at</a>`,
          person_sandra: `<h3>Sandra Šolaja-Pelzer</h3><p>会計</p><p class="contact-note">電話: +49 xxx</p><a href="mailto:dojo@aikido-hochburg-ach.at" class="contact-link">dojo@aikido-hochburg-ach.at</a>`,
          times_title: '稽古時間',
          schedule_training: `<h3>通常稽古</h3><div class="training-schedule"><ul><li><span class="day">月曜日</span> <span class="time">18:00 - 19:30</span> <span class="level">稽古</span></li><li><span class="day">金曜日</span> <span class="time">16:00 - 17:00</span> <span class="level">質問と復習</span></li><li><span class="day">金曜日</span> <span class="time">17:00 - 18:30</span> <span class="level">稽古</span></li><li><span class="day">土曜日</span> <span class="time">10:00 - 12:00</span> <span class="level">奇数週は武器稽古</span></li></ul></div>`,
          schedule_trial: `<h3>体験稽古</h3><p>体験稽古は月曜日と金曜日に可能です。</p><p>事前にご連絡ください。</p><p>長袖・長ズボンの運動着と室内履きをご用意ください。</p>`,
          map_title: 'Google Maps',
          map_copy: `<h3>新しい中学校の多目的ホール</h3><p>会場はDuttendorfにあります。Google Mapsで直接ルートを開けます。</p>`,
          map_button: 'Google Mapsで開く',
          closing: `<h2>ご連絡ください</h2><p>稽古、講習会、体験についてはメールで直接ご連絡いただけます。</p><p><a href="mailto:dojo@aikido-hochburg-ach.at" class="button button-primary">dojo@aikido-hochburg-ach.at</a></p>`,
        },
      },
      meta: {
        home: 'Wanomichi Takemusu Aikido Hochburg-Ach',
        'ueber-uns': '道場について',
        training: '稽古',
        trainingsplan: '稽古時間',
        termine: '行事',
        news: 'お知らせ',
        kontakt: '連絡先',
        legal: '法的情報とプライバシー',
        impressum: '法的情報とプライバシー',
      },
    },
  };

  let currentLang = DEFAULT_LANG;

  function getInitialLanguage() {
    const url = new URL(window.location.href);
    const fromQuery = url.searchParams.get('lang');
    if (fromQuery && LANGUAGES[fromQuery]) return fromQuery;

    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && LANGUAGES[stored]) return stored;

    const browserLang = navigator.language?.split('-')[0];
    if (browserLang && LANGUAGES[browserLang]) return browserLang;

    return DEFAULT_LANG;
  }

  function interpolate(value, dataset = {}) {
    return String(value).replace(/\{(\w+)\}/g, (_, key) => dataset[key] ?? `{${key}}`);
  }

  function t(key, fallback = '', dataset) {
    const keys = key.split('.');
    let value = TRANSLATIONS[currentLang];

    for (const part of keys) {
      if (value && typeof value === 'object' && part in value) {
        value = value[part];
      } else {
        return fallback || key;
      }
    }

    if (typeof value === 'string') {
      return interpolate(value, dataset);
    }

    return fallback || key;
  }

  function updateLanguageSelector() {
    const currentLangLabel = document.querySelector('[data-current-lang]');
    if (currentLangLabel) {
      currentLangLabel.textContent = LANGUAGES[currentLang]?.code || currentLang.toUpperCase();
    }

    document.querySelectorAll('.lang-option').forEach((option) => {
      option.classList.toggle('active', option.getAttribute('data-lang') === currentLang);
    });
  }

  function updateDocumentTitle() {
    const url = new URL(window.location.href);
    const path = url.pathname.replace(BASE_URL, '').replace(/^\/|\/$/g, '');
    const pageKey = path === '' ? 'home' : path;
    const title = TRANSLATIONS[currentLang]?.meta?.[pageKey];
    if (title) {
      document.title = title;
    }
  }

  function updatePageContent() {
    document.documentElement.lang = LANGUAGES[currentLang]?.htmlLang || currentLang;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.getAttribute('data-i18n');
      if (!key) return;
      element.textContent = t(key, element.textContent, element.dataset);
    });

    document.querySelectorAll('[data-i18n-html]').forEach((element) => {
      const key = element.getAttribute('data-i18n-html');
      if (!key) return;
      element.innerHTML = t(key, element.innerHTML, element.dataset);
    });

    document.querySelectorAll('[data-i18n-attr]').forEach((element) => {
      const descriptor = element.getAttribute('data-i18n-attr');
      if (!descriptor) return;
      descriptor.split(',').forEach((entry) => {
        const [attr, key] = entry.split(':');
        if (!attr || !key) return;
        element.setAttribute(attr.trim(), t(key.trim(), element.getAttribute(attr.trim()) || '', element.dataset));
      });
    });

    updateLanguageSelector();
    updateDocumentTitle();
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: currentLang } }));
  }

  function updateLanguageInUrl() {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', currentLang);
    window.history.replaceState({}, '', url);
  }

  function switchLanguage(lang) {
    if (!LANGUAGES[lang]) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    updateLanguageInUrl();
    updatePageContent();
  }

  function initLanguageSelector() {
    document.querySelectorAll('.lang-option').forEach((option) => {
      option.addEventListener('click', (event) => {
        event.preventDefault();
        const lang = option.getAttribute('data-lang');
        if (lang) switchLanguage(lang);
      });
    });
  }

  function init() {
    currentLang = getInitialLanguage();
    initLanguageSelector();
    updatePageContent();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.i18n = {
    t,
    switchLanguage,
    getCurrentLang: () => currentLang,
    getLanguages: () => LANGUAGES,
  };
})();
