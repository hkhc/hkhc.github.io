---
title: Log Providers
id: log-providers
sidebar_position: 6
---

IHLog work with Android Log API out of the box. On the other hand, we may configure it to use different
targets with `ihlog.properties` file or `LogSettings` class object. You may even implement your own
target.

Each of the target is handled by a class that implemented `LogProvider` interface. It is responsible
for creating object that implements `IHLog` interface which keep the state of log specific state.

To change LogProvider in use:

```kotlin
IHLogConfig.init(IHLogSetting(provider = StdioLogProvider()))
```

There are also some classes in the library that warp up other IHLog objects to augment their
functionalities.

### `AndroidLogProvider`

It can accept one parameter, which is the Android API level. The default value
is obtained from the `Build.VERSION.SDK_INT` constant of API framework.

`AndroidLogProvider` maps the log call to standard Android Log API. There are a few things to note:

- There is no `trace` log level for Android Log, so both `trace` and `info` 
  level are mapped to `info` level of Android Log.
- Before Android N, tag string is limited to 23 characters. There is no such limitation for newer OS.
  IHLog library tries to accept longer tag string on pre-N devices, by moving the part of tag string
  over 23 characters to log body. For example, for the call

```kotlin
// 30 character long tag
l.debug("012345678901234567890123456789", "This is a log line")
```

the logcat output for pre-N devices will look like this:

```text
03-03 02:04:49.949  1224  5126 D 01234567890123456789012: 3456789: This is a log line
```
### `NullLogProvider`

It is a dummy log provider to discard all log output. It output nothing, no
matter what priority of log item is.

### `PrintWriterLogProvider`

It output log lines to a specific `PrintWriter` object. It is a building 
block of ConsoleLogProvider.

It accepts two parameters.

| Parameter   | Meaning    |
| ----------   | ---    |
| `printWriter` | `PrintWriter` object to accept log lines. Mandatory. |
| `timeSource`  | Object that implements `TimeSource` interface to provide real time clock. The default implementation is invoking `System.currentTimeMillis()`. In unit test scenarios, we may provide a fake implementation that return fix value as time, so the output is totally reproducible.|

### `StdioLogProvider`

It is a simplified PrintWriterLogProvider that output all log lines to 
standard output.

### `ConsoleLogProvider`

It diverts the log to a log for error and the other for non-error. This is an 
abstraction of having nornal log and error log in different streams or files.

It accepts three parameters, all are optional:

| Parameter   | Meaning    |
| ----------   | ---    |
| `timeSource`  | Object that implements `TimeSource` interface to provide real time clock. The default implementation is invoking `System.currentTimeMillis()`. In unit test scenarios, we may provide a fake implementation that return fix value as time, so the output is totally reproducible.|
| `outLogProviderr` | A log provider that dedicate for log line with Priority `Info`, `Trace` and `Debug`. The default provider output log lines to standard output. |
| `errLogProviderr` | A log provider that dedicate for log line with Priority `Warn`, `Error` and `Fatal`. The default provider output log lines to standard error. |

### `StringLogProvider`

It output log lines to StringWriter object, so that we can review the log lines
as `String` in memory. It is designed for captuing log in unit test.

It accepts two parameters, both are optional:

| Parameter   | Meaning    |
| ----------   | ---    |
| `stringWriter` | The `StringWriter` object that capture the log lines |
| `timeSource`  | Object that implements `TimeSource` interface to provide real time clock. The default implementation is invoking `System.currentTimeMillis()`. In unit test scenarios, we may provide a fake implementation that return fix value as time, so the output is totally reproducible.|

For example, we could set up a unit test friendly log like this:

```kotlin
private lateinit var testResult: StringWriter

@Before
fun setup() {
  testResult = StringWriter()
  IHLogConfig.init(IHLogSetting(
    logProvider = StringLogProvider(testResult, FakeTimeSource()))
  )
}

@Test fun testLogWithFake() {
    l.debug("Hello")
    l.debug("World")

    assertEquals("""
        01-01 08:00:00.000  -/SLPT d/Hello
        01-01 08:00:00.001  -/SLPT d/World
    """.trimIndent()+"\n", testResult.toString())
}
```

### Write your own Log Providers

It is easy to create your own implementation of `LogProvider` interface. It is 
basically a factory to create an implementation of `IHLog` interface.

Let's create a simple fancy Log Provider as an example.

We want to send log to standard out, with fancy format:

```text
┌────────────────────┐┌───┐┌───────┐┌──────────────────────────────┐
│ 01-01 08:00:00.000 ││ D ││ MyApp ││ A for apple, B for boy.      │
└────────────────────┘└───┘└───────┘└──────────────────────────────┘
┌────────────────────┐┌───┐┌───────┐┌──────────────────────────────┐
│ 01-01 08:00:00.001 ││ D ││ MyApp ││ A for apple, B for boy. C fo │
└────────────────────┘└───┘└───────┘└──────────────────────────────┘
```

```kotlin title="BoxLogProvider.kt" {3,24}
class BoxLogProvider: IHLogProvider {

    override fun getLog(defaultTag: String) = BoxLog(defaultTag)

    class BoxLog(
        defaultTag: String,
    ) : AbstractIHLog(defaultTag) {

        private var dateFormat = SimpleDateFormat("MM-dd HH:mm:ss.SSS", Locale.US)
        private val timeSource = SystemTimeSource()
        private val priorityMap = mapOf(
            Priority.Info to 'I', Priority.Warn to 'W', Priority.Debug to 'D',
            Priority.Fatal to 'F', Priority.Error to 'E', Priority.Trace to 'T'
        )

        private fun boxEdge(size: Int, top: Boolean): String {
            val builder = StringBuilder()
            builder.append(if (top) "┌" else "└")
            for(i in 0..(size+1)) builder.append("─")
            builder.append(if (top) "┐" else "┘")
            return builder.toString()
        }

        override fun log(priority: Priority, tag: String?, message: String) {
            val actualTag = tag?:"DEFAULT_TAG"
            val time = dateFormat.format(timeSource.getTime())
            val priorityChar = priorityMap[priority]
            var line = if (message.length > 30)
                message.substring(0, 30)
            else
                message
            for(i in 1..30-message.length) line+=' '
            println(
              boxEdge(18, true)+boxEdge(1, true)+
              boxEdge(actualTag.length, true)+boxEdge(30, true)
              )
            println("│ $time ││ $priorityChar ││ $actualTag ││ $line |")
            println(
              boxEdge(18, false)+boxEdge(1, false)+
              boxEdge(actualTag.length, false)+boxEdge(30, false)
              )
        }
    }
}
```

The essense is to implement two methods `IHLogProvider.getLog(defaultTag)` and
`IHLog.log(priority, tag, message)`
