import {
  defineInteraction,
  defineProperties,
  useWebsiteSettings,
  RenderHooks,
} from "figma:react";

import {
  animate,
  AnimationPlaybackControls,
  motion,
  MotionValue,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useTime,
} from "motion/react";
import {
  ComponentType,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

const BACK_DELAY = 3000;
const CARET_SPEED = 500;
const START_DELAY = 1000;

// These are characters like spaces that can be either LTR or RTL.
//
// Hans provided this regex here:
// https://app.graphite.dev/github/pr/figma/figma/539449/%5Bixn%5D-%5Bpresets%5D-%5Btypewriter%5D-adjust-layout-logic-based-on-whether-characterIsRTL#comment-PRRC_kwDOBDCHac6EvAZx
const NEUTRAL_CHARS_REGEX =
  /[\p{White_Space}\u0021-\u0022\u0026-\u002a\u003b-\u0040\u005b-\u0060\u007b-\u007e\u00a1\u00a6-\u00a9\u00ab-\u00ac\u00ae-\u00af\u00b4\u00b6-\u00b8\u00bb-\u00bf\u00d7\u00f7\u02b9-\u02ba\u02c2-\u02cf\u02d2-\u02df\u02e5-\u02ed\u02ef-\u02ff\u0374-\u0375\u037e\u0384-\u0385\u0387\u03f6\u058a\u058d-\u058e\u0606-\u0607\u060e-\u060f\u06de\u06e9\u07f6-\u07f9\u0bf3-\u0bf8\u0bfa\u0c78-\u0c7e\u0f3a-\u0f3d\u1390-\u1399\u1400\u169b-\u169c\u17f0-\u17f9\u1800-\u180a\u1940\u1944-\u1945\u19de-\u19ff\u1fbd\u1fbf-\u1fc1\u1fcd-\u1fcf\u1fdd-\u1fdf\u1fed-\u1fef\u1ffd-\u1ffe\u2010-\u2027\u2035-\u2043\u2045-\u205e\u207c-\u207e\u208c-\u208e\u2100-\u2101\u2103-\u2106\u2108-\u2109\u2114\u2116-\u2118\u211e-\u2123\u2125\u2127\u2129\u213a-\u213b\u2140-\u2144\u214a-\u214d\u2150-\u215f\u2189-\u218b\u2190-\u2211\u2214-\u2335\u237b-\u2394\u2396-\u2429\u2440-\u244a\u2460-\u2487\u24ea-\u26ab\u26ad-\u27ff\u2900-\u2b73\u2b76-\u2b95\u2b97-\u2bff\u2ce5-\u2cea\u2cf9-\u2cff\u2e00-\u2e5d\u2e80-\u2e99\u2e9b-\u2ef3\u2f00-\u2fd5\u2ff0-\u2fff\u3001-\u3004\u3008-\u3020\u3030\u3036-\u3037\u303d-\u303f\u309b-\u309c\u30a0\u30fb\u31c0-\u31e5\u31ef\u321d-\u321e\u3250-\u325f\u327c-\u327e\u32b1-\u32bf\u32cc-\u32cf\u3377-\u337a\u33de-\u33df\u33ff\u4dc0-\u4dff\ua490-\ua4c6\ua60d-\ua60f\ua673\ua67e-\ua67f\ua700-\ua721\ua788\ua828-\ua82b\ua874-\ua877\uab6a-\uab6b\ufd3e-\ufd4f\ufdcf\ufdfd-\ufdff\ufe10-\ufe19\ufe30-\ufe4f\ufe51\ufe54\ufe56-\ufe5e\ufe60-\ufe61\ufe64-\ufe66\ufe68\ufe6b\uff01-\uff02\uff06-\uff0a\uff1b-\uff20\uff3b-\uff40\uff5b-\uff65\uffe2-\uffe4\uffe8-\uffee\ufff9-\ufffd\u{10101}\u{10140}-\u{1018c}\u{10190}-\u{1019c}\u{101a0}\u{1091f}\u{10b39}-\u{10b3f}\u{10d6e}\u{11052}-\u{11065}\u{11660}-\u{1166c}\u{11fd5}-\u{11fdc}\u{11fe1}-\u{11ff1}\u{16fe2}\u{1cc00}-\u{1ccd5}\u{1cd00}-\u{1ceb3}\u{1d1e9}-\u{1d1ea}\u{1d200}-\u{1d241}\u{1d245}\u{1d300}-\u{1d356}\u{1d6c1}\u{1d6db}\u{1d6fb}\u{1d715}\u{1d735}\u{1d74f}\u{1d76f}\u{1d789}\u{1d7a9}\u{1d7c3}\u{1eef0}-\u{1eef1}\u{1f000}-\u{1f02b}\u{1f030}-\u{1f093}\u{1f0a0}-\u{1f0ae}\u{1f0b1}-\u{1f0bf}\u{1f0c1}-\u{1f0cf}\u{1f0d1}-\u{1f0f5}\u{1f10b}-\u{1f10f}\u{1f12f}\u{1f16a}-\u{1f16f}\u{1f1ad}\u{1f260}-\u{1f265}\u{1f300}-\u{1f6d7}\u{1f6dc}-\u{1f6ec}\u{1f6f0}-\u{1f6fc}\u{1f700}-\u{1f776}\u{1f77b}-\u{1f7d9}\u{1f7e0}-\u{1f7eb}\u{1f7f0}\u{1f800}-\u{1f80b}\u{1f810}-\u{1f847}\u{1f850}-\u{1f859}\u{1f860}-\u{1f887}\u{1f890}-\u{1f8ad}\u{1f8b0}-\u{1f8bb}\u{1f8c0}-\u{1f8c1}\u{1f900}-\u{1fa53}\u{1fa60}-\u{1fa6d}\u{1fa70}-\u{1fa7c}\u{1fa80}-\u{1fa89}\u{1fa8f}-\u{1fac6}\u{1face}-\u{1fadc}\u{1fadf}-\u{1fae9}\u{1faf0}-\u{1faf8}\u{1fb00}-\u{1fb92}\u{1fb94}-\u{1fbef}]/u;

// got this from https://gist.github.com/nekofar/f1f7b4f55e5ea24e49df289b034197a2
const RTL_CHARS_REGEX =
  /[\u0600-\u06FF\u0750-\u077F\u0590-\u05FF\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]/;

function appendPxIfNonNull(value: number | null) {
  return value != null ? `${value}px` : undefined;
}

/**
 * Manage blink animation in a separate hook.
 */
function useCursorBlink({
  shouldBlink,
  opacity,
}: {
  shouldBlink: boolean;
  opacity: MotionValue<number>;
}) {
  const last = useRef<number>(0);
  const time = useTime();

  useEffect(() => {
    if (!shouldBlink) {
      opacity.set(1);
    }
  }, [shouldBlink, opacity]);

  useMotionValueEvent(time, "change", (t: number) => {
    if (shouldBlink && t - last.current >= CARET_SPEED) {
      last.current = t;
      opacity.set(opacity.get() === 0 ? 1 : 0);
    }
  });
}

/**
 * Get top and left coordinate without considering transforms.
 */
function getBounds(element: HTMLElement | null) {
  let currentElement: HTMLElement | null = element;

  let left = 0;
  let top = 0;

  while (currentElement) {
    left += currentElement.offsetLeft;
    top += currentElement.offsetTop;

    currentElement =
      currentElement.offsetParent as HTMLElement | null;
  }

  const right = left + (element?.offsetWidth ?? 0);

  return { left, right, top };
}

/**
 * Find the first ancestor of the given element with the "textContents" class.
 */
function getTextContentsElement(
  measuredCharacterElement: HTMLElement | null,
): HTMLElement | null {
  if (!measuredCharacterElement) {
    return null;
  }

  let ancestor: HTMLElement | null =
    measuredCharacterElement.parentElement;
  while (ancestor) {
    if (
      ancestor.classList &&
      ancestor.classList.contains("textContents")
    ) {
      return ancestor;
    }
    ancestor = ancestor.parentElement;
  }

  return null;
}

/**
 * Determine if the character is LTR (Left-to-Right) by comparing the measured character's
 * midpoint to the post-measured character's left position.
 */
function isCharacterLTR({
  measuredCharacterBounds,
  measuredCharacterElement,
  postMeasuredCharacterRef,
}: {
  measuredCharacterBounds: { left: number; right: number };
  measuredCharacterElement: HTMLElement;
  postMeasuredCharacterRef: React.RefObject<HTMLSpanElement | null>;
}): boolean {
  // textContent should just have one character,
  // but writing like this in case we ever bring back the text-based cursor
  const character = Array.from(
    measuredCharacterElement.textContent ?? "",
  ).at(-1);

  const isNeutralCharacter =
    !character || NEUTRAL_CHARS_REGEX.test(character);
  if (!isNeutralCharacter) {
    // Having this check because sometimes the postMeasuredCharacter can be located at the start
    // of the next character, which can throw things off with bidi text. So if the character has
    // a directionality, we might as well use it.
    return !RTL_CHARS_REGEX.test(character);
  }

  // I tried determining LTR/RTL by comparing spans before and after the measured character, but
  // it doesn't work if the measured character gets wrapped to a subsequent line. In this case,
  // the before-span ends up on the previous line, and the after-span on the next line, so it
  // becomes hard to tell whether the text is LTR/RTL by comparing their horizontal positions.
  // But actually, we don't need both spans. We can just compare an after-span to the bounds of
  // the measure character itself. In practice, the after-span should have the same horizontal
  // position as either the left or right edge of the measured character, but to make the logic a
  // little more robust, we can just compare the after-span to the midpoint of the measured char.
  const postMeasuredCharacterBounds = getBounds(
    postMeasuredCharacterRef.current,
  );
  const measuredCharacterMidpoint =
    (measuredCharacterBounds.left +
      measuredCharacterBounds.right) /
    2;
  return (
    measuredCharacterMidpoint < postMeasuredCharacterBounds.left
  );
}

function useUpdateCursorPosition({
  characterIndex,
  containerRef,
  measuredCharacterRef,
  postMeasuredCharacterRef,
  setCursorOffsetLeft,
  setCursorOffsetRight,
  setCursorOffsetTop,
}: {
  characterIndex: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
  measuredCharacterRef: React.RefObject<HTMLSpanElement | null>;
  postMeasuredCharacterRef: React.RefObject<HTMLSpanElement | null>;
  setCursorOffsetLeft: (left: number | null) => void;
  setCursorOffsetRight: (right: number | null) => void;
  setCursorOffsetTop: (top: number | null) => void;
}) {
  const updateCursorPosition = useCallback(() => {
    const measuredCharacterElement =
      measuredCharacterRef.current;
    const textContentsElement = getTextContentsElement(
      measuredCharacterElement,
    );

    if (!measuredCharacterElement || !textContentsElement) {
      setCursorOffsetTop(null);
      setCursorOffsetLeft(null);
      setCursorOffsetRight(null);
      return;
    }

    const measuredCharacterBounds = getBounds(
      measuredCharacterElement,
    );
    const textContentsBounds = getBounds(textContentsElement);

    const isLTR = isCharacterLTR({
      measuredCharacterBounds,
      measuredCharacterElement,
      postMeasuredCharacterRef,
    });

    if (characterIndex === 0) {
      // Cursor is positioned at the start of the text
      setCursorOffsetTop(
        measuredCharacterBounds.top - textContentsBounds.top,
      );

      if (isLTR) {
        setCursorOffsetLeft(
          measuredCharacterBounds.left -
            textContentsBounds.left,
        );
        setCursorOffsetRight(null);
      } else {
        setCursorOffsetLeft(null);
        setCursorOffsetRight(
          textContentsBounds.right -
            measuredCharacterBounds.right,
        );
      }
    } else {
      setCursorOffsetTop(
        measuredCharacterBounds.top - textContentsBounds.top,
      );

      if (isLTR) {
        setCursorOffsetLeft(
          measuredCharacterBounds.right -
            textContentsBounds.left,
        );
        setCursorOffsetRight(null);
      } else {
        setCursorOffsetLeft(null);
        setCursorOffsetRight(
          textContentsBounds.right -
            measuredCharacterBounds.left,
        );
      }
    }
  }, [
    characterIndex,
    measuredCharacterRef,
    postMeasuredCharacterRef,
    setCursorOffsetLeft,
    setCursorOffsetRight,
    setCursorOffsetTop,
  ]);

  // Cursor position must be updated whenever the target character changes
  useLayoutEffect(() => {
    updateCursorPosition();
  }, [updateCursorPosition]);

  // Cursor position must be updated whenever the text container is resized
  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      updateCursorPosition();
    });

    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, [containerRef.current, updateCursorPosition]);
}

