import { Plugin } from 'jss';
import { paramCase } from 'param-case';
import pc from 'prefix-classnames';

export default function jssAutoPrefix(options: { prefix: string } = { prefix: '' }): Plugin {
  const { prefix = '' } = options;
  const px = pc(prefix);
  return {
    onProcessStyle(style, rule) {
      const { classes } = rule.options;
      if ('nestingLevel' in rule.options && rule.options.nestingLevel as number > 0) {
        return style;
      }

      classes[rule.key] += ` ${px(paramCase(rule.key))}`;
      // delete style.composes;
      return style;
    },
  };
}
