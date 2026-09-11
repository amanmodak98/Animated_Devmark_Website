"use client";

import { useEffect, useRef } from "react";

export default function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = "1";
      cursorDot.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = "0";
      cursorDot.style.opacity = "0";
    };

    // Magnetic effect for interactive elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const deltaX = (x - centerX) * 0.3;
      const deltaY = (y - centerY) * 0.3;

      target.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      cursor.style.transform = `translate(-50%, -50%) scale(2)`;
      cursor.style.borderColor = "var(--accent-cyan)";
    };

    const handleElementLeave = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      target.style.transform = "translate(0, 0)";
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
      cursor.style.borderColor = "rgba(0, 212, 255, 0.3)";
    };

    // Animation loop
    const animate = () => {
      // Smooth cursor follow
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;

      dotX += (mouseX - dotX) * 0.25;
      dotY += (mouseY - dotY) * 0.25;

      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;

      cursorDot.style.left = `${dotX}px`;
      cursorDot.style.top = `${dotY}px`;

      requestAnimationFrame(animate);
    };

    // Attach event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Add magnetic effect to buttons and links
    const magneticElements = document.querySelectorAll("button, a, .service-card, .project");
    magneticElements.forEach((el) => {
      el.addEventListener("mouseenter", handleElementHover as EventListener);
      el.addEventListener("mouseleave", handleElementLeave as EventListener);
    });

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);

      magneticElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleElementHover as EventListener);
        el.removeEventListener("mouseleave", handleElementLeave as EventListener);
      });
    };
  }, []);

  // Don't render on touch devices
  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      const cursor = cursorRef.current;
      const cursorDot = cursorDotRef.current;
      if (cursor) cursor.style.display = "none";
      if (cursorDot) cursorDot.style.display = "none";
    }
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="magnetic-cursor"
        style={{
          position: "fixed",
          width: "40px",
          height: "40px",
          border: "2px solid rgba(0, 212, 255, 0.3)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: 0,
          transition: "transform 0.2s ease, border-color 0.2s ease, opacity 0.3s ease",
          mixBlendMode: "difference",
        }}
      />
      <div
        ref={cursorDotRef}
        className="magnetic-cursor-dot"
        style={{
          position: "fixed",
          width: "8px",
          height: "8px",
          background: "var(--accent-cyan)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: 0,
          transition: "opacity 0.3s ease",
          boxShadow: "0 0 10px var(--glow-cyan)",
        }}
      />
    </>
  );
}