// Based on my eyeballing: 100% feels too tall and 90% feels too short, so 95% feels just right.
const CURSOR_HEIGHT_PERCENTAGE_NUMERATOR = 95; // code structured to just change this num if needed.
const CURSOR_HEIGHT_MULTIPLIER =
  CURSOR_HEIGHT_PERCENTAGE_NUMERATOR / 100;
const DEFAULT_CURSOR_HEIGHT =
  CURSOR_HEIGHT_PERCENTAGE_NUMERATOR + "%";
const DEFAULT_CURSOR_COLOR = "black";
function getComputedCursorStyleAttributes(
  measuredCharacterRef: React.RefObject<HTMLSpanElement | null>,
) {
  const measuredCharacterElement = measuredCharacterRef.current;
  if (!measuredCharacterElement) {
    return {
      backgroundColor: DEFAULT_CURSOR_COLOR,
      height: DEFAULT_CURSOR_HEIGHT,
    };
  }

  const cursorHeight = measuredCharacterElement.offsetHeight;
  const cursorColor = window.getComputedStyle(
    measuredCharacterElement,
  ).color;

  const textContentsElement = getTextContentsElement(
    measuredCharacterElement,
  )!;
  const textContentsComputedStyle = window.getComputedStyle(
    textContentsElement,
  );
  const hasBackgroundImageFill =
    textContentsComputedStyle["background-image"] !== "none" &&
    textContentsComputedStyle["background-clip"] === "text";

  return {
    backgroundColor: hasBackgroundImageFill
      ? DEFAULT_CURSOR_COLOR
      : cursorColor,
    height:
      appendPxIfNonNull(
        cursorHeight && cursorHeight * CURSOR_HEIGHT_MULTIPLIER,
      ) ?? DEFAULT_CURSOR_HEIGHT,
  };
}

