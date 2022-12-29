function tabs(parentSelector, tabSelector, contentSelector, activeClass) {

    const tabContent = document.querySelectorAll(contentSelector),
          tabsParent = document.querySelector(parentSelector),
          tabs = tabsParent.querySelectorAll(tabSelector);


    function hideTabsContent () {
        tabContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
    });

    tabs.forEach(item => {
        item.classList.remove(activeClass);
    });
    }

    function showTabsContents (i = 0) {
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }

    hideTabsContent();
    showTabsContents();

    tabsParent.addEventListener('click', (e)=> {
        const target = e.target;
        if (target && target.classList.contains(tabSelector.slice(1))) {
            tabs.forEach((item, i)=> {
                if(target == item) {
                    hideTabsContent();
                    showTabsContents(i);
                }
            });
        }
    });
}

export default tabs;