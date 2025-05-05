"use client";
import { useState, useRef, useEffect } from "react";

interface ExpandableTextProps {
  preview: string;
  fullText: string | React.ReactNode;
  className?: string;
  symbolColor?: string;
  onToggle?: (expanded: boolean) => void;
}

export default function ExpandableText({ preview, fullText, className, symbolColor = "#007c87", onToggle }: ExpandableTextProps) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (expanded && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
    onToggle?.(expanded);
  }, [expanded, onToggle]);

  return (
    <div className={`leading-8 text-xl text-justify ${className}`}>
      <p>{preview}</p>

      <button onClick={() => setExpanded(!expanded)} className="mt-4 font-light flex items-center gap-3 focus:outline-none" style={{ color: symbolColor }}>
        <span className="text-white w-7 h-7 inline-flex items-center justify-center text-xl rounded-full" style={{ backgroundColor: symbolColor }}>
          {expanded ? "−" : "+"}
        </span>
        Read More
      </button>

      <div ref={contentRef} className="transition-all duration-500 overflow-hidden mt-4" style={{ maxHeight: height }}>
        <p>{fullText}</p>
      </div>
    </div>
  );
}