function useRenderTextCharacter({
  characterIndex,
  containerRef,
  cursorOpacity,
  setText,
  shouldReduceMotion,
  text,
  textCursor,
}: {
  characterIndex: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
  cursorOpacity: MotionValue<number>;
  setText: (text: string) => void;
  shouldReduceMotion: boolean;
  text: string;
  textCursor: boolean;
}) {
  // HTML element of the character needed to compute the cursor position (see isMeasuredCharacter below)
  const measuredCharacterRef = useRef<HTMLSpanElement>(null);

  // HTML element after measured char used to determine cursor position at animation start
  const postMeasuredCharacterRef =
    useRef<HTMLSpanElement>(null);

  // Offsets of the cursor from its original location
  const [cursorOffsetLeft, setCursorOffsetLeft] = useState<
    number | null
  >(null);
  const [cursorOffsetRight, setCursorOffsetRight] = useState<
    number | null
  >(null);
  const [cursorOffsetTop, setCursorOffsetTop] = useState<
    number | null
  >(null);

  useUpdateCursorPosition({
    characterIndex,
    containerRef,
    measuredCharacterRef,
    setCursorOffsetLeft,
    setCursorOffsetRight,
    setCursorOffsetTop,
    postMeasuredCharacterRef,
  });

  const { backgroundColor, height } =
    getComputedCursorStyleAttributes(measuredCharacterRef);

  const renderTextCharacter = useCallback(
    ({
      character,
      characters,
      index: indexWithinLine,
      globalIndex,
      TextCharacterComponent,
    }: {
      character: string;
      characters: string;
      index: number;
      globalIndex: number;
      TextCharacterComponent: ComponentType<any>;
    }) => {
      if (!text) {
        setText(characters);
      }

      const index = globalIndex ?? indexWithinLine;
      const hidden =
        !shouldReduceMotion && index >= characterIndex;

      // The "measured" character is the one that is needed to compute the cursor position, which is:
      // - if no characters have yet appeared: the first character (the cursor appears before it)
      // - if characters have begun appearing: the most recent to appear (cursor appears after it)
      //
      // Note that the below expression is the same as:
      // index === Math.max(0, characterIndex - 1)
      //
      // but I believe that the ternary is clearer, so leaving it this way
      const isMeasuredCharacter =
        characterIndex === 0
          ? index === 0
          : index === characterIndex - 1;

      return (
        <>
          {index === 0 &&
            textCursor &&
            !shouldReduceMotion &&
            (cursorOffsetLeft != null ||
              cursorOffsetRight != null) &&
            cursorOffsetTop != null && (
              <motion.span
                style={{
                  backgroundColor,
                  display: "inline-block",
                  opacity: cursorOpacity,
                  position: "absolute",
                  left: appendPxIfNonNull(cursorOffsetLeft),
                  right: appendPxIfNonNull(cursorOffsetRight),
                  top: appendPxIfNonNull(cursorOffsetTop),
                  height,
                  width: "2px",
                }}
              />
            )}
          <span
            ref={
              isMeasuredCharacter ? measuredCharacterRef : null
            }
            className={hidden ? "invisible" : undefined}
          >
            <TextCharacterComponent character={character} />
          </span>
          {isMeasuredCharacter && (
            <span ref={postMeasuredCharacterRef} />
          )}
        </>
      );
    },
    [
      backgroundColor,
      characterIndex,
      cursorOffsetLeft,
      cursorOffsetRight,
      cursorOffsetTop,
      height,
      shouldReduceMotion,
      text,
      textCursor,
    ],
  );

  return renderTextCharacter;
}

function useAnimationLogic({
  inView,
  loop,
  setCharacterIndex,
  shouldReduceMotion,
  speed,
  text,
}: {
  inView: boolean;
  loop: boolean;
  setCharacterIndex: (index: number) => void;
  shouldReduceMotion: boolean;
  speed: number;
  text: string;
}) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) return;

    setCharacterIndex(0);

    // Manual new-lines are handled as separate <p> elements instead of an actual character, so filter them out
    const length = text.replaceAll("\n", "").length;
    if (!length) return;

    const duration = Math.max(1, length * speed);
    let reverse = false;
    let nextIteration = 0;
    let animation: AnimationPlaybackControls | undefined;

    /**
     * Animation loop handled in function because motion's
     * delay prop only works for the first time the
     * animation fires and we need the start and repeat
     * delays to be different each time.
     */
    function play() {
      const delay = reverse ? BACK_DELAY : START_DELAY;
      const start = reverse ? length : 0;
      const end = reverse ? 0 : length;
      const currentIteration = nextIteration++;

      setTimeout(() => setIsAnimating(true), delay);

      animation = animate(start, end, {
        delay: delay / 1000,
        duration: duration / 1000,
        ease: "linear",
        onUpdate: (i: number) => {
          setCharacterIndex(Math.round(i));
        },
        onComplete: () => {
          setIsAnimating(false);

          window.dispatchEvent(
            new CustomEvent("FigmaTestEvent", {
              detail: { name: "TypewriterComplete" },
            }),
          );
          // We have observed `onComplete` being called multiple times for the same call to
          // `animate`, resetting the animation and leading to an exponential number of calls to
          // `play`. Make sure that we only schedule another iteration of the animation when the
          // current iteration first completes.
          if (loop && currentIteration === nextIteration - 1) {
            reverse = !reverse;
            play();
          }
        },
      });
    }

    play();

    return () => {
      animation?.stop();
    };
  }, [inView, loop, shouldReduceMotion, speed, text]);

  return { isAnimating };
}

