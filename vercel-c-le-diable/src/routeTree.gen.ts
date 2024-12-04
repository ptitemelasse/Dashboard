/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const PagesLazyImport = createFileRoute('/pages')()
const LogisterLazyImport = createFileRoute('/logister')()
const ChartLazyImport = createFileRoute('/chart')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const PagesLazyRoute = PagesLazyImport.update({
  id: '/pages',
  path: '/pages',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/pages.lazy').then((d) => d.Route))

const LogisterLazyRoute = LogisterLazyImport.update({
  id: '/logister',
  path: '/logister',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/logister.lazy').then((d) => d.Route))

const ChartLazyRoute = ChartLazyImport.update({
  id: '/chart',
  path: '/chart',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/chart.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/chart': {
      id: '/chart'
      path: '/chart'
      fullPath: '/chart'
      preLoaderRoute: typeof ChartLazyImport
      parentRoute: typeof rootRoute
    }
    '/logister': {
      id: '/logister'
      path: '/logister'
      fullPath: '/logister'
      preLoaderRoute: typeof LogisterLazyImport
      parentRoute: typeof rootRoute
    }
    '/pages': {
      id: '/pages'
      path: '/pages'
      fullPath: '/pages'
      preLoaderRoute: typeof PagesLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/chart': typeof ChartLazyRoute
  '/logister': typeof LogisterLazyRoute
  '/pages': typeof PagesLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/chart': typeof ChartLazyRoute
  '/logister': typeof LogisterLazyRoute
  '/pages': typeof PagesLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/chart': typeof ChartLazyRoute
  '/logister': typeof LogisterLazyRoute
  '/pages': typeof PagesLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/chart' | '/logister' | '/pages'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/chart' | '/logister' | '/pages'
  id: '__root__' | '/' | '/about' | '/chart' | '/logister' | '/pages'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AboutLazyRoute: typeof AboutLazyRoute
  ChartLazyRoute: typeof ChartLazyRoute
  LogisterLazyRoute: typeof LogisterLazyRoute
  PagesLazyRoute: typeof PagesLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AboutLazyRoute: AboutLazyRoute,
  ChartLazyRoute: ChartLazyRoute,
  LogisterLazyRoute: LogisterLazyRoute,
  PagesLazyRoute: PagesLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/chart",
        "/logister",
        "/pages"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/chart": {
      "filePath": "chart.lazy.tsx"
    },
    "/logister": {
      "filePath": "logister.lazy.tsx"
    },
    "/pages": {
      "filePath": "pages.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
