'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const WHEEL_THRESHOLD = 40;
const ANIM_LOCK_MS = 940;
const WHEEL_GESTURE_RELEASE_MS = 360;

export function useSnapScroll(total: number, enabled: boolean) {
  const [current, setCurrent] = useState(0);
  const currentRef = useRef(0);
  const animating = useRef(false);
  const wheelGestureLocked = useRef(false);
  const wheelBuffer = useRef(0);
  const wheelTimer = useRef<ReturnType<typeof setTimeout>>();
  const wheelReleaseTimer = useRef<ReturnType<typeof setTimeout>>();

  const goTo = useCallback(
    (idx: number) => {
      if (!enabled) return;
      const next = Math.max(0, Math.min(total - 1, idx));
      if (next === currentRef.current || animating.current) return;
      animating.current = true;
      currentRef.current = next;
      setCurrent(next);
      window.setTimeout(() => {
        animating.current = false;
      }, ANIM_LOCK_MS);
    },
    [enabled, total],
  );

  const advance = useCallback(() => goTo(currentRef.current + 1), [goTo]);
  const retreat = useCallback(() => goTo(currentRef.current - 1), [goTo]);

  useEffect(() => {
    if (!enabled) return;

    let touchStartY = 0;

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();

      if (wheelReleaseTimer.current) clearTimeout(wheelReleaseTimer.current);
      wheelReleaseTimer.current = setTimeout(() => {
        wheelGestureLocked.current = false;
        wheelBuffer.current = 0;
      }, WHEEL_GESTURE_RELEASE_MS);

      if (wheelGestureLocked.current || animating.current) return;

      wheelBuffer.current += event.deltaY;
      if (wheelTimer.current) clearTimeout(wheelTimer.current);
      wheelTimer.current = setTimeout(() => {
        wheelBuffer.current = 0;
      }, 200);

      if (Math.abs(wheelBuffer.current) > WHEEL_THRESHOLD) {
        wheelGestureLocked.current = true;
        wheelBuffer.current > 0 ? advance() : retreat();
        wheelBuffer.current = 0;
      }
    };

    const onTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? 0;
    };

    const onTouchEnd = (event: TouchEvent) => {
      const delta = touchStartY - (event.changedTouches[0]?.clientY ?? touchStartY);
      if (Math.abs(delta) > 40) {
        delta > 0 ? advance() : retreat();
      }
    };

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown' || event.key === ' ') {
        event.preventDefault();
        advance();
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        retreat();
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('keydown', onKey);
      if (wheelTimer.current) clearTimeout(wheelTimer.current);
      if (wheelReleaseTimer.current) clearTimeout(wheelReleaseTimer.current);
    };
  }, [advance, enabled, retreat]);

  return { current, goTo };
}
