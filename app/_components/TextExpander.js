"use client";

import { useState } from "react";

function TextExpander({ children }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const displayText = isExpanded
        ? children
        : children.split(" ").slice(0, 40).join(" ") + "...";

    return (
        <span>
            {displayText}{" "}
            <button
                className="pb-1 leading-3 border-b text-primary-700 border-primary-700"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {isExpanded ? "Show less" : "Show more"}
            </button>
        </span>
    );
}

export default TextExpander;
