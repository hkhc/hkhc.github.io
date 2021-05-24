---
title: Installation
id: installation
sidebar_position: 2
---

Just like most library load with Gradle, add line at `dependencies` block 
will do

For non-Android project,

<!--tabs-->
# Groovy
```groovy title="build.gradle"
dependencies {
    // ...
    implementation 'io.hkhc.log:ihlog:{{ihlogVersion}}'
    // ...
}
```
# Kotlin
```kotlin title="build.gradle.kts"
dependencies {
    // ...
    implementation("io.hkhc.log:ihlog:{{ihlogVersion}}")
    // ...
}
```
<!--/tabs-->

We have a dedicated variation for Android proejct:

<!--tabs-->
# Groovy
```groovy title="build.gradle"
dependencies {
    // ...
    implementation 'io.hkhc.log:ihlog-android:{{ihlogVersion}}'
    // ...
}
```
# Kotlin
```kotlin title="build.gradle.kts"
dependencies {
    // ...
    implementation("io.hkhc.log:ihlog-android:{{ihlogVersion}}")
    // ...
}
```
<!--/tabs-->


The library is available at both Maven Central, so chances are that you don't need to
change the `repository` settings in Gradle script.

## Setup for Android app

IHLog can target to different log implementations. It send log to standard 
output out of the box. To target Android `Log` class, add the following line 
to the `Application` class of the project

```kotlin {4}
class MyApplication: Application() {
    override fun onCreate() {
        super.onCreate()
        IHLogConfig.init(createAndroidSetting(this))
    }
}
```

