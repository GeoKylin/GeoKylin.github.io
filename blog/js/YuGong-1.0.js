/*************************************************
 *  YuGong : the engine of GeoKylin's blog.
 *  Version 1.0
 *	Create by GeoKylin.
 *	Email : wangkai185@mails.ucas.edu.cn
 *	Github : https://github.com/GeoKylin
 **************************************************/

/* ---------------------------------------------------------------------------
 * Request json data.
 * --------------------------------------------------------------------------- */
// Get the caller.
let script = document.getElementsByTagName("script");
let who = script[script.length - 1].getAttribute("who");

// Save a URL to access the json file as a variable.
let requestURL = '../json/paper.json';
switch (who)
{
    case "paper":
        requestURL = 'json/paper.json';
        break;
    case "category":
    case "tag":
        requestURL = '../../json/paper.json';
        break;
}

// Create an HTTP request object.
let request = new XMLHttpRequest();
// Open a new request with open().
request.open('GET', requestURL);
// Set XHR to access text format data.
request.responseType = 'text';
// Send request.
request.send();

// Handling data from the server.
request.onload = function() {
    let receivedText = request.response;
    let received = JSON.parse(receivedText);

    switch(who)
    {
        case "paper":
            addPost(received);
            break;
        case "archive":
            addArchive(received);
            break;
        case "categories":
            addCategories(received);
            break;
        case "category":
            addCategory(received);
            break;
        case "tags":
            addTags(received);
            break;
        case "tag":
            addTag(received);
            break;
    }

};

/* ---------------------------------------------------------------------------
 * Add posts.
 * --------------------------------------------------------------------------- */
function addPost(jsonObj) {
    let page = script[script.length - 1].getAttribute("page");
    let eachPage = 5;
    // Get the elements of posts.
    let posts = document.getElementById('posts');
    let content = "";
    let begin = 0;
    let end = jsonObj.length % eachPage;
    if (page != 0) {
        begin = jsonObj.length - page * eachPage;
        end = jsonObj.length - (page - 1) * eachPage;
    }
    for (let i = begin; i < end; i++) {
        content += '<article class="post">\n' +
            '                        <header class="post-header">\n' +
            '                            <h1 class="post-title">\n' +
            '                                <a class="post-link" href="articles/' + jsonObj[i].postLink + '">\n' +
            '                                    ' + jsonObj[i].title +
            '                                </a>\n' +
            '                            </h1>\n' +
            '                            <div class="post-meta">\n' +
            '                                <span class="post-time">\n' +
            '                                    <i class="far fa-calendar-alt" aria-hidden="true"></i>\n' +
            '                                    ' + jsonObj[i].date +
            '                                </span>\n' +
            '                                <span class="more-meta">\n' +
            '                                    <i class="fa fa-book" aria-hidden="true"></i>\n' +
            '                                    约 ' + jsonObj[i].words + ' 字\n' +
            '                                </span>\n' +
            '                                <span class="more-meta">\n' +
            '                                    <i class="fas fa-clock" aria-hidden="true"></i>\n' +
            '                                    预计阅读 ' + jsonObj[i].time + ' 分钟\n' +
            '                                </span>\n' +
            '                                <span class="more-meta">\n' +
            '                                    <i class="fa fa-paperclip" aria-hidden="true"></i>\n' +
            '                                    <a href="categories/' + jsonObj[i].category + '/">' + jsonObj[i].category + '</a>\n' +
            '                                </span>\n' +
            '                                <div class="post-tags">\n';
        for (let j = 0; j < jsonObj[i].tags.length; j++) {
            content += '                             <i class="fa fa-tag" aria-hidden="true"></i>\n' +
                '                                    <a href="tags/' + jsonObj[i].tags[j] + '/">' + jsonObj[i].tags[j] + '</a>\n';
        }
        content += '                          </div>\n' +
            '                            </div>\n' +
            '                        </header>\n' +
            '                        <div class="post-content">\n' +
            '                            <div class="post-summary">\n' +
            '                                ' + jsonObj[i].summary +
            '                            </div>\n' +
            '                            <div class="read-more">\n' +
            '                                <a href="articles/' + jsonObj[i].postLink + '" class="read-more-link">\n' +
            '                                    阅读更多...\n' +
            '                                </a>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </article>';
    }
    posts.innerHTML = content;
}

/* ---------------------------------------------------------------------------
 * Add archive.
 * --------------------------------------------------------------------------- */
function addArchive(jsonObj) {
    // Get the elements of archive.
    let archive = document.getElementById('archive');
    let content = '<div class="archive-title">\n' +
        '                        <span class="archive-post-counter">\n' +
        '                            共计 ' + jsonObj.length + ' 篇文章\n' +
        '                        </span>\n' +
        '                        <div>\n' +
        '                            <span itemscope itemprop=author itemtype=http://schema.org/Person>\n' +
        '                                <meta itemprop=name content="GeoKylin">\n' +
        '                            </span>\n' +
        '                            <span class=archive-post-counter>\n' +
        '                                Last updated:\n' +
        '                                <meta content="' + jsonObj[0].date + ' 00:00:00 +0800 UTC" itemprop=datePublished>\n' +
        '                                <time datetime="' + jsonObj[0].date + ' 00:00:00 +0800 UTC" itemprop=dateModified>' + jsonObj[0].date + '</time>\n' +
        '                            </span>\n' +
        '                            <span itemscope itemprop=publisher itemtype=http://schema.org/Person>\n' +
        '                                <meta itemprop=name content="GeoKylin">\n' +
        '                            </span>\n' +
        '                        </div>\n' +
        '                    </div>\n';
    let dateNow = jsonObj[0].date.split("-");
    let year = dateNow[0];
    content += '             <div class="collection-title">\n' +
        '                        <h2 class="archive-year">' + year + '</h2>\n' +
        '                    </div>\n';
    for (let i = 0; i < jsonObj.length; i++) {
        let date = jsonObj[i].date.split("-");
        if (date[0] != year) {
            year = date[0];
            content += '             <div class="collection-title">\n' +
                '                        <h2 class="archive-year">' + year + '</h2>\n' +
                '                    </div>\n';
        }
        content +='              <div class="archive-post">\n' +
            '                        <span class="archive-post-time">\n' +
            '                            ' + date[1] + '-' + date[2] + '\n' +
            '                        </span>\n' +
            '                        <span class="archive-post-title">\n' +
            '                            <a href="../articles/' + jsonObj[i].postLink + '" class="archive-post-link">\n' +
            '                                ' + jsonObj[i].title + '\n' +
            '                            </a>\n' +
            '                        </span>\n' +
            '                    </div>';
    }
    archive.innerHTML = content;
}

/* ---------------------------------------------------------------------------
 * Add categories.
 * --------------------------------------------------------------------------- */
function addCategories(jsonObj) {
    let categoriesArr = [];
    let numArr = [];
    categoriesArr[0] = jsonObj[0].category;
    numArr[0] = 0;
    for (let i = 0; i < jsonObj.length; i++) {
        let noFound = true;
        for (let j = 0; j < categoriesArr.length; j++) {
            if (jsonObj[i].category == categoriesArr[j]) {
                noFound = false;
                numArr[j]++;
            }
        }
        if (noFound) {
            categoriesArr.push(jsonObj[i].category);
            numArr.push(1);
        }
    }
    // Get the elements of category.
    let categories = document.getElementById('content');
    let content = '<section id="archive" class="archive">\n' +
        '                <div class="archive-title">\n' +
        '                    <div>\n' +
        '                        <span itemscope itemprop=author itemtype=http://schema.org/Person>\n' +
        '                            <meta itemprop=name content="GeoKylin">\n' +
        '                        </span>\n' +
        '                        <span class=archive-post-counter>\n' +
        '                            Last updated:\n' +
        '                            <meta content="' + jsonObj[0].date + ' 00:00:00 +0800 UTC" itemprop=datePublished>\n' +
        '                            <time datetime="' + jsonObj[0].date + ' 00:00:00 +0800 UTC" itemprop=dateModified>' + jsonObj[0].date + '</time>\n' +
        '                        </span>\n' +
        '                        <span itemscope itemprop=publisher itemtype=http://schema.org/Person>\n' +
        '                            <meta itemprop=name content="GeoKylin">\n' +
        '                        </span>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                </section>\n' +
        '                <div class="terms">\n' +
        '                    <div class="terms-title">\n' +
        '                        共计 ' + categoriesArr.length + ' 个分类\n' +
        '                    </div>\n' +
        '                    <div class="terms-tags">\n';
    for (let i = 0; i < categoriesArr.length; i++) {
        content += '                 <a class="terms-link" href="' + categoriesArr[i] + '/index.html">\n' +
            '                            ' + categoriesArr[i] + '\n' +
            '                            <span class="terms-count">' + numArr[i] + '</span>\n' +
            '                        </a>\n';
    }
    content += '              </div>\n' +
        '                </div>';
    categories.innerHTML = content;
}

