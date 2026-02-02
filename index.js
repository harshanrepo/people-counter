countEL=document.getElementById('count_el')
saveEl=document.getElementById('save-el')

let count=0

function increment(){
  count+=1
  countEL.textContent=count
}

function save(){
  let saved=count+" - "
  saveEl.textContent+=saved
  count=0
  countEL.textContent=0
}
