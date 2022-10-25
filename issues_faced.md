```bash
    # issue
    # › Opening on Android...
    # Failed to resolve the Android SDK path. Default install location not found: /home/rakibul/Android/sdk. Use ANDROID_HOME to set the Android SDK location.
    # Failed to resolve the Android SDK path. Default install location not found: /home/rakibul/Android/sdk. Use ANDROID_HOME to set the Android SDK location.
    # Error: spawn adb ENOENT
    #
    # Solution 
    export ANDROID_HOME=${HOME}/Android/Sdk
    export PATH=${ANDROID_HOME}/tools:${PATH}
    export PATH=${ANDROID_HOME}/emulator:${PATH}
    export PATH=${ANDROID_HOME}/platform-tools:${PATH}
```