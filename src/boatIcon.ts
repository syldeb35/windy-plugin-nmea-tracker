declare global {
    interface Window {
        L: any;
    }
}

export function createRotatingBoatIcon(head: number, opacity: number = 0.846008): any {
    const L = (window as any).L;
    return L.divIcon({
        className: '',
        html: `
            <div class="rotatable" data-heading="${head}" style="transform: rotateZ(${head}deg); transform-origin: 12px 12px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 14 14">
                    <path d="M4.784,13.635c0,0 -0.106,-2.924 0.006,-4.379c0.115,-1.502 0.318,-3.151 0.686,-4.632c0.163,-0.654 0.45,-1.623 0.755,-2.44c0.202,-0.54 0.407,-1.021 0.554,-1.352c0.038,-0.085 0.122,-0.139 0.215,-0.139c0.092,0 0.176,0.054 0.214,0.139c0.151,0.342 0.361,0.835 0.555,1.352c0.305,0.817 0.592,1.786 0.755,2.44c0.368,1.481 0.571,3.13 0.686,4.632c0.112,1.455 0.006,4.379 0.006,4.379l-4.432,0Z" style="fill:#002efc;fill-opacity:${opacity};"/>
                    <path d="M5.481,12.731c0,0 -0.073,-3.048 0.003,-4.22c0.06,-0.909 0.886,-3.522 1.293,-4.764c0.03,-0.098 0.121,-0.165 0.223,-0.165c0.103,0 0.193,0.067 0.224,0.164c0.406,1.243 1.232,3.856 1.292,4.765c0.076,1.172 0.003,4.22 0.003,4.22l-3.038,0Z" style="fill:#fff;fill-opacity:${opacity};"/>
                </svg>
            </div>
        `,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
    });
}

