import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, Settings, Cookie } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = "ti_cookie_consent";
const COOKIE_PREFERENCES_KEY = "ti_cookie_preferences";

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

// Simple helper to get localized GDPR link without context dependency
const getGdprLink = () => {
  const lang = i18n.language;
  return lang === 'en' ? '/en/gdpr-cookies' : '/gdpr-cookies';
};

export const CookieConsent = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else {
      const savedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);
      if (savedPreferences) {
        setPreferences(JSON.parse(savedPreferences));
      }
    }
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setIsVisible(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const acceptNecessary = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const saveCustomPreferences = () => {
    saveConsent(preferences);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card/95 backdrop-blur-md border-t border-border shadow-lg animate-in slide-in-from-bottom duration-300">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="text-sm text-muted-foreground">
              <p>
                {t('cookies.banner.message')}{" "}
                <Link to={getGdprLink()} className="text-primary hover:underline">
                  {t('cookies.banner.moreInfo')}
                </Link>
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSettings(true)}
              className="text-muted-foreground hover:text-foreground"
            >
              <Settings className="w-4 h-4 mr-1" />
              {t('cookies.banner.settings')}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={acceptNecessary}
              className="border-primary/30 hover:border-primary"
            >
              {t('cookies.banner.onlyNecessary')}
            </Button>
            <Button
              size="sm"
              onClick={acceptAll}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {t('cookies.banner.acceptAll')}
            </Button>
          </div>
        </div>
      </div>

      {/* Settings Dialog */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="sm:max-w-lg bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground flex items-center gap-2">
              <Cookie className="w-5 h-5 text-primary" />
              {t('cookies.dialog.title')}
            </DialogTitle>
            <DialogDescription>
              {t('cookies.dialog.description')}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            {/* Necessary */}
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-foreground font-medium">{t('cookies.dialog.necessary.title')}</Label>
                <p className="text-xs text-muted-foreground">
                  {t('cookies.dialog.necessary.description')}
                </p>
              </div>
              <Switch checked disabled className="data-[state=checked]:bg-primary" />
            </div>

            {/* Analytics */}
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-foreground font-medium">{t('cookies.dialog.analytics.title')}</Label>
                <p className="text-xs text-muted-foreground">
                  {t('cookies.dialog.analytics.description')}
                </p>
              </div>
              <Switch
                checked={preferences.analytics}
                onCheckedChange={(checked) =>
                  setPreferences((prev) => ({ ...prev, analytics: checked }))
                }
                className="data-[state=checked]:bg-primary"
              />
            </div>

            {/* Marketing */}
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-foreground font-medium">{t('cookies.dialog.marketing.title')}</Label>
                <p className="text-xs text-muted-foreground">
                  {t('cookies.dialog.marketing.description')}
                </p>
              </div>
              <Switch
                checked={preferences.marketing}
                onCheckedChange={(checked) =>
                  setPreferences((prev) => ({ ...prev, marketing: checked }))
                }
                className="data-[state=checked]:bg-primary"
              />
            </div>
          </div>

          <div className="flex justify-between gap-2 pt-2 border-t border-border">
            <Button
              variant="ghost"
              onClick={() => setShowSettings(false)}
              className="text-muted-foreground"
            >
              {t('cookies.dialog.cancel')}
            </Button>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={acceptNecessary}
                className="border-primary/30"
              >
                {t('cookies.banner.onlyNecessary')}
              </Button>
              <Button
                onClick={saveCustomPreferences}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {t('cookies.dialog.save')}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

// Helper hook to check cookie preferences
export const useCookiePreferences = (): CookiePreferences => {
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_PREFERENCES_KEY);
    if (saved) {
      setPreferences(JSON.parse(saved));
    }
  }, []);

  return preferences;
};
