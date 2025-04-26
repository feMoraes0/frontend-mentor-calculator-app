import { type ThemeType } from '../../@types';

type ThemeToggleProps = {
  theme: ThemeType;
  onThemeChange: (theme: ThemeType) => void;
};

const ThemeToggle = ({ theme, onThemeChange }: ThemeToggleProps) => {
  return (
    <div>
      <span
        className="
          font-bold text-[12px] tracking-[1px] uppercase
          theme-default:text-[#FFFFFF]
          theme-light:text-[#36362C]
          theme-dark:text-[#FFE53D]
        "
        onClick={() => onThemeChange('light')}
      >
        Theme: {theme}
      </span>
    </div>
  );
};

export default ThemeToggle;
