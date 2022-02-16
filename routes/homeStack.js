import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../screens/home'
import About from "../screens/about";
import Forum from "../screens/forum";
import Post from "../screens/post";

// const screens =  {
//     Home: {
//         screen: Home
//     },
//     About: {
//         screen: About
//     },
//     Forum: {
//         screen: Forum
//     },
//     Post: {
//         screen: Post
//     },
// }

const HomeStack = createStackNavigator({
    Home: {
        screen: Home
    },
    About: {
        screen: About
    },
    Forum: {
        screen: Forum
    },
    Post: {
        screen: Post
    },
});

export default createAppContainer(HomeStack);