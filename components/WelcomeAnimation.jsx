import React, { useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";
const WelcomeAnimation = () => {
  const welcome = useRef();
  const welcomeTxt = useRef();
  const secondeBox = useRef();
  const t1 = gsap.timeline();
  useEffect(() => {
    t1.from(welcomeTxt.current, {
      y: "100%",
      opacity: 0,
      ease: Power3.easeInOut,
      duration: 1,
    }).to(
      welcome.current,
      { y: "-100%", duration: 3, display: "hidden", ease: Power3.easeInOut },
      0.6
    )
    .to(secondeBox.current,{ y: "-100%", duration: 3, display: "hidden", ease: Power3.easeInOut },
   0.8)
   
  }, []);
  return (
    <>
      <div ref={welcome} className="h-screen px-4 z-10 w-screen grid place-items-center fixed bg-dark-purple">
            <h1 ref={welcomeTxt} className="text-center font-semibold text-5xl text-high-green">Welcome To Our WebSite</h1>
            
        </div>
      <div ref={secondeBox} className="h-screen w-screen fixed bg-light-yellow"></div>
    </>
  );
};

export default WelcomeAnimation;
