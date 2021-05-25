(self.webpackChunkhkhc_github_io=self.webpackChunkhkhc_github_io||[]).push([[713],{264:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return d},default:function(){return g}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a={title:"Log Providers",id:"log-providers",sidebar_position:6},l={unversionedId:"ihlog/log-providers",id:"ihlog/log-providers",isDocsHomePage:!1,title:"Log Providers",description:"IHLog work with Android Log API out of the box. On the other hand, we may configure it to use different",source:"@site/docs/ihlog/log-providers.md",sourceDirName:"ihlog",slug:"/ihlog/log-providers",permalink:"/docs/ihlog/log-providers",editUrl:"https://github.com/hkhc/hkhc.github.io/docs/ihlog/log-providers.md",version:"current",sidebarPosition:6,frontMatter:{title:"Log Providers",id:"log-providers",sidebar_position:6},sidebar:"ihlogSidebar",previous:{title:"Configuration",permalink:"/docs/ihlog/configuration"}},d=[{value:"<code>AndroidLogProvider</code>",id:"androidlogprovider",children:[]},{value:"<code>NullLogProvider</code>",id:"nulllogprovider",children:[]},{value:"<code>PrintWriterLogProvider</code>",id:"printwriterlogprovider",children:[]},{value:"<code>StdioLogProvider</code>",id:"stdiologprovider",children:[]},{value:"<code>ConsoleLogProvider</code>",id:"consolelogprovider",children:[]},{value:"<code>StringLogProvider</code>",id:"stringlogprovider",children:[]},{value:"Write your own Log Providers",id:"write-your-own-log-providers",children:[]}],p={toc:d};function g(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"IHLog work with Android Log API out of the box. On the other hand, we may configure it to use different\ntargets with ",(0,o.kt)("inlineCode",{parentName:"p"},"ihlog.properties")," file or ",(0,o.kt)("inlineCode",{parentName:"p"},"LogSettings")," class object. You may even implement your own\ntarget."),(0,o.kt)("p",null,"Each of the target is handled by a class that implemented ",(0,o.kt)("inlineCode",{parentName:"p"},"LogProvider")," interface. It is responsible\nfor creating object that implements ",(0,o.kt)("inlineCode",{parentName:"p"},"IHLog")," interface which keep the state of log specific state."),(0,o.kt)("p",null,"To change LogProvider in use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"IHLogConfig.init(IHLogSetting(provider = StdioLogProvider()))\n")),(0,o.kt)("p",null,"There are also some classes in the library that warp up other IHLog objects to augment their\nfunctionalities."),(0,o.kt)("h3",{id:"androidlogprovider"},(0,o.kt)("inlineCode",{parentName:"h3"},"AndroidLogProvider")),(0,o.kt)("p",null,"It can accept one parameter, which is the Android API level. The default value\nis obtained from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Build.VERSION.SDK_INT")," constant of API framework."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"AndroidLogProvider")," maps the log call to standard Android Log API. There are a few things to note:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"There is no ",(0,o.kt)("inlineCode",{parentName:"li"},"trace")," log level for Android Log, so both ",(0,o.kt)("inlineCode",{parentName:"li"},"trace")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"info"),"\nlevel are mapped to ",(0,o.kt)("inlineCode",{parentName:"li"},"info")," level of Android Log."),(0,o.kt)("li",{parentName:"ul"},"Before Android N, tag string is limited to 23 characters. There is no such limitation for newer OS.\nIHLog library tries to accept longer tag string on pre-N devices, by moving the part of tag string\nover 23 characters to log body. For example, for the call")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'// 30 character long tag\nl.debug("012345678901234567890123456789", "This is a log line")\n')),(0,o.kt)("p",null,"the logcat output for pre-N devices will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"03-03 02:04:49.949  1224  5126 D 01234567890123456789012: 3456789: This is a log line\n")),(0,o.kt)("h3",{id:"nulllogprovider"},(0,o.kt)("inlineCode",{parentName:"h3"},"NullLogProvider")),(0,o.kt)("p",null,"It is a dummy log provider to discard all log output. It output nothing, no\nmatter what priority of log item is."),(0,o.kt)("h3",{id:"printwriterlogprovider"},(0,o.kt)("inlineCode",{parentName:"h3"},"PrintWriterLogProvider")),(0,o.kt)("p",null,"It output log lines to a specific ",(0,o.kt)("inlineCode",{parentName:"p"},"PrintWriter")," object. It is a building\nblock of ConsoleLogProvider."),(0,o.kt)("p",null,"It accepts two parameters."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"printWriter")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"PrintWriter")," object to accept log lines. Mandatory.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"timeSource")),(0,o.kt)("td",{parentName:"tr",align:null},"Object that implements ",(0,o.kt)("inlineCode",{parentName:"td"},"TimeSource")," interface to provide real time clock. The default implementation is invoking ",(0,o.kt)("inlineCode",{parentName:"td"},"System.currentTimeMillis()"),". In unit test scenarios, we may provide a fake implementation that return fix value as time, so the output is totally reproducible.")))),(0,o.kt)("h3",{id:"stdiologprovider"},(0,o.kt)("inlineCode",{parentName:"h3"},"StdioLogProvider")),(0,o.kt)("p",null,"It is a simplified PrintWriterLogProvider that output all log lines to\nstandard output."),(0,o.kt)("h3",{id:"consolelogprovider"},(0,o.kt)("inlineCode",{parentName:"h3"},"ConsoleLogProvider")),(0,o.kt)("p",null,"It diverts the log to a log for error and the other for non-error. This is an\nabstraction of having nornal log and error log in different streams or files."),(0,o.kt)("p",null,"It accepts three parameters, all are optional:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"timeSource")),(0,o.kt)("td",{parentName:"tr",align:null},"Object that implements ",(0,o.kt)("inlineCode",{parentName:"td"},"TimeSource")," interface to provide real time clock. The default implementation is invoking ",(0,o.kt)("inlineCode",{parentName:"td"},"System.currentTimeMillis()"),". In unit test scenarios, we may provide a fake implementation that return fix value as time, so the output is totally reproducible.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"outLogProviderr")),(0,o.kt)("td",{parentName:"tr",align:null},"A log provider that dedicate for log line with Priority ",(0,o.kt)("inlineCode",{parentName:"td"},"Info"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"Trace")," and ",(0,o.kt)("inlineCode",{parentName:"td"},"Debug"),". The default provider output log lines to standard output.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"errLogProviderr")),(0,o.kt)("td",{parentName:"tr",align:null},"A log provider that dedicate for log line with Priority ",(0,o.kt)("inlineCode",{parentName:"td"},"Warn"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"Error")," and ",(0,o.kt)("inlineCode",{parentName:"td"},"Fatal"),". The default provider output log lines to standard error.")))),(0,o.kt)("h3",{id:"stringlogprovider"},(0,o.kt)("inlineCode",{parentName:"h3"},"StringLogProvider")),(0,o.kt)("p",null,"It output log lines to StringWriter object, so that we can review the log lines\nas ",(0,o.kt)("inlineCode",{parentName:"p"},"String")," in memory. It is designed for captuing log in unit test."),(0,o.kt)("p",null,"It accepts two parameters, both are optional:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"stringWriter")),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("inlineCode",{parentName:"td"},"StringWriter")," object that capture the log lines")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"timeSource")),(0,o.kt)("td",{parentName:"tr",align:null},"Object that implements ",(0,o.kt)("inlineCode",{parentName:"td"},"TimeSource")," interface to provide real time clock. The default implementation is invoking ",(0,o.kt)("inlineCode",{parentName:"td"},"System.currentTimeMillis()"),". In unit test scenarios, we may provide a fake implementation that return fix value as time, so the output is totally reproducible.")))),(0,o.kt)("p",null,"For example, we could set up a unit test friendly log like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'private lateinit var testResult: StringWriter\n\n@Before\nfun setup() {\n  testResult = StringWriter()\n  IHLogConfig.init(IHLogSetting(\n    logProvider = StringLogProvider(testResult, FakeTimeSource()))\n  )\n}\n\n@Test fun testLogWithFake() {\n    l.debug("Hello")\n    l.debug("World")\n\n    assertEquals("""\n        01-01 08:00:00.000  -/SLPT d/Hello\n        01-01 08:00:00.001  -/SLPT d/World\n    """.trimIndent()+"\\n", testResult.toString())\n}\n')),(0,o.kt)("h3",{id:"write-your-own-log-providers"},"Write your own Log Providers"),(0,o.kt)("p",null,"It is easy to create your own implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"LogProvider")," interface. It is\nbasically a factory to create an implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"IHLog")," interface."),(0,o.kt)("p",null,"Let's create a simple fancy Log Provider as an example."),(0,o.kt)("p",null,"We want to send log to standard out, with fancy format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 01-01 08:00:00.000 \u2502\u2502 D \u2502\u2502 MyApp \u2502\u2502 A for apple, B for boy.      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 01-01 08:00:00.001 \u2502\u2502 D \u2502\u2502 MyApp \u2502\u2502 A for apple, B for boy. C fo \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BoxLogProvider.kt" {3,24}',title:'"BoxLogProvider.kt"',"{3,24}":!0},'class BoxLogProvider: IHLogProvider {\n\n    override fun getLog(defaultTag: String) = BoxLog(defaultTag)\n\n    class BoxLog(\n        defaultTag: String,\n    ) : AbstractIHLog(defaultTag) {\n\n        private var dateFormat = SimpleDateFormat("MM-dd HH:mm:ss.SSS", Locale.US)\n        private val timeSource = SystemTimeSource()\n        private val priorityMap = mapOf(\n            Priority.Info to \'I\', Priority.Warn to \'W\', Priority.Debug to \'D\',\n            Priority.Fatal to \'F\', Priority.Error to \'E\', Priority.Trace to \'T\'\n        )\n\n        private fun boxEdge(size: Int, top: Boolean): String {\n            val builder = StringBuilder()\n            builder.append(if (top) "\u250c" else "\u2514")\n            for(i in 0..(size+1)) builder.append("\u2500")\n            builder.append(if (top) "\u2510" else "\u2518")\n            return builder.toString()\n        }\n\n        override fun log(priority: Priority, tag: String?, message: String) {\n            val actualTag = tag?:"DEFAULT_TAG"\n            val time = dateFormat.format(timeSource.getTime())\n            val priorityChar = priorityMap[priority]\n            var line = if (message.length > 30)\n                message.substring(0, 30)\n            else\n                message\n            for(i in 1..30-message.length) line+=\' \'\n            println(\n              boxEdge(18, true)+boxEdge(1, true)+\n              boxEdge(actualTag.length, true)+boxEdge(30, true)\n              )\n            println("\u2502 $time \u2502\u2502 $priorityChar \u2502\u2502 $actualTag \u2502\u2502 $line |")\n            println(\n              boxEdge(18, false)+boxEdge(1, false)+\n              boxEdge(actualTag.length, false)+boxEdge(30, false)\n              )\n        }\n    }\n}\n')),(0,o.kt)("p",null,"The essense is to implement two methods ",(0,o.kt)("inlineCode",{parentName:"p"},"IHLogProvider.getLog(defaultTag)")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"IHLog.log(priority, tag, message)")))}g.isMDXComponent=!0}}]);