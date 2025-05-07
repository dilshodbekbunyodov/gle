import { shallowReactive, reactive, effectScope, getCurrentScope, hasInjectionContext, getCurrentInstance, inject, toRef, shallowRef, isReadonly, isRef, isShallow, isReactive, toRaw, ref, computed, toValue, unref, watch, provide, readonly, watchEffect, nextTick, defineAsyncComponent, defineComponent, h, Suspense, mergeProps, Fragment, useSSRContext, withCtx, createVNode, createBlock, createCommentVNode, openBlock, onErrorCaptured, onServerPrefetch, resolveDynamicComponent, createApp } from 'vue';
import { k as createHooks, l as getContext, m as hasProtocol, o as joinURL, w as withQuery, s as sanitizeStatusCode, p as isScriptProtocol, h as createError$1, t as toRouteMatcher, q as createRouter, r as defu, v as executeAsync } from '../_/nitro.mjs';
import { START_LOCATION, createMemoryHistory, createRouter as createRouter$1, useRoute as useRoute$1, RouterView } from 'vue-router';
import { required, email } from '@vee-validate/rules';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderSuspense, ssrRenderVNode } from 'vue/server-renderer';

const appLayoutTransition = false;
const appPageTransition = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const nuxtDefaultErrorValue = null;
const appId = "nuxt-app";

