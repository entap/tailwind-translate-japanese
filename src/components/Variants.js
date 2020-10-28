import { defaultConfig } from '@/utils/defaultConfig'
import { joinWithAnd } from '@/utils/joinWithAnd'
import { ConfigSample } from '@/components/ConfigSample'

export function Variants({ plugin, name }) {
  const variants = defaultConfig.variants[plugin] || ['responsive']
  name = name || plugin.replace(/([a-z])([A-Z])/g, (m, p1, p2) => `${p1} ${p2.toLowerCase()}`)
  const extraVariants = ['responsive', 'hover', 'focus', 'active', 'group-hover']
    .filter((x) => !variants.includes(x))
    .slice(0, 2)

  return (
    <>
      <p>
        デフォルトで{variants.length ? `only ${joinWithAnd(variants)}` : 'no'} バリアントは
        {name} utilitiesのために作られます。
      </p>
      <p>
        あなたはどのバリアントが{name} utilitiesのために作られるかを{' '}
        <code>tailwind.config.js</code>file内の<code>variants</code> sectionの<code>{plugin}</code>プロパティを修正することによってコントロールできます。
      </p>
      <p>
        例として、この設定は {variants.length > 0 ? 'also ' : ''}{' '}
        {joinWithAnd(extraVariants)} バリアントを作ります。
      </p>
      <ConfigSample
        path="variants"
        before="// ..."
        remove={{ [plugin]: variants }}
        add={{ [plugin]: [...variants, ...extraVariants] }}
      />
    </>
  )
}
