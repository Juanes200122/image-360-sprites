const moveElements = document.querySelectorAll('#move-image-360');
const valorDisplays = document.querySelectorAll('#value');

let isDragging = false;
let startX;
let lastValue = 1;
const minValue = 1;
const maxValue = 71;

function updateValue(deltaX) {
    const newValue = (lastValue + Math.round(deltaX / window.innerWidth * (maxValue - minValue))) % maxValue;
    return newValue <= 0 ? maxValue + newValue : newValue;
}

function handleStart(e) {
    isDragging = true;
    startX = e.clientX || e.touches[0].clientX;
    moveElements.forEach(element => element.style.cursor = 'grabbing');
}

function handleMove(e) {
    if (isDragging) {
        const clientX = e.clientX || e.touches[0].clientX;
        const deltaX = clientX - startX;
        const currentValue = updateValue(deltaX);
        valorDisplays.forEach(display => display.textContent = `${currentValue}`);
    }
}

function handleEnd(e) {
    if (isDragging) {
        isDragging = false;
        moveElements.forEach(element => element.style.cursor = 'grab');

        const clientX = e.clientX || e.changedTouches[0].clientX;
        const deltaX = clientX - startX;
        lastValue = updateValue(deltaX);
    }
}

moveElements.forEach(element => {
    element.addEventListener('mousedown', handleStart);
    element.addEventListener('touchstart', handleStart);
});
window.addEventListener('mousemove', handleMove);
window.addEventListener('mouseup', handleEnd);
window.addEventListener('touchmove', handleMove);
window.addEventListener('touchend', handleEnd);

const valorElements = document.querySelectorAll('#value');
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
            const numberValue = mutation.target.textContent.trim();
            if (!isNaN(numberValue) && numberValue !== '') {
                console.log(numberValue);

                const image_translate = document.querySelectorAll('#image-360-sprites');

                const offsets = {
                    1: { offset_left: '0', offset: 0 },
                    2: { offset_left: '0', offset: -2346 },
                    3: { offset_left: '0', offset: -1173 },
                    4: { offset_left: '0', offset: -3519 },
                    5: { offset_left: '0', offset: -391 },
                    6: { offset_left: '0', offset: -2737 },
                    7: { offset_left: '0', offset: -1564 },
                    8: { offset_left: '0', offset: -3910 },
                    9: { offset_left: '0', offset: -782 },
                    10: { offset_left: '0', offset: -3128 },
                    11: { offset_left: '0', offset: -1955 },
                    12: { offset_left: '0', offset: -4301 },
                    13: { offset_left: '-648', offset: -2346 },
                    14: { offset_left: '-648', offset: -1173 },
                    15: { offset_left: '-648', offset: -3519 },
                    16: { offset_left: '-648', offset: -391 },
                    17: { offset_left: '-648', offset: -2737 },
                    18: { offset_left: '-648', offset: -1564 },
                    19: { offset_left: '-648', offset: -3910 },
                    20: { offset_left: '-648', offset: -782 },
                    21: { offset_left: '-648', offset: -3128 },
                    22: { offset_left: '-648', offset: -1955 },
                    23: { offset_left: '-648', offset: -4301 },
                    24: { offset_left: '-1296', offset: 0 },
                    25: { offset_left: '-1296', offset: -2346 },
                    26: { offset_left: '-1296', offset: -1173 },
                    27: { offset_left: '-1296', offset: -3519 },
                    28: { offset_left: '-1296', offset: -391 },
                    29: { offset_left: '-1296', offset: -2737 },
                    30: { offset_left: '-1296', offset: -1564 },
                    31: { offset_left: '-1296', offset: -3910 },
                    32: { offset_left: '-1296', offset: -782 },
                    33: { offset_left: '-1296', offset: -3128 },
                    34: { offset_left: '-1296', offset: -1955 },
                    35: { offset_left: '-1296', offset: -4301 },
                    36: { offset_left: '-1944', offset: 0 },
                    37: { offset_left: '-1944', offset: -2346 },
                    38: { offset_left: '-1944', offset: -1173 },
                    39: { offset_left: '-1944', offset: -3519 },
                    40: { offset_left: '-1944', offset: -391 },
                    41: { offset_left: '-1944', offset: -2737 },
                    42: { offset_left: '-1944', offset: -1564 },
                    43: { offset_left: '-1944', offset: -3910 },
                    44: { offset_left: '-1944', offset: -782 },
                    45: { offset_left: '-1944', offset: -3128 },
                    46: { offset_left: '-1944', offset: -1955 },
                    47: { offset_left: '-1944', offset: -4301 },
                    48: { offset_left: '-2592', offset: 0 },
                    49: { offset_left: '-2592', offset: -2346 },
                    50: { offset_left: '-2592', offset: -1173 },
                    51: { offset_left: '-2592', offset: -3519 },
                    52: { offset_left: '-2592', offset: -391 },
                    53: { offset_left: '-2592', offset: -2737 },
                    54: { offset_left: '-2592', offset: -1564 },
                    55: { offset_left: '-2592', offset: -3910 },
                    56: { offset_left: '-2592', offset: -782 },
                    57: { offset_left: '-2592', offset: -3128 },
                    58: { offset_left: '-2592', offset: -1955 },
                    59: { offset_left: '-2592', offset: -4301 },
                    60: { offset_left: '-3240', offset: 0 },
                    61: { offset_left: '-3240', offset: -2346 },
                    62: { offset_left: '-3240', offset: -1173 },
                    63: { offset_left: '-3240', offset: -3519 },
                    64: { offset_left: '-3240', offset: -391 },
                    65: { offset_left: '-3240', offset: -2737 },
                    66: { offset_left: '-3240', offset: -1564 },
                    67: { offset_left: '-3240', offset: -3910 },
                    68: { offset_left: '-3240', offset: -782 },
                    69: { offset_left: '-3240', offset: -3128 },
                    70: { offset_left: '-3240', offset: -1955 },
                    71: { offset_left: '-3240', offset: -4301 }
                };
                const { offset_left = '0', offset = 0 } = offsets[numberValue] || {};
                image_translate.forEach(image => image.style.transform = `translate3d(${offset_left}px, ${offset}px, 0px)`);
            }
        }
    });
});
valorElements.forEach(element => observer.observe(element, { childList: true }));