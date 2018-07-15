'use strict';

(function(){
    const selectors = [];

    function _normalize(selector){
        const elems = document.querySelectorAll(selector);
        let tallest = 0;

        for(let i = 0, len = elems.length; i < len; i++){
            const height = parseInt(getComputedStyle(elems[i]).height);

            if(height > tallest) tallest = height;
        }

        for(let i = 0, len = elems.length; i < len; i++){
            elems[i].style['min-height'] = tallest.toString() + 'px';
        }
    }

    function _unset(selector){
        [].slice.call(document.querySelectorAll(selector))
            .forEach(function(el){ el.style['min-height'] = 0 });
    }

    function _addSelector(selector){
        if(selectors.indexOf(selector) == -1) selectors.push(selector);
        _normalize(selector);
    }

    function _run(){
        for(let selector of selectors){
            _unset(selector);
            _normalize(selector);
        }
    }

    function _debounce(func, wait, immediate) {
    	let timeout;
    	return function() {
    		const context = this,
                  args    = arguments;

    		var later = function() {
    			timeout = null;
    			if (!immediate) func.apply(context, args);
    		};

    		const callNow = immediate && !timeout;
    		clearTimeout(timeout);
    		timeout = setTimeout(later, wait);
    		if(callNow) func.apply(context, args);
    	};
    };

    window.addEventListener('resize', _debounce(_run, 250));

    window.sameHeight = function(selector){
        _addSelector(selector);
    }

})();