/* ---------------------------------------------------------------------------
 * Add category.
 * --------------------------------------------------------------------------- */
function addCategory(jsonObj) {
    let category = script[script.length - 1].getAttribute("category");
    let dateArr = [];
    let titleArr = [];
    let linkArr = [];
    for (let i = 0; i < jsonObj.length; i++) {
        if (jsonObj[i].category == category) {
            dateArr.push(jsonObj[i].date);
            titleArr.push(jsonObj[i].title);
            linkArr.push(jsonObj[i].postLink);
        }
    }

    let place = document.getElementById('archive');
    let content = '<div class="archive-title">\n' +
        '                        <span class="archive-post-counter">\n' +
        '                            该分类共计 ' + dateArr.length + ' 篇文章\n' +
        '                        </span>\n' +
        '                        <div>\n' +
        '                            <span itemscope itemprop=author itemtype=http://schema.org/Person>\n' +
        '                                <meta itemprop=name content="GeoKylin">\n' +
        '                            </span>\n' +
        '                            <span class=archive-post-counter>\n' +
        '                                Last updated:\n' +
        '                                <meta content="' + jsonObj[0].date + ' 00:00:00 +0800 UTC" itemprop=datePublished>\n' +
        '                                <time datetime="' + jsonObj[0].date + ' 00:00:00 +0800 UTC" itemprop=dateModified>' + jsonObj[0].date + '</time>\n' +
        '                            </span>\n' +
        '                            <span itemscope itemprop=publisher itemtype=http://schema.org/Person>\n' +
        '                                <meta itemprop=name content="GeoKylin">\n' +
        '                            </span>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                    <div class="archive-title category">\n' +
        '                        <h2 class="archive-name">' + category + '</h2>\n' +
        '                    </div>\n';
    for (let i = 0; i < dateArr.length; i++) {
        content += '             <div class="archive-post">\n' +
            '                        <span class="archive-post-time">\n' +
            '                            ' + dateArr[i] + '\n' +
            '                        </span>\n' +
            '                        <span class="archive-post-title">\n' +
            '                            <a href="../../articles/' + linkArr[i] + '" class="archive-post-link">\n' +
            '                                ' + titleArr[i] + '\n' +
            '                            </a>\n' +
            '                        </span>\n' +
            '                    </div>';
    }
    place.innerHTML = content;
}

/* ---------------------------------------------------------------------------
 * Add tags.
 * --------------------------------------------------------------------------- */
