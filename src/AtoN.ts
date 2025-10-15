/**
 * AtoN (Aid to Navigation) SVG Icons
 * Following IALA maritime navigation standards
 */

export interface AtoNSVG {
    viewBox: string;
    paths: string;
}
/**
 * 
 */
export const SpecialMarks = {
    Special: {
        viewBox: "650 150 440 800",
        paths: `
            <path style="fill:none;stroke-width:.94074076" d="M0 106.667h1693.333V1800H0z"/>
            <path transform="translate(13.742 -321.808) scale(.95249)" style="fill:#000;stroke:#000;stroke-width:27.94485283;stroke-miterlimit:4;stroke-dasharray:none" d="m984 1139 119 49v109H697v-109l119-49 53-303h62z"/>
            <path d="m831.432 510.004-45.548 282.889.394 144.863h60.36l1.078-427.904z" style="fill:#4b96ff;fill-opacity:1;fill-rule:evenodd;stroke:#4b96ff;stroke-width:13.22916698;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" transform="translate(16.685 -29.104)"/>
            <path style="fill:#ff0;fill-opacity:1;fill-rule:evenodd;stroke:#ff0;stroke-width:13.22916698;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m876.76 510.004 45.548 282.889-.394 144.863h-60.36l-1.077-427.904zM672.027 842.906l100.24-38.802v132.575h-100.24z" transform="translate(16.685 -29.104)"/>
            <path d="m1036.462 843.786-100.24-38.803v132.575h100.24z" style="fill:#4b96ff;fill-opacity:1;fill-rule:evenodd;stroke:#4b96ff;stroke-width:13.22916508;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" transform="translate(16.685 -29.104)"/>
            <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-size:654.53009033px;line-height:1309.05993652px;font-family:sans-serif;-inkscape-font-specification:'sans-serif Bold';text-align:center;letter-spacing:0;word-spacing:0;text-anchor:middle;fill:#ff0;fill-opacity:1;stroke:#000;stroke-width:15.70872498;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" x="852.4" y="445.248" transform="matrix(.99999 0 0 1.00001 18.841 -26.458)"><tspan x="852.4" y="445.248" style="font-style:normal;font-variant:normal;font-weight:700;font-stretch:normal;font-size:418.89938354px;font-family:sans-serif;-inkscape-font-specification:'sans-serif Bold';fill:#ff0;fill-opacity:1;stroke:#000;stroke-width:15.70872498;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1">+</tspan></text>
        `
    },
    FixedPort: {
        viewBox: "670 250 460 700",
        paths: `
            <path style="fill:red;stroke:#000;stroke-width:20" d="M844 567h112v112H844z" transform="translate(-26.865 -316.125)"/>
            <path style="fill:#f00;stroke:#000;stroke-width:20" d="M820 750h160v516H820z" transform="translate(-26.865 -316.125)"/>
        `
    },
    FixedStarboard: {
        viewBox: "670 250 460 700",
        paths: `
            <path style="fill:#0f0;stroke:#000;stroke-width:20" d="M900 567l56 112H844z" transform="translate(-26.865 -316.125)"/>
            <path style="fill:#0f0;stroke:#000;stroke-width:20" d="M820 750h160v516H820z" transform="translate(-26.865 -316.125)"/>
        `
    },
    Port: {
        viewBox: "670 250 460 700",
        paths: `
            <path style="fill:red;stroke:#000;stroke-width:20" d="M844 567h112v112H844zm259 666H697v-109l119-48 53-304h62l53 304 119 48z" transform="translate(-26.865 -316.125)"/>
        `
    },
    Starboard: {
        viewBox: "670 250 460 700",
        paths: `
            <path style="fill:#0f0;stroke:#000;stroke-width:20" d="M900 567l56 112H844zm259 666H697v-109l119-48 53-304h62l53 304 119 48z" transform="translate(-26.865 -316.125)"/>
        `
    },
    SafeWater: {
        viewBox: "670 250 460 800",
        paths: `
            <g transform="translate(18.828 -26.458)">
                <circle style="fill:red;stroke:#000;stroke-width:16.83804893;stroke-miterlimit:4;stroke-dasharray:none" r="71.842" cy="362.126" cx="852.095"/>
                <path style="fill:#000;stroke:#000;stroke-width:27.94485283;stroke-miterlimit:4;stroke-dasharray:none" transform="translate(-2.944 -295.35) scale(.95249)" d="M869 836h62l53 303 119 49v109H697v-109l119-49z"/>
                <path style="fill:red;fill-rule:evenodd;stroke:red;stroke-width:13.22916698;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m831.432 511.327-45.548 282.889.394 144.863h60.36l1.078-427.904z"/>
                <path d="m876.76 511.327 45.548 282.889-.394 144.863h-60.36l-1.077-427.904zM672.027 844.229l100.24-38.803v132.575h-100.24z" style="fill:#fff;fill-rule:evenodd;stroke:#fff;stroke-width:13.22916698;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
                <path style="fill:red;fill-rule:evenodd;stroke:red;stroke-width:13.22916508;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m1036.462 845.108-100.24-38.802v132.575h100.24z"/>
            </g>
        `
    },
    SafeWaterWithLight: {
        viewBox: "650 200 500 800",
        paths: `
            <path style="fill:none;stroke-width:.94074076" d="M0 106.667h1693.333V1800H0z"/>
            <circle cx="870.923" cy="335.667" r="71.842" style="fill:red;stroke:#000;stroke-width:16.83804893;stroke-miterlimit:4;stroke-dasharray:none"/>
            <path transform="translate(15.885 -321.808) scale(.95249)" style="fill:#000;stroke:#000;stroke-width:27.94485283;stroke-miterlimit:4;stroke-dasharray:none" d="M1103 1297H697v-109l119-49 53-303h62l53 303 119 49z"/>
            <path d="m850.26 484.869-45.548 282.888.395 144.864h60.36l1.077-427.904z" style="fill:red;fill-rule:evenodd;stroke:red;stroke-width:13.22916698;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
            <path style="fill:#fff;fill-rule:evenodd;stroke:#fff;stroke-width:13.22916698;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m895.589 484.869 45.548 282.888-.395 144.864h-60.36l-1.077-427.904zM690.856 817.77l100.24-38.802-.001 132.575h-100.24z"/>
            <path d="m1055.29 818.65-100.24-38.802.001 132.575h100.24z" style="fill:red;fill-rule:evenodd;stroke:red;stroke-width:13.22916508;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/>
            <path style="fill:#ff0;stroke-width:.93393499" d="M1582.57 192.024c105 191.892-380 272.137-669 272.137 186-192.764 568-465.773 669-272.137Z"/>
        `
    },
    IsolatedDanger: {
        viewBox: "650 000 500 800",
        paths: `
            <path style="fill:none;stroke-width:.94074076" d="M0 106.667h1693.333V1800H0z"/>
            <g transform="translate(-26.865 -380.125)">
                <circle style="fill:#000;stroke:#000;stroke-width:20" r="60" cy="563" cx="900"/>
                <circle style="fill:#000;stroke:#000;stroke-width:20" r="60" cy="708" cx="900"/>
                <path style="fill:#000;stroke:#000;stroke-width:20" d="m931 836 53 303 119 49v109H697v-109l119-49 53-303z"/>
                <path style="fill:red;stroke:#000;stroke-width:20" d="m816 1139 53-303h62l53 303z"/>
                <path style="fill:#000;stroke:#000;stroke-width:20" d="m844 979 25-143h62l25 142z"/>
            </g>
        `
    },
    IsolatedDangerWithLight: {
        viewBox: "650 000 500 800",
        paths: `
            <path style="fill:none;stroke-width:.94074076" d="M0 106.667h1693.333V1800H0z"/>
            <path style="fill:#ff0;stroke-width:.93393499" d="M1587.085 169.287c105 191.892-380 272.137-669 272.137 186-192.764 568-465.773 669-272.137z"/>
            <g transform="translate(-26.865 -380.125)">
                <circle style="fill:#000;stroke:#000;stroke-width:20" r="60" cy="563" cx="900"/>
                <circle style="fill:#000;stroke:#000;stroke-width:20" r="60" cy="708" cx="900"/>
                <path style="fill:#000;stroke:#000;stroke-width:20" d="m931 836 53 303 119 49v109H697v-109l119-49 53-303z"/>
                <path style="fill:red;stroke:#000;stroke-width:20" d="m816 1139 53-303h62l53 303z"/>
                <path style="fill:#000;stroke:#000;stroke-width:20" d="m844 979 25-143h62l25 142z"/>
            </g>
        `
    },
    LightVessel: {
        viewBox: "300 400 1200 800",
        paths: `
            <path fill="none" stroke="#000" stroke-width="20" d="M1209 900H584m517 0 55-164c-174 55-338 55-512 0l55 164h402z"/>
            <path fill="#90C" d="M329 1220c-100-176 296-280 535-297-141 194-439 475-535 297z"/>
            <path fill="none" stroke="#000" stroke-width="20" d="M900 412v365m-75-230 150-105m-150 0 150 105"/>
            <path fill="#fff" stroke="#000" stroke-width="20" d="M900 857c24 0 43 19 43 43s-19 43-43 43-43-19-43-43 19-43 43-43z"/>
            <path fill="none" d="M0 0h1800v1800H0z"/>
        `
    },
    FixedLight: {
        viewBox: "350 480 1100 600", // Tight bounds around lighthouse content (x=350-1100, y=480-600)
        paths: `
            <defs>
                <mask id="c">
                    <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="964.84" y1="652.81" x2="1440.86" y2="652.81">
                        <stop offset="0" stop-color="#fff"/>
                        <stop offset="1" stop-opacity="0" stop-color="#fff"/>
                    </linearGradient>
                    <path fill="url(#a)" d="M955 492h496v323H955z"/>
                </mask>
                <mask id="d">
                    <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="835.17" y1="652.81" x2="359.15" y2="652.81">
                        <stop offset="0" stop-color="#fff"/>
                        <stop offset="1" stop-opacity="0" stop-color="#fff"/>
                    </linearGradient>
                    <path fill="url(#b)" d="M349 492h496v323H349z"/>
                </mask>
            </defs>
            <path fill="#FC0" mask="url(#c)" d="M965 704v-87l476-115v302z"/>
            <path fill="#FC0" mask="url(#d)" d="M835 704v-87L359 502v302z"/>
            <g stroke-width="20">
                <path fill="#fff" stroke="#000" d="M833 728h134l67 528H766z"/>
                <path fill="#fff" stroke="#373435" d="M823 704h153.247v23.576H823z"/>
                <path stroke="#000" d="M746 1256h308.85v42.437H746z"/>
                <path fill="#FC0" stroke="#000" d="M835 617h129.671v87.232H835z"/>
                <path stroke="#000" d="M985 617H815l85-40z"/>
                <path fill="red" stroke="#000" d="m984 860 17 132H799l17-132zm34 264 16 132H766l16-132z"/>
            </g>
            <path fill="none" d="M0 0h1800v1800H0z"/>
        `
    }
}

/**
 * Cardinal Mark SVG definitions with optimized viewBoxes
 */
export const CardinalMarks = {
    North: {
        viewBox: "670 120 460 800", // Optimized bounds around North cardinal mark
        paths: `
            <path style="fill:#000" d="m900 497 80 123H821zm0 156 80 123H821z" transform="matrix(1 0 0 .99267 -26.864 -376.502)"/>
            <path style="fill:#fff212;stroke:#000;stroke-width:20" d="m931 842 53 304 119 48v109H697v-109l119-48 53-304z" transform="matrix(1 0 0 .99267 -26.864 -376.502)"/>
            <path style="fill:#000;stroke:#000;stroke-width:20" d="m816 1146 53-304h62l53 304z" transform="matrix(1 0 0 .99267 -26.864 -376.502)"/>
        `
    },
    East: {
        viewBox: "670 120 460 800", // Optimized bounds around East cardinal mark
        paths: `
                <path style="fill:#000" d="m980 653-80 123-79-123zm-159-33 79-123 80 123z" transform="translate(-26.86 -386.125)"/>
                <path style="fill:#000;stroke:#000;stroke-width:20" d="m931 842 53 304 119 48v109H697v-109l119-48 53-304z" transform="translate(-26.86 -386.125)"/>
                <path style="fill:#fff212;stroke:#000;stroke-width:20" d="m816 1146 53-304h62l53 304z" transform="translate(-26.86 -386.125)"/>
                <path style="fill:#000;stroke:#000;stroke-width:20" d="m844 985 25-143h62l25 143z" transform="translate(-26.86 -386.125)"/>
        `
    },
    South: {
        viewBox: "670 120 460 800", // Optimized bounds around South cardinal mark
        paths: `
            <path transform="translate(-26.865 -383.502)" style="fill:#000" d="m908 770-79-123h159zm-79-279h159l-80 123z"/>
            <path transform="translate(-26.865 -392.125)" style="fill:#000;stroke:#000;stroke-width:20" d="m697 1200 119-49 53-303h62l53 303 119 49v109H697z"/>
            <path transform="translate(-26.865 -392.125)" style="fill:#fff212;stroke:#000;stroke-width:20" d="M869 848h62l53 303H816z"/>
        `
    },
    West: {
        viewBox: "670 120 460 800", // Optimized bounds around West cardinal mark (made consistent)
        paths: `
            <path transform="matrix(1 0 0 -1 -26.865 1033.498)" style="fill:#000" d="m908 770-79-123h159z"/>
            <path transform="translate(-26.865 -383.502)" style="fill:#000" d="m988 491-80 123-79-123z"/>
            <path style="fill:#fff212;stroke:#000;stroke-width:20" d="m931 842 53 304 119 48v109H697v-109l119-48 53-304z" transform="translate(-26.86 -386.125)"/>
            <path style="fill:#000;stroke:#000;stroke-width:20" d="m816 1146 53-304h62l53 304z" transform="translate(-26.86 -386.125)"/>
            <path style="fill:#fff212;stroke:#000;stroke-width:20" d="m844 985 25-143h62l25 143z" transform="translate(-26.86 -386.125)"/>
        `
    }
};

export const preferredChannel = {
    portHand: {
        viewBox: "670 250 460 800", // Consistent with other channel marks
        paths: ``
    },
    starboardHand:{
        viewBox: "670 250 460 800", // Consistent with other channel marks
        paths: ``
    }
}

/**
 * Light symbol SVG for AtoNs with lights - Official chart symbol
 */
export const LightSymbol = {
    viewBox: "0 2 2 2",
    paths: `<path d="M 131.60087,181.31159 L 69.97299,257.62001 L 65.44288,263.19827 L 59.885447,267.42201 L 52.986033,269.53125 L 45.663807,269.42153 L 38.851616,267.12524 L 33.104189,262.78791 L 28.902861,256.70061 L 26.677963,249.64945 L 26.834933,242.67425 L 29.567773,236.58472 L 34.162548,231.27636 L 39.756076,226.40835 L 40.930254,225.46186 L 131.60087,181.31159 z M 159.60212,156.05108 C 161.79918,155.83146 163.76054,157.43633 163.98017,159.63337 C 164.19979,161.83043 162.59492,163.79179 160.39788,164.01142 C 158.20082,164.23104 156.23946,162.62617 156.01983,160.42913 C 155.80021,158.23207 157.40508,156.27071 159.60212,156.05108 z" style="fill:#a30075;fill-opacity:1;fill-rule:evenodd;stroke:none"/>`
}

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

