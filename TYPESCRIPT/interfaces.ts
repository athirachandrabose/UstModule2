interface Paint{
    drawPoint():void;
}



interface Paint2D{
    drw2DImage():void;
}

class Circle implements Paint,Paint2D{
    drw2DImage(): void {
        throw new Error("Method not implemented.");
    }
    draw2DImage():void{
        console.log("drawing a 2d");
    }
    drawPoint(): void {
        console.log("drawing ")
    }
}
var cir=new Circle();
cir.drawPoint();
cir.draw2DImage();