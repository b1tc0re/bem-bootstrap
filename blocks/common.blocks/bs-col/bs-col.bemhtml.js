block('bs-col')(
    def()(function() { return applyNext({ _container : this.ctx }); }),

    content()(function() {
        var ctx = this.ctx;

        if( ctx.row ) {
            ctx.content = {
                block : 'bs-row',
                mods : ctx.mods,
                mix : { block : ctx.block, elem : 'row' },
                content : ctx.content
            }
        }

        return applyNext();
    })
);