function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  var _a;
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.16.2";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...((_a = options.ssrContext) == null ? void 0 : _a.payload) || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin) {
  if (plugin.hooks) {
    nuxtApp.hooks.addHooks(plugin.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin === "function") {
    const { provide } = await nuxtApp.runWithContext(() => plugin(nuxtApp)) || {};
    if (provide && typeof provide === "object") {
      for (const key in provide) {
        nuxtApp.provide(key, provide[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins) {
  var _a, _b, _c, _d;
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin) {
    var _a2;
    const unresolvedPluginsForThisPlugin = ((_a2 = plugin.dependsOn) == null ? void 0 : _a2.filter((name) => plugins.some((p) => p._name === name) && !resolvedPlugins.includes(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin).then(async () => {
        if (plugin._name) {
          resolvedPlugins.push(plugin._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin._name)) {
              dependsOn.delete(plugin._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin of plugins) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin);
  }
  for (const plugin of plugins) {
    if (((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) && ((_d = plugin.env) == null ? void 0 : _d.islands) === false) {
      continue;
    }
    await executePlugin(plugin);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin) {
  if (typeof plugin === "function") {
    return plugin;
  }
  const _name = plugin._name || plugin.name;
  delete plugin.name;
  return Object.assign(plugin.setup || (() => {
  }), plugin, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance || (nuxtAppInstance = getNuxtAppCtx(id).tryUse());
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}

const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");

const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const URL_QUOTE_RE = /"/g;
const navigateTo = (to, options) => {
  to || (to = "/");
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = (options == null ? void 0 : options.external) || isExternalHost;
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL(useRuntimeConfig().app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(URL_QUOTE_RE, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}

const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = useNuxtApp();
    const error2 = useError();
    if (false) ;
    error2.value || (error2.value = nuxtError);
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const clearError = async (options = {}) => {
  const nuxtApp = useNuxtApp();
  const error = useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await useRouter().replace(options.redirect);
  }
  error.value = nuxtDefaultErrorValue;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};

const unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU = defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    nuxtApp.vueApp.use(head);
  }
});

function toArray(value) {
  return Array.isArray(value) ? value : [value];
}

async function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  {
    useNuxtApp().ssrContext._preloadManifest = true;
    const _routeRulesMatcher = toRouteMatcher(
      createRouter({ routes: useRuntimeConfig().nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
  }
}

const __nuxt_page_meta = {
  layout: false
};

function handleHotUpdate(_router, _generateRoutes) {
}
const _routes = [
  {
    name: "index",
    path: "/",
    component: () => import('./index.vue.mjs')
  },
  {
    name: "news",
    path: "/news",
    component: () => import('./index.vue2.mjs')
  },
  {
    name: "news-slug",
    path: "/news/:slug()",
    component: () => import('./_slug_.vue.mjs')
  },
  {
    name: "works",
    path: "/works",
    component: () => import('./index.vue3.mjs')
  },
  {
    name: "studio",
    path: "/studio",
    component: () => import('./index.vue4.mjs')
  },
  {
    name: "contact",
    path: "/contact",
    component: () => import('./index.vue5.mjs')
  },
  {
    name: "works-FindPlan",
    path: "/works/FindPlan",
    component: () => import('./FindPlan.vue.mjs')
  },
  {
    name: "news-RecentNews",
    path: "/news/RecentNews",
    component: () => import('./RecentNews.vue.mjs')
  },
  {
    name: "newAccount",
    path: "/newAccount",
    meta: __nuxt_page_meta || {},
    component: () => import('./index.vue6.mjs')
  },
  {
    name: "news-FormComment",
    path: "/news/FormComment",
    component: () => import('./FormComment.vue.mjs')
  },
  {
    name: "termsofuse",
    path: "/termsofuse",
    component: () => import('./index.vue7.mjs')
  },
  {
    name: "works-TruckGreen",
    path: "/works/TruckGreen",
    component: () => import('./TruckGreen.vue.mjs')
  }
];

const _wrapInTransition = (props, children) => {
  return { default: () => {
    var _a;
    return (_a = children.default) == null ? void 0 : _a.call(children);
  } };
};
const ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE = /:\w+/g;
function generateRouteKey(route) {
  const source = (route == null ? void 0 : route.meta.key) ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => {
      var _a, _b;
      return comp.components && comp.components.default === ((_b = (_a = from.matched[index]) == null ? void 0 : _a.components) == null ? void 0 : _b.default);
    }
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}

const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a;
    const nuxtApp = useNuxtApp();
    const behavior = ((_a = useRouter().options) == null ? void 0 : _a.scrollBehaviorType) ?? "auto";
    let position = savedPosition || void 0;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
      return false;
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:loading:end";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, () => {
        requestAnimationFrame(() => resolve(_calculatePosition(to, "instant", position)));
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}
function _calculatePosition(to, scrollBehaviorType, position) {
  if (position) {
    return position;
  }
  if (to.hash) {
    return {
      el: to.hash,
      top: _getHashElementScrollMarginTop(to.hash),
      behavior: scrollBehaviorType
    };
  }
  return { left: 0, top: 0, behavior: scrollBehaviorType };
}

const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};

const validate$1 = defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  const nuxtApp = useNuxtApp();
  const router = useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error = createError({
    statusCode: result && result.statusCode || 404,
    statusMessage: result && result.statusMessage || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  const unsub = router.beforeResolve((final) => {
    unsub();
    if (final === to) {
      const unsub2 = router.afterEach(async () => {
        unsub2();
        await nuxtApp.runWithContext(() => showError(error));
      });
      return false;
    }
  });
});

const manifest_45route_45rule = defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});

const globalMiddleware = [
  validate$1,
  manifest_45route_45rule
];
const namedMiddleware = {};

const plugin = defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b, _c, _d;
    let __temp, __restore;
    let routerBase = useRuntimeConfig().app.baseURL;
    const history = ((_b = (_a = routerOptions).history) == null ? void 0 : _b.call(_a, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter$1({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes
    });
    handleHotUpdate(router, routerOptions.routes ? routerOptions.routes : (routes2) => routes2);
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c2, _d2;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d2 = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d2.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware || (nuxtApp._middleware = {
      global: [],
      named: {}
    });
    useError();
    if (!((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext)) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if ((failure == null ? void 0 : failure.type) === 4) {
          return;
        }
        if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if ((_d = nuxtApp.ssrContext) == null ? void 0 : _d.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a2, _b2, _c2;
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry of toArray(componentMiddleware)) {
            middlewareEntries.add(entry);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules({ path: to.path }));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry of middlewareEntries) {
          const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await ((_c2 = (_b2 = namedMiddleware)[entry]) == null ? void 0 : _c2.call(_b2).then((r) => r.default || r)) : entry;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry}'.`);
          }
          try {
            const result = await nuxtApp.runWithContext(() => middleware(to, from));
            if (true) {
              if (result === false || result instanceof Error) {
                const error2 = result || createError$1({
                  statusCode: 404,
                  statusMessage: `Page Not Found: ${initialURL}`
                });
                await nuxtApp.runWithContext(() => showError(error2));
                return false;
              }
            }
            if (result === true) {
              continue;
            }
            if (result === false) {
              return result;
            }
            if (result) {
              if (isNuxtError(result) && result.fatal) {
                await nuxtApp.runWithContext(() => showError(result));
              }
              return result;
            }
          } catch (err) {
            const error2 = createError$1(err);
            if (error2.fatal) {
              await nuxtApp.runWithContext(() => showError(error2));
            }
            return error2;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach(async (to, _from) => {
      if (to.matched.length === 0) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});

function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}

const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms = defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});

const components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4 = defineNuxtPlugin({
  name: "nuxt:global-components"
});

/**
  * vee-validate v4.15.0
  * (c) 2024 Abdelrahman Awad
  * @license MIT
  */
function isCallable(fn) {
  return typeof fn === "function";
}
function isNullOrUndefined(value) {
  return value === null || value === void 0;
}
const isObject = (obj) => obj !== null && !!obj && typeof obj === "object" && !Array.isArray(obj);
function isIndex(value) {
  return Number(value) >= 0;
}
function isObjectLike(value) {
  return typeof value === "object" && value !== null;
}
function getTag(value) {
  if (value == null) {
    return value === void 0 ? "[object Undefined]" : "[object Null]";
  }
  return Object.prototype.toString.call(value);
}
function isPlainObject(value) {
  if (!isObjectLike(value) || getTag(value) !== "[object Object]") {
    return false;
  }
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }
  let proto = value;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(value) === proto;
}
function merge(target, source) {
  Object.keys(source).forEach((key) => {
    if (isPlainObject(source[key]) && isPlainObject(target[key])) {
      if (!target[key]) {
        target[key] = {};
      }
      merge(target[key], source[key]);
      return;
    }
    target[key] = source[key];
  });
  return target;
}
function normalizeFormPath(path) {
  const pathArr = path.split(".");
  if (!pathArr.length) {
    return "";
  }
  let fullPath = String(pathArr[0]);
  for (let i = 1; i < pathArr.length; i++) {
    if (isIndex(pathArr[i])) {
      fullPath += `[${pathArr[i]}]`;
      continue;
    }
    fullPath += `.${pathArr[i]}`;
  }
  return fullPath;
}
const RULES = {};
function defineRule(id, validator) {
  guardExtend(id, validator);
  RULES[id] = validator;
}
function resolveRule(id) {
  return RULES[id];
}
function guardExtend(id, validator) {
  if (isCallable(validator)) {
    return;
  }
  throw new Error(`Extension Error: The validator '${id}' must be a function.`);
}
function set(obj, key, val) {
  if (typeof val.value === "object") val.value = klona(val.value);
  if (!val.enumerable || val.get || val.set || !val.configurable || !val.writable || key === "__proto__") {
    Object.defineProperty(obj, key, val);
  } else obj[key] = val.value;
}
function klona(x) {
  if (typeof x !== "object") return x;
  var i = 0, k, list, tmp, str = Object.prototype.toString.call(x);
  if (str === "[object Object]") {
    tmp = Object.create(x.__proto__ || null);
  } else if (str === "[object Array]") {
    tmp = Array(x.length);
  } else if (str === "[object Set]") {
    tmp = /* @__PURE__ */ new Set();
    x.forEach(function(val) {
      tmp.add(klona(val));
    });
  } else if (str === "[object Map]") {
    tmp = /* @__PURE__ */ new Map();
    x.forEach(function(val, key) {
      tmp.set(klona(key), klona(val));
    });
  } else if (str === "[object Date]") {
    tmp = /* @__PURE__ */ new Date(+x);
  } else if (str === "[object RegExp]") {
    tmp = new RegExp(x.source, x.flags);
  } else if (str === "[object DataView]") {
    tmp = new x.constructor(klona(x.buffer));
  } else if (str === "[object ArrayBuffer]") {
    tmp = x.slice(0);
  } else if (str.slice(-6) === "Array]") {
    tmp = new x.constructor(x);
  }
  if (tmp) {
    for (list = Object.getOwnPropertySymbols(x); i < list.length; i++) {
      set(tmp, list[i], Object.getOwnPropertyDescriptor(x, list[i]));
    }
    for (i = 0, list = Object.getOwnPropertyNames(x); i < list.length; i++) {
      if (Object.hasOwnProperty.call(tmp, k = list[i]) && tmp[k] === x[k]) continue;
      set(tmp, k, Object.getOwnPropertyDescriptor(x, k));
    }
  }
  return tmp || x;
}
const FormContextKey = Symbol("vee-validate-form");
const PublicFormContextKey = Symbol("vee-validate-form-context");
function isLocator(value) {
  return isCallable(value) && !!value.__locatorRef;
}
function isTypedSchema(value) {
  return !!value && isCallable(value.parse) && value.__type === "VVTypedSchema";
}
function isYupValidator(value) {
  return !!value && isCallable(value.validate);
}
function hasCheckedAttr(type) {
  return type === "checkbox" || type === "radio";
}
function isContainerValue(value) {
  return isObject(value) || Array.isArray(value);
}
function isEmptyContainer(value) {
  if (Array.isArray(value)) {
    return value.length === 0;
  }
  return isObject(value) && Object.keys(value).length === 0;
}
function isNotNestedPath(path) {
  return /^\[.+\]$/i.test(path);
}
function isNativeMultiSelect(el) {
  return isNativeSelect(el) && el.multiple;
}
function isNativeSelect(el) {
  return el.tagName === "SELECT";
}
function isFormSubmitEvent(evt) {
  return isEvent(evt) && evt.target && "submit" in evt.target;
}
function isEvent(evt) {
  if (!evt) {
    return false;
  }
  if (typeof Event !== "undefined" && isCallable(Event) && evt instanceof Event) {
    return true;
  }
  if (evt && evt.srcElement) {
    return true;
  }
  return false;
}
function isEqual(a, b) {
  if (a === b)
    return true;
  if (a && b && typeof a === "object" && typeof b === "object") {
    if (a.constructor !== b.constructor)
      return false;
    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!isEqual(a[i], b[i]))
          return false;
      return true;
    }
    if (a instanceof Map && b instanceof Map) {
      if (a.size !== b.size)
        return false;
      for (i of a.entries())
        if (!b.has(i[0]))
          return false;
      for (i of a.entries())
        if (!isEqual(i[1], b.get(i[0])))
          return false;
      return true;
    }
    if (isFile() && isFile()) {
      if (a.size !== b.size)
        return false;
      if (a.name !== b.name)
        return false;
      if (a.lastModified !== b.lastModified)
        return false;
      if (a.type !== b.type)
        return false;
      return true;
    }
    if (a instanceof Set && b instanceof Set) {
      if (a.size !== b.size)
        return false;
      for (i of a.entries())
        if (!b.has(i[0]))
          return false;
      return true;
    }
    if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (a[i] !== b[i])
          return false;
      return true;
    }
    if (a.constructor === RegExp)
      return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf)
      return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString)
      return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length - countUndefinedValues(a, keys);
    if (length !== Object.keys(b).length - countUndefinedValues(b, Object.keys(b)))
      return false;
    for (i = length; i-- !== 0; ) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
        return false;
    }
    for (i = length; i-- !== 0; ) {
      var key = keys[i];
      if (!isEqual(a[key], b[key]))
        return false;
    }
    return true;
  }
  return a !== a && b !== b;
}
function countUndefinedValues(a, keys) {
  let result = 0;
  for (let i = keys.length; i-- !== 0; ) {
    var key = keys[i];
    if (a[key] === void 0)
      result++;
  }
  return result;
}
function isFile(a) {
  {
    return false;
  }
}
function cleanupNonNestedPath(path) {
  if (isNotNestedPath(path)) {
    return path.replace(/\[|\]/gi, "");
  }
  return path;
}
function getFromPath(object, path, fallback) {
  if (!object) {
    return fallback;
  }
  if (isNotNestedPath(path)) {
    return object[cleanupNonNestedPath(path)];
  }
  const resolvedValue = (path || "").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((acc, propKey) => {
    if (isContainerValue(acc) && propKey in acc) {
      return acc[propKey];
    }
    return fallback;
  }, object);
  return resolvedValue;
}
function setInPath(object, path, value) {
  if (isNotNestedPath(path)) {
    object[cleanupNonNestedPath(path)] = value;
    return;
  }
  const keys = path.split(/\.|\[(\d+)\]/).filter(Boolean);
  let acc = object;
  for (let i = 0; i < keys.length; i++) {
    if (i === keys.length - 1) {
      acc[keys[i]] = value;
      return;
    }
    if (!(keys[i] in acc) || isNullOrUndefined(acc[keys[i]])) {
      acc[keys[i]] = isIndex(keys[i + 1]) ? [] : {};
    }
    acc = acc[keys[i]];
  }
}
function unset(object, key) {
  if (Array.isArray(object) && isIndex(key)) {
    object.splice(Number(key), 1);
    return;
  }
  if (isObject(object)) {
    delete object[key];
  }
}
function unsetPath(object, path) {
  if (isNotNestedPath(path)) {
    delete object[cleanupNonNestedPath(path)];
    return;
  }
  const keys = path.split(/\.|\[(\d+)\]/).filter(Boolean);
  let acc = object;
  for (let i = 0; i < keys.length; i++) {
    if (i === keys.length - 1) {
      unset(acc, keys[i]);
      break;
    }
    if (!(keys[i] in acc) || isNullOrUndefined(acc[keys[i]])) {
      break;
    }
    acc = acc[keys[i]];
  }
  const pathValues = keys.map((_, idx) => {
    return getFromPath(object, keys.slice(0, idx).join("."));
  });
  for (let i = pathValues.length - 1; i >= 0; i--) {
    if (!isEmptyContainer(pathValues[i])) {
      continue;
    }
    if (i === 0) {
      unset(object, keys[0]);
      continue;
    }
    unset(pathValues[i - 1], keys[i - 1]);
  }
}
function keysOf(record) {
  return Object.keys(record);
}
function debounceAsync(inner, ms = 0) {
  let timer = null;
  let resolves = [];
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      const result = inner(...args);
      resolves.forEach((r) => r(result));
      resolves = [];
    }, ms);
    return new Promise((resolve) => resolves.push(resolve));
  };
}
function withLatest(fn, onDone) {
  let latestRun;
  return async function runLatest(...args) {
    const pending = fn(...args);
    latestRun = pending;
    const result = await pending;
    if (pending !== latestRun) {
      return result;
    }
    latestRun = void 0;
    return onDone(result, args);
  };
}
function normalizeErrorItem(message) {
  return Array.isArray(message) ? message : message ? [message] : [];
}
function omit(obj, keys) {
  const target = {};
  for (const key in obj) {
    if (!keys.includes(key)) {
      target[key] = obj[key];
    }
  }
  return target;
}
function debounceNextTick(inner) {
  let lastTick = null;
  let resolves = [];
  return function(...args) {
    const thisTick = nextTick(() => {
      if (lastTick !== thisTick) {
        return;
      }
      const result = inner(...args);
      resolves.forEach((r) => r(result));
      resolves = [];
      lastTick = null;
    });
    lastTick = thisTick;
    return new Promise((resolve) => resolves.push(resolve));
  };
}
function getBoundValue(el) {
  if (hasValueBinding(el)) {
    return el._value;
  }
  return void 0;
}
function hasValueBinding(el) {
  return "_value" in el;
}
function parseInputValue(el) {
  if (el.type === "number") {
    return Number.isNaN(el.valueAsNumber) ? el.value : el.valueAsNumber;
  }
  if (el.type === "range") {
    return Number.isNaN(el.valueAsNumber) ? el.value : el.valueAsNumber;
  }
  return el.value;
}
function normalizeEventValue(value) {
  if (!isEvent(value)) {
    return value;
  }
  const input = value.target;
  if (hasCheckedAttr(input.type) && hasValueBinding(input)) {
    return getBoundValue(input);
  }
  if (input.type === "file" && input.files) {
    const files = Array.from(input.files);
    return input.multiple ? files : files[0];
  }
  if (isNativeMultiSelect(input)) {
    return Array.from(input.options).filter((opt) => opt.selected && !opt.disabled).map(getBoundValue);
  }
  if (isNativeSelect(input)) {
    const selectedOption = Array.from(input.options).find((opt) => opt.selected);
    return selectedOption ? getBoundValue(selectedOption) : input.value;
  }
  return parseInputValue(input);
}
function normalizeRules(rules) {
  const acc = {};
  Object.defineProperty(acc, "_$$isNormalized", {
    value: true,
    writable: false,
    enumerable: false,
    configurable: false
  });
  if (!rules) {
    return acc;
  }
  if (isObject(rules) && rules._$$isNormalized) {
    return rules;
  }
  if (isObject(rules)) {
    return Object.keys(rules).reduce((prev, curr) => {
      const params = normalizeParams(rules[curr]);
      if (rules[curr] !== false) {
        prev[curr] = buildParams(params);
      }
      return prev;
    }, acc);
  }
  if (typeof rules !== "string") {
    return acc;
  }
  return rules.split("|").reduce((prev, rule) => {
    const parsedRule = parseRule(rule);
    if (!parsedRule.name) {
      return prev;
    }
    prev[parsedRule.name] = buildParams(parsedRule.params);
    return prev;
  }, acc);
}
function normalizeParams(params) {
  if (params === true) {
    return [];
  }
  if (Array.isArray(params)) {
    return params;
  }
  if (isObject(params)) {
    return params;
  }
  return [params];
}
function buildParams(provided) {
  const mapValueToLocator = (value) => {
    if (typeof value === "string" && value[0] === "@") {
      return createLocator(value.slice(1));
    }
    return value;
  };
  if (Array.isArray(provided)) {
    return provided.map(mapValueToLocator);
  }
  if (provided instanceof RegExp) {
    return [provided];
  }
  return Object.keys(provided).reduce((prev, key) => {
    prev[key] = mapValueToLocator(provided[key]);
    return prev;
  }, {});
}
const parseRule = (rule) => {
  let params = [];
  const name = rule.split(":")[0];
  if (rule.includes(":")) {
    params = rule.split(":").slice(1).join(":").split(",");
  }
  return { name, params };
};
function createLocator(value) {
  const locator = (crossTable) => {
    var _a;
    const val = (_a = getFromPath(crossTable, value)) !== null && _a !== void 0 ? _a : crossTable[value];
    return val;
  };
  locator.__locatorRef = value;
  return locator;
}
const DEFAULT_CONFIG = {
  generateMessage: ({ field }) => `${field} is not valid.`,
  bails: true,
  validateOnBlur: true,
  validateOnChange: true,
  validateOnInput: false,
  validateOnModelUpdate: true
};
let currentConfig = Object.assign({}, DEFAULT_CONFIG);
const getConfig = () => currentConfig;
async function validate(value, rules, options = {}) {
  const shouldBail = options === null || options === void 0 ? void 0 : options.bails;
  const field = {
    name: (options === null || options === void 0 ? void 0 : options.name) || "{field}",
    rules,
    label: options === null || options === void 0 ? void 0 : options.label,
    bails: shouldBail !== null && shouldBail !== void 0 ? shouldBail : true,
    formData: (options === null || options === void 0 ? void 0 : options.values) || {}
  };
  const result = await _validate(field, value);
  return Object.assign(Object.assign({}, result), { valid: !result.errors.length });
}
async function _validate(field, value) {
  const rules = field.rules;
  if (isTypedSchema(rules) || isYupValidator(rules)) {
    return validateFieldWithTypedSchema(value, Object.assign(Object.assign({}, field), { rules }));
  }
  if (isCallable(rules) || Array.isArray(rules)) {
    const ctx = {
      field: field.label || field.name,
      name: field.name,
      label: field.label,
      form: field.formData,
      value
    };
    const pipeline = Array.isArray(rules) ? rules : [rules];
    const length2 = pipeline.length;
    const errors2 = [];
    for (let i = 0; i < length2; i++) {
      const rule = pipeline[i];
      const result = await rule(value, ctx);
      const isValid = typeof result !== "string" && !Array.isArray(result) && result;
      if (isValid) {
        continue;
      }
      if (Array.isArray(result)) {
        errors2.push(...result);
      } else {
        const message = typeof result === "string" ? result : _generateFieldError(ctx);
        errors2.push(message);
      }
      if (field.bails) {
        return {
          errors: errors2
        };
      }
    }
    return {
      errors: errors2
    };
  }
  const normalizedContext = Object.assign(Object.assign({}, field), { rules: normalizeRules(rules) });
  const errors = [];
  const rulesKeys = Object.keys(normalizedContext.rules);
  const length = rulesKeys.length;
  for (let i = 0; i < length; i++) {
    const rule = rulesKeys[i];
    const result = await _test(normalizedContext, value, {
      name: rule,
      params: normalizedContext.rules[rule]
    });
    if (result.error) {
      errors.push(result.error);
      if (field.bails) {
        return {
          errors
        };
      }
    }
  }
  return {
    errors
  };
}
function isYupError(err) {
  return !!err && err.name === "ValidationError";
}
function yupToTypedSchema(yupSchema) {
  const schema = {
    __type: "VVTypedSchema",
    async parse(values, context) {
      var _a;
      try {
        const output = await yupSchema.validate(values, { abortEarly: false, context: (context === null || context === void 0 ? void 0 : context.formData) || {} });
        return {
          output,
          errors: []
        };
      } catch (err) {
        if (!isYupError(err)) {
          throw err;
        }
        if (!((_a = err.inner) === null || _a === void 0 ? void 0 : _a.length) && err.errors.length) {
          return { errors: [{ path: err.path, errors: err.errors }] };
        }
        const errors = err.inner.reduce((acc, curr) => {
          const path = curr.path || "";
          if (!acc[path]) {
            acc[path] = { errors: [], path };
          }
          acc[path].errors.push(...curr.errors);
          return acc;
        }, {});
        return { errors: Object.values(errors) };
      }
    }
  };
  return schema;
}
async function validateFieldWithTypedSchema(value, context) {
  const typedSchema = isTypedSchema(context.rules) ? context.rules : yupToTypedSchema(context.rules);
  const result = await typedSchema.parse(value, { formData: context.formData });
  const messages = [];
  for (const error of result.errors) {
    if (error.errors.length) {
      messages.push(...error.errors);
    }
  }
  return {
    value: result.value,
    errors: messages
  };
}
async function _test(field, value, rule) {
  const validator = resolveRule(rule.name);
  if (!validator) {
    throw new Error(`No such validator '${rule.name}' exists.`);
  }
  const params = fillTargetValues(rule.params, field.formData);
  const ctx = {
    field: field.label || field.name,
    name: field.name,
    label: field.label,
    value,
    form: field.formData,
    rule: Object.assign(Object.assign({}, rule), { params })
  };
  const result = await validator(value, params, ctx);
  if (typeof result === "string") {
    return {
      error: result
    };
  }
  return {
    error: result ? void 0 : _generateFieldError(ctx)
  };
}
function _generateFieldError(fieldCtx) {
  const message = getConfig().generateMessage;
  if (!message) {
    return "Field is invalid";
  }
  return message(fieldCtx);
}
function fillTargetValues(params, crossTable) {
  const normalize = (value) => {
    if (isLocator(value)) {
      return value(crossTable);
    }
    return value;
  };
  if (Array.isArray(params)) {
    return params.map(normalize);
  }
  return Object.keys(params).reduce((acc, param) => {
    acc[param] = normalize(params[param]);
    return acc;
  }, {});
}
async function validateTypedSchema(schema, values) {
  const typedSchema = isTypedSchema(schema) ? schema : yupToTypedSchema(schema);
  const validationResult = await typedSchema.parse(klona(values), { formData: klona(values) });
  const results = {};
  const errors = {};
  for (const error of validationResult.errors) {
    const messages = error.errors;
    const path = (error.path || "").replace(/\["(\d+)"\]/g, (_, m) => {
      return `[${m}]`;
    });
    results[path] = { valid: !messages.length, errors: messages };
    if (messages.length) {
      errors[path] = messages[0];
    }
  }
  return {
    valid: !validationResult.errors.length,
    results,
    errors,
    values: validationResult.value,
    source: "schema"
  };
}
async function validateObjectSchema(schema, values, opts) {
  const paths = keysOf(schema);
  const validations = paths.map(async (path) => {
    var _a, _b, _c;
    const strings = (_a = opts === null || opts === void 0 ? void 0 : opts.names) === null || _a === void 0 ? void 0 : _a[path];
    const fieldResult = await validate(getFromPath(values, path), schema[path], {
      name: (strings === null || strings === void 0 ? void 0 : strings.name) || path,
      label: strings === null || strings === void 0 ? void 0 : strings.label,
      values,
      bails: (_c = (_b = opts === null || opts === void 0 ? void 0 : opts.bailsMap) === null || _b === void 0 ? void 0 : _b[path]) !== null && _c !== void 0 ? _c : true
    });
    return Object.assign(Object.assign({}, fieldResult), { path });
  });
  let isAllValid = true;
  const validationResults = await Promise.all(validations);
  const results = {};
  const errors = {};
  for (const result of validationResults) {
    results[result.path] = {
      valid: result.valid,
      errors: result.errors
    };
    if (!result.valid) {
      isAllValid = false;
      errors[result.path] = result.errors[0];
    }
  }
  return {
    valid: isAllValid,
    results,
    errors,
    source: "schema"
  };
}
let FORM_COUNTER = 0;
const PRIVATE_PATH_STATE_KEYS = ["bails", "fieldsCount", "id", "multiple", "type", "validate"];
function resolveInitialValues(opts) {
  const givenInitial = (opts === null || opts === void 0 ? void 0 : opts.initialValues) || {};
  const providedValues = Object.assign({}, toValue(givenInitial));
  const schema = unref(opts === null || opts === void 0 ? void 0 : opts.validationSchema);
  if (schema && isTypedSchema(schema) && isCallable(schema.cast)) {
    return klona(schema.cast(providedValues) || {});
  }
  return klona(providedValues);
}
function useForm(opts) {
  var _a;
  const formId = FORM_COUNTER++;
  const name = (opts === null || opts === void 0 ? void 0 : opts.name) || "Form";
  let FIELD_ID_COUNTER = 0;
  const isSubmitting = ref(false);
  const isValidating = ref(false);
  const submitCount = ref(0);
  const fieldArrays = [];
  const formValues = reactive(resolveInitialValues(opts));
  const pathStates = ref([]);
  const extraErrorsBag = ref({});
  const pathStateLookup = ref({});
  const rebuildPathLookup = debounceNextTick(() => {
    pathStateLookup.value = pathStates.value.reduce((names, state) => {
      names[normalizeFormPath(toValue(state.path))] = state;
      return names;
    }, {});
  });
  function setFieldError(field, message) {
    const state = findPathState(field);
    if (!state) {
      if (typeof field === "string") {
        extraErrorsBag.value[normalizeFormPath(field)] = normalizeErrorItem(message);
      }
      return;
    }
    if (typeof field === "string") {
      const normalizedPath = normalizeFormPath(field);
      if (extraErrorsBag.value[normalizedPath]) {
        delete extraErrorsBag.value[normalizedPath];
      }
    }
    state.errors = normalizeErrorItem(message);
    state.valid = !state.errors.length;
  }
  function setErrors(paths) {
    keysOf(paths).forEach((path) => {
      setFieldError(path, paths[path]);
    });
  }
  if (opts === null || opts === void 0 ? void 0 : opts.initialErrors) {
    setErrors(opts.initialErrors);
  }
  const errorBag = computed(() => {
    const pathErrors = pathStates.value.reduce((acc, state) => {
      if (state.errors.length) {
        acc[toValue(state.path)] = state.errors;
      }
      return acc;
    }, {});
    return Object.assign(Object.assign({}, extraErrorsBag.value), pathErrors);
  });
  const errors = computed(() => {
    return keysOf(errorBag.value).reduce((acc, key) => {
      const errors2 = errorBag.value[key];
      if (errors2 === null || errors2 === void 0 ? void 0 : errors2.length) {
        acc[key] = errors2[0];
      }
      return acc;
    }, {});
  });
  const fieldNames = computed(() => {
    return pathStates.value.reduce((names, state) => {
      names[toValue(state.path)] = { name: toValue(state.path) || "", label: state.label || "" };
      return names;
    }, {});
  });
  const fieldBailsMap = computed(() => {
    return pathStates.value.reduce((map, state) => {
      var _a2;
      map[toValue(state.path)] = (_a2 = state.bails) !== null && _a2 !== void 0 ? _a2 : true;
      return map;
    }, {});
  });
  const initialErrors = Object.assign({}, (opts === null || opts === void 0 ? void 0 : opts.initialErrors) || {});
  const keepValuesOnUnmount = (_a = opts === null || opts === void 0 ? void 0 : opts.keepValuesOnUnmount) !== null && _a !== void 0 ? _a : false;
  const { initialValues, originalInitialValues, setInitialValues } = useFormInitialValues(pathStates, formValues, opts);
  const meta = useFormMeta(pathStates, formValues, originalInitialValues, errors);
  const controlledValues = computed(() => {
    return pathStates.value.reduce((acc, state) => {
      const value = getFromPath(formValues, toValue(state.path));
      setInPath(acc, toValue(state.path), value);
      return acc;
    }, {});
  });
  const schema = opts === null || opts === void 0 ? void 0 : opts.validationSchema;
  function createPathState(path, config) {
    var _a2, _b;
    const initialValue = computed(() => getFromPath(initialValues.value, toValue(path)));
    const pathStateExists = pathStateLookup.value[toValue(path)];
    const isCheckboxOrRadio = (config === null || config === void 0 ? void 0 : config.type) === "checkbox" || (config === null || config === void 0 ? void 0 : config.type) === "radio";
    if (pathStateExists && isCheckboxOrRadio) {
      pathStateExists.multiple = true;
      const id2 = FIELD_ID_COUNTER++;
      if (Array.isArray(pathStateExists.id)) {
        pathStateExists.id.push(id2);
      } else {
        pathStateExists.id = [pathStateExists.id, id2];
      }
      pathStateExists.fieldsCount++;
      pathStateExists.__flags.pendingUnmount[id2] = false;
      return pathStateExists;
    }
    const currentValue = computed(() => getFromPath(formValues, toValue(path)));
    const pathValue = toValue(path);
    const unsetBatchIndex = UNSET_BATCH.findIndex((_path) => _path === pathValue);
    if (unsetBatchIndex !== -1) {
      UNSET_BATCH.splice(unsetBatchIndex, 1);
    }
    const isRequired = computed(() => {
      var _a3, _b2, _c, _d;
      const schemaValue = toValue(schema);
      if (isTypedSchema(schemaValue)) {
        return (_b2 = (_a3 = schemaValue.describe) === null || _a3 === void 0 ? void 0 : _a3.call(schemaValue, toValue(path)).required) !== null && _b2 !== void 0 ? _b2 : false;
      }
      const configSchemaValue = toValue(config === null || config === void 0 ? void 0 : config.schema);
      if (isTypedSchema(configSchemaValue)) {
        return (_d = (_c = configSchemaValue.describe) === null || _c === void 0 ? void 0 : _c.call(configSchemaValue).required) !== null && _d !== void 0 ? _d : false;
      }
      return false;
    });
    const id = FIELD_ID_COUNTER++;
    const state = reactive({
      id,
      path,
      touched: false,
      pending: false,
      valid: true,
      validated: !!((_a2 = initialErrors[pathValue]) === null || _a2 === void 0 ? void 0 : _a2.length),
      required: isRequired,
      initialValue,
      errors: shallowRef([]),
      bails: (_b = config === null || config === void 0 ? void 0 : config.bails) !== null && _b !== void 0 ? _b : false,
      label: config === null || config === void 0 ? void 0 : config.label,
      type: (config === null || config === void 0 ? void 0 : config.type) || "default",
      value: currentValue,
      multiple: false,
      __flags: {
        pendingUnmount: { [id]: false },
        pendingReset: false
      },
      fieldsCount: 1,
      validate: config === null || config === void 0 ? void 0 : config.validate,
      dirty: computed(() => {
        return !isEqual(unref(currentValue), unref(initialValue));
      })
    });
    pathStates.value.push(state);
    pathStateLookup.value[pathValue] = state;
    rebuildPathLookup();
    if (errors.value[pathValue] && !initialErrors[pathValue]) {
      nextTick(() => {
        validateField(pathValue, { mode: "silent" });
      });
    }
    if (isRef(path)) {
      watch(path, (newPath) => {
        rebuildPathLookup();
        const nextValue = klona(currentValue.value);
        pathStateLookup.value[newPath] = state;
        nextTick(() => {
          setInPath(formValues, newPath, nextValue);
        });
      });
    }
    return state;
  }
  const debouncedSilentValidation = debounceAsync(_validateSchema, 5);
  const debouncedValidation = debounceAsync(_validateSchema, 5);
  const validateSchema = withLatest(async (mode) => {
    return await (mode === "silent" ? debouncedSilentValidation() : debouncedValidation());
  }, (formResult, [mode]) => {
    const currentErrorsPaths = keysOf(formCtx.errorBag.value);
    const paths = [
      .../* @__PURE__ */ new Set([...keysOf(formResult.results), ...pathStates.value.map((p) => p.path), ...currentErrorsPaths])
    ].sort();
    const results = paths.reduce((validation, _path) => {
      var _a2;
      const expectedPath = _path;
      const pathState = findPathState(expectedPath) || findHoistedPath(expectedPath);
      const messages = ((_a2 = formResult.results[expectedPath]) === null || _a2 === void 0 ? void 0 : _a2.errors) || [];
      const path = toValue(pathState === null || pathState === void 0 ? void 0 : pathState.path) || expectedPath;
      const fieldResult = mergeValidationResults({ errors: messages, valid: !messages.length }, validation.results[path]);
      validation.results[path] = fieldResult;
      if (!fieldResult.valid) {
        validation.errors[path] = fieldResult.errors[0];
      }
      if (pathState && extraErrorsBag.value[path]) {
        delete extraErrorsBag.value[path];
      }
      if (!pathState) {
        setFieldError(path, messages);
        return validation;
      }
      pathState.valid = fieldResult.valid;
      if (mode === "silent") {
        return validation;
      }
      if (mode === "validated-only" && !pathState.validated) {
        return validation;
      }
      setFieldError(pathState, fieldResult.errors);
      return validation;
    }, {
      valid: formResult.valid,
      results: {},
      errors: {},
      source: formResult.source
    });
    if (formResult.values) {
      results.values = formResult.values;
      results.source = formResult.source;
    }
    keysOf(results.results).forEach((path) => {
      var _a2;
      const pathState = findPathState(path);
      if (!pathState) {
        return;
      }
      if (mode === "silent") {
        return;
      }
      if (mode === "validated-only" && !pathState.validated) {
        return;
      }
      setFieldError(pathState, (_a2 = results.results[path]) === null || _a2 === void 0 ? void 0 : _a2.errors);
    });
    return results;
  });
  function mutateAllPathState(mutation) {
    pathStates.value.forEach(mutation);
  }
  function findPathState(path) {
    const normalizedPath = typeof path === "string" ? normalizeFormPath(path) : path;
    const pathState = typeof normalizedPath === "string" ? pathStateLookup.value[normalizedPath] : normalizedPath;
    return pathState;
  }
  function findHoistedPath(path) {
    const candidates = pathStates.value.filter((state) => path.startsWith(toValue(state.path)));
    return candidates.reduce((bestCandidate, candidate) => {
      if (!bestCandidate) {
        return candidate;
      }
      return candidate.path.length > bestCandidate.path.length ? candidate : bestCandidate;
    }, void 0);
  }
  let UNSET_BATCH = [];
  let PENDING_UNSET;
  function unsetPathValue(path) {
    UNSET_BATCH.push(path);
    if (!PENDING_UNSET) {
      PENDING_UNSET = nextTick(() => {
        const sortedPaths = [...UNSET_BATCH].sort().reverse();
        sortedPaths.forEach((p) => {
          unsetPath(formValues, p);
        });
        UNSET_BATCH = [];
        PENDING_UNSET = null;
      });
    }
    return PENDING_UNSET;
  }
  function makeSubmissionFactory(onlyControlled) {
    return function submitHandlerFactory(fn, onValidationError) {
      return function submissionHandler(e) {
        if (e instanceof Event) {
          e.preventDefault();
          e.stopPropagation();
        }
        mutateAllPathState((s) => s.touched = true);
        isSubmitting.value = true;
        submitCount.value++;
        return validate2().then((result) => {
          const values = klona(formValues);
          if (result.valid && typeof fn === "function") {
            const controlled = klona(controlledValues.value);
            let submittedValues = onlyControlled ? controlled : values;
            if (result.values) {
              submittedValues = result.source === "schema" ? result.values : Object.assign({}, submittedValues, result.values);
            }
            return fn(submittedValues, {
              evt: e,
              controlledValues: controlled,
              setErrors,
              setFieldError,
              setTouched,
              setFieldTouched,
              setValues,
              setFieldValue,
              resetForm,
              resetField
            });
          }
          if (!result.valid && typeof onValidationError === "function") {
            onValidationError({
              values,
              evt: e,
              errors: result.errors,
              results: result.results
            });
          }
        }).then((returnVal) => {
          isSubmitting.value = false;
          return returnVal;
        }, (err) => {
          isSubmitting.value = false;
          throw err;
        });
      };
    };
  }
  const handleSubmitImpl = makeSubmissionFactory(false);
  const handleSubmit = handleSubmitImpl;
  handleSubmit.withControlled = makeSubmissionFactory(true);
  function removePathState(path, id) {
    const idx = pathStates.value.findIndex((s) => {
      return s.path === path && (Array.isArray(s.id) ? s.id.includes(id) : s.id === id);
    });
    const pathState = pathStates.value[idx];
    if (idx === -1 || !pathState) {
      return;
    }
    nextTick(() => {
      validateField(path, { mode: "silent", warn: false });
    });
    if (pathState.multiple && pathState.fieldsCount) {
      pathState.fieldsCount--;
    }
    if (Array.isArray(pathState.id)) {
      const idIndex = pathState.id.indexOf(id);
      if (idIndex >= 0) {
        pathState.id.splice(idIndex, 1);
      }
      delete pathState.__flags.pendingUnmount[id];
    }
    if (!pathState.multiple || pathState.fieldsCount <= 0) {
      pathStates.value.splice(idx, 1);
      unsetInitialValue(path);
      rebuildPathLookup();
      delete pathStateLookup.value[path];
    }
  }
  function destroyPath(path) {
    keysOf(pathStateLookup.value).forEach((key) => {
      if (key.startsWith(path)) {
        delete pathStateLookup.value[key];
      }
    });
    pathStates.value = pathStates.value.filter((s) => !s.path.startsWith(path));
    nextTick(() => {
      rebuildPathLookup();
    });
  }
  const formCtx = {
    name,
    formId,
    values: formValues,
    controlledValues,
    errorBag,
    errors,
    schema,
    submitCount,
    meta,
    isSubmitting,
    isValidating,
    fieldArrays,
    keepValuesOnUnmount,
    validateSchema: unref(schema) ? validateSchema : void 0,
    validate: validate2,
    setFieldError,
    validateField,
    setFieldValue,
    setValues,
    setErrors,
    setFieldTouched,
    setTouched,
    resetForm,
    resetField,
    handleSubmit,
    useFieldModel,
    defineInputBinds,
    defineComponentBinds,
    defineField,
    stageInitialValue,
    unsetInitialValue,
    setFieldInitialValue,
    createPathState,
    getPathState: findPathState,
    unsetPathValue,
    removePathState,
    initialValues,
    getAllPathStates: () => pathStates.value,
    destroyPath,
    isFieldTouched,
    isFieldDirty,
    isFieldValid
  };
  function setFieldValue(field, value, shouldValidate = true) {
    const clonedValue = klona(value);
    const path = typeof field === "string" ? field : field.path;
    const pathState = findPathState(path);
    if (!pathState) {
      createPathState(path);
    }
    setInPath(formValues, path, clonedValue);
    if (shouldValidate) {
      validateField(path);
    }
  }
  function forceSetValues(fields, shouldValidate = true) {
    keysOf(formValues).forEach((key) => {
      delete formValues[key];
    });
    keysOf(fields).forEach((path) => {
      setFieldValue(path, fields[path], false);
    });
    if (shouldValidate) {
      validate2();
    }
  }
  function setValues(fields, shouldValidate = true) {
    merge(formValues, fields);
    fieldArrays.forEach((f) => f && f.reset());
    if (shouldValidate) {
      validate2();
    }
  }
  function createModel(path, shouldValidate) {
    const pathState = findPathState(toValue(path)) || createPathState(path);
    return computed({
      get() {
        return pathState.value;
      },
      set(value) {
        var _a2;
        const pathValue = toValue(path);
        setFieldValue(pathValue, value, (_a2 = toValue(shouldValidate)) !== null && _a2 !== void 0 ? _a2 : false);
      }
    });
  }
  function setFieldTouched(field, isTouched) {
    const pathState = findPathState(field);
    if (pathState) {
      pathState.touched = isTouched;
    }
  }
  function isFieldTouched(field) {
    const pathState = findPathState(field);
    if (pathState) {
      return pathState.touched;
    }
    return pathStates.value.filter((s) => s.path.startsWith(field)).some((s) => s.touched);
  }
  function isFieldDirty(field) {
    const pathState = findPathState(field);
    if (pathState) {
      return pathState.dirty;
    }
    return pathStates.value.filter((s) => s.path.startsWith(field)).some((s) => s.dirty);
  }
  function isFieldValid(field) {
    const pathState = findPathState(field);
    if (pathState) {
      return pathState.valid;
    }
    return pathStates.value.filter((s) => s.path.startsWith(field)).every((s) => s.valid);
  }
  function setTouched(fields) {
    if (typeof fields === "boolean") {
      mutateAllPathState((state) => {
        state.touched = fields;
      });
      return;
    }
    keysOf(fields).forEach((field) => {
      setFieldTouched(field, !!fields[field]);
    });
  }
  function resetField(field, state) {
    var _a2;
    const newValue = state && "value" in state ? state.value : getFromPath(initialValues.value, field);
    const pathState = findPathState(field);
    if (pathState) {
      pathState.__flags.pendingReset = true;
    }
    setFieldInitialValue(field, klona(newValue), true);
    setFieldValue(field, newValue, false);
    setFieldTouched(field, (_a2 = state === null || state === void 0 ? void 0 : state.touched) !== null && _a2 !== void 0 ? _a2 : false);
    setFieldError(field, (state === null || state === void 0 ? void 0 : state.errors) || []);
    nextTick(() => {
      if (pathState) {
        pathState.__flags.pendingReset = false;
      }
    });
  }
  function resetForm(resetState, opts2) {
    let newValues = klona((resetState === null || resetState === void 0 ? void 0 : resetState.values) ? resetState.values : originalInitialValues.value);
    newValues = (opts2 === null || opts2 === void 0 ? void 0 : opts2.force) ? newValues : merge(originalInitialValues.value, newValues);
    newValues = isTypedSchema(schema) && isCallable(schema.cast) ? schema.cast(newValues) : newValues;
    setInitialValues(newValues, { force: opts2 === null || opts2 === void 0 ? void 0 : opts2.force });
    mutateAllPathState((state) => {
      var _a2;
      state.__flags.pendingReset = true;
      state.validated = false;
      state.touched = ((_a2 = resetState === null || resetState === void 0 ? void 0 : resetState.touched) === null || _a2 === void 0 ? void 0 : _a2[toValue(state.path)]) || false;
      setFieldValue(toValue(state.path), getFromPath(newValues, toValue(state.path)), false);
      setFieldError(toValue(state.path), void 0);
    });
    (opts2 === null || opts2 === void 0 ? void 0 : opts2.force) ? forceSetValues(newValues, false) : setValues(newValues, false);
    setErrors((resetState === null || resetState === void 0 ? void 0 : resetState.errors) || {});
    submitCount.value = (resetState === null || resetState === void 0 ? void 0 : resetState.submitCount) || 0;
    nextTick(() => {
      validate2({ mode: "silent" });
      mutateAllPathState((state) => {
        state.__flags.pendingReset = false;
      });
    });
  }
  async function validate2(opts2) {
    const mode = (opts2 === null || opts2 === void 0 ? void 0 : opts2.mode) || "force";
    if (mode === "force") {
      mutateAllPathState((f) => f.validated = true);
    }
    if (formCtx.validateSchema) {
      return formCtx.validateSchema(mode);
    }
    isValidating.value = true;
    const validations = await Promise.all(pathStates.value.map((state) => {
      if (!state.validate) {
        return Promise.resolve({
          key: toValue(state.path),
          valid: true,
          errors: [],
          value: void 0
        });
      }
      return state.validate(opts2).then((result) => {
        return {
          key: toValue(state.path),
          valid: result.valid,
          errors: result.errors,
          value: result.value
        };
      });
    }));
    isValidating.value = false;
    const results = {};
    const errors2 = {};
    const values = {};
    for (const validation of validations) {
      results[validation.key] = {
        valid: validation.valid,
        errors: validation.errors
      };
      if (validation.value) {
        setInPath(values, validation.key, validation.value);
      }
      if (validation.errors.length) {
        errors2[validation.key] = validation.errors[0];
      }
    }
    return {
      valid: validations.every((r) => r.valid),
      results,
      errors: errors2,
      values,
      source: "fields"
    };
  }
  async function validateField(path, opts2) {
    var _a2;
    const state = findPathState(path);
    if (state && (opts2 === null || opts2 === void 0 ? void 0 : opts2.mode) !== "silent") {
      state.validated = true;
    }
    if (schema) {
      const { results } = await validateSchema((opts2 === null || opts2 === void 0 ? void 0 : opts2.mode) || "validated-only");
      return results[path] || { errors: [], valid: true };
    }
    if (state === null || state === void 0 ? void 0 : state.validate) {
      return state.validate(opts2);
    }
    !state && ((_a2 = opts2 === null || opts2 === void 0 ? void 0 : opts2.warn) !== null && _a2 !== void 0 ? _a2 : true);
    return Promise.resolve({ errors: [], valid: true });
  }
  function unsetInitialValue(path) {
    unsetPath(initialValues.value, path);
  }
  function stageInitialValue(path, value, updateOriginal = false) {
    setFieldInitialValue(path, value);
    setInPath(formValues, path, value);
    if (updateOriginal && !(opts === null || opts === void 0 ? void 0 : opts.initialValues)) {
      setInPath(originalInitialValues.value, path, klona(value));
    }
  }
  function setFieldInitialValue(path, value, updateOriginal = false) {
    setInPath(initialValues.value, path, klona(value));
    if (updateOriginal) {
      setInPath(originalInitialValues.value, path, klona(value));
    }
  }
  async function _validateSchema() {
    const schemaValue = unref(schema);
    if (!schemaValue) {
      return { valid: true, results: {}, errors: {}, source: "none" };
    }
    isValidating.value = true;
    const formResult = isYupValidator(schemaValue) || isTypedSchema(schemaValue) ? await validateTypedSchema(schemaValue, formValues) : await validateObjectSchema(schemaValue, formValues, {
      names: fieldNames.value,
      bailsMap: fieldBailsMap.value
    });
    isValidating.value = false;
    return formResult;
  }
  const submitForm = handleSubmit((_, { evt }) => {
    if (isFormSubmitEvent(evt)) {
      evt.target.submit();
    }
  });
  if (isRef(schema)) {
    watch(schema, () => {
      var _a2;
      (_a2 = formCtx.validateSchema) === null || _a2 === void 0 ? void 0 : _a2.call(formCtx, "validated-only");
    });
  }
  provide(FormContextKey, formCtx);
  function defineField(path, config) {
    const label = isCallable(config) ? void 0 : config === null || config === void 0 ? void 0 : config.label;
    const pathState = findPathState(toValue(path)) || createPathState(path, { label });
    const evalConfig = () => isCallable(config) ? config(omit(pathState, PRIVATE_PATH_STATE_KEYS)) : config || {};
    function onBlur() {
      var _a2;
      pathState.touched = true;
      const validateOnBlur = (_a2 = evalConfig().validateOnBlur) !== null && _a2 !== void 0 ? _a2 : getConfig().validateOnBlur;
      if (validateOnBlur) {
        validateField(toValue(pathState.path));
      }
    }
    function onInput() {
      var _a2;
      const validateOnInput = (_a2 = evalConfig().validateOnInput) !== null && _a2 !== void 0 ? _a2 : getConfig().validateOnInput;
      if (validateOnInput) {
        nextTick(() => {
          validateField(toValue(pathState.path));
        });
      }
    }
    function onChange() {
      var _a2;
      const validateOnChange = (_a2 = evalConfig().validateOnChange) !== null && _a2 !== void 0 ? _a2 : getConfig().validateOnChange;
      if (validateOnChange) {
        nextTick(() => {
          validateField(toValue(pathState.path));
        });
      }
    }
    const props = computed(() => {
      const base = {
        onChange,
        onInput,
        onBlur
      };
      if (isCallable(config)) {
        return Object.assign(Object.assign({}, base), config(omit(pathState, PRIVATE_PATH_STATE_KEYS)).props || {});
      }
      if (config === null || config === void 0 ? void 0 : config.props) {
        return Object.assign(Object.assign({}, base), config.props(omit(pathState, PRIVATE_PATH_STATE_KEYS)));
      }
      return base;
    });
    const model = createModel(path, () => {
      var _a2, _b, _c;
      return (_c = (_a2 = evalConfig().validateOnModelUpdate) !== null && _a2 !== void 0 ? _a2 : (_b = getConfig()) === null || _b === void 0 ? void 0 : _b.validateOnModelUpdate) !== null && _c !== void 0 ? _c : true;
    });
    return [model, props];
  }
  function useFieldModel(pathOrPaths) {
    if (!Array.isArray(pathOrPaths)) {
      return createModel(pathOrPaths);
    }
    return pathOrPaths.map((p) => createModel(p, true));
  }
  function defineInputBinds(path, config) {
    const [model, props] = defineField(path, config);
    function onBlur() {
      props.value.onBlur();
    }
    function onInput(e) {
      const value = normalizeEventValue(e);
      setFieldValue(toValue(path), value, false);
      props.value.onInput();
    }
    function onChange(e) {
      const value = normalizeEventValue(e);
      setFieldValue(toValue(path), value, false);
      props.value.onChange();
    }
    return computed(() => {
      return Object.assign(Object.assign({}, props.value), {
        onBlur,
        onInput,
        onChange,
        value: model.value
      });
    });
  }
  function defineComponentBinds(path, config) {
    const [model, props] = defineField(path, config);
    const pathState = findPathState(toValue(path));
    function onUpdateModelValue(value) {
      model.value = value;
    }
    return computed(() => {
      const conf = isCallable(config) ? config(omit(pathState, PRIVATE_PATH_STATE_KEYS)) : config || {};
      return Object.assign({ [conf.model || "modelValue"]: model.value, [`onUpdate:${conf.model || "modelValue"}`]: onUpdateModelValue }, props.value);
    });
  }
  const ctx = Object.assign(Object.assign({}, formCtx), { values: readonly(formValues), handleReset: () => resetForm(), submitForm });
  provide(PublicFormContextKey, ctx);
  return ctx;
}
function useFormMeta(pathsState, currentValues, initialValues, errors) {
  const MERGE_STRATEGIES = {
    touched: "some",
    pending: "some",
    valid: "every"
  };
  const isDirty = computed(() => {
    return !isEqual(currentValues, unref(initialValues));
  });
  function calculateFlags() {
    const states = pathsState.value;
    return keysOf(MERGE_STRATEGIES).reduce((acc, flag) => {
      const mergeMethod = MERGE_STRATEGIES[flag];
      acc[flag] = states[mergeMethod]((s) => s[flag]);
      return acc;
    }, {});
  }
  const flags = reactive(calculateFlags());
  watchEffect(() => {
    const value = calculateFlags();
    flags.touched = value.touched;
    flags.valid = value.valid;
    flags.pending = value.pending;
  });
  return computed(() => {
    return Object.assign(Object.assign({ initialValues: unref(initialValues) }, flags), { valid: flags.valid && !keysOf(errors.value).length, dirty: isDirty.value });
  });
}
function useFormInitialValues(pathsState, formValues, opts) {
  const values = resolveInitialValues(opts);
  const initialValues = ref(values);
  const originalInitialValues = ref(klona(values));
  function setInitialValues(values2, opts2) {
    if (opts2 === null || opts2 === void 0 ? void 0 : opts2.force) {
      initialValues.value = klona(values2);
      originalInitialValues.value = klona(values2);
    } else {
      initialValues.value = merge(klona(initialValues.value) || {}, klona(values2));
      originalInitialValues.value = merge(klona(originalInitialValues.value) || {}, klona(values2));
    }
    if (!(opts2 === null || opts2 === void 0 ? void 0 : opts2.updateFields)) {
      return;
    }
    pathsState.value.forEach((state) => {
      const wasTouched = state.touched;
      if (wasTouched) {
        return;
      }
      const newValue = getFromPath(initialValues.value, toValue(state.path));
      setInPath(formValues, toValue(state.path), klona(newValue));
    });
  }
  return {
    initialValues,
    originalInitialValues,
    setInitialValues
  };
}
function mergeValidationResults(a, b) {
  if (!b) {
    return a;
  }
  return {
    valid: a.valid && b.valid,
    errors: [...a.errors, ...b.errors]
  };
}

const vee_validate_tFsTD_xq7Lr2HBLXhmh4D79px5fI_UTbtS_7_2Rkn8g = defineNuxtPlugin((nuxtApp) => {
  defineRule("required", required);
  defineRule("email", email);
});

const plugins = [
  unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU,
  plugin,
  revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms,
  components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4,
  vee_validate_tFsTD_xq7Lr2HBLXhmh4D79px5fI_UTbtS_7_2Rkn8g
];

const layouts = {
  default: defineAsyncComponent(() => import('./default.vue.mjs').then((m) => m.default || m))
};

const LayoutLoader = defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  setup(props, context) {
    return () => h(layouts[props.name], props.layoutProps, context.slots);
  }
});
const nuxtLayoutProps = {
  name: {
    type: [String, Boolean, Object],
    default: null
  },
  fallback: {
    type: [String, Object],
    default: null
  }
};
const __nuxt_component_0 = defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: nuxtLayoutProps,
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      let layout2 = unref(props.name) ?? route.meta.layout ?? "default";
      if (layout2 && !(layout2 in layouts)) {
        if (props.fallback) {
          layout2 = unref(props.fallback);
        }
      }
      return layout2;
    });
    const layoutRef = ref();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route.meta.layoutTransition ?? appLayoutTransition;
      return _wrapInTransition(hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value || void 0,
              name: layout.value,
              shouldProvide: !props.name,
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => name === (route.meta.layout ?? "default")
      });
    }
    return () => {
      var _a, _b;
      if (!name || typeof name === "string" && !(name in layouts)) {
        return (_b = (_a = context.slots).default) == null ? void 0 : _b.call(_a);
      }
      return h(
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});

const defineRouteProvider = (name = "RouteProvider") => defineComponent({
  name,
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const RouteProvider = defineRouteProvider();

const __nuxt_component_1 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    inject(PageRouteSymbol, null);
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    nuxtApp.deferHydration();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          return h(Suspense, { suspensible: true }, {
            default() {
              return h(RouteProvider, {
                vnode: slots.default ? normalizeSlot(slots.default, routeProps) : routeProps.Component,
                route: routeProps.route,
                vnodeRef: pageRef
              });
            }
          });
        }
      });
    };
  }
});
function normalizeSlot(slot, data) {
  const slotContent = slot(data);
  return slotContent.length === 1 ? h(slotContent[0]) : h(Fragment, void 0, slotContent);
}

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0;
  const _component_NuxtPage = __nuxt_component_1;
  _push(ssrRenderComponent(_component_NuxtLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtPage)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/pages/runtime/app.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    label: { default: "" },
    type: { default: "button" }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: _ctx.type,
        class: "w-[219.71px] h-12 relative overflow-hidden rounded-full group"
      }, _attrs))}><span class="absolute inset-0 z-10 bg-gray-100 scale-x-0 group-hover:scale-x-100 group-hover:origin-left origin-right transition-transform duration-500 ease-in-out"></span><span class="absolute inset-0 z-0" style="${ssrRenderStyle({
        background: "linear-gradient(133.93deg, rgba(64, 191, 105, 0.8) 26.95%, rgba(64, 191, 105, 0.2) 231.98%)"
      })}"></span><span class="relative z-20 flex items-center justify-center w-full h-full font-inter font-medium text-base leading-6 tracking-tighter transition-colors duration-300 group-hover:text-green-600 text-white">${ssrInterpolate(_ctx.label)}</span></button>`);
    };
  }
});

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "error",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const handleError = () => clearError({ redirect: "/" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            if (((_a = __props.error) == null ? void 0 : _a.statusCode) === 404) {
              _push2(`<div${_scopeId}><div class="flex flex-col items-center justify-center pt-[200px]"${_scopeId}><svg width="588" height="318" viewBox="0 0 588 318" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><mask id="mask0_543_1574" style="${ssrRenderStyle({ "mask-type": "alpha" })}" maskUnits="userSpaceOnUse" x="16" y="40" width="557" height="240"${_scopeId}><path d="M16.5296 232.088V198.775L114.662 43.7273H142.442V91.1562H125.503L59.4415 195.839V197.646H196.421V232.088H16.5296ZM126.858 275V221.925L127.31 207.018V43.7273H166.834V275H126.858ZM293.986 279.404C275.391 279.404 259.43 274.699 246.105 265.288C232.855 255.803 222.654 242.138 215.502 224.296C208.426 206.379 204.887 184.81 204.887 159.589C204.962 134.369 208.538 112.913 215.615 95.2216C222.767 77.4545 232.968 63.9034 246.218 54.5682C259.543 45.2329 275.466 40.5653 293.986 40.5653C312.506 40.5653 328.428 45.2329 341.754 54.5682C355.079 63.9034 365.28 77.4545 372.357 95.2216C379.509 112.989 383.085 134.445 383.085 159.589C383.085 184.885 379.509 206.491 372.357 224.409C365.28 242.251 355.079 255.878 341.754 265.288C328.504 274.699 312.581 279.404 293.986 279.404ZM293.986 244.058C308.44 244.058 319.846 236.944 328.203 222.715C336.634 208.411 340.85 187.369 340.85 159.589C340.85 141.22 338.93 125.787 335.091 113.29C331.252 100.793 325.831 91.3821 318.83 85.0582C311.828 78.6591 303.547 75.4595 293.986 75.4595C279.607 75.4595 268.239 82.6115 259.882 96.9155C251.526 111.144 247.31 132.036 247.234 159.589C247.159 178.034 249.004 193.543 252.768 206.115C256.607 218.687 262.028 228.173 269.029 234.572C276.031 240.896 284.35 244.058 293.986 244.058ZM392.426 232.088V198.775L490.559 43.7273H518.339V91.1562H501.4L435.338 195.839V197.646H572.317V232.088H392.426ZM502.755 275V221.925L503.207 207.018V43.7273H542.731V275H502.755Z" fill="#1D1D1D"${_scopeId}></path></mask><g mask="url(#mask0_543_1574)"${_scopeId}><circle cx="-206.672" cy="88.3273" r="608.263" transform="rotate(-0.336469 -206.672 88.3273)" fill="url(#paint0_linear_543_1574)" stroke="url(#paint1_linear_543_1574)"${_scopeId}></circle><circle cx="250.216" cy="230.625" r="608.263" transform="rotate(-0.336469 250.216 230.625)" fill="url(#paint2_linear_543_1574)" stroke="url(#paint3_radial_543_1574)"${_scopeId}></circle></g><defs${_scopeId}><linearGradient id="paint0_linear_543_1574" x1="-206.672" y1="-520.436" x2="-206.672" y2="697.091" gradientUnits="userSpaceOnUse"${_scopeId}><stop stop-color="#40BF69" stop-opacity="0.56"${_scopeId}></stop><stop offset="1" stop-color="#40BF69" stop-opacity="0.2"${_scopeId}></stop></linearGradient><linearGradient id="paint1_linear_543_1574" x1="430.946" y1="27.8029" x2="-979.415" y2="340.278" gradientUnits="userSpaceOnUse"${_scopeId}><stop stop-color="#40BF69"${_scopeId}></stop><stop offset="1" stop-color="#40BF69" stop-opacity="0"${_scopeId}></stop></linearGradient><linearGradient id="paint2_linear_543_1574" x1="250.216" y1="-378.138" x2="250.216" y2="839.389" gradientUnits="userSpaceOnUse"${_scopeId}><stop stop-color="#40BF69" stop-opacity="0.6"${_scopeId}></stop><stop offset="1" stop-color="#40BF69" stop-opacity="0.2"${_scopeId}></stop></linearGradient><radialGradient id="paint3_radial_543_1574" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250.216 230.625) rotate(89.968) scale(1261.16)"${_scopeId}><stop offset="0.046875" stop-color="#40BF69" stop-opacity="0"${_scopeId}></stop><stop offset="1" stop-color="#40BF69"${_scopeId}></stop></radialGradient></defs></svg><h2 class="text-[#1D1D1D] font-inter font-medium text-[36px] leading-[100%] text-center uppercase"${_scopeId}> PAGE NOT FOUND </h2><div class="mt-[32px]"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                label: "Back to homepage",
                onClick: handleError
              }, null, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              ((_b = __props.error) == null ? void 0 : _b.statusCode) === 404 ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode("div", { class: "flex flex-col items-center justify-center pt-[200px]" }, [
                  (openBlock(), createBlock("svg", {
                    width: "588",
                    height: "318",
                    viewBox: "0 0 588 318",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("mask", {
                      id: "mask0_543_1574",
                      style: { "mask-type": "alpha" },
                      maskUnits: "userSpaceOnUse",
                      x: "16",
                      y: "40",
                      width: "557",
                      height: "240"
                    }, [
                      createVNode("path", {
                        d: "M16.5296 232.088V198.775L114.662 43.7273H142.442V91.1562H125.503L59.4415 195.839V197.646H196.421V232.088H16.5296ZM126.858 275V221.925L127.31 207.018V43.7273H166.834V275H126.858ZM293.986 279.404C275.391 279.404 259.43 274.699 246.105 265.288C232.855 255.803 222.654 242.138 215.502 224.296C208.426 206.379 204.887 184.81 204.887 159.589C204.962 134.369 208.538 112.913 215.615 95.2216C222.767 77.4545 232.968 63.9034 246.218 54.5682C259.543 45.2329 275.466 40.5653 293.986 40.5653C312.506 40.5653 328.428 45.2329 341.754 54.5682C355.079 63.9034 365.28 77.4545 372.357 95.2216C379.509 112.989 383.085 134.445 383.085 159.589C383.085 184.885 379.509 206.491 372.357 224.409C365.28 242.251 355.079 255.878 341.754 265.288C328.504 274.699 312.581 279.404 293.986 279.404ZM293.986 244.058C308.44 244.058 319.846 236.944 328.203 222.715C336.634 208.411 340.85 187.369 340.85 159.589C340.85 141.22 338.93 125.787 335.091 113.29C331.252 100.793 325.831 91.3821 318.83 85.0582C311.828 78.6591 303.547 75.4595 293.986 75.4595C279.607 75.4595 268.239 82.6115 259.882 96.9155C251.526 111.144 247.31 132.036 247.234 159.589C247.159 178.034 249.004 193.543 252.768 206.115C256.607 218.687 262.028 228.173 269.029 234.572C276.031 240.896 284.35 244.058 293.986 244.058ZM392.426 232.088V198.775L490.559 43.7273H518.339V91.1562H501.4L435.338 195.839V197.646H572.317V232.088H392.426ZM502.755 275V221.925L503.207 207.018V43.7273H542.731V275H502.755Z",
                        fill: "#1D1D1D"
                      })
                    ]),
                    createVNode("g", { mask: "url(#mask0_543_1574)" }, [
                      createVNode("circle", {
                        cx: "-206.672",
                        cy: "88.3273",
                        r: "608.263",
                        transform: "rotate(-0.336469 -206.672 88.3273)",
                        fill: "url(#paint0_linear_543_1574)",
                        stroke: "url(#paint1_linear_543_1574)"
                      }),
                      createVNode("circle", {
                        cx: "250.216",
                        cy: "230.625",
                        r: "608.263",
                        transform: "rotate(-0.336469 250.216 230.625)",
                        fill: "url(#paint2_linear_543_1574)",
                        stroke: "url(#paint3_radial_543_1574)"
                      })
                    ]),
                    createVNode("defs", null, [
                      createVNode("linearGradient", {
                        id: "paint0_linear_543_1574",
                        x1: "-206.672",
                        y1: "-520.436",
                        x2: "-206.672",
                        y2: "697.091",
                        gradientUnits: "userSpaceOnUse"
                      }, [
                        createVNode("stop", {
                          "stop-color": "#40BF69",
                          "stop-opacity": "0.56"
                        }),
                        createVNode("stop", {
                          offset: "1",
                          "stop-color": "#40BF69",
                          "stop-opacity": "0.2"
                        })
                      ]),
                      createVNode("linearGradient", {
                        id: "paint1_linear_543_1574",
                        x1: "430.946",
                        y1: "27.8029",
                        x2: "-979.415",
                        y2: "340.278",
                        gradientUnits: "userSpaceOnUse"
                      }, [
                        createVNode("stop", { "stop-color": "#40BF69" }),
                        createVNode("stop", {
                          offset: "1",
                          "stop-color": "#40BF69",
                          "stop-opacity": "0"
                        })
                      ]),
                      createVNode("linearGradient", {
                        id: "paint2_linear_543_1574",
                        x1: "250.216",
                        y1: "-378.138",
                        x2: "250.216",
                        y2: "839.389",
                        gradientUnits: "userSpaceOnUse"
                      }, [
                        createVNode("stop", {
                          "stop-color": "#40BF69",
                          "stop-opacity": "0.6"
                        }),
                        createVNode("stop", {
                          offset: "1",
                          "stop-color": "#40BF69",
                          "stop-opacity": "0.2"
                        })
                      ]),
                      createVNode("radialGradient", {
                        id: "paint3_radial_543_1574",
                        cx: "0",
                        cy: "0",
                        r: "1",
                        gradientUnits: "userSpaceOnUse",
                        gradientTransform: "translate(250.216 230.625) rotate(89.968) scale(1261.16)"
                      }, [
                        createVNode("stop", {
                          offset: "0.046875",
                          "stop-color": "#40BF69",
                          "stop-opacity": "0"
                        }),
                        createVNode("stop", {
                          offset: "1",
                          "stop-color": "#40BF69"
                        })
                      ])
                    ])
                  ])),
                  createVNode("h2", { class: "text-[#1D1D1D] font-inter font-medium text-[36px] leading-[100%] text-center uppercase" }, " PAGE NOT FOUND "),
                  createVNode("div", { class: "mt-[32px]" }, [
                    createVNode(_sfc_main$2, {
                      label: "Back to homepage",
                      onClick: handleError
                    })
                  ])
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    var _a;
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      (_a = nuxt.payload).error || (_a.error = createError(error));
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

const server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: entry$1
});

export { _export_sfc as _, _sfc_main$2 as a, useForm as b, useNuxtApp as c, useRuntimeConfig as d, nuxtLinkDefaults as e, navigateTo as n, resolveRouteObject as r, server as s, useRouter as u };
//# sourceMappingURL=server.mjs.map
