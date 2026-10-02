let mode = 'full'
const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')

fullBtn.addEventListener('click', () => { mode = 'full'; update() })
dateBtn.addEventListener('click', () => { mode = 'date'; update() })
timeBtn.addEventListener('click', () => { mode = 'time'; update() })

setInterval(update,100)
update()


function update () {
    output.textContent = format(mode)
}


function format (formatMode) {
const now = new Date()

switch (formatMode) {
    case 'time':
        return now.toLocaleTimeString() + '.' + now.getMilliseconds()
    case 'date':
        return now.toLocaleDateString()
    case 'full':
        return now.toLocaleDateString()+ ' ' + now.toLocaleTimeString()
    default:
        return now.toLocaleTimeString()    
}
}
