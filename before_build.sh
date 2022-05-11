#include "build.xcconfig"

CODE_SIGN_IDENTITY = iPhone Distribution
CODE_SIGN_IDENTITY[sdk=iphoneos*] = iPhone Distribution
ONLY_ACTIVE_ARCH = YES
ARCHS = arm64
VALID_ARCHS = arm64

#include "build-extras.xcconfig"

#!/usr/bin/env bash

#Overwrite the configurations files of Cordova    
cp "hooks/build/ios/build-debug.xcconfig" "platforms/ios/cordova/";
cp "hooks/build/ios/build-release.xcconfig" "platforms/ios/cordova/";
# cp ./GoogleService-info.plist platforms/ios/ 