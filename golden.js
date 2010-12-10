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
        type=arguments[0].type,
        size=arguments[0].size,
        radi,//arc radius = right angle hypotenuse - defined below off 'type'
        arcX,//arc center - defined below off 'type'
        arcL,//arc angle - defined below off 'type'
        recW;//reciprocal rectangle width - defined below off 'type'
        switch(type){
            case 'r2'://root 2
                radi=Math.sqrt(2*Math.pow(size,2));
                arcX=0;
                recW=radi-size;
                break;
            case 'gs'://golden section
                radi=Math.sqrt(Math.pow(size,2)+Math.pow(0.5*size,2));
                arcX=0.5*size,
                recW=radi-0.5*size;
        }
        arcL=Math.asin(size/radi);//returns radian angle of sine value size/radi
    /*
    * Draw
    */ 
    if(ctxt!==null){
        cnvs.setAttribute('height',size);
        cnvs.setAttribute('width',size+recW+2);
        ctxt.strokeRect(0,0,size,size);
        ctxt.arc(arcX,size,radi,arcL,0,false);
        ctxt.stroke();
        ctxt.strokeRect(size,0,recW,size);
    }
};

GOD.draw({
    targ:document.getElementById('goldenSection'),
    type:'gs',
    size:250
});
