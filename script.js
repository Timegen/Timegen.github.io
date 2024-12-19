const scrollArea = document.getElementById('scrollArea');
scrollArea.addEventListener('scroll', () => {
    const reels = [
        "🌌 Life is limitless",
        "🔥 Homixide flow",
        "🖤 Fweah vibes only",
        "🎭 Create your own legend",
        "💨 Cartamon takeover",
        "🌙 Stay Opium forever"
    ];
    if (scrollArea.scrollTop + scrollArea.clientHeight >= scrollArea.scrollHeight) {
        const newReel = document.createElement('div');
        newReel.className = 'reel-item';
        newReel.textContent = reels[Math.floor(Math.random() * reels.length)];
        scrollArea.appendChild(newReel);
    }
});
