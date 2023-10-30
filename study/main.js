document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section[id^="section-"]');
    const toc = document.createElement('section');
    toc.id = 'table-of-contents';

    const tocContent = document.createElement('ol');
    tocContent.innerHTML = '<h2>Table of Contents</h2>';

    sections.forEach((section) => {
        const title = section.querySelector('h2, h3, h4, h5, h6');
        if (title) {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = `#${section.id}`;
            anchor.textContent = title.textContent;
            listItem.appendChild(anchor);
            tocContent.appendChild(listItem);
        }
    });

    toc.appendChild(tocContent);
    document.body.appendChild(toc);

    // Set the initial position of the table of contents
    const tocInitialPosition = toc.offsetTop;

    // Update the position of the table of contents while scrolling
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > tocInitialPosition) {
            toc.style.top = window.pageYOffset + 'px';
        } else {
            toc.style.top = tocInitialPosition + 'px';
        }
    });
});