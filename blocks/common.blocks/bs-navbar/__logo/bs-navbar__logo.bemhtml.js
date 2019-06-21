block('bs-navbar').elem('logo')(
    content()(function() {
        var ctx = this.ctx;

        if( ctx.url ) {
            ctx.content = {
                block : 'link',
                mods : ctx.mods,
                mix : { block : ctx.block, elem : 'link', elemMods : { logo : true } },
                url : ctx.url,
                content : ctx.content
            }
        }

        return applyNext();
    })
);
