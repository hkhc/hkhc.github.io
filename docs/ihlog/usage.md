---
title: Basic Usage
id: usage
sidebar_position: 3
---

## Log a line

We may just log a line within class methods, extension methods, or package 
functions. `l` is an extension method attached to all classes.

```kotlin {3}
// Instance methods
class HelloWorld {
    fun testOfLog() {
        l.debug("Hello. Thanks for using IHLog")
    }
}
```

``` kotlin {3}
// Extension functions
fun View.testOfLog() {
    l.debug("Hello. Thanks for using IHLog")
}
```

To get a log reference in package function, we declare it in the Kotlin 
source file. 

``` kotlin {4,7}
// Package functions
package myPackage

private val log by PackageLog()

fun testOfLog() {
    log.debug("Hello. Thanks for using IHLog")
}
```

Log tags are automatically generated for each of the example above, which is 
unique to the class in context.

The logging action is as simple as it could possibly be. We don't need to 
declare anything besides import, because it is
implemented as Kotlin extensions and delegate properties.. When method 
`testOfLog` is executed, the following log line is sent to the following can be 
observed in logcat.

```
03-03 02:04:49.949  1224  5126 D HeWo: Hello. Thanks for using IHLog
```

where `HeWo` is an automatically generated log tag. It is an abbreviation of the class `HelloWorld`.

Code to log for other severity levels are similar

```kotlin
l.trace("This is a trace line. It is mapped to Log.i()")
l.info("This is a info line. It is mapped to Log.i()")
l.debug("This is a debug line. It is mapped to Log.d()")
l.warn("This is a warn line. It is mapped to Log.w()")
l.err("This is a error line. It is mapped to Log.e()")
l.fatal("This is a trace line. It is mapped to Log.wtf()")
```

In some case if we want to specify the tag explicitly. We could just do that right away

```kotlin
l.debug("CUSTOM_TAG", "This is a trace line. It is mapped to Log.i()")
```

### Multi-line text

Log content with multiple lines will be broken down.

```kotlin
l.debug("""
    This os a multi-line text
    It will be broken down
""".trimIndent())
```

will generate log like this:


```
03-03 02:04:49.949  1224  5126 D HeWo: This is a multi-line text
03-03 02:04:50.123  1224  5126 D HeWo: It will be broken down
```

### Logging exception

We have seen log with error level:

```kotlin
err("This is an error")
```

We may also log `Throwable` object directly:

```kotlin
try {
  val myArray = arrayOf(1,2,3)
  val myValue = myArray(3) // oops
}
catch (e: ArrayIndexOutOfBoundException) {
    l.err("This is an exception", e)
}
```

Stacktrace of the exception is generated and logged line-by-line

```text file="log to standard output"
03-03 15:45:15.431  -/AIOOBE e/This is an error
03-03 15:45:15.435  -/AIOOBE e/java.lang.ArrayIndexOutOfBoundsException: 3
03-03 15:45:15.435  -/AIOOBE e/....
03-03 15:45:15.455  -/AIOOBE e/	at com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)
03-03 15:45:15.455  -/AIOOBE e/
```

### Filtering log

We may filter log by log severity level anytime.

```kotlin
LogSettings.logLevel = Priority.ERROR
```

It take effect from the next log invocation.

THe severity is in the increasing order of the following:
- Trace
- Debug
- Info
- Warn
- Error
- Fatal


### Log with Lambda

When we have the capability of filtering logs, we start to worry that our log invocation peform
unnecessary work. For example,

```kotlin
l.debug("The current balance is ${slowFunctionToGetBalance()}.")
```

Sometimes, it may be costly to construct the string for log, and we don't want to pay the price
if the `logLevel` property filtered the log.

We may use lambda to defer the processing of the log content:

```kotlin
l.debug { "The current balance is ${slowFunctionToGetBalance()}." }
```

Then the actual evaluation of the string is deferred until it is needed. No 
cost is paid for filtered log.

### Dump file to log

We may dump a file to log easily.

```kotlin
File("My-file.txt").debug()
```

The content of file `My-file.txt` will be write to log, one line per log line.

To avoid overwhelming underlying log. The function limit the maximum size of
file write to underlying log. Default is 4KB. We may change this by
providing maximum size parameter (in bytes):

```kotlin
File("My-file.txt").debug(10240)
```
