function updateClock() {
    const now = new Date();

    document.querySelectorAll("#clock").forEach(el => {
        el.textContent = now.toLocaleTimeString();
    });

    document.querySelectorAll("#date").forEach(el => {
        el.textContent = now.toLocaleDateString();
    });
}

function updateMarqueeApis() {
    fetch("https://www.mapforham.com/hf-propagation/data/solar.json")
        .then(response => response.json())
        .then(data => {
            console.log("Got data:", data);
            console.log(data.solar_flux);

            document.querySelectorAll("#sfi").forEach(el => {
                el.textContent = data.solar_flux;
            });
            document.querySelectorAll("#band40").forEach(el => {
                el.textContent = data.bands_detail[3].day + "/" + data.bands_detail[3].night;
            });
            document.querySelectorAll("#band20").forEach(el => {
                el.textContent = data.bands_detail[5].day + "/" + data.bands_detail[5].night;
            });
            document.querySelectorAll("#band80").forEach(el => {
                el.textContent = data.bands_detail[1].day + "/" + data.bands_detail[1].night;
            });
            document.querySelectorAll("#band10").forEach(el => {
                el.textContent = data.bands_detail[9].day + "/" + data.bands_detail[9].night;
            });
        })
        .catch(error => {
            console.error("api error:", error);
        });
}

updateClock();
updateMarqueeApis();
setInterval(updateClock, 1000);
setInterval(updateMarqueeApis, 60000);