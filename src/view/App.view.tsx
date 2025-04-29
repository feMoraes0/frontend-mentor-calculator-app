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
        py-[31px] px-6 h-screen w-screen box-border flex items-start justify-center md:pt-24
        theme-default:bg-[#3A4663]
        theme-light:bg-[#E6E6E6]
        theme-dark:bg-[#17062A]
      "
    >
      <div className="md:w-[540px]">
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
            md:text-[56px] md:leading-[52px] md:tracking-[-0.93px] md:pt-10 md:px-8 md:pb-9
            theme-default:bg-[#181F33] theme-default:text-[#FFFFFF]
            theme-light:bg-[#EEEEEE] theme-light:text-[#36362C]
            theme-dark:bg-[#1E0936] theme-dark:text-[#FFE53D]
          "
        >
          {displayValue}
        </h1>
        <section
          className="
            rounded-[10px] p-6 md:pt-8 md:px-[30px]
            theme-default:bg-[#242D44]
            theme-light:bg-[#D2CDCD]
            theme-dark:bg-[#1E0936]
          "
        >
          <div
            className="
              grid grid-cols-4 grid-rows-4 gap-x-[13px] gap-y-[17px]
              md:gap-x-[25px] md:gap-y-[28px]
            "
          >
            {numpadNumbers.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`
                    rounded-[5px] font-bold tracking-[-0.53px] px-3 pt-[10px] h-[60px] flex items-center justify-center cursor-pointer
                    md:tracking-[-0.67px]
                    ${
                      item === 'DEL'
                        ? 'text-[20px] tracking-[-0.33px] md:text-[28px] md:leading-[40px] md:tracking-[-0.47px] \
                          theme-default:shadow-[0_4px_0_#414E73] theme-default:bg-[#647198] theme-default:text-[#FFFFFF] theme-default:hover:bg-[#A2B2E1] \
                          theme-light:shadow-[0_4px_0_#1B6066] theme-light:bg-[#378187] theme-light:text-[#FFFFFF] theme-light:hover:bg-[#62B5BC] \
                          theme-dark:shadow-[0_4px_0_#BE15F4] theme-dark:bg-[#56077C] theme-dark:text-[#FFFFFF] theme-dark:hover:bg-[#8631AF]'
                        : 'text-[32px] md:text-[40px] \
                          theme-default:shadow-[0_4px_0_#B3A497] theme-default:bg-[#EAE3DC] theme-default:text-[#434A59] theme-default:hover:bg-[#FFFFFE] \
                          theme-light:shadow-[0_4px_0_#A79E91] theme-light:bg-[#E5E4E1] theme-light:hover:bg-[#FFFFFF] \
                          theme-dark:shadow-[0_4px_0_#881C9E] theme-dark:bg-[#331C4D] theme-dark:text-[#FFE53D] theme-dark:hover:bg-[#6C34AC]'
                    }
                  `}
                  onClick={() => onPadClick(String(item))}
                >
                  {item}
                </button>
              );
            })}
          </div>
          <div
            className="
              grid grid-cols-2 gap-x-[13px] mt-[15px] mb-[4px]
              md:gap-[25px] md:mt-[24px]
            "
          >
            {numpadEnd.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`
                      rounded-[5px] font-bold text-[20px] tracking-[-0.33px] px-3 pt-[10px] h-[60px] flex items-center justify-center cursor-pointer
                      md:text-[28px] md:leading-[40px] md:tracking-[-0.47px]
                      ${
                        item === 'RESET'
                          ? 'theme-default:shadow-[0_4px_0_#414E73] theme-default:bg-[#647198] theme-default:text-[#FFFFFF] theme-default:hover:bg-[#A2B2E1] \
                            theme-light:shadow-[0_4px_0_#1B6066] theme-light:bg-[#378187] theme-light:text-[#FFFFFF] theme-light:hover:bg-[#62B5BC] \
                            theme-dark:shadow-[0_4px_0_#BE15F4] theme-dark:bg-[#56077C] theme-dark:text-[#FFFFFF] theme-dark:hover:bg-[#8631AF]'
                          : 'theme-default:shadow-[0_4px_0_#93261A] theme-default:bg-[#D03F2F] theme-default:text-[#FFFFFF] theme-default:hover:bg-[#F96B5B] \
                            theme-light:shadow-[0_4px_0_#873901] theme-light:bg-[#C85402] theme-light:text-[#FFFFFF] theme-light:hover:bg-[#FF8A38] \
                            theme-dark:shadow-[0_4px_0_#6CF9F1] theme-dark:bg-[#00DED0] theme-dark:text-[#1A2327] theme-dark:hover:bg-[#93FFF8]'
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
      </div>
    </main>
  );
};

export default AppView;
