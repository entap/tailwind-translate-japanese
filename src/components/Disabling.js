import { ConfigSample } from '@/components/ConfigSample'
import { castArray } from '@/utils/castArray'
import { joinWithAnd } from '@/utils/joinWithAnd'

export function Disabling({ plugin, name }) {
  const plugins = castArray(plugin)
  name = name || plugin.replace(/([a-z])([A-Z])/g, (m, p1, p2) => `${p1} ${p2.toLowerCase()}`)

  return (
    <>
      <p>
        もし{name} utilitiesを使う予定がないなら、config fileの
        <code>corePlugins</code> sectionの
        <span
          dangerouslySetInnerHTML={{
            __html: joinWithAnd(plugins.map((p) => `<code>${p}</code>`)),
          }}
        />{' '}
        {plugins.length > 1 ? 'properties' : 'property'}を<code>false</code>に設定することで完全に機能を停止することができます。
      </p>

      <ConfigSample
        path="corePlugins"
        before="// ..."
        add={plugins.reduce((acc, cur) => ({ ...acc, [cur]: false }), {})}
      />
    </>
  )
}
