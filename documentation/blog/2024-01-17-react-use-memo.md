---
title: React useMemo Hook Guide with Examples
description: Improve React app performance with the useMemo() hook.
slug: react-usememo
authors: abdullah_numan
tags: [react]
image: https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-16-react-use-memo/social2.png
hide_table_of_contents: false
---

**_This article was last updated on January 17, 2024 to reflect the latest changes to the React useMemo API and to provide a more explanations of how React.useMemo() works._**

## Introduction

This post is about the `useMemo()` hook in React. We demonstrate the use of `useMemo` for caching the value of expensive functions in a React app and examine the impact from the browser console.

This is the second post in the three part [React Memoization Series](https://refine.dev/blog/react-memo-guide/) hosted on [Refine.dev blog](https://refine.dev/blog/).

The three parts are:

1. [React Memo Guide with Examples](https://refine.dev/blog/react-memo-guide/)
2. [React useMemo Hook Guide With Examples](https://refine.dev/blog/react-usememo/)
3. [Memoization in React - How useCallback Works](https://refine.dev/blog/react-usecallback-guide/)

In this post, we dive into the details of the **useMemo** hook with an extension of the example demonstrated in the first post titled [React Memo Guide with Examples](https://refine.dev/blog/react-memo-guide/).

Steps we'll cover:

- [What is React useMemo?](#what-is-react-usememo-)
  - [Resource Intensive Functions in React: Why Use React `useMemo`?](#resource-intensive-functions-in-react-why-use-react-usememo-)
- [Optimizing Expensive Utility Functions with React `useMemo` Hook](#optimizing-expensive-utility-functions-with-react-usememo-hook)
- [React useMemo: How to Cache the Value of Expensive Utilities](#react-usememo-how-to-cache-the-value-of-expensive-utilities)
- [Using React useMemo with Dependencies](#using-react-usememo-with-dependencies)
  - [When to Use React `useMemo()`](#when-to-use-react-usememo)
  - [When Not to Use React `useMemo`](#when-not-to-use-react-usememo)

## What is React useMemo ?

React [`useMemo()`](https://react.dev/reference/react/useMemo) hook is a function that caches the value produced from an expensive function used inside a React component. It accepts the expensive function and works by storing the value produced from the function when that is passed the same arguments repeatedly. When different arguments are passed, it returns the new value and updates the cache.

Caching an expensive function's value with `useMemo` is useful in optimizing the performance of a React component - as doing so minimizes repeating heavy computations.

### Resource Intensive Functions in React: Why Use React `useMemo` ?

An expensive function is typically a resource intensive function that performs heavy and repetitive computations. In React, data processing, transformation and manipulation utilities like sorting functions, filters and mappers are commonly used costly functions. Such data heavy functions consume a lot of application resources (memory and time, which cost the application with billing). They slow down a React application and contributes to poor performance.

`useMemo`'s caching helps bypass the expensive function's repetitive heavy processes when it is invoked with the same parameters - thereby improving performance of the React component.

## Optimizing Expensive Utility Functions with React `useMemo` Hook

In the sections that follow, we demonstrate the use of React `useMemo` hook in a demo blog app that we explored in [Part I](https://refine.dev/blog/react-memo-guide/). Part I demonstrates the use of `React.memo` for memoizing a component, i.e. the `<Post />` component.

In this post, we'll implement caching of a sorting function with `useMemo()` and examine how it prevents recalculation tasks from the browser's console.

But before that, let's get a refresher of what's going on in the demo app.

### Project Overview

We recommend you follow along from Part I: [React Memo Guide with Examples](https://refine.dev/blog/react-memo-guide/). This way, you should already have the app cloned, opened in a code editor, installed, and up and running in a browser. You should also be familiar with the components before we make the changes with `useMemo`.

The demo app is based on the idea of a list of posts on a blog. There are several components involving a user seeing the latest posts and a list of the user's posts. Allow yourself some time to understand the components individually, their relationships and their state changes - especially for this post, the `<App />` and`<Blog />` components.

Take a particular note of the sorting function in `src/utils/sortPosts.js`, which is used for sorting posts inside `<Blog />`.

[Here you can find the example app's live code](#live-stackblitz-example)

The discussion of this post is focused on optimizing a React component's performance by memoizing the value of resource intensive functions, such as `sortPosts()`. React's `useMemo()` hook is intended for this purpose.

### Code Investigation

Let's start with examining what's happening in the `<App />` component. It looks like this:

```jsx title="src/App.tsx"
import { useState } from "react";
import Blog from "./components/Blog";

function App() {
  const [signedIn, setSignedIn] = useState(false);
  const handleClick = () => setSignedIn(!signedIn);

  // console.log('Rendering App component');

  return (
    <main>
      <nav className="navbar">
        <button className="btn btn-danger" onClick={handleClick}>
          Sign Out
        </button>
      </nav>
      <Blog signedIn={signedIn} setSignedIn={setSignedIn} />
    </main>
  );
}

export default App;
```

As we can see, the `<App />` component houses the `<Blog />` component.

`<Blog />` looks like this:

```tsx title="src/components/Blog.jsx"
import React, { useEffect, useMemo, useState } from "react";
import fetchUpdatedPosts from "../fetch/fetchUpdatedPosts";
import allPosts from "./../data/allPosts.json";
import sortPosts from "../utils/sortPosts";
import LatestPost from "./LatestPost";
import UserPostsIndex from "./UserPostsIndex";

const Blog = ({ signedIn }) => {
  const [updatedPosts, setUpdatedPosts] = useState(allPosts);
  const [localTime, setLocalTime] = useState(new Date().toLocaleTimeString());

  const getLatestPosts = () => {
    const posts = fetchUpdatedPosts();
    setUpdatedPosts(posts);
  };

  const sortedPosts = sortPosts(updatedPosts);
  // const sortedPosts = useMemo(() => sortPosts(updatedPosts), [updatedPosts]);

  useEffect(() => {
    const id = setInterval(() => setLocalTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(id);
  }, []);

  console.log("Rendering Blog component");

  return (
    <div className="container">
      <h1 className="m-1 p-1 text-center heading-lg">Memoization in React</h1>
      <div className="m-1 p-2 ">
        <div className="my-1 p-2 box">
          <div className="latest-posts-top">
            <h3 className="heading-md my-1 p-1">Latest posts</h3>
            <div className="p-1">{localTime}</div>
          </div>
          <div className="my-1">
            <button className="btn btn-primary" onClick={getLatestPosts}>
              Get&nbsp;Latest&nbsp;Post
            </button>
          </div>
          <hr className="hr my-2" />
          <LatestPost signedIn={signedIn} post={sortedPosts[0]} />
        </div>
        <UserPostsIndex signedIn={signedIn} />
      </div>
    </div>
  );
};

// export default Blog;
export default React.memo(Blog);
```

We'd like to focus particularly on the `sortPosts()` utility function which is used to sort posts stored in `updatedPosts`. `sortPosts` can get expensive if passed a long array of posts.

We are fetching the posts with the `fetchUpdatedPosts` function used inside `getLatestPosts`. At the moment, we are only sorting 101 items returned from `fetchUpdatedPosts()`, but in a real application, the number can be much higher and consume resources at scale. Thus, `sortPosts` is an expensive function.

Things get worse when this component re-renders due to parent re-renders or the component's internal state changes.

For example, if we look inside the `useEffect()` hook, we are updating the locale time string and storing it in `localTime` for our clock. `localTime` updates every second, and each state change in `localTime` triggers a re-render of `<Blog />`.

The clock does not represent a genuine UI feature for us here, but it is there to make a point about how frequent re-renders complicate things with expensive utility functions. It gives the same effect as state changes on a social media feed like those in LinkedIn or Facebook.

Our `sortPosts()` logs `Sorting posts...` to the console and returns a sorted array from the passed in an array:

```tsx title="src/utils/sortPosts"
const sortPosts = (posts) => {
  console.log("Sorting posts...");
  return posts.sort((a, b) => b.id - a.id);
};

export default sortPosts;
```

If we look at the console, we see that `Sorting posts...` is being logged at 1000ms intervals, i.e. with the tick of our clock:

<div  class="img-container" align-items="center" >
     <img style={{alignSelf:"center", width:"400px"}} src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-16-react-use-memo/usememo1.png"  alt="react usememo" />
</div>

<br/>

This shows `sortPosts()` is called at every re-render of `<Blog />` due to `localTime` state updates. An expensive function, invoked every second for no useful reason, is costly for the app. We don't want `sortPosts()` to be called if `updatedPosts` is not changed.

So, we need to leverage `useMemo()` hook in order to memoize `sortPosts` so that it does not execute anytime other than when `updatedPosts` changes.

## React useMemo: How to Cache the Value of Expensive Utilities

`useMemo()` helps us cache the value of `sortPosts()` between `<Blog />`'s re-renders. This will prevent its unnecessary execution when `updatedPosts` remains unchanged while re-renders keep happening due to changes in `localTime`.

So, in `<Blog />`, Let's use the memoized version of `sortPosts` function:

```diff title="src/components/Blog.jsx"
-- const sortedPosts = sortPosts(updatedPosts);
//highlight-next-line
++ const sortedPosts = useMemo(() => sortPosts(updatedPosts), [updatedPosts]);
```

After this change, examining our browser console, we can see that `Sorting posts...` has been logged only once, indicating only one invocation of `sortPosts()` even though the component keeps re-rendering every second:

<div  class="img-container" align-items="center" >
     <img style={{alignSelf:"center", width:"400px"}} src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-16-react-use-memo/usememo2.png"  alt="react usememo" />
</div>

<br/>

This gives us a huge performance gain.

## Using React useMemo with Dependencies

Notice the dependency array of `useMemo()`, passed as the second argument, `updatedPosts`. We are asking the hook to re-execute `sortPosts()` and renew the memo when `updatedPosts` changes.

Let's now try to change the value of `updatedPosts`. In the `<Blog/>` component, we have a `Get Latest Post` button, which is used to fetch latest posts on demand. Every time `Get Latest Post` button is clicked, `updatedPosts` is updated with the invocation of `getLatestPosts()`.

When the state of `updatedPosts` is changed, a re-render of `<Blog />` is triggered, which leads to a call to `sortPosts()` with the new value of `updatedPosts` passed in.

If we check our console while clicking the button, we can clearly see `Sorting posts...` being logged for each click:

<br/>

<div class="img-container" align-items="center" >
    <img style={{alignSelf:"center", width:"400px"}} src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-16-react-use-memo/usememo3.png" alt="react usememo" />
</div>

<br/>

This indicates that `sotPosts()` executes and renews the cache when its dependency, `updatedPosts`, gets updated.

:::info

### When to Use React `useMemo()`

It is important to notice that, if we remove the dependency from `useMemo()`, `sortPosts()` will not be invoked when `updatedPosts` change:

```tsx
const sortedPosts = useMemo(() => sortPosts(updatedPosts), []);
```

In other words, there is no sorting going on when we actually need it:

<div class="img-container" align-items="center" >
     <img style={{alignSelf:"center", width:"400px"}} src="https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-16-react-use-memo/usememo4.png" alt="react usememo" />
</div>

<br/>

So it is important that we leverage `useMemo` when the execution of the utility function depends on relevant state changes. In our case, execution should depend on `updatedPosts`.

It is also important to know that **useMemo** returns a value, as opposed to a function. In other words, React `useMemo` should be used only to memoize the value returned from a function, not the function itself.This is what differentiates it from the `useCallback()` hook, which returns a memoized function.
:::

### When Not to Use React `useMemo`

`useMemo()` is preferred for memoizing a value rather than a callback function. We should not use `useMemo` for memoizing a function such as a callback.

## Summary

In this post, we demonstrated the use of React `useMemo()` hook and examined how it plays a crucial role in optimizing the performance of a component by memoizing an expensive utility function. We noticed that it is important to specify the dependencies of **useMemo** so that the memo is re-computed and renewed when the state of the dependencies change.

We also learned that the `useMemo` hook should be used to cache values of a function and not for memoizing the function itself.

In the [next post](https://refine.dev/blog/react-usecallback-guide/) in the **React Memoization Series**, we demonstrate function memoization using the `useCallback()` hook.

## Live Example

<CodeSandboxExample path="blog-react-memoization-memo" />
