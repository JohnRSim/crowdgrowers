import * as sapper from '@sapper/app';

//initialise sapper app
sapper.start({
	target: document.querySelector('#sapper')
}).then(() => {
	console.info('[CROWDGROWERS][Ready]');
});

//prefeetch all routes improve app performance
sapper.prefetchRoutes();


if (process.browser) {
    /**
     * Lazyload 
     * woh woh woh rewrite this bs..
     */
    window.lazyLoader = () => {
        let active = false;
    
        if (active === false) {
            active = true;
    
            setTimeout(() => {
                let lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));
                lazyImages.forEach((lazyImage) => {
                    if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== 'none') {
                        lazyImage.src = lazyImage.dataset.src;
                        lazyImage.srcset = lazyImage.dataset.srcset;
                        lazyImage.onload = () => {
                            lazyImage.classList.remove('lazy');
                        }
    
                        lazyImages = lazyImages.filter((image) => {
                            return image !== lazyImage;
                        });
                    }
                });
    
                active = false;
            }, 200);
        }
	};
}