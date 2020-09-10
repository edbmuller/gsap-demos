gsap.from( 'ul li:not(:last-child)', {
  duration: .4,
   x: -10,
   ease: 'power1.out',
   opacity: 0,
   stagger: .1,
  //  repeat: 1,
  //  repeatDelay: 1,
  }
);

gsap.to( 'ul li:last-child', {
  duration: .4,
   x: 50,
   ease: 'power2.out',
   delay: .7,
   yoyo: true,
  }
);