window.addEventListener('scroll',
    () => {
        if (document.getElementById('container')) {
            let distance = document.getElementById('container').getBoundingClientRect().top;
            const windowsHeight = window.innerHeight - 300;
            if (distance < windowsHeight) {
                if (document.getElementById('container').style.backgroundImage) {
                    document.getElementById('container').style.transform = "skewY(-5deg) translateX(0)"
                    document.getElementById('container').style.opacity = 1
                } else {
                    document.getElementById('container').style.transform = "translateX(0)"
                    document.getElementById('container').style.opacity = 1
                }

            }
        }
    }
);