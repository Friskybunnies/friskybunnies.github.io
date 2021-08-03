export default function sketch(p) {
    p.setup = (canvasParentRef) => {
        p.createCanvas(p.windowWidth, p.windowHeight - 100, p.WEBGL).parent(canvasParentRef);
    }
        
    p.draw = () => {
        p.background(0);
        p.noFill();
        p.stroke(80, 200, 120);
        p.rotateX(p.frameCount * 0.01);
        p.rotateY(p.frameCount * 0.01);
        p.box(200, 200, 200);
        p.stroke(80, 200, 120);
        p.rotateX(p.frameCount * 0.01);
        p.rotateY(p.frameCount * 0.01);
        p.stroke(117, 145, 202);
        p.sphere(120);
        p.translate(-100, 200, 300);
        p.rotateX(p.frameCount * 0.005);
        p.rotateY(p.frameCount * 0.005);
        p.rotateY(p.millis()/500);
        p.torus(15, 5);
        p.fill(117, 145, 202);
        p.noErase();
        p.translate(-100, -100, -100)
        p.rotateX(p.frameCount * 0.01);
        p.rotateY(p.frameCount * 0.01);
        p.sphere(90);

        p.stroke(80, 200, 120);
        p.translate(-300, -175, 500);
        p.rotateX(p.frameCount * 0.01);
        p.rotateY(p.frameCount * 0.01);
        p.sphere(45);

        p.stroke(80, 200, 120);
        p.translate(400, 500, -500);
        p.rotateX(p.frameCount * 0.005);
        p.rotateY(p.frameCount * 0.005);
        p.sphere(30);

        p.stroke(80, 200, 120);
        p.translate(-600, 300, -200);
        p.rotateX(p.frameCount * 0.01);
        p.rotateY(p.frameCount * 0.01);
        p.sphere(90);

        p.fill(80, 200, 120);
        p.noStroke();
        p.translate(500, 50, 100);
        p.sphere(30);
        p.erase();
        p.rotateY(p.frameCount * 0.01);
        p.translate(-200, -200, -200);
    }
}
   