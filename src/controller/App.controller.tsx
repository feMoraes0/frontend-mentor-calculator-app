import { useEffect, useState } from 'react';
import { type ThemeType } from '../@types';
import AppView from '../view/App.view';
import simpleCalculation from '../usecase/simpleCalculation';

const AppController = () => {
  const operators = ['+', '-', 'x', '/'];
  const [theme, setTheme] = useState<ThemeType>('default');
  const [displayValue, setDisplayValue] = useState<string>('0');

  const triggerThemeChange = () => {
    setTheme((prev) => {
      if (prev === 'default') return 'light';
      if (prev === 'light') return 'dark';
      return 'default';
    });
  };

  const onPadClick = (item: string) => {
    if (item === 'RESET') {
      setDisplayValue('0');
      return;
    }

    if (item === 'DEL') {
      setDisplayValue((prev) => {
        const base = prev.slice(0, -1);
        return !base.length ? '0' : base;
      });
      return;
    }

    if (operators.includes(item)) {
      setDisplayValue((prev) => prev + ' ' + item + ' ');
      return;
    }

    if (item === '=') {
      const result = simpleCalculation.handle(displayValue);
      setDisplayValue(result);
      return;
    }

    setDisplayValue((prev) =>
      prev === '0' || prev === 'ERROR' ? item : prev + item,
    );
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <AppView
      theme={theme}
      displayValue={displayValue}
      onPadClick={onPadClick}
      triggerThemeChange={triggerThemeChange}
    />
  );
};

export default AppController;
