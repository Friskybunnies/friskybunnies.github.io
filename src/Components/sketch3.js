export default function sketch(p) {
    p.setup = (canvasParentRef) => {
        p.createCanvas(p.windowWidth, p.windowHeight - 100, p.WEBGL).parent(canvasParentRef);
    }

    p.draw = () => {
        p.background(80, 200, 120);
        p.noStroke();
        p.fill(0);
        
        const span = p.width / 3.4;
        const ns = 0.1;
        const noffs = 0.35;
        let yCount = 0;
        const cycle = 480;
        const nRad = p.frameCount % cycle / cycle * p.TAU;
        
        const nx = p.cos(nRad) * noffs;
        const ny = p.sin(nRad) * noffs;
        
        for(let y = -span / 2; y < p.height; y += span){
            
            let offset = yCount % 2 == 1 ? 0 : span * 0.5;
            
            for(let x = -offset; x < p.width; x += span)
            {
                const gx = x + span /2;
                const gy = y + span;
                const rx = span / 1.2;
                const ry = span / 2;
                
                const h = span * 1.3 * (p.pow (p.noise(nx + gx * ns, ny + gy * ns), 2) * 1.2 + 0.01);
                const topRatio = p.noise(nx * 2 + gx * ns, ny * 2 + gy * ns, 10)  + 0.1;
                
                mountain(gx, gy, rx, ry, h, topRatio);
            }
            yCount++;
        }
	
    }


    function mountain(gx, gy, rx, ry, h, topRatio) {
        p.ellipseMode(p.CENTER);
        p.push();
        p.translate(gx, gy);
        let ratio;
        for(let i = 0; i > -h; i-= 1)
        {
            ratio = p.map(i, 0, -h, 1, topRatio);
            ratio = p.pow(ratio, 3);
            p.fill(p.map(i, 0, -h, 255, 0));
            p.ellipse(0, i, rx * ratio, ry * ratio);
        }
        p.fill(117, 145, 202);
        p.ellipse(0, -h, rx * ratio, ry * ratio);
        p.pop();
    }
}

