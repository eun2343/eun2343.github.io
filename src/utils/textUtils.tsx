/**
 * Splits text by pipe characters (|) and renders each segment with line breaks
 * @param text - The text to split and render
 * @returns JSX elements with line breaks between segments
 */
export const renderTextWithLineBreaks = (text: string) => {
  return text.split("|").map((line: string, lineIndex: number) => (
    <span key={lineIndex}>
      {line}
      {lineIndex < text.split("|").length - 1 && <br />}
    </span>
  ));
};
