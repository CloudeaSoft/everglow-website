---
title: 'Introduction'
description: "Milkdown treats every feature as a plugin. With this pattern, developers can choose what they need in an editor instead of bundling all features even they won't need. Developers can extend their plugins to satisfy their habits such as defining a vim keymap via a custom plugin."
image: 'https://ts1.cn.mm.bing.net/th/id/R-C.12de8b3a8061a8e3851a8e18fe401124?rik=6j83F65gDsPMHg&riu=http%3a%2f%2fdimg06.c-ctrip.com%2fimages%2ftg%2f291%2f194%2f404%2f23e013988586496dbaa7486f48eb92b5.jpg&ehk=0DZ%2fl8uBmrE0jIlMFYUIsKu%2bKIka8qMWRhaRVPqvN1I%3d&risl=&pid=ImgRaw&r=0'
date: '2024-10-12 09:51:11'
---

👋 Welcome to Milkdown. We are so glad to see you here!

💭 You may wonder, what is Milkdown? Please write something here.

> ⚠️ **Not the right side!**
>
> Please try something on the left side.

![1.00](https://ts1.cn.mm.bing.net/th/id/R-C.2378f30d7c2895dd7fa3cb34546c7e2a?rik=Y%2bcNAyfheuMYrQ&riu=http%3a%2f%2fmkaugaming.com%2fwp-content%2fuploads%2f2019%2f07%2f2019-07-02_00002.jpg&ehk=PkcSDRICwdjFXOgmv%2bqoKYJvzUHX1AC9gNFYe8FFLd0%3d&risl=&pid=ImgRaw&r=0)

You're seeing this editor called **🥞Crepe**, which is an editor built on top of Milkdown.

If you want to install this editor, you can run `npm install @milkdown/crepe`. Then you can use it like this:

```javascript
import { Crepe } from '@milkdown/crepe';
import '@milkdown/crepe/theme/common/style.css';

// We have some themes for you to choose, ex.
import '@milkdown/crepe/theme/frame.css';
// Or you can create your own theme
import './your-theme.css';

const crepe = new Crepe({
	root: '#app',
	defaultValue: '# Hello, Milkdown!',
});

crepe.create().then(() => {
	console.log('Milkdown is ready!');
});

// Before unmount
crepe.destroy();
```

---

## Structure

> 🍼 [Milkdown](https://github.com/Milkdown/milkdown) is a WYSIWYG markdown editor framework.
>
> Which means you can build your own markdown editor with Milkdown.

In the real world, a typical milkdown editor is built on top of 3 layers:

- [x] 🥛 Core: The core of Milkdown, which provides the plugin loading system with the editor concepts.
- [x] 🧇 Plugins: A set of plugins that can be used to extend the functionalities of the editor.
- [x] 🍮 Components: Some headless components that can be used to build your own editor.

At the start, you may find it hard to understand all these concepts.
But don't worry, we have this `@milkdown/crepe` editor for you to get started quickly.

---

## You can do more with Milkdown

In Milkdown, you can extend the editor in many ways:

| Feature      | Description                                          | Example                   |
| ------------ | ---------------------------------------------------- | ------------------------- |
| 🎨 Theme     | Create your own theme with CSS                       | Nord, Dracula             |
| 🧩 Plugin    | Create your own plugin to extend the editor          | Search, Collab            |
| 📦 Component | Create your own component to build your own editor   | Slash Menu, Toolbar       |
| 📚 Syntax    | Create your own syntax to extend the markdown parser | Image with Caption, LaTex |

We have provided a lot of plugins and components, with an out-of-the-box crepe editor for you to use and learn.

---

## Open Source

- Milkdown is an open-source project under the MIT license.
- Everyone is welcome to contribute to the project, and you can use it in your own project for free.
- Please let me know what you are building with Milkdown, I would be so glad to see that!

Maintaining Milkdown is a lot of work, and we are working on it in our spare time.
If you like Milkdown, please consider supporting us by [sponsoring](https://github.com/sponsors/Saul-Mirone) the project.
We'll be so grateful for your support.

## Who built Milkdown?

Milkdown is built by [Mirone](https://github.com/Saul-Mirone) and designed by [Meo](https://meo.cool).
