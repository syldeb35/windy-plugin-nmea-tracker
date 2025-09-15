/**
 * AtoN (Aid to Navigation) SVG Icons
 * Following IALA maritime navigation standards
 */

export interface AtoNSVG {
    viewBox: string;
    paths: string;
}

/**
 * Cardinal Mark SVG definitions
 */
export const CardinalMarks = {
    North: {
        viewBox: "0 0 1800 1800",
        paths: `
            <path style="fill:#000" d="m900 497 80 123H821zm0 156 80 123H821z" transform="matrix(1 0 0 .99267 -26.864 -376.502)"/>
            <path style="fill:#fff212;stroke:#000;stroke-width:20" d="m931 842 53 304 119 48v109H697v-109l119-48 53-304z" transform="matrix(1 0 0 .99267 -26.864 -376.502)"/>
            <path style="fill:#000;stroke:#000;stroke-width:20" d="m816 1146 53-304h62l53 304z" transform="matrix(1 0 0 .99267 -26.864 -376.502)"/>
        `
    },
    East: {
        viewBox: "0 0 1800 1800", 
        paths: `
            <g style="clip-rule:evenodd;fill-rule:evenodd;image-rendering:optimizeQuality;shape-rendering:geometricPrecision;text-rendering:geometricPrecision">
                <path style="fill:#000" d="m980 653-80 123-79-123zm-159-33 79-123 80 123z" transform="translate(-26.86 -386.125)"/>
                <path style="fill:#000;stroke:#000;stroke-width:20" d="m931 842 53 304 119 48v109H697v-109l119-48 53-304z" transform="translate(-26.86 -386.125)"/>
                <path style="fill:#fff212;stroke:#000;stroke-width:20" d="m816 1146 53-304h62l53 304z" transform="translate(-26.86 -386.125)"/>
                <path style="fill:#000;stroke:#000;stroke-width:20" d="m844 985 25-143h62l25 143z" transform="translate(-26.86 -386.125)"/>
            </g>
        `
    },
    South: {
        viewBox: "0 0 1800 1800",
        paths: `
            <path transform="translate(-26.865 -383.502)" style="fill:#000" d="m908 770-79-123h159zm-79-279h159l-80 123z"/>
            <path transform="translate(-26.865 -392.125)" style="fill:#000;stroke:#000;stroke-width:20" d="m697 1200 119-49 53-303h62l53 303 119 49v109H697z"/>
            <path transform="translate(-26.865 -392.125)" style="fill:#fff212;stroke:#000;stroke-width:20" d="M869 848h62l53 303H816z"/>
        `
    },
    West: {
        viewBox: "0 0 1800 1800",
        paths: `
            <path transform="matrix(1 0 0 -1 -26.865 1033.498)" style="fill:#000" d="m908 770-79-123h159z"/>
            <path transform="translate(-26.865 -383.502)" style="fill:#000" d="m988 491-80 123-79-123z"/>
            <path transform="translate(-26.865 -392.125)" style="fill:#000;stroke:#000;stroke-width:20" d="M1103 1309H697v-109l119-49 53-303h62l53 303 119 49z"/>
            <path transform="translate(-26.865 -392.125)" style="fill:#fff212;stroke:#000;stroke-width:20" d="M984 1151H816l53-303h62z"/>
        `
    }
};

/**
 * Generate SVG icon HTML for a cardinal mark
 * @param direction Cardinal direction (North, East, South, West)
 * @param size Icon size in pixels
 * @returns Complete SVG HTML string
 */
export function getCardinalMarkSVG(direction: keyof typeof CardinalMarks, size: number = 24): string {
    const mark = CardinalMarks[direction];
    return `
        <svg xmlns="http://www.w3.org/2000/svg" 
             xml:space="preserve" 
             width="${size}px" 
             height="${size}px" 
             shape-rendering="geometricPrecision" 
             text-rendering="geometricPrecision" 
             image-rendering="optimizeQuality" 
             fill-rule="evenodd" 
             clip-rule="evenodd" 
             viewBox="${mark.viewBox}">
            ${mark.paths}
        </svg>
    `;
}

