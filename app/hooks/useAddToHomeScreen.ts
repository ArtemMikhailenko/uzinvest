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
    // Для iOS - показываем визуальную инструкцию
    if (/iPhone|iPad|iPod/.test(navigator.userAgent) && !deferredPrompt) {
      // Проверяем, запущено ли приложение в standalone режиме
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches || 
                          (window.navigator as any).standalone;
      
      if (!isStandalone) {
        alert('Для добавления на главный экран:\n\n1. Нажмите кнопку "Поделиться" (⬆️) внизу Safari\n2. Прокрутите и выберите "На экран Домой"\n3. Нажмите "Добавить"');
      }
      return;
    }

    if (!deferredPrompt) {
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
