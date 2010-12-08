var GOD={}; //geometry of design namespace

GOD.draw={};
GOD.draw.rootTwo=function(sDef){
    /*
    * Define
    */
    var canvas=document.getElementById('goldenSection'),
        ctx=(function(){
            if(canvas.getContext){return canvas.getContext('2d');}
            else{return null;}//canvas not supported
        }()),
        //re-used lookups
        sqrX=sDef.x,
        sqrY=sDef.y,
        sqrW=sDef.w,
        sqrH=sDef.h,
        radi=Math.sqrt(2*Math.pow(sqrH,2));
    /*
    * Draw
    */
    if(ctx!==null){
        canvas.setAttribute('height',sqrH);
        canvas.setAttribute('width',radi+1);
        ctx.strokeRect(sqrX,sqrY,sqrW,sqrH);
        ctx.arc(sqrX,sqrH,radi,(Math.PI/180)*315,(Math.PI/180)*0,false);
        ctx.stroke();
        ctx.strokeRect(sqrW,sqrY,radi-sqrW,sqrH);
    }
};

GOD.draw.rootTwo({x:0,y:0,w:150,h:150});
