/**
 * Aikido Website - Internationalization (i18n)
 * Handles language switching between DE, EN, FR, JP
 */

(function() {
  'use strict';

  // Supported languages
  const LANGUAGES = {
    de: { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    en: { code: 'en', name: 'English', flag: '🇬🇧' },
    fr: { code: 'fr', name: 'Français', flag: '🇫🇷' },
    jp: { code: 'jp', name: '日本語', flag: '🇯🇵' }
  };

  const DEFAULT_LANG = 'de';
  const STORAGE_KEY = 'aikido-lang';

  // Current language
  let currentLang = DEFAULT_LANG;
  let translations = {};

  /**
   * Get stored or detected language
   */
  function getInitialLanguage() {
    // Check localStorage
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && LANGUAGES[stored]) {
      return stored;
    }

    // Check browser language
    const browserLang = navigator.language?.split('-')[0];
    if (browserLang && LANGUAGES[browserLang]) {
      return browserLang;
    }

    return DEFAULT_LANG;
  }

  /**
   * Load translations for a language
   */
  async function loadTranslations(lang) {
    try {
      const response = await fetch(`/aikido/locales/${lang}.json`);
      if (!response.ok) throw new Error('Translation not found');
      translations = await response.json();
      currentLang = lang;
      localStorage.setItem(STORAGE_KEY, lang);
      return true;
    } catch (e) {
      console.error('Failed to load translations:', e);
      // Fallback to German
      if (lang !== DEFAULT_LANG) {
        return loadTranslations(DEFAULT_LANG);
      }
      return false;
    }
  }

  /**
   * Get translation by key path (e.g., 'nav.home')
   */
  function t(key, fallback = '') {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return fallback || key;
      }
    }
    
    return value || fallback || key;
  }

  /**
   * Get current language
   */
  function getCurrentLang() {
    return currentLang;
  }

  /**
   * Switch language
   */
  async function switchLanguage(lang) {
    if (!LANGUAGES[lang] || lang === currentLang) return;
    
    await loadTranslations(lang);
    updatePageContent();
    updateLanguageSelector();
    updatePageURL(lang);
  }

  /**
   * Update page URL without reload
   */
  function updatePageURL(lang) {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url);
  }

  /**
   * Update all translatable elements on the page
   */
  function updatePageContent() {
    // Update elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = t(key);
      if (translation !== key) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translation;
        } else {
          el.textContent = translation;
        }
      }
    });

    // Update elements with data-i18n-html attribute (for HTML content)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const translation = t(key);
      if (translation !== key) {
        el.innerHTML = translation;
      }
    });

    // Update elements with data-i18n-attr attribute (for attributes)
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const attrData = el.getAttribute('data-i18n-attr');
      if (attrData) {
        const [attr, key] = attrData.split(':');
        const translation = t(key);
        if (translation !== key) {
          el.setAttribute(attr, translation);
        }
      }
    });

    // Update language selector
    updateLanguageSelector();
    
    // Dispatch event for custom handlers
    document.dispatchEvent(new CustomEvent('languageChanged', { 
      detail: { lang: currentLang, translations } 
    }));
  }

  /**
   * Update language selector UI
   */
  function updateLanguageSelector() {
    const langBtn = document.querySelector('.lang-btn');
    const langOptions = document.querySelectorAll('.lang-option');
    
    if (langBtn) {
      const langSpan = langBtn.querySelector('span');
      if (langSpan && LANGUAGES[currentLang]) {
        langSpan.textContent = currentLang.toUpperCase();
      }
    }
    
    langOptions.forEach(option => {
      const lang = option.getAttribute('data-lang');
      option.classList.toggle('active', lang === currentLang);
    });
  }

  /**
   * Initialize language selector click handlers
   */
  function initLanguageSelector() {
    const langOptions = document.querySelectorAll('.lang-option');
    
    langOptions.forEach(option => {
      option.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = option.getAttribute('data-lang');
        if (lang) {
          switchLanguage(lang);
        }
      });
    });
  }

  /**
   * Initialize
   */
  async function init() {
    const initialLang = getInitialLanguage();
    await loadTranslations(initialLang);
    
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      initLanguageSelector();
      updatePageContent();
    }, 100);
  }

  // Start initialization when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Export for external use
  window.i18n = {
    t,
    switchLanguage,
    getCurrentLang,
    getLanguages: () => LANGUAGES
  };

})();

