module.exports = {
    block : 'page',
    title: 'Example bs-container block',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'bs-container.min.css' }
    ],
    scripts: [
        { elem: 'js', url: '//code.jquery.com/jquery-3.3.1.min.js' },
        { elem: 'js', url: 'bs-container.min.js' },

    ],
    content: [
        {
            tag : 'h1',
            content : 'Примеры использования блока bs-container'
        },
        {
            tag : 'pre',
            attrs: { style: "background-color: #f6f8fa; border-radius: 3px; font-size: 85%; line-height: 1.45; overflow: auto; padding: 16px;" },
            content: "{\n" +
                "   block : 'bs-container',\n" +
                "   content : '....'\n" +
                "}"
        },
        {
            block : 'bs-container',
            attrs: { style : "background: #ccc" },
            content : 'block bs-container content'
        },
        {
            tag : 'h2',
            content : 'Пример блока с использованием row'
        },
        {
            tag : 'pre',
            attrs: { style: "background-color: #f6f8fa; border-radius: 3px; font-size: 85%; line-height: 1.45; overflow: auto; padding: 16px;" },
            content: "{\n" +
                "   block : 'bs-container',\n" +
                "   row : true,\n" +
                "   content : 'block bs-container with row'\n" +
                "}"
        },
        {
            block : 'bs-container',
            row : true,
            attrs: { style : "background: #ccc; " },
            content : 'block bs-container with row'
        }
    ]
};
