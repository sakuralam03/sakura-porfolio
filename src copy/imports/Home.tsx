import svgPaths from "./svg-ytz9lkvkgf";
import clsx from "clsx";
import imgImage from "figma:asset/0293ec588352e21d3ab5726ed69e9d5d62ee4f9c.png";
import imgImage1 from "figma:asset/dcdbd311b1424b0d2e063f1dd82a65715cf6de04.png";
import imgImage2 from "figma:asset/d738bb246dfa6444676ea523629ed3ca0c4e1b0a.png";
import imgImage3 from "figma:asset/6a5139c32c47b37421efef6da39c0d9104e89a18.png";
import imgImage4 from "figma:asset/101ff07299229563730e0bb60c6f5610e77851d8.png";
import imgImage5 from "figma:asset/161479c00fcb23413951c68e0ab638903df5f9f5.png";
import imgImage6 from "figma:asset/5f7c39378e2aaeef8aed198718d810706041455f.png";
import imgImage7 from "figma:asset/31cb56d7892dc57dc6ccf7f8961e36b9074b8119.png";
import imgImage8 from "figma:asset/8a79fe7d87b184d0191cd82270902970613ced6d.png";
import imgImage9 from "figma:asset/687829b87cd8373f43e3ba539c53f2f948fdb096.png";
import imgImage10 from "figma:asset/00fd8b9077ac9accfb98fa3af965f7e5891ed63e.png";
import imgImage11 from "figma:asset/9ef8e4684d17c24be4923b4fbd68f9b3d5b02160.png";
import imgImage12 from "figma:asset/821e4263c7a6a0475d924215916a37a05b607c11.png";
import imgImage13 from "figma:asset/c0e0d40f9c3dbf92b1c8b3c73b8455368360b099.png";
import imgImage14 from "figma:asset/b13e21af3ff90931e3e464582f9fc7dc1e2b7712.png";
import imgImage15 from "figma:asset/7685ee6d991e1634c3f6e6e819af8c2f2cf5d9d4.png";
import imgHomescreen from "figma:asset/35590db0d55dd878ef996709c72252e4f7539cde.png";
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <section className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center size-full">{children}</div>
    </section>
  );
}

function Button({ children }: React.PropsWithChildren<{}>) {
  return (
    <button className="bg-black content-stretch cursor-pointer flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-[144px]">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[-0.09px]">
        <p className="leading-[1.45]">{children}</p>
      </div>
    </button>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-black text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] tracking-[-0.72px] w-full">
        <h4 className="block leading-[1.2]">{children}</h4>
      </div>
    </div>
  );
}
type ButtonTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ButtonText({ text, additionalClassNames = "" }: ButtonTextProps) {
  return (
    <button className={clsx("bg-black content-stretch cursor-pointer flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0", additionalClassNames)}>
      <div className="basis-0 flex flex-col font-['Inter:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[-0.09px]">
        <p className="leading-[1.45] overflow-ellipsis overflow-hidden">{text}</p>
      </div>
    </button>
  );
}
type TextTextProps = {
  text: string;
};

function TextText({ text }: TextTextProps) {
  return <Wrapper>{text}</Wrapper>;
}
type HelperheaderTextProps = {
  text: string;
  additionalClassNames?: string;
};

function HelperheaderText({ text, additionalClassNames = "" }: HelperheaderTextProps) {
  return (
    <div className={clsx("flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative text-[64px] text-black tracking-[-1.6px]", additionalClassNames)}>
      <h1 className="[text-decoration-skip-ink:none] [text-underline-position:from-font] block decoration-solid leading-[1.1] underline">{text}</h1>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative size-full" data-name="Home">
      <div className="absolute content-stretch flex flex-col items-center left-[64px] min-h-[1080px] overflow-x-clip overflow-y-auto top-[64px] w-[1280px]" data-name="Homescreen">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHomescreen} />
        <section className="content-stretch flex gap-[64px] h-[766px] items-center justify-center px-[64px] py-0 relative shrink-0 w-[1308px]" data-name="Hero 1">
          <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start justify-end min-h-px min-w-px px-0 py-[40px] relative shrink-0" data-name="Content">
            <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Text">
              <div className="code-behavior-wrapper flex relative shrink-0 tailwind w-[479px]">
                <div className="flex flex-col font-['Inter:Bold','Noto_Sans:Regular',sans-serif] font-bold justify-center leading-[1.1] not-italic relative text-[0px] text-black tracking-[-1.12px] w-[479px]">
                  <h2 className="mb-0">
                    <span className="text-[56px]">{`Hi, I’m `}</span>
                    <span className="font-['Indie_Flower:Regular','Noto_Sans:Regular',sans-serif] text-[#e944c0] text-[65px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
                      Sakura
                    </span>
                    <span className="font-['Indie_Flower:Regular','Noto_Sans:Regular',sans-serif] text-[#e944c0] text-[56px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
                      ❀
                    </span>
                  </h2>
                  <h2 className="block text-[56px]">&nbsp;</h2>
                </div>
              </div>
              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-[rgba(0,0,0,0.55)] tracking-[-0.12px] w-[522px]">
                <p className="leading-[1.45]">{` Currently an undergrad student studying at SUTD , taking on the CyberSecurity Track and AI minor `}</p>
              </div>
            </div>
            <div className="content-center cursor-pointer flex flex-wrap gap-[16px] items-center relative shrink-0 w-full" data-name="Buttons">
              <a className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" href="https://github.com/sakuralam03" />
              <a className="[grid-area:1_/_1] block h-[50px] ml-0 mt-0 relative w-[144px]" href="https://github.com/sakuralam03">
                <div className="absolute bg-black content-stretch flex items-center justify-center left-0 px-[16px] py-[12px] rounded-[12px] top-0" data-name="Primary button" role="link" tabIndex="0">
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[-0.09px] w-[112px]">
                    <p className="leading-[1.45]">Github</p>
                  </div>
                </div>
              </a>
              <a className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0" data-name="Secondary button" href="https://www.linkedin.com/in/sakuralam">
                <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-left tracking-[-0.09px] w-[93px]">
                  <p className="leading-[1.45]">{`  Linkedin`}</p>
                </div>
              </a>
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[636px] items-center justify-center px-0 py-[64px] relative shrink-0 w-[594px]" data-name="Image container">
            <div className="h-[100dvh] overflow-clip shrink-0 tailwind w-[442px]" />
          </div>
        </section>
        <section className="content-stretch flex flex-col items-start p-0 relative shrink-0 w-full" data-name="Container">
          <section className="content-stretch flex flex-col items-start p-0 relative shrink-0 w-full" data-name="Intro">
            <header className="bg-[rgba(113,188,32,0)] h-[223px] relative shrink-0 w-full" data-name="Hero">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pb-[80px] pt-[120px] px-[120px] relative size-full">
                  <div className="basis-0 code-behavior-wrapper flex grow min-h-px min-w-px relative shrink-0 tailwind">
                    <HelperheaderText text="About me" additionalClassNames="text-center w-full" />
                  </div>
                </div>
              </div>
            </header>
            <Wrapper1 additionalClassNames="bg-[rgba(113,188,32,0)] h-[543px]">
              <div className="content-stretch flex gap-[64px] items-center justify-center pb-[120px] pt-0 px-[120px] relative size-full">
                <div className="aspect-[576/388] basis-0 grow min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Image">
                  <img alt="A portrait of you." className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgImage} />
                </div>
                <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] not-italic relative shrink-0 w-[400px]" data-name="Text">
                  <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[36px] text-black tracking-[-0.72px] w-full">
                    <h2 className="block leading-[1.2]">Introduction</h2>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
                    <p className="leading-[1.45]">I’m a student developer with experience in full‑stack projects and a growing interest in cybersecurity. My goal is to design applications that are not only functional but also secure, empowering users with trust and transparency.</p>
                  </div>
                </div>
              </div>
            </Wrapper1>
          </section>
        </section>
        <section className="content-stretch flex flex-col h-[2321px] items-center p-0 relative shrink-0 w-full" data-name="Work">
          <header className="h-[190px] relative shrink-0 w-[1280px]" data-name="Hero">
            <div className="flex flex-row justify-center size-full">
              <div className="content-stretch flex items-start justify-center pb-[80px] pt-[120px] px-[120px] relative size-full">
                <div className="code-behavior-wrapper flex relative shrink-0 tailwind w-[879px]">
                  <HelperheaderText text="Work or Relevant Experience" additionalClassNames="w-[879px]" />
                </div>
              </div>
            </div>
          </header>
          <div className="h-[860px] relative shrink-0 w-[938px]">
            <div className="absolute bottom-[-652px] content-stretch flex flex-col h-[860px] items-start left-[-203px] w-[1270px]" data-name="Web development intern">
              <section className="absolute content-stretch flex h-[1025px] items-start left-0 pb-[120px] pt-[80px] px-[120px] top-0 w-[1280px]" data-name="Text">
                <div className="content-stretch flex flex-col gap-[24px] h-[430px] items-start leading-[0] not-italic px-[160px] py-[80px] relative shrink-0 w-[890px]" data-name="Web Development Intern -Upsilon AI">
                  <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center min-w-full relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-[min-content]">
                    <p className="leading-[1.2]">{`Web Development Intern -Upsilon AI `}</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-black text-nowrap tracking-[-0.09px]">
                    <p className="leading-[1.45]">August - December 2025</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-[min-content]">
                    <ul className="list-disc">
                      <li className="mb-0 ms-[27px]">
                        <span className="leading-[1.45]">{`Developed and refined React + Node.js  components for the company’s website, improving usability and performance.`}</span>
                      </li>
                      <li className="mb-0 ms-[27px]">
                        <span className="leading-[1.45]">Collaborated on Figma frame designs for a partner company’s product, learning how to translate design iterations into functional prototypes.</span>
                      </li>
                      <li className="ms-[27px]">
                        <span className="leading-[1.45]">Gained hands‑on experience in frontend development workflows and design iteration processes, bridging code and design.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[172px] justify-center left-[160px] text-[0px] text-black top-[501px] tracking-[-0.48px] translate-y-[-50%] w-[467px]">
                    <p className="leading-[1.2] mb-0 text-[24px]">Skills picked up:</p>
                    <p className="leading-[1.45] text-[20px] text-[rgba(0,0,0,0.55)] tracking-[-0.1px]">React,Node.js,Frontend Iteration,HTML ,CSS, Figma</p>
                  </div>
                </div>
              </section>
            </div>
            <div className="absolute content-stretch flex h-[510px] items-center justify-between left-[-76px] px-[160px] py-[80px] right-[10px] top-[53px]" data-name="SUTD tracker">
              <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] not-italic relative shrink-0 w-[712px]" data-name="About">
                <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-[560px]">
                  <p className="leading-[1.2]">{`Fullstack Developer - SUTD `}</p>
                </div>
                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-black text-nowrap tracking-[-0.09px]">
                  <p className="leading-[1.45]">October 2025 - January 2026</p>
                </div>
                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[429px] justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-[614px]">
                  <ul className="list-disc mb-0">
                    <li className="mb-0 ms-[27px]">
                      <span className="leading-[1.45]">Designed a study planner web app that allowed students to plan courses across terms.</span>
                    </li>
                    <li className="mb-0 ms-[27px]">
                      <span className="leading-[1.45]">Connected Google Sheets via Sheets API so administrators could update prerequisites, tracks, and minors directly in Excel.</span>
                    </li>
                    <li className="mb-0 ms-[27px]">
                      <span className="leading-[1.45]">Developed the backend in Express with logic to validate credits and requirements, ensuring students met graduation criteria.</span>
                    </li>
                    <li className="mb-0 ms-[27px]">
                      <span className="leading-[1.45]">Integrated MongoDB to store personalized study plans by student ID, enabling persistence and retrieval of data.</span>
                    </li>
                    <li className="mb-0 ms-[27px]">
                      <span className="leading-[1.45]">Built the frontend interface to visualize course selections and connect seamlessly with backend validation.</span>
                    </li>
                    <li className="ms-[27px]">
                      <span className="leading-[1.45]">Created a secure authentication system that allowed students to create new accounts, log in, and reset passwords. Implemented password hashing with bcrypt and session management with JWT tokens to ensure security. Integrated NodeMailer to send password reset links via email, providing a complete flow for account creation, recovery, and protection.</span>
                    </li>
                  </ul>
                  <p className="leading-[1.45]">&nbsp;</p>
                </div>
              </div>
              <div className="absolute bg-[rgba(0,0,0,0.1)] h-px left-[119px] right-[-346px] rounded-[1px] top-[635px]" data-name="Divider" />
            </div>
            <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[172px] justify-center leading-[0] left-[114px] not-italic text-[0px] text-black top-[631px] tracking-[-0.48px] translate-y-[-50%] w-[467px]">
              <p className="leading-[1.2] mb-0 text-[24px]">Skills picked up:</p>
              <p className="leading-[1.45] text-[20px] text-[rgba(0,0,0,0.55)] tracking-[-0.1px]">{`React,Express,MongoDB,HTML ,CSS,Backend Iteration,Javascript, Hosting Fullstack Project `}</p>
            </div>
            <section className="absolute bottom-[-1351px] content-stretch flex h-[898px] items-start left-[-48px] pb-[120px] pt-[80px] px-[120px] right-[-102px]" data-name="Text">
              <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] not-italic relative shrink-0 w-[647px]" data-name="Chiyooda kohan">
                <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center min-w-full relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-[min-content]">
                  <p className="leading-[1.2]">{`Fullstack Development Intern  -Chiyoda Kohan Singapore`}</p>
                </div>
                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-black text-nowrap tracking-[-0.09px]">
                  <p className="leading-[1.45]">October 2025</p>
                </div>
                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-[min-content]">
                  <p className="leading-[1.45] mb-0">&nbsp;</p>
                  <ul className="mb-0">
                    <ul className="list-disc">
                      <li className="mb-0 ms-[54px]">
                        <span className="leading-[1.45]">Built and deployed Chiyoda Kohan Singapore’s official company website from scratch, integrating frontend, backend, and hosting workflows</span>
                      </li>
                      <li className="mb-0 ms-[54px]">
                        <span className="leading-[1.45]">Developed a responsive, modular frontend using Next.js, optimized for clarity and performance.</span>
                      </li>
                      <li className="mb-0 ms-[54px]">
                        <span className="leading-[1.45]">Implemented backend form handling via Formspree, enabling secure contact submissions without server overhead.</span>
                      </li>
                      <li className="ms-[54px]">
                        <span className="leading-[1.45]">Deployed the site on Vercel, configured DNS and domain propagation for their branded domain: chiyodakohan.sg.</span>
                      </li>
                    </ul>
                  </ul>
                  <p className="leading-[1.45]">&nbsp;</p>
                </div>
              </div>
            </section>
            <div className="absolute bottom-[-276.5px] flex h-0 items-center justify-center right-[114.5px] w-[1126.5px]">
              <div className="flex-none scale-y-[-100%]">
                <div className="h-0 relative w-[1126.5px]" data-name="Divider">
                  <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1126.5 0">
                      <path d={svgPaths.p81b6180} fill="var(--fill-0, black)" fillOpacity="0.1" id="Divider" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[-620px] h-0 left-[-1315px] right-[-2289px]" data-name="Divider">
              <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4542 0">
                  <path d={svgPaths.p10b14980} fill="var(--fill-0, black)" fillOpacity="0.1" id="Divider" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-[-1053px] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[172px] justify-center leading-[0] left-[114px] not-italic text-[0px] text-black tracking-[-0.48px] translate-y-[50%] w-[467px]">
              <p className="leading-[1.2] mb-0 text-[24px]">Skills picked up:</p>
              <p className="leading-[1.45] text-[20px] text-[rgba(0,0,0,0.55)] tracking-[-0.1px]">React,Javascript,HTML, CSS,Hosting Domain , Node.js</p>
            </div>
          </div>
        </section>
        <section className="content-stretch flex flex-col h-[3258px] items-center p-0 relative shrink-0 w-full" data-name="Projects">
          <div className="code-behavior-wrapper flex relative shrink-0 tailwind w-[1022px]">
            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative text-[64px] text-black text-center tracking-[-1.6px] w-[1022px]">
              <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[1.1] underline">Projects</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[64px] h-[567px] items-center justify-center pb-[40px] pt-[120px] px-[64px] relative shrink-0 w-[1280px]" data-name="Webdevelopment">
            <div className="basis-0 content-stretch flex flex-col gap-[48px] grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
              <TextText text="Web Development Projects" />
              <Button>{`See  All `}</Button>
            </div>
            <div aria-hidden="true" className="basis-0 grow h-[432px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Image" role="presentation">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgImage1} />
            </div>
          </div>
          <div className="content-stretch flex gap-[64px] h-[567px] items-center justify-center pb-[120px] pt-[40px] px-[64px] relative shrink-0 w-[1280px]" data-name="Cybersecurity">
            <div aria-hidden="true" className="basis-0 grow h-[432px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Image" role="presentation">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgImage2} />
            </div>
            <div className="basis-0 content-stretch flex flex-col gap-[48px] grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
              <Wrapper>{`CyberSecurity Projects `}</Wrapper>
              <ButtonText text="See All" additionalClassNames="w-[162px]" />
            </div>
          </div>
          <div className="content-stretch flex gap-[64px] h-[571px] items-center justify-center pb-[40px] pt-[120px] px-[64px] relative shrink-0 w-[1280px]" data-name="App development">
            <div className="basis-0 content-stretch flex flex-col gap-[48px] grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
              <TextText text="App Development Projects" />
              <Button>See All</Button>
            </div>
            <div aria-hidden="true" className="basis-0 grow h-[432px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Image" role="presentation">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgImage3} />
            </div>
          </div>
          <div className="content-stretch flex gap-[64px] h-[592px] items-center justify-center pb-[120px] pt-[40px] px-[64px] relative shrink-0 w-[1280px]" data-name="Game Development">
            <div aria-hidden="true" className="basis-0 grow h-[432px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Image" role="presentation">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgImage4} />
            </div>
            <div className="basis-0 content-stretch flex flex-col gap-[48px] grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
              <Wrapper>{`Game  Development  Projects`}</Wrapper>
              <ButtonText text="See All" additionalClassNames="w-[144px]" />
            </div>
          </div>
          <div className="content-stretch flex gap-[64px] h-[518px] items-center justify-center pb-[40px] pt-[120px] px-[64px] relative shrink-0 w-[1280px]" data-name="Other Projecrts">
            <div className="basis-0 content-stretch flex flex-col gap-[48px] grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
              <TextText text="Other Projects" />
              <Button>{`See All `}</Button>
            </div>
            <div aria-hidden="true" className="basis-0 grow h-[432px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Image" role="presentation">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgImage5} />
            </div>
          </div>
        </section>
        <section className="content-stretch flex flex-col h-[2281px] items-start p-0 relative shrink-0" data-name="Certs">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg]">
              <header className="content-stretch flex h-[181px] items-center justify-center pl-0 pr-[120px] py-0 relative w-[1280px]" data-name="Hero">
                <div className="code-behavior-wrapper flex relative shrink-0 tailwind">
                  <div className="flex items-center justify-center size-full">
                    <div className="flex-none rotate-[180deg]">
                      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[146px] justify-center leading-[0] not-italic relative text-[0px] text-black tracking-[-1.6px] w-[681px]">
                        <h1 className="leading-[1.1] text-[64px]">
                          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Bold',sans-serif] font-bold not-italic tracking-[-1.6px] underline">Hackerthons,CTFs and Certifications</span>{" "}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
            </div>
          </div>
          <Wrapper1 additionalClassNames="h-[521px]">
            <div className="content-stretch flex gap-[48px] items-center justify-center pb-[80px] pt-[120px] px-[120px] relative size-full">
              <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Card 1">
                <div className="aspect-[552/414] relative rounded-[16px] shrink-0 w-full" data-name="Image">
                  <img alt="Project" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgImage6} />
                </div>
                <div className="content-stretch flex items-baseline justify-between leading-[0] not-italic relative shrink-0 text-nowrap w-full" data-name="Text">
                  <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-black tracking-[-0.48px]">
                    <p className="leading-[1.2]">{`Tiktok Techjam Hackerthon `}</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px]">
                    <p className="leading-[1.45]">2025</p>
                  </div>
                </div>
              </div>
              <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Card 2">
                <div className="aspect-[552/414] relative rounded-[16px] shrink-0 w-full" data-name="Image">
                  <img alt="Project" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgImage7} />
                </div>
                <div className="content-stretch flex items-baseline justify-between leading-[0] not-italic relative shrink-0 text-nowrap w-full" data-name="Text">
                  <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-black tracking-[-0.48px]">
                    <p className="leading-[1.2]">{`TISC CTF Participant `}</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px]">
                    <p className="leading-[1.45]">2025</p>
                  </div>
                </div>
              </div>
            </div>
          </Wrapper1>
          <Wrapper1 additionalClassNames="h-[478px]">
            <div className="content-stretch flex gap-[48px] items-center justify-center pb-[80px] pt-0 px-[120px] relative size-full">
              <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Card 1">
                <div className="aspect-[552/414] relative rounded-[16px] shrink-0 w-full" data-name="Image">
                  <img alt="Project" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgImage8} />
                </div>
                <div className="content-stretch flex items-baseline justify-between leading-[0] not-italic relative shrink-0 text-nowrap w-full" data-name="Text">
                  <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-black tracking-[-0.48px]">
                    <p className="leading-[1.2]">{`TRM Crypto Compliance Certificate `}</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px]">
                    <p className="leading-[1.45]">2025</p>
                  </div>
                </div>
              </div>
              <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Card 2">
                <div className="aspect-[552/414] relative rounded-[16px] shrink-0 w-full" data-name="Image">
                  <img alt="Project" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgImage9} />
                </div>
                <div className="content-stretch flex items-baseline justify-between leading-[0] not-italic relative shrink-0 text-nowrap w-full" data-name="Text">
                  <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-black tracking-[-0.48px]">
                    <p className="leading-[1.2]">{`Google CyberSecurity Certs `}</p>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px]">
                    <p className="leading-[1.45]">2025</p>
                  </div>
                </div>
              </div>
            </div>
          </Wrapper1>
          <section className="content-stretch flex gap-[48px] h-[567px] items-center justify-center pb-[80px] pt-0 px-[120px] relative shrink-0 w-[1280px]" data-name="Feature cards">
            <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Card 1">
              <div className="aspect-[552/414] relative rounded-[16px] shrink-0 w-full" data-name="Image">
                <img alt="Project" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgImage10} />
              </div>
              <div className="content-stretch flex items-baseline justify-between leading-[0] not-italic relative shrink-0 text-nowrap w-full" data-name="Text">
                <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-black tracking-[-0.48px]">
                  <p className="leading-[1.2]">{`Brainhack CDDC Participant `}</p>
                </div>
                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px]">
                  <p className="leading-[1.45]">2025</p>
                </div>
              </div>
            </div>
            <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Card 2">
              <div className="aspect-[552/414] relative rounded-[16px] shrink-0 w-full" data-name="Image">
                <img alt="Project" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgImage11} />
              </div>
              <div className="content-stretch flex items-baseline justify-between leading-[0] not-italic relative shrink-0 text-nowrap w-full" data-name="Text">
                <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-black tracking-[-0.48px]">
                  <p className="leading-[1.2]">{`Crypto Investigation &Compliance 101 `}</p>
                </div>
                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px]">
                  <p className="leading-[1.45]">2025</p>
                </div>
              </div>
            </div>
          </section>
          <section className="content-stretch flex gap-[48px] h-[567px] items-center justify-center pb-[80px] pt-0 px-[120px] relative shrink-0 w-[1280px]" data-name="Feature cards">
            <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Card 1">
              <div className="aspect-[552/414] relative rounded-[16px] shrink-0 w-full" data-name="Image">
                <img alt="Project" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgImage12} />
              </div>
              <div className="content-stretch flex items-baseline justify-between leading-[0] not-italic relative shrink-0 text-nowrap w-full" data-name="Text">
                <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-black tracking-[-0.48px]">
                  <p className="leading-[1.2]">{`Hex Advent  CTF 2025  `}</p>
                </div>
                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px]">
                  <p className="leading-[1.45]">2025</p>
                </div>
              </div>
            </div>
            <div className="basis-0 grow h-[29px] min-h-px min-w-px rounded-[8px] shrink-0" data-name="Card 2" />
          </section>
        </section>
        <section className="content-stretch flex h-[198px] items-center justify-center overflow-clip px-0 py-[48px] relative shrink-0 w-[1280px]" data-name="Volunteer">
          <header className="content-stretch flex items-start justify-center pb-[80px] pt-[120px] px-[120px] relative shrink-0 w-[1280px]" data-name="Hero">
            <div className="code-behavior-wrapper flex relative shrink-0 tailwind">
              <HelperheaderText text="Volunteer" additionalClassNames="text-nowrap" />
            </div>
          </header>
        </section>
        <section className="content-stretch flex gap-[32px] h-[1411px] items-start justify-center px-[64px] py-[120px] relative shrink-0 w-[1280px]" data-name="Volunteer">
          <div className="content-stretch flex flex-col gap-[32px] h-[912.739px] items-start max-w-[388px] min-w-[336px] relative rounded-[8px] shrink-0 w-[388px]" data-name="Card 2">
            <div aria-hidden="true" className="h-[501px] relative rounded-[16px] shrink-0 w-[376px]" data-name="Image" role="presentation">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgImage13} />
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-full">
                <h5 className="block leading-[1.2]">WebDevelopment Worekshop facilitator</h5>
              </div>
              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
                <p className="leading-[1.45]">Taught fundamentals of frontend and backend development, covering core concepts and practical workflows. Demonstrated how to host websites and run dry‑runs to prepare students for deployment. Provided hands‑on support, moving around the room to assist participants with troubleshooting and implementation. Helped students gain confidence in applying web technologies to real projects</p>
              </div>
            </div>
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start max-w-[388px] min-h-px min-w-[336px] relative rounded-[8px] shrink-0" data-name="Card 2">
            <div aria-hidden="true" className="aspect-[362.66668701171875/483] relative rounded-[16px] shrink-0 w-full" data-name="Image" role="presentation">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgImage14} />
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Text">
              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-full">
                <h5 className="block leading-[1.2]">Design Facilitator for WHAT-THE-HACK Hackerthon</h5>
              </div>
              <div className="flex flex-col font-['Inter:Medium','Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[1.45] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
                <p className="mb-[16px]">{`Guided participants through design thinking, ideation, and prototyping during a fast-paced hackathon. `}</p>
                <p className="mb-[16px]"> </p>
                <p className="mb-[16px]">{`Supported teams in developing user-centric solutions . `}</p>
                <p className="mb-[16px]"> </p>
                <p>Fostered collaboration, creativity, and rapid iteration under tight time constraints.</p>
              </div>
            </div>
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start max-w-[388px] min-h-px min-w-[336px] relative rounded-[8px] shrink-0" data-name="Card 3">
            <div aria-hidden="true" className="aspect-[362.66668701171875/483] relative rounded-[16px] shrink-0 w-full" data-name="Image" role="presentation">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgImage15} />
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Text">
              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-full">
                <h5 className="block leading-[1.2]">Cybersecurity IG CISS RED Team Techwriter Volunteer</h5>
              </div>
              <div className="flex flex-col font-['Inter:Medium','Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[1.45] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
                <p className="mb-0">{`1.Manage the attack objective sheet along with judges  `}</p>
                <p className="mb-0">{`2. The enter significant actions of RTs for each time stamp in a shared sheet  `}</p>
                <p className="mb-0">{`3. To keep a lookout on all RT screens to identify notable actions ( such as enumeration , initial access , modification ) `}</p>
                <p className="mb-0">{`4. To interact with judges to describe state of exercise `}</p>
                <p className="mb-0"> </p>
                <p>{`Learnt alot about Cyber Physical Systems `}</p>
              </div>
            </div>
          </div>
        </section>
        <footer className="h-[162px] relative shrink-0 w-full" data-name="Footer 1">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold items-center justify-between not-italic p-[64px] relative size-full text-[rgba(0,0,0,0.55)]">
              <div className="basis-0 flex flex-col grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[24px] tracking-[-0.48px]">
                <p className="leading-[1.2]">Let’s work together</p>
              </div>
              <div className="flex flex-col h-[65px] justify-center leading-[1.45] relative shrink-0 text-[20px] tracking-[-0.1px] w-[318px]">
                <p className="mb-0">Number : 87981341</p>
                <p>Email:sakuralam03@gmail.com</p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
        </footer>
      </div>
    </div>
  );
}