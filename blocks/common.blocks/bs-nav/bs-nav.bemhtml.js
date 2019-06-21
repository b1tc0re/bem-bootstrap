block('bs-nav')(
    def()(function() { return applyNext({ _nav : this.ctx }); }),
    tag()('ul'),

    content()(function() {
        var ctx = this.ctx,
            navMods = this.mods,
            itemMods = {};

        ['size', 'theme', 'disabled', 'focused'].forEach(function(mod) {
            itemMods[mod] || (itemMods[mod] = navMods[mod]);
        });

        const processingItem = function (content) {

            content.mix || (content.mix = []);
            typeof content.mix === 'object' && (content.mix = [ content.mix ]);

            content.mix.push({
                block : 'bs-nav',
                elem : content.block,
            });

            content.mods || (content.mods = []);
            content.mods = Object.assign(content.mods, itemMods);

            return {
                elem : 'item',
                mods : itemMods,
                tag : 'li',
                content : content
            };
        };

        const iterateItems = function(content) {
            var i = 0, item, contents = [];

            while(item = content[i++]) {
                contents.push(item.ignore ? item : processingItem(item));
            }

            return contents;
        };

        ctx.content = iterateItems(ctx.items);


        return applyNext();
    })
);
