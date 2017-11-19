# Materials for my Introduction to React Native Workshop

## Environment setup

### Basic requirements
If you just want to run apps through Expo on your physical device, these will be enough:

* [Node via NVM](https://github.com/creationix/nvm#installation)
* [Brew](https://yarnpkg.com/lang/en/docs/install/)
* [Yarn](https://yarnpkg.com/lang/en/docs/install/)
* [Watchman](https://facebook.github.io/watchman/docs/install.html) (recommended method: `brew install watchman`)
* [create-react-native-app](https://facebook.github.io/react-native/docs/getting-started.html) (recommended method: `npm install -g create-react-native-app`)

### To run apps in an emulator
If you also want to run apps through Expo in an emulator, you'll need to set it up

* iOS Emulator: Install Xcode [via the Mac App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)
* Android Emulator: Follow the [Android development environment instructions for React Native](https://facebook.github.io/react-native/docs/getting-started.html#android-development-environment)

## Demo App

The Demo App included in the repository is meant to be used as a reference in a 2h workshop to illustrate basic React Native & Firebase concepts.

* [Login screen](screenshots/Login.png)
* [Tweets screen](screenshots/Tweets.png)

### Reference links
* [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html)
* [Expo docs](https://docs.expo.io/versions/latest/index.html)
* [Expo Vector-icons catalog](https://expo.github.io/vector-icons/)
* [Color palette for the app](https://coolors.co/1dcaff-0084b4-00aced-c0deed-ffffff)
* [KeyboardAvoidingView](https://facebook.github.io/react-native/docs/keyboardavoidingview.html)
* [React Navigation](https://reactnavigation.org)
* [Hello world navigation](https://reactnavigation.org/docs/intro/basic-app)
* [Expo Firebase instructions](https://docs.expo.io/versions/latest/guides/using-firebase.html)
* [Firebase web sign in](https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithEmailAndPassword)
* [Navigation props](https://reactnavigation.org/docs/navigators/navigation-prop)
* [Firebase web read/write](https://firebase.google.com/docs/database/web/read-and-write)

### Some other awesome libraries!

* react-native-dropdownalert
* react-native-firebase
* react-native-gifted-chat
* react-native-image-crop-picker
* react-native-swiper
* react-native-vector-icons

### Firebase setup for the demo project

* Create a new app
* Get your credentials and add them in the adapter
* Enable email/password login
* Register some users

```
user1@demo.com // password
...
user5@demo.com // password
```

* Starting DB Shape


```javascript
{
  "tweets": {
    "-KzIr3nG4akj5U5NvCob": {
      "text": "Tweet!",
      "uid": "lD29Ihlo59TKjZZVmU7pfODAcvG2"
    }
  },
  "users": {
    "lD29Ihlo59TKjZZVmU7pfODAcvG2": {
      "avatar": "https://randomuser.me/api/portraits/men/81.jpg",
      "name": "Ricky Neal",
      "username": "rickyneal"
    }
  }
}
```

* Security rules

```javascript
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null",
    "tweets": {
      "$tweet": {
        // new messages must have a string text and a string uid
        ".validate": "newData.hasChildren(['text', 'uid']) && newData.child('text').isString() && newData.child('uid').isString()",
        // the uid must match the authenticated user
        "uid": {
           ".validate": "newData.val() === auth.uid"
        },
      }
    }
  }
}
```

## License

[![Creative Commons License](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0/)

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-nc-sa/4.0/)
