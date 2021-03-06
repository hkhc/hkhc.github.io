---
title: Tag Creation
id: tag-creation
sidebar_position: 4
---

In its simplest form, the library create the tag string for logging implicitly. It is based on the
class name that the log methods are invoked. The class name is transformed into abbreviated form
for berevity of log output.

Why do we want to abbreviate the class name? The class name is usually long for any non-trivial app.
Especially when the inner classes or Companion classes are involved. It may even exceed the tag
length limit of 23 characters on pre Android N devices.

Essentially, the tag string is generated from the simple class name (i.e. regardless the package)
by two rules:

### Rule 1

When there are not more than 2 capital characters in the name, then the tag is composed by taking
each of the captial characters and the following small letter or digital, and keep the whole tag within
4 characters.. For example,

| class name   | tag    |
| ----------   | ---    |
| `HelloWorld` | `HeWo` |
| `Exception`  | `Ex`   |
| `MBone`      | `MBo`  |
| `AB123`      | `AB1`  |

### Rule 2

When there are more than 2 capitals letters, only capital characters are extracted

| class name             | tag         |
| ----------             | ---         |
| `NullPointerException` | `NPE`       |
| `ItIsAGoodDayToDie`    | `IIAGDTD`   |

### Additional Rule : Inner class and Companion class

The tag for inner class is defined by combined by the abbreviation of the outer class name and the
inner class name. E.g.

| class name             | tag         |
| ----------             | ---         |
| `HelloWorld.Listener`  | `HeWoLi`    |
| `View.OnClickListener` | `ViOCL`     |

Kotlin methods in `companion object` block are compiled to an inner class `Companion` within the
outer class. IHLog make exception to the Companion class not including the "C" in abbreviation.

## Meta tag

We may specify a global prefix to the tag, known as "Meta Tag", so that all 
tags in the process is prepended with the meta tag. With meta tag, we can easily 
filter log output and focus on what is generated by our app. For example,

```kotlin {1}
IHLogConfig.init(IHLogSetting(metaTagPolicy = SimpleMetaTag("MYAPP")))

class HelloWorld {
  fun hello() {
    l.debug("This is a log in class HelloWorld")
  }
}

class BananaOrange {
  fun apple() {
    l.debug("This is a log in class BananaOrange")
  }
}
```

The logcat output would be

```
03-03 02:04:49.949  1224  5126 D MYAPP_HeWo: This is a log in class HelloWorld
...
03-03 02:04:49.949  1224  5126 D MYAPP_BaOr: This is a log in class BananaOrange
```

By default the meta tag is empty string, and the underscore will not prepend tags.

### Provide log tag explicitly

We may also provide log tag explicitly for each log line.

```kotlin
l.debug("MyTag", "This is a log line with explicit log tag.")

// or

l.debug("MyTag") {
    "This is a log line with explicit log tag."
}

```
