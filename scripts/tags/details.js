/**
 * details.js | global hexo script.
 *
 * Usage:
 *
 * {% details [summary] %}
 * Any content (support inline tags too).
 * {% enddetails %}
 *
 * [summary] : summary of the details
 */

function bscallOut (args, content) {
  return '<details>' + '<summary>' + args.join(' ') + '</summary>' + hexo.render.renderSync({text: content, engine: 'markdown'}).trim() + '</details>'
}

hexo.extend.tag.register('details', bscallOut, {ends: true});
