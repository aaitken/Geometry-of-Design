var GOD={}; //geometry of design namespace

GOD.draw=function(){
    /*
    * Define
    */
    var cnvs=arguments[0].targ,
        ctxt=(function(){
            if(cnvs.getContext){return cnvs.getContext('2d');}
            else{return null;}//canvas not supported
        }()),
        //re-used lookups
        size=arguments[0].size+0.5,//for single pixel width
        radi,//arc radius = right angle hypotenuse - defined below per 'type'
        arcX,//arc center - defined below per 'type'
        arcL,//arc angle - defined below per 'type'
        recW,//reciprocal rectangle width - defined below per 'type',
        recE,//reciprocal left edge
        //calculation functions
        calc={
            update:function(){
                recE=recE+recW;
                radi=Math.sqrt(Math.pow(size,2)+Math.pow(radi,2));
                recW=radi-recE;
            },
            gs:function(){
                radi=Math.sqrt(Math.pow(size,2)+Math.pow(0.5*size,2));
                arcX=0.5*size;
                recW=radi-0.5*size;
                recE=size;
            },
            r2:function(){//root 2
                radi=Math.sqrt(2*Math.pow(size,2));
                arcX=0;
                recW=radi-size;
                recE=size;
            },
            r3:function(){
                this.r2();
                this.update();
            },
            r4:function(){
                this.r3();
                this.update();
            },
            r5:function(){
                this.r4();
                this.update();
            }
        };
        calc[arguments[0].type]();
        arcL=Math.asin(size/radi);//returns radian angle of sine value size/radi
    /*
    * Draw
    */ 
    if(ctxt!==null){
        cnvs.setAttribute('height',800);
        cnvs.setAttribute('width',800);
        //root
        ctxt.beginPath();
        ctxt.moveTo(0.5,0.5);
        ctxt.lineTo(0.5,size);//left
        ctxt.lineTo(recE,size);//bottom
        ctxt.lineTo(recE,0.5);//right
        ctxt.lineTo(0.5,0.5);//top
        ctxt.stroke();
        //arc
        ctxt.beginPath();
        ctxt.arc(arcX,size,radi,0-arcL,0,false);
        ctxt.stroke();
        //reciprocal
        ctxt.beginPath();
        ctxt.moveTo(recE,0.5);
        ctxt.moveTo(recE,size);//left
        ctxt.lineTo(recE+recW,size);//bottom
        ctxt.lineTo(recE+recW,0.5);//right
        ctxt.lineTo(recE,0.5);//top
        ctxt.stroke();
    }
};

GOD.draw({
    targ:document.getElementById('goldenSection'),
    type:'r2',
    size:200
});
