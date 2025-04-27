import { numpadNumbers, numpadEnd } from '../utils/numpad';
import { type ThemeType } from '../@types';
import ThemeToggle from './elements/ThemeToggle.element';

type AppViewProps = {
  theme: ThemeType;
  displayValue: string;
  onPadClick: (item: string) => void;
  triggerThemeChange: () => void;
};

const AppView = ({
  theme,
  displayValue,
  onPadClick,
  triggerThemeChange,
}: AppViewProps) => {
  return (
    <main
      className="
        py-[31px] px-6 h-screen w-screen box-border
        theme-default:bg-[#3A4663]
        theme-light:bg-[#E6E6E6]
        theme-dark:bg-[#17062A]
      "
    >
      <header className="flex flex-row justify-between items-end mb-8">
        <a
          href="/"
          className="
            font-bold text-[32px] tracking-[-0.53px] leading-[29px] mb-[3px]
            theme-default:text-[#FFFFFF]
            theme-light:text-[#36362C]
            theme-dark:text-[#FFE53D]"
        >
          calc
        </a>
        <ThemeToggle theme={theme} triggerThemeChange={triggerThemeChange} />
      </header>
      <h1
        className="
          text-[40px] leading-[37px] font-bold tracking-[-0.67px] w-full px-6 pt-[29px] pb-[22px] rounded-[10px] text-right mb-6
          theme-default:bg-[#181F33] theme-default:text-[#FFFFFF]
          theme-light:bg-[#EEEEEE] theme-light:text-[#36362C]
          theme-dark:bg-[#1E0936] theme-dark:text-[#FFE53D]
        "
      >
        {displayValue}
      </h1>
      <section
        className="
          rounded-[10px] p-6
          theme-default:bg-[#242D44]
          theme-light:bg-[#D2CDCD]
          theme-dark:bg-[#1E0936]
        "
      >
        <div className="grid grid-cols-4 grid-rows-4 gap-x-[13px] gap-y-[17px]">
          {numpadNumbers.map((item, index) => {
            return (
              <button
                key={index}
                className={`
                  rounded-[5px] font-bold tracking-[-0.53px] px-3 pt-[10px] h-[60px] flex items-center justify-center cursor-pointer
                  ${
                    item === 'DEL'
                      ? 'text-[20px] tracking-[-0.33px] \
                        theme-default:shadow-[0_4px_0_#414E73] theme-default:bg-[#647198] theme-default:text-[#FFFFFF] \
                        theme-light:shadow-[0_4px_0_#1B6066] theme-light:bg-[#378187] theme-light:text-[#FFFFFF] \
                        theme-dark:shadow-[0_4px_0_#BE15F4] theme-dark:bg-[#56077C] theme-dark:text-[#FFFFFF]'
                      : 'text-[32px] \
                        theme-default:shadow-[0_4px_0_#B3A497] theme-default:bg-[#EAE3DC] theme-default:text-[#434A59] \
                        theme-light:shadow-[0_4px_0_#A79E91] theme-light:bg-[#E5E4E1] \
                        theme-dark:shadow-[0_4px_0_#881C9E] theme-dark:bg-[#331C4D] theme-dark:text-[#FFE53D]'
                  }
                `}
                onClick={() => onPadClick(String(item))}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-2 gap-x-[13px] mt-[15px] mb-[4px]">
          {numpadEnd.map((item, index) => {
            return (
              <button
                key={index}
                className={`
                    rounded-[5px] font-bold text-[20px] tracking-[-0.33px] px-3 pt-[10px] h-[60px] flex items-center justify-center cursor-pointer
                    ${
                      item === 'RESET'
                        ? 'theme-default:shadow-[0_4px_0_#414E73] theme-default:bg-[#647198] theme-default:text-[#FFFFFF] \
                           theme-light:shadow-[0_4px_0_#1B6066] theme-light:bg-[#378187] theme-light:text-[#FFFFFF]\
                           theme-dark:shadow-[0_4px_0_#BE15F4] theme-dark:bg-[#56077C] theme-dark:text-[#FFFFFF]'
                        : 'theme-default:shadow-[0_4px_0_#93261A] theme-default:bg-[#D03F2F] theme-default:text-[#FFFFFF] \
                           theme-light:shadow-[0_4px_0_#873901] theme-light:bg-[#C85402] theme-light:text-[#FFFFFF] \
                           theme-dark:shadow-[0_4px_0_#6CF9F1] theme-dark:bg-[#00DED0] theme-dark:text-[#1A2327]'
                    }

                  `}
                onClick={() => onPadClick(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default AppView;
