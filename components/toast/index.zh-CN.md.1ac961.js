(self.webpackChunk_ant_design_react_native=self.webpackChunk_ant_design_react_native||[]).push([[9667],{103:t=>{t.exports={content:["article",["p","一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中。"],["h3","规则"],["ul",["li",["p","有 Icon 的 Toast，字数为 4-6 个；没有 Icon 的 Toast，字数不宜超过 14 个。"]]],["h2","API"],["ul",["li",["p",["code","Toast.success(props)"]]],["li",["p",["code","Toast.fail(props)"]]],["li",["p",["code","Toast.info(props)"]]],["li",["p",["code","Toast.loading(props)"]]],["li",["p",["code","Toast.offline(props)"]]]],["p","Props 参数如下："],["table",["thead",["tr",["th","属性"],["th","说明"],["th","类型"],["th","必填"],["th","默认值"]]],["tbody",["tr",["td","content"],["td","提示内容"],["td",["code","String | React.ReactNode"]],["td","是"],["td","-"]],["tr",["td","duration"],["td","自动关闭的延时，单位秒"],["td","number"],["td","否"],["td","3"]],["tr",["td","onClose"],["td","关闭后回调"],["td","Function"],["td","否"],["td","-"]],["tr",["td","mask"],["td","是否显示透明蒙层，防止触摸穿透"],["td","Boolean"],["td","否"],["td","true"]],["tr",["td","stackable"],["td","是否允许叠加显示"],["td","Boolean"],["td","否"],["td","true"]]]],["blockquote",["p",["strong","注："],"  duration = 0 时，onClose 无效，toast 不会消失，隐藏 toast 需要手动调用 remove"]],["pre",{lang:"js",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@ant-design/react-native\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> key <span class="token operator">=</span> Toast<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token string">\'message\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nToast<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// 或者强制关闭所有Toast</span>\nToast<span class="token punctuation">.</span><span class="token function">removeAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>'},["code","import { Toast } from '@ant-design/react-native';\n\nconst key = Toast.loading('message');\nToast.remove(key);\n\n// 或者强制关闭所有Toast\nToast.removeAll()"]],["h3","自定义配置"],["ul",["li",["p",["code","Toast.getConfig()"]," - 获取当前配置"]],["li",["p",["code","Toast.config(props)"]," - 配置非必填项的默认值"]]]],meta:{category:"Components",type:"Feedback",title:"Toast",subtitle:"轻提示",filename:"components/toast/index.zh-CN.md"}}}}]);