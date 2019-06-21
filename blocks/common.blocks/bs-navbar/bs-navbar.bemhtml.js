block('bs-navbar')(
    def()(function() { return applyNext({ _navbar : this.ctx }); }),
    tag()('nav'),

    content()(function() {
        var ctx = this.ctx;

        if( ctx.container ) {

            ctx.content = {
                block : 'bs-container',
                content : ctx.content,
                row : ctx.row,
                mix : { block : ctx.block, elem : 'bs-container' },
                parent : ctx.block,
            };
        }

        ctx.content || (ctx.content = []);
        (typeof ctx.content === 'object' || typeof ctx.content === 'string') && (ctx.content = [ ctx.content ]);

        return applyNext();
    })
);
