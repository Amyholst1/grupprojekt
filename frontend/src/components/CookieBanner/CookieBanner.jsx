import { useState, useEffect } from "react";
import "./CookieBanner.css";
import PrivacyPolicy from "./PrivacyPolicy";

const CATEGORIES = [
  {
    key: "necessary",
    label: "Necessary",
    description: "Required for the site to function. Cannot be disabled.",
    locked: true,
  },
  {
    key: "functional",
    label: "Functional",
    description: "Remember your preferences like language or layout.",
  },
  {
    key: "analytics",
    label: "Measurement",
    description: "Anonymised statistics on how you use our site.",
  },
  {
    key: "marketing",
    label: "Marketing",
    description: "Used to show relevant ads and track campaigns.",
  },
];

const DEFAULT_PREFS = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
};

function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);
  const [prefs, setPrefs] = useState(DEFAULT_PREFS);

  useEffect(() => {
    const saved = localStorage.getItem("cookieChoice");
    if (!saved) setVisible(true);
  }, []);

  function save(preferences) {
    localStorage.setItem("cookieChoice", JSON.stringify(preferences));
    setVisible(false);
  }

  function handleAcceptAll() {
    save({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    });
  }

  function handleRejectAll() {
    save(DEFAULT_PREFS);
  }

  function handleSavePrefs() {
    save(prefs);
  }

  function toggle(key) {
    setPrefs((p) => ({ ...p, [key]: !p[key] }));
  }

  if (!visible) return null;

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-label="Cookie preferences"
    >
      <div className="cookie-banner__inner">
        {/* Row 1: icon + title */}
        <div className="cookie-banner__row1">
          <span className="cookie-banner__icon">🍪</span>
          <h4 className="cookie-banner__title">Cookie settings</h4>
        </div>

        {/* Row 2: text + buttons */}
        <div className="cookie-banner__row2">
          <p className="cookie-banner__text">
            We use cookies to improve your experience, analyse site usage, and
            support marketing. Only necessary cookies are active by default.
          </p>
          <div className="cookie-banner__primary">
            <button
              className="cookie-banner__btn cookie-banner__btn--outline"
              onClick={handleRejectAll}
            >
              Reject all
            </button>
            <button
              className="cookie-banner__btn cookie-banner__btn--outline"
              onClick={handleAcceptAll}
            >
              Accept all
            </button>
          </div>
        </div>

        {/* Row 3: footer links */}
        <div className="cookie-banner__footer">
          <button
            className="cookie-banner__btn--ghost"
            onClick={() => {
              setShowPolicy((p) => !p);
              setExpanded(false); // close preferences if open
            }}
          >
            {showPolicy ? "Hide details" : "Cookie policy"}
          </button>
          <span className="cookie-banner__sep">·</span>
          <button
            className="cookie-banner__btn--ghost"
            onClick={() => {
              setExpanded((e) => !e);
              setShowPolicy(false); // close policy if open
            }}
          >
            {expanded ? "Hide settings" : "Manage preferences"}
          </button>
        </div>

        {/* Cookie policy — inline expand */}
        {showPolicy && (
          <div className="cookie-banner__categories">
            <PrivacyPolicy />
          </div>
        )}

        {/* Manage preferences — inline expand */}
        {expanded && (
          <div className="cookie-banner__categories">
            {CATEGORIES.map((cat) => (
              <label key={cat.key} className="cookie-cat">
                <div className="cookie-cat__info">
                  <span className="cookie-cat__label">{cat.label}</span>
                  <span className="cookie-cat__desc">{cat.description}</span>
                </div>
                <div
                  className={`cookie-toggle ${prefs[cat.key] ? "on" : ""} ${cat.locked ? "locked" : ""}`}
                  onClick={() => !cat.locked && toggle(cat.key)}
                  role="switch"
                  aria-checked={prefs[cat.key]}
                  tabIndex={cat.locked ? -1 : 0}
                >
                  <span className="cookie-toggle__thumb" />
                </div>
              </label>
            ))}
            <div className="cookie-banner__save-row">
              <p className="cookie-banner__note">
                You may update preferences at any time via the cookie settings
                link at the bottom of the page.
              </p>
              <button
                className="cookie-banner__btn cookie-banner__btn--outline"
                onClick={handleSavePrefs}
              >
                Save preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CookieBanner;
