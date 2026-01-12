'use client';

import { useState, useEffect } from 'react';

export function useAddToHomeScreen() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const promptInstall = async () => {
    if (!deferredPrompt) {
      // Для iOS - показываем инструкцию
      if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
        alert('Чтобы добавить на главный экран:\n1. Нажмите кнопку "Поделиться" внизу\n2. Выберите "На экран Домой"\n3. Нажмите "Добавить"');
        return;
      }
      alert('Приложение уже установлено или установка недоступна');
      return;
    }

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('Пользователь добавил приложение');
    }
    
    setDeferredPrompt(null);
    setIsInstallable(false);
  };

  return { promptInstall, isInstallable };
}
