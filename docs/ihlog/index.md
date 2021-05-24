---
title: IHLog - Easy Kotlin Logging Library
sidebar_label: Introduction
id: index
sidebar_position: 1
---

IHLog is a simple logging library that trying to make simple things simple.

The standard Android `Log` class is simple and sufficient for most logging needs.
However, there are case that it is not appropriate to use the Log class directly.

* [Robolectric](https://robolectric.org) is great, but we don't want to use it just because our classes
  under test contains a `Log.d` call.
  
```kotlin
fun myCalculation() {
    val result = //... super complex calculation
    Log.d(TAG, "result = $result") // Ruin your unit test.    
}
```

* It is a nusciance to provide log tag everywhere. Usually we have a static log
tag in classes 

```kotlin
class MyClass {
  companion object { 
      const val TAG = "MyClass"
  }
  fun myCalculation() {
    val result = //... super complex calculation
      Log.d(TAG, "result = $result") // Ruin your unit test.    
  }
}
```

We don't want to provide Log tag for every Log method calls. However, we do
  want the logcat output contains a tag that reflect the context of the log line.

* Sometimes log content needs some processing time to create, and but processing
will be performed even if the log is filtered.

```kotlin
fun myCalculation() {
    Log.d(TAG, "result = ${mySlowFunction()}") 
}
```

The function `mySlowFunction()` is executed even when debug level log is 
filtered.

That is why IHLog is designed:

- Target to choices of logging implementations, and open to extend to more 
  implementations.
- reduce the need to provide log tag in every log statements.
- Unit-test friendly
- Avoid unnecessary processing if log is not filtered.
- Keep logging code block size to minimal to reduce distraction of code body.

## Source Code

http://github.com/hkhc/ihlog

## What's New

### 0.6.1

- Add PackageLog() delegate properties for logging at package functions.
