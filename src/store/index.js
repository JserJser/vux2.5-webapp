/**
 * 组装模块并导出
 * Created by saturn on 2017/8/8.
 */

/*
 Vuex 并不限制你的代码结构。但是，它规定了一些需要遵守的规则：

 1.应用层级的状态应该集中到单个 store 对象中。

 2.提交 mutation 是更改状态的唯一方法，并且这个过程是同步的。

 3.异步逻辑都应该封装到 action 里面。

 只要你遵守以上规则，如何组织代码随你便。
 如果你的 store 文件太大，只需将 action、mutation、和 getters 分割到单独的文件。

 */

import Common from './modules/common';
import Home from './modules/home';
import Car from './modules/car';
import Detail from './modules/detail';
import Sort from './modules/sort';
import User from './modules/user';

export default {
  Common,
  Home,
  Car,
  Detail,
  Sort,
  User
};
