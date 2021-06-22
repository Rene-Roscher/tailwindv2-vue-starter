import Foo from "./Pages/Foo";
import Bar from "./Pages/Bar";
import Foobar from "./Pages/Foobar";

export default [
    { path: '/', component: Foobar, name: 'foobar' },
    { path: '/foo', component: Foo, name: 'foo' },
    { path: '/bar', component: Bar, name: 'bar' }
];