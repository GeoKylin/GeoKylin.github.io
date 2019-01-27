/* ---------------------------------------------------------------------------
 * Initialize.
 * --------------------------------------------------------------------------- */
// Get the rank.
let s = document.getElementsByTagName("script");
let rank = s[s.length - 1].getAttribute("rank");

let urlHead = '';
for (let i = 0; i < rank; i++) {
    urlHead += '../';
}

// Add modules.
addMobileBar();
addMobileMenu();
addHeader();
addFooter();

/* ---------------------------------------------------------------------------
 * Add mobileBar.
 * --------------------------------------------------------------------------- */
function addMobileBar() {
    // Get the elements of mobileBar.
    let mobileBar = document.getElementById('mobile-navbar');
    mobileBar.innerHTML = '  <div class="mobile-header-logo">\n' +
                        '        <a href="' + urlHead + '" class="logo">GeoKylin</a>\n' +
                        '    </div>\n' +
                        '    <div class="mobile-navbar-icon">\n' +
                        '        <span></span>\n' +
                        '        <span></span>\n' +
                        '        <span></span>\n' +
                        '    </div>';
}

/* ---------------------------------------------------------------------------
 * Add mobileMenu.
 * --------------------------------------------------------------------------- */
function addMobileMenu() {
    // Get the elements of mobileMenu.
    let mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.innerHTML = '  <ul class="mobile-menu-list">\n' +
                        '        <a href="' + urlHead + '">\n' +
                        '            <li class="mobile-menu-item">首页</li>\n' +
                        '        </a>\n' +
                        '        <a href="' + urlHead + 'post/">\n' +
                        '            <li class="mobile-menu-item">归档</li>\n' +
                        '        </a>\n' +
                        '        <a href="' + urlHead + 'categories/">\n' +
                        '            <li class="mobile-menu-item">分类</li>\n' +
                        '        </a>\n' +
                        '        <a href="' + urlHead + 'tags/">\n' +
                        '            <li class="mobile-menu-item">标签</li>\n' +
                        '        </a>\n' +
                        '        <a href="' + urlHead + 'links/">\n' +
                        '            <li class="mobile-menu-item">链接</li>\n' +
                        '        </a>\n' +
                        '        <a href="' + urlHead + 'collections/">\n' +
                        '            <li class="mobile-menu-item">合集</li>\n' +
                        '        </a>\n' +
                        '        <a href="' + urlHead + 'museum/">\n' +
                        '            <li class="mobile-menu-item">博物馆</li>\n' +
                        '        </a>\n' +
                        '        <a href="' + urlHead + 'donations/">\n' +
                        '            <li class="mobile-menu-item">捐赠</li>\n' +
                        '        </a>\n' +
                        '        <a href="' + urlHead + 'about/">\n' +
                        '            <li class="mobile-menu-item">关于</li>\n' +
                        '        </a>\n' +
                        '    </ul>';
}

/* ---------------------------------------------------------------------------
 * Add header.
 * --------------------------------------------------------------------------- */
function addHeader() {
    // Get the elements of header.
    let header = document.getElementById('header');
    header.innerHTML = ' <div class="logo-wrapper">\n' +
                '            <a href="' + urlHead + '" class="logo">GeoKylin</a>\n' +
                '        </div>\n' +
                '        <nav class="site-navbar">\n' +
                '            <ul id="menu" class="menu">\n' +
                '                <li class="menu-item">\n' +
                '                    <a class="menu-item-link" href="' + urlHead + '">首页</a>\n' +
                '                </li>\n' +
                '                <li class="menu-item">\n' +
                '                    <a class="menu-item-link" href="' + urlHead + 'post/">归档</a>\n' +
                '                </li>\n' +
                '                <li class="menu-item">\n' +
                '                    <a class="menu-item-link" href="' + urlHead + 'categories/">分类</a>\n' +
                '                </li>\n' +
                '                <li class="menu-item">\n' +
                '                    <a class="menu-item-link" href="' + urlHead + 'tags/">标签</a>\n' +
                '                </li>\n' +
                '                <li class="menu-item">\n' +
                '                    <a class="menu-item-link" href="' + urlHead + 'links/">链接</a>\n' +
                '                </li>\n' +
                '                <li class="menu-item">\n' +
                '                    <a class="menu-item-link" href="' + urlHead + 'collections/">合集</a>\n' +
                '                </li>\n' +
                '                <li class="menu-item">\n' +
                '                    <a class="menu-item-link" href="' + urlHead + 'museum/">博物馆</a>\n' +
                '                </li>\n' +
                '                <li class="menu-item">\n' +
                '                    <a class="menu-item-link" href="' + urlHead + 'donations/">捐赠</a>\n' +
                '                </li>\n' +
                '                <li class="menu-item">\n' +
                '                    <a class="menu-item-link" href="' + urlHead + 'about/">关于</a>\n' +
                '                </li>\n' +
                '            </ul>\n' +
                '        </nav>';
}

/* ---------------------------------------------------------------------------
 * Add footer.
 * --------------------------------------------------------------------------- */
function addFooter() {
    // Get the elements of footer.
    let footer = document.getElementById('footer');
    footer.innerHTML = '  <div class="social-links">\n' +
                '            <a itemprop=sameAs href=' + urlHead + '../html/Academic.html target=_blank rel=noopener title="academic">\n' +
                '                <i class="fa fa-university fa-2x"></i>\n' +
                '            </a>\n' +
                '            <a itemprop=sameAs href=https://github.com/GeoKylin target=_blank rel=noopener title="github">\n' +
                '                <i class="fab fa-github fa-2x"></i>\n' +
                '            </a>\n' +
                '            <a itemprop=sameAs href="https://weibo.com/u/5602644538" target=_blank rel=noopener title="weibo">\n' +
                '                <i class="fab fa-weibo fa-2x"></i>\n' +
                '            </a>\n' +
                '            <a itemprop=sameAs href=' + urlHead + '../index.html target=_blank rel=noopener title="GeoKylin">\n' +
                '                <i class="fas fa-globe fa-2x"></i>\n' +
                '            </a>\n' +
                '            <a itemprop=sameAs href=' + urlHead + '../wiki/index.html target="_blank" rel=noopener title="wiki">\n' +
                '                <i class="fab fa-wikipedia-w fa-2x"></i>\n' +
                '            </a>\n' +
                '            <a itemprop=sameAs href=' + urlHead + '../links/index.html target=_blank rel=noopener title="links">\n' +
                '                <i class="fa fa-link fa-2x"></i>\n' +
                '            </a>\n' +
                '            <a itemprop=sameAs href=mailto:wangkai185@mails.ucas.edu.cn target="_blank" rel=noopener title="mail">\n' +
                '                <i class="fas fa-envelope fa-2x"></i>\n' +
                '            </a>\n' +
                '        </div>\n' +
                '        <div class="copyright">\n' +
                '            <div class="busuanzi-footer">\n' +
                '                <span id="busuanzi_container_site_uv">\n' +
                '                    <span id="busuanzi_value_site_uv">\n' +
                '                        <img src="img/spinner.svg" alt="spinner.svg"/>\n' +
                '                    </span>\n' +
                '                    位读者阅读了\n' +
                '                    <span id="busuanzi_value_site_pv">\n' +
                '                        <img src="img/spinner.svg" alt="spinner.svg"/>\n' +
                '                    </span>\n' +
                '                    次\n' +
                '                </span>\n' +
                '            </div>\n' +
                '            <span class="copyright-year">\n' +
                '                Copyright &copy; 2019 - 2019 <a href=' + urlHead + '../index.html class="theme-link" target="_blank" rel="noopener">GeoKylin</a> &middot; Powered by the <a class="theme-link" href="https://github.com/olOwOlo/hugo-theme-even" target="_blank" rel="noopener">Even theme</a> for <a class="hexo-link" href="https://gohugo.io" target="_blank" rel="noopener">Hugo</a>.\n' +
                '            </span>\n' +
                '        </div>';
}

