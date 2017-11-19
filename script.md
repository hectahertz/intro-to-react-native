# 2 hours Demo Script

Instructions:

* Checkout the commit (the last one if there's more than one), you can use `git checkout -f`
* Follow the steps
* Compare with the next commit to see how well you did

## Part 1: Basics

```
7780834 🔨 App bootstrapping
```

* Add a [TextInput component](https://facebook.github.io/react-native/docs/textinput.html)
* Save the value to the state
* Show how to easily show the state with JSON.stringify

```
09a5bad 🔨 Create some basic components
```

* Add user and password to the state
* Create two inputs for them
* Add icons from [Expo icons](https://docs.expo.io/versions/latest/guides/icons.html)
* Use colors from [This palette](https://coolors.co/1dcaff-0084b4-00aced-c0deed-ffffff)

```
2b51f50 🔑 Add username and password fields, with icons
```

* Add a Button that logs the user and password onPress
* Group the header as a view
* Group the inputs as a view
* Create a row for each input
* Create a column with appropriate flex values

```
1d48086 💅🏻 Layout of the Login screen
```

* Add a [KeyboardAvoidingView](https://facebook.github.io/react-native/docs/keyboardavoidingview.html) with behavior 'padding'
* Fix the bottom margin for the Button

```
c4513ab 🎹 Avoid Keyboard on the View
```

* Move the screen to js/screens/Login

## Part 2: Navigation

```
ccefa77 🏗 Move screen to a separate component
```

* `yarn add react-navigation`
* Create a [StackNavigator](https://reactnavigation.org/docs/navigators/stack) and render it in App
* Create js/screens/Tweets
* Add the screen to the Navigator
* Navigate when pressing the button using [navigate](https://reactnavigation.org/docs/navigators/navigation-prop)

  Estimated elapsed time: 1 hour

## Part 3: Firebase authentication

```
ae571fc ⛴ Add react-navigation
155e40e ⛴ Create the base stack navigator, with just one screen
afb123d 🎶 Add empty tweets screen
5c2cd66 ⛴ Navigate to the Tweets screen
```

* `yarn add firebase`
* Create js/connectors/Firebase
* Copy code from [the expo docs](https://docs.expo.io/versions/latest/guides/using-firebase.html)
* Copy the credentials from the Firebase Console

```
e2bd996 🔥 Add Firebase
48c8dd0 🔥 Create Firebase connector
```

* Add [Firebase web sign in](https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithEmailAndPassword)
* Navigate only if it worked

```
7296302 🔥 Basic Firebase login
```

* Set default user/password on the state

## Part 4: Showing data from Firebase

```
d34df66 ⚡️ Set default user/password for faster development during demo
```

* In componentWillMount add listeners to /tweets and /users
* [Firebase web read/write](https://firebase.google.com/docs/database/web/read-and-write)

```javascript
firebase
  .database()
  .ref("users")
  .on("value", snapshot => {
    this.setState({ users: snapshot.val() });
  });

firebase
  .database()
  .ref("tweets")
  .on("value", snapshot => {
    this.setState({ tweets: snapshot.val() });
  });
```

```
432f34c 👀 Watch users and tweets from Firebase
d37404f ✨ Add Tweet component
```

```javascript
{
  Object.keys(this.state.tweets).map(tweetKey => (
    <Tweet
      key={tweetKey}
      tweet={this.state.tweets[tweetKey].text}
      user={this.state.users[this.state.tweets[tweetKey].uid]}
    />
  ));
}
```

```
407e464 ✨ Show tweet list
a420910 ✨ Add Header component
e70a138 ✨ Render Header component
e62ce76 ⬇️ Add margin for the status bar
```

* Switch the map for a proper [FlatList](https://facebook.github.io/react-native/docs/flatlist.html)

```javascript
<FlatList
  data={Object.keys(this.state.tweets)
    .map(key => ({
      ...this.state.tweets[key],
      key
    }))
    .reverse()}
  renderItem={({ item }) => (
    <Tweet tweet={item.text} user={this.state.users[item.uid]} />
  )}
/>
```

## Part 5: Sending data to Firebase

```
f1acd42 🗂 Switch to a FlatList
1ca302a ✨ Create Footer component
d1d172b ✨ Use the Footer component
```

* Call update on firebase when pressing the icon
* [Firebase web read/write](https://firebase.google.com/docs/database/web/read-and-write)

```javascript
sendTweet() {
  if (this.state.tweet.length < 1) return;
  // Get a key for a new Tweet.
  var newTweetKey = firebase
    .database()
    .ref()
    .child('tweets')
    .push().key;

  return firebase
    .database()
    .ref(`/tweets/${newTweetKey}`)
    .update({
      text: this.state.tweet,
      uid: this.props.navigation.state.params.user.uid
    });
}
```

```
84abff9 ✉️ Add send tweet functionality
5f7b0f6 🎹 Avoid Keyboard on the Tweets View
6cded0e 🌪 Clean the footer after sending
```

    Estimated duration: 2 hours
