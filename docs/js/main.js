(()=>{class t{constructor(t){this.canvas={el:t,ctx:t.getContext("2d"),width:window.innerWidth,height:window.innerHeight},this.circle={maxDiameter:50,amount:150,colors:["#d70000ff","#d78f00ff","#d7d300ff"]},this.circles=[]}setSizeByCanvas(){this.canvas.el.width=this.canvas.width,this.canvas.el.height=this.canvas.height}setCircles(){for(let t=0;t<this.circle.amount;t++)this.circles.push({x:this.canvas.width*Math.random(),y:this.canvas.height*Math.random(),color:this.circle.colors[Math.floor(Math.random()*(this.circle.colors.length-1))],diameter:this.circle.maxDiameter*Math.random(),speedX:5*Math.random(),speedY:5*Math.random()})}createCircles(){this.canvas.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.circles.map((t=>{const{x:s,y:i,color:a,diameter:e}=t;this.canvas.ctx.beginPath(),this.canvas.ctx.arc(s,i,e,2*Math.PI,!1),this.canvas.ctx.fillStyle=a,this.canvas.ctx.fill()}))}anim(){window.requestAnimationFrame((()=>{this.circles=this.circles.map((t=>(t.x+=t.speedX,t.y+=t.speedY,(t.x>this.canvas.width||t.x<0)&&(t.speedX*=-1),(t.y>this.canvas.height||t.y<0)&&(t.speedY*=-1),t))),this.createCircles(),this.anim()}))}start(){this.setCircles(),this.setSizeByCanvas(),this.createCircles(),this.anim()}}window.addEventListener("load",(()=>{new t(document.querySelector("#canvas")).start()}))})();