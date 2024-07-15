import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import BlueBtn from "../../buttons/BlueBtn/BlueBtn";
import {
  BannerText,
  BannerTextContent,
  BlueBtnAnimation,
  BlueBtnsWrapper,
  ContainerBg,
  Slogan,
  SloganAccent,
  SloganSubtitle,
} from "./Banner.style";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { RefObject } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  forwardedRef: RefObject<HTMLDivElement>;
}

export default function Banner({ forwardedRef }: Props) {
  const { t } = useTranslation();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  gsap.registerPlugin(ScrollToPlugin);

  function scrollTo(target: any) {
    gsap.to(window, { duration: 1, scrollTo: target });
  }

  return (
    <ContainerBg>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 100,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "bubble",
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />

      <BannerText>
        <BannerTextContent>
          <Slogan>{t('banner.title')}</Slogan>
          <SloganSubtitle>
            <SloganAccent>{t('banner.smart')}</SloganAccent>{t('banner.subTitle')}
          </SloganSubtitle>
          <BlueBtnsWrapper>
            <BlueBtnAnimation>
              <BlueBtn onClick={() => scrollTo(forwardedRef.current)}>
                Усі товари
              </BlueBtn>
            </BlueBtnAnimation>
            <BlueBtnAnimation>
              <BlueBtn>Усі товари </BlueBtn>
            </BlueBtnAnimation>
          </BlueBtnsWrapper>
        </BannerTextContent>
      </BannerText>
    </ContainerBg>
  );
}