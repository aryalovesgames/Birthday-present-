const slider = document.getElementById('idiot-scale');
const displayVal = document.getElementById('current-value');
const submitBtn = document.getElementById('submit-btn');

const rewardPopup = document.getElementById('reward-popup');
const claimBtn = document.getElementById('claim-btn');

const qrPopup = document.getElementById('qr-popup');
const backToMessageBtn = document.getElementById('back-to-message-btn');
const closeQrBtn = document.getElementById('close-qr-btn');

const errorPopup = document.getElementById('error-popup');
const closeErrorBtn = document.getElementById('close-error-btn');

function updateSliderTrack() {
    const value = slider.value;
    displayVal.textContent = `${value}%`;
    slider.style.background = `linear-gradient(to right, #780606 0%, #780606 ${value}%, rgba(255, 255, 255, 0.15) ${value}%, rgba(255, 255, 255, 0.15) 100%)`;
}

slider.addEventListener('input', updateSliderTrack);

updateSliderTrack();

submitBtn.addEventListener('click', () => {
    const currentValue = parseInt(slider.value);

    if (currentValue === 100) {
        rewardPopup.classList.remove('hidden');
    } else {
        errorPopup.classList.remove('hidden');
    }
});

claimBtn.addEventListener('click', () => {
    rewardPopup.classList.add('hidden');
    qrPopup.classList.remove('hidden');
});

backToMessageBtn.addEventListener('click', () => {
    qrPopup.classList.add('hidden');
    rewardPopup.classList.remove('hidden');
});

closeQrBtn.addEventListener('click', () => {
    qrPopup.classList.add('hidden');
});

closeErrorBtn.addEventListener('click', () => {
    errorPopup.classList.add('hidden');
});