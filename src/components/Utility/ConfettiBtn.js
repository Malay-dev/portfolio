import React, { useCallback, useRef } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

export function ConfettiBtn1() {
  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((angle, particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { x: 0, y: 0.95 },
        angle: angle,
        ticks: 500,
        gravity: 0.5,
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(45, 0.25, {
      spread: 100,
      startVelocity: 55,
    });

    makeShot(45, 0.2, {
      spread: 200,
    });

    makeShot(45, 0.35, {
      spread: 250,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(45, 0.1, {
      spread: 500,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(45, 0.1, {
      spread: 500,
      startVelocity: 45,
    });
  }, [makeShot]);

  return (
    <>
      <button
        onClick={fire}
        style={{
          border: "none",
          width: "100px",
          height: "100px",
          background: "transparent",

          cursor: "pointer",
        }}>
        <svg
          version="1.1"
          viewBox="0 0 300 400"
          style={{ transform: "rotate(45deg)" }}
          xmlns="http://www.w3.org/2000/svg">
          <g className="confetti-cone">
            <path
              className="conf0"
              d="M131.5,172.6L196,343c2.3,6.1,11,6.1,13.4,0l65.5-170.7L131.5,172.6z"
            />
            <path
              className="conf1"
              d="m131.5 172.6 64.5 170.4c2.3 6.1 11 6.1 13.4 0l6.7-17.5-53.6-152.9h-31z"
            />
            <path
              className="conf2"
              d="m274.2 184.2c-1.8 1.8-4.2 2.9-7 2.9l-129.5 0.4c-5.4 0-9.8-4.4-9.8-9.8s4.4-9.8 9.9-9.9l129.5-0.4c5.4 0 9.8 4.4 9.8 9.8-0.1 2.8-1.2 5.3-2.9 7z"
            />
            <polygon
              className="conf3"
              points="231.5 285.4 174.2 285.5 143.8 205.1 262.7 204.7"
            />
            <path
              className="conf4"
              d="m166.3 187.4-28.6 0.1c-5.4 0-9.8-4.4-9.8-9.8s4.4-9.8 9.9-9.9l24.1-0.1s-2.6 5-1.3 10.6c1.2 5.4 5.7 9.1 5.7 9.1z"
            />
            <ellipse
              className="conf2"
              transform="matrix(.7071 -.7071 .7071 .7071 -89.852 231.03)"
              cx="233.9"
              cy="224"
              rx="5.6"
              ry="5.6"
            />
            <path
              className="conf5"
              d="m143.8 205.1 5.4 14.3c6.8-2.1 14.4-0.5 19.7 4.8 7.7 7.7 7.6 20.1-0.1 27.8-1.7 1.7-3.7 3-5.8 4l11.1 29.4h27.7l-28-80.5-30 0.2z"
            />
            <path
              className="conf2"
              d="m169 224.2c-5.3-5.3-13-6.9-19.7-4.8l13.9 36.7c2.1-1 4.1-2.3 5.8-4 7.6-7.7 7.6-20.2 0-27.9z"
            />
            <ellipse
              className="conf6"
              transform="matrix(.7071 -.7071 .7071 .7071 -119.09 221.13)"
              cx="207.4"
              cy="254.3"
              rx="11.3"
              ry="11.2"
            />
          </g>
          <rect
            className="conf7"
            transform="matrix(.7071 -.7071 .7071 .7071 -99.535 209.16)"
            x="113.7"
            y="135.7"
            width="178"
            height="178"
          />
          <line className="conf7" x1="76.8" x2="328.6" y1="224.7" y2="224.7" />
          <polyline
            className="conf7"
            points="202.7 350.6 202.7 167.5 202.7 98.9"
          />
        </svg>
      </button>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </>
  );
}
export function ConfettiBtn2() {
  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((angle, particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { x: 1, y: 0.95 },
        angle: angle,
        ticks: 500,
        gravity: 0.5,
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(135, 0.25, {
      spread: 100,
      startVelocity: 55,
    });

    makeShot(135, 0.2, {
      spread: 150,
    });

    makeShot(250, 0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(500, 0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(500, 0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  return (
    <div style={{ overflow: "hidden" }}>
      <button
        onClick={fire}
        style={{
          border: "none",
          width: "100px",
          height: "100px",
          background: "transparent",
          cursor: "pointer",
        }}>
        <svg
          version="1.1"
          viewBox="0 0 300 400"
          style={{ transform: "rotate(135deg) scale(1,-1)" }}
          xmlns="http://www.w3.org/2000/svg">
          <g className="confetti-cone">
            <path
              className="conf0"
              d="M131.5,172.6L196,343c2.3,6.1,11,6.1,13.4,0l65.5-170.7L131.5,172.6z"
            />
            <path
              className="conf1"
              d="m131.5 172.6 64.5 170.4c2.3 6.1 11 6.1 13.4 0l6.7-17.5-53.6-152.9h-31z"
            />
            <path
              className="conf2"
              d="m274.2 184.2c-1.8 1.8-4.2 2.9-7 2.9l-129.5 0.4c-5.4 0-9.8-4.4-9.8-9.8s4.4-9.8 9.9-9.9l129.5-0.4c5.4 0 9.8 4.4 9.8 9.8-0.1 2.8-1.2 5.3-2.9 7z"
            />
            <polygon
              className="conf3"
              points="231.5 285.4 174.2 285.5 143.8 205.1 262.7 204.7"
            />
            <path
              className="conf4"
              d="m166.3 187.4-28.6 0.1c-5.4 0-9.8-4.4-9.8-9.8s4.4-9.8 9.9-9.9l24.1-0.1s-2.6 5-1.3 10.6c1.2 5.4 5.7 9.1 5.7 9.1z"
            />
            <ellipse
              className="conf2"
              transform="matrix(.7071 -.7071 .7071 .7071 -89.852 231.03)"
              cx="233.9"
              cy="224"
              rx="5.6"
              ry="5.6"
            />
            <path
              className="conf5"
              d="m143.8 205.1 5.4 14.3c6.8-2.1 14.4-0.5 19.7 4.8 7.7 7.7 7.6 20.1-0.1 27.8-1.7 1.7-3.7 3-5.8 4l11.1 29.4h27.7l-28-80.5-30 0.2z"
            />
            <path
              className="conf2"
              d="m169 224.2c-5.3-5.3-13-6.9-19.7-4.8l13.9 36.7c2.1-1 4.1-2.3 5.8-4 7.6-7.7 7.6-20.2 0-27.9z"
            />
            <ellipse
              className="conf6"
              transform="matrix(.7071 -.7071 .7071 .7071 -119.09 221.13)"
              cx="207.4"
              cy="254.3"
              rx="11.3"
              ry="11.2"
            />
          </g>
          <rect
            className="conf7"
            transform="matrix(.7071 -.7071 .7071 .7071 -99.535 209.16)"
            x="113.7"
            y="135.7"
            width="178"
            height="178"
          />
          <line className="conf7" x1="76.8" x2="328.6" y1="224.7" y2="224.7" />
          <polyline
            className="conf7"
            points="202.7 350.6 202.7 167.5 202.7 98.9"
          />
        </svg>
      </button>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </div>
  );
}