export default function Typewriter({
  children,
  loop,
  speed,
  textCursor,
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [text, setText] = useState<string>("");
  const [characterIndex, setCharacterIndex] =
    useState<number>(0);
  const cursorOpacity = useMotionValue(1);
  const inView = useInView(containerRef);
  const { shouldReduceMotion } = useWebsiteSettings();

  const renderTextCharacter = useRenderTextCharacter({
    characterIndex,
    containerRef,
    cursorOpacity,
    setText,
    shouldReduceMotion,
    text,
    textCursor,
  });

  const { isAnimating } = useAnimationLogic({
    inView,
    loop,
    setCharacterIndex,
    shouldReduceMotion,
    speed,
    text,
  });

  const shouldBlink =
    !shouldReduceMotion && textCursor && inView && !isAnimating;
  useCursorBlink({ shouldBlink, opacity: cursorOpacity });

  return (
    <div ref={containerRef}>
      <RenderHooks
        children={children}
        renderTextCharacter={renderTextCharacter}
      />
    </div>
  );
}

defineProperties(Typewriter, {
  speed: {
    type: "number",
    defaultValue: 50,
    label: "sites.code_behaviors.typewriter.speed",
    control: "select",
    options: [
      {
        label: "sites.code_behaviors.typewriter.speed.quick",
        value: 25,
      },
      {
        label: "sites.code_behaviors.typewriter.speed.moderate",
        value: 50,
      },
      {
        label: "sites.code_behaviors.typewriter.speed.slow",
        value: 100,
      },
    ],
  },
  textCursor: {
    type: "boolean",
    defaultValue: true,
    label: "sites.code_behaviors.typewriter.text_cursor",
  },
  loop: {
    type: "boolean",
    defaultValue: true,
    label: "sites.code_behaviors.typewriter.loop",
  },
});

defineInteraction(Typewriter, {
  name: "sites.code_behaviors.typewriter.name",
  icon: "typewriter",
  nodeTypes: ["TEXT"],
  category: "motion",
});