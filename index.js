const localEl = document.getElementById('local')
const estEl = document.getElementById('est');
const cstEl = document.getElementById('cst');
const mstEl = document.getElementById('mst');
const pstEl = document.getElementById('pst');

const getLocalTime = () => {
   let time = new Date();
   let local = time.toLocaleString('en-US');
   getEst();
   writeThings(local)
};

const getEst = () => {
    let time = new Date();
    const dateStr = time.toLocaleString('en-US', {
        timeZone: 'America/New_York'
      })
      console.log(dateStr)
      estEl.innerHTML = dateStr;
};

const writeThings = (t) => {
   const currentTime = t;
   console.log(currentTime);
   localEl.innerHTML = currentTime;
   
};




getLocalTime();