function addTags(jsonObj) {
    let tagsArr = [];
    let numArr = [];
    tagsArr[0] = jsonObj[0].tags[0];
    numArr[0] = 0;
    for (let i = 0; i < jsonObj.length; i++) {
        for (let k = 0; k < jsonObj[i].tags.length; k++) {
            let noFound = true;
            for (let j = 0; j < tagsArr.length; j++) {
                if (jsonObj[i].tags[k] == tagsArr[j]) {
                    noFound = false;
                    numArr[j]++;
                }
            }
            if (noFound) {
                tagsArr.push(jsonObj[i].tags[k]);
                numArr.push(1);
            }
        }
    }
    // Get the elements of tags.
    let tags = document.getElementById('content');
    let content = '<section id="archive" class="archive">\n' +
        '                <div class="archive-title">\n' +
        '                    <div>\n' +
        '                        <span itemscope itemprop=author itemtype=http://schema.org/Person>\n' +
        '                            <meta itemprop=name content="GeoKylin">\n' +
        '                        </span>\n' +
        '                        <span class=archive-post-counter>\n' +
        '                            Last updated:\n' +
        '                            <meta content="' + jsonObj[0].date + ' 00:00:00 +0800 UTC" itemprop=datePublished>\n' +
        '                            <time datetime="' + jsonObj[0].date + ' 00:00:00 +0800 UTC" itemprop=dateModified>' + jsonObj[0].date + '</time>\n' +
        '                        </span>\n' +
        '                        <span itemscope itemprop=publisher itemtype=http://schema.org/Person>\n' +
        '                            <meta itemprop=name content="GeoKylin">\n' +
        '                        </span>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                </section>\n' +
        '                <div class="terms">\n' +
        '                    <div class="terms-title">\n' +
        '                        共计 ' + tagsArr.length + ' 个标签\n' +
        '                    </div>\n' +
        '                    <div class="terms-tags">\n';
    for (let i = 0; i < tagsArr.length; i++) {
        content += '                 <a class="terms-link" href="' + tagsArr[i] + '/index.html">\n' +
            '                            ' + tagsArr[i] + '\n' +
            '                            <span class="terms-count">' + numArr[i] + '</span>\n' +
            '                        </a>\n';
    }
    content += '              </div>\n' +
        '                </div>';
    tags.innerHTML = content;
}

/* ---------------------------------------------------------------------------
 * Add tag.
 * --------------------------------------------------------------------------- */
function addTag(jsonObj) {
    let tag = script[script.length - 1].getAttribute("tag");
    let dateArr = [];
    let titleArr = [];
    let linkArr = [];
    for (let i = 0; i < jsonObj.length; i++) {
        for (let j = 0; j < jsonObj[i].tags.length; j++) {
            if (jsonObj[i].tags[j] == tag) {
                dateArr.push(jsonObj[i].date);
                titleArr.push(jsonObj[i].title);
                linkArr.push(jsonObj[i].postLink);
                break;
            }
        }
    }

    let place = document.getElementById('archive');
    let content = '<div class="archive-title">\n' +
        '                        <span class="archive-post-counter">\n' +
        '                            该标签共计 ' + dateArr.length + ' 篇文章\n' +
        '                        </span>\n' +
        '                        <div>\n' +
        '                            <span itemscope itemprop=author itemtype=http://schema.org/Person>\n' +
        '                                <meta itemprop=name content="GeoKylin">\n' +
        '                            </span>\n' +
        '                            <span class=archive-post-counter>\n' +
        '                                Last updated:\n' +
        '                                <meta content="' + jsonObj[0].date + ' 00:00:00 +0800 UTC" itemprop=datePublished>\n' +
        '                                <time datetime="' + jsonObj[0].date + ' 00:00:00 +0800 UTC" itemprop=dateModified>' + jsonObj[0].date + '</time>\n' +
        '                            </span>\n' +
        '                            <span itemscope itemprop=publisher itemtype=http://schema.org/Person>\n' +
        '                                <meta itemprop=name content="GeoKylin">\n' +
        '                            </span>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                    <div class="archive-title category">\n' +
        '                        <h2 class="archive-name">' + tag + '</h2>\n' +
        '                    </div>\n';
    for (let i = 0; i < dateArr.length; i++) {
        content += '             <div class="archive-post">\n' +
            '                        <span class="archive-post-time">\n' +
            '                            ' + dateArr[i] + '\n' +
            '                        </span>\n' +
            '                        <span class="archive-post-title">\n' +
            '                            <a href="../../articles/' + linkArr[i] + '" class="archive-post-link">\n' +
            '                                ' + titleArr[i] + '\n' +
            '                            </a>\n' +
            '                        </span>\n' +
            '                    </div>';
    }
    place.innerHTML = content;
}