/**
 * Generate SVG icon HTML for a special mark
 * @param direction Cardinal direction (North, East, South, West)
 * @param size Icon size in pixels
 * @returns Complete SVG HTML string
 */
export function getSpecialMarkSVG(type: keyof typeof SpecialMarks, size: number = 24): string {
    const mark = SpecialMarks[type];
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

/**
 * Generate SVG icon HTML for a light symbol
 * @param size Icon size in pixels
 * @returns Complete SVG HTML string
 */
export function getLightSymbolSVG(size: number = 16): string {
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
             viewBox="${LightSymbol.viewBox}">
            ${LightSymbol.paths}
        </svg>
    `;
}

/**
 * Create composite SVG with AtoN base and light symbol overlay
 * @param baseType AtoN type for base SVG
 * @param hasLight Whether to show light symbol
 * @param size Icon size in pixels
 * @returns Complete composite SVG HTML string
 */
export function getAtoNWithLightSVG(baseType: keyof typeof SpecialMarks | keyof typeof CardinalMarks, hasLight: boolean, size: number = 24): string {
    let baseSVG = '';
    let baseViewBox = '';
    
    // console.debug(`getAtoNWithLightSVG: baseType=${baseType}, hasLight=${hasLight}, size=${size}`);
    
    // Get the base SVG content
    if (baseType in SpecialMarks) {
        const mark = SpecialMarks[baseType as keyof typeof SpecialMarks];
        baseSVG = mark.paths;
        baseViewBox = mark.viewBox;
        // console.debug(`Using SpecialMarks: viewBox=${baseViewBox}`);
    } else if (baseType in CardinalMarks) {
        const mark = CardinalMarks[baseType as keyof typeof CardinalMarks];
        baseSVG = mark.paths;
        baseViewBox = mark.viewBox;
        // console.debug(`Using CardinalMarks: viewBox=${baseViewBox}`);
    }
    
    if (!hasLight || !baseSVG) {
        // console.debug(`Returning base SVG without light: hasLight=${hasLight}, baseSVG exists=${!!baseSVG}`);
        // Return base SVG without light
        if (baseType in SpecialMarks) {
            return getSpecialMarkSVG(baseType as keyof typeof SpecialMarks, size);
        } else if (baseType in CardinalMarks) {
            return getCardinalMarkSVG(baseType as keyof typeof CardinalMarks, size);
        }
        return '';
    }
    
    const compositeResult = `
        <svg xmlns="http://www.w3.org/2000/svg" 
             xml:space="preserve" 
             width="${size}px" 
             height="${size}px" 
             shape-rendering="geometricPrecision" 
             text-rendering="geometricPrecision" 
             image-rendering="optimizeQuality" 
             fill-rule="evenodd" 
             clip-rule="evenodd" 
             viewBox="${baseViewBox}">
            ${baseSVG}
        </svg>
    `;
    
    // console.debug(`Generated composite SVG with light symbol`);
    return compositeResult;
}