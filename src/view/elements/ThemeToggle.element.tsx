import { type ThemeType } from '../../@types';

type ThemeToggleProps = {
  theme: ThemeType;
  triggerThemeChange: () => void;
};

const ThemeToggle = ({ triggerThemeChange }: ThemeToggleProps) => {
  return (
    <div className="flex flex-row items-end gap-[26px]">
      <span
        className="
          font-bold text-[12px] tracking-[1px] uppercase
          theme-default:text-[#FFFFFF]
          theme-light:text-[#36362C]
          theme-dark:text-[#FFE53D]
        "
      >
        Theme:
      </span>
      <div className="flex flex-col items-start justify-start cursor-pointer">
        <div className="w-full flex flex-row justify-between px-[9px]">
          {new Array(3).fill('').map((_, index) => (
            <span
              key={index}
              className="
                text-[12px] font-bold
                theme-default:text-[#FFFFFF]
                theme-light:text-[#36362C]
                theme-dark:text-[#FFE53D]
              "
            >
              {index + 1}
            </span>
          ))}
        </div>
        <div
          className="
            w-[71px] h-[26px] rounded-[13px] p-[5px]
            theme-default:bg-[#242D44]
            theme-light:bg-[#D2CDCD]
            theme-dark:bg-[#1E0936]
          "
          onClick={() => triggerThemeChange()}
        >
          <div
            className="
              w-4 h-4 rounded-full
              theme-default:bg-[#D03F2F]
              theme-light:bg-[#C85402] theme-light:ml-[23px]
              theme-dark:bg-[#00DED0] theme-dark:ml-[45px]
            "
          />
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
