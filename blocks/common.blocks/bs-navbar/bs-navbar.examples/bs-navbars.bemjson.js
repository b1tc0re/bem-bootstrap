module.exports = {
    block : 'page',
    title: 'Example page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'bs-navbars.min.css' }
    ],
    scripts: [
        { elem: 'js', url: '//code.jquery.com/jquery-3.3.1.min.js' },
        { elem: 'js', url: 'bs-navbars.min.js' },

    ],
    content: [
        {
            block : 'bs-navbar',
            container : true,
            mods : { color : 'primary' },
            content : [
                {
                    block : 'bs-navbar',
                    url : '/',
                    mods : { theme : 'realty' },
                    elem : 'logo',
                    content : {
                        html : ''
                    }
                },

                {
                    block : 'bs-nav',
                    mods : { theme : 'realty' },
                    items: [
                        {
                            block : 'link',
                            url : '/bundles/desktop.bundles/realty-search/realty-search.html#!realty/search/sale',
                            content : {
                                html : '<!--replaceStart="{{ "sale" | lang }}"-->Продажа<!--replaceEnd-->'
                            }
                        },
                        {
                            block : 'link',
                            url : '/bundles/desktop.bundles/realty-search/realty-search.html#!realty/search/rent',
                            content : {
                                html : '<!--replaceStart="{{ "for-rent" | lang }}"-->Аренда<!--replaceEnd-->'
                            }
                        },
                        {
                            block : 'link',
                            url : '/bundles/desktop.bundles/realty-search/realty-search.html#!realty/search/commercial',
                            content : {
                                html : '<!--replaceStart="{{ "a-commercial" | lang }}"-->Коммерческая<!--replaceEnd-->'
                            }
                        },
                        {
                            block : 'link',
                            url : '/bundles/desktop.bundles/page-promotion/page-promotion.html#!page/promotion',
                            content : {
                                html : '<!--replaceStart="{{ "agencies" | lang }}"-->Агентствам<!--replaceEnd-->'
                            }
                        },
                        {
                            block : 'link',
                            url : '/realty/add-object',
                            mix : { block : 'bs-nav', elem : 'link', elemMods : { type : 'object-add'  } },
                            content : {
                                html : '<!--replaceStart="{{ "new-ad" | lang }}"-->Новое объявление<!--replaceEnd-->'
                            }
                        }
                    ]
                }
            ]
        },
        {
            block : 'bs-navbar',
            mods : { color : 'ligth', theme : 'realty' },
            container : true,
            content : [

            ]
        }
    ]
};
