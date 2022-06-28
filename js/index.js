displayMore.addEventListener('mouseover',()=>{
    more.style.display="inline-block"
  })

  displayMore.addEventListener('mouseout',()=>{
    more.style.display="none"
  })

  let i=1;
  setInterval(()=>{
    if(i===6)
      i=1
    slider.innerHTML=`<img src="/image/slider/${i}.jpg" alt="">`
    i=i+1
  },2000);