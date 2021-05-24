---
title: Configuration
id: configuration
sidebar_position: 5
---

IHLog is capable of targetting the log to various destinations. When it is first use in the process,
it read the file `ihlog.properties` in the root of Java classpath. The file is a standard java
properties file and the content looks like this:

```properties title="ihlog.properties"
provider=io.hkhc.log.providers.AndroidLogProvider
```

If the files does not exist, or the class specified in the file is not found, then the library is
set to use `AndroidLogProvider` which effectively means standard Android Log API is used.

### `LogSettings`

Alternatively, we may use the singleton class `IHLogConfig` to change the 
cconfiguration on the fly.
It has several properties, the library take effect immediately when the properties changed.

| property             | purpose         |
| --------             | -------         |
| `defaultPriority`  | filtering of log    |
| `metaTagPolicy`   | It is a object of class that implement `MetaTag` interface. The simplest option is to use `SimpleMetaTag` class. e.g. `SimpleMetaTag("MyTag")`. A prefix globally to all tags. If it is empty string, then nothing is prepended to the log tag. If it is non-empty, the log tags become `metaTag + "_" + abbrivated tag` |
| `provider` | instance of a `LogProvider`, to change the destination of log |

For example,

```kotlin
IHLogConfig.init(IHLogSetting(metaTagPolicy = SimpleMetaTag("MYTAG")))
```
