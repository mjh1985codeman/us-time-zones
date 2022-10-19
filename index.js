const localEl = document.getElementById('local')
const estEl = document.getElementById('est');
const cstEl = document.getElementById('cst');
const mstEl = document.getElementById('mst');
const pstEl = document.getElementById('pst');
const timeZones = ['America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles']

const getTimes = () => {
    const time = new Date();
    const timeObj = {
        localTime: time.toLocaleString('en-US'),
        estTime: time.toLocaleString('en-US', {
            timeZone: timeZones[0]
        }),
        cstTime: time.toLocaleString('en-US', {
            timeZone: timeZones[1]
        }),
        mstTime: time.toLocaleString('en-US', {
            timeZone: timeZones[2]
        }),
        pstTime: time.toLocaleString('en-US', {
            timeZone: timeZones[3]
        })
    }
    writeThings(timeObj)
};

const writeThings = obj => {
   localEl.innerHTML = obj.localTime;
   estEl.innerHTML = obj.estTime;
   cstEl.innerHTML = obj.cstTime;
   mstEl.innerHTML = obj.mstTime;
   pstEl.innerHTML = obj.pstTime;
};

getTimes();