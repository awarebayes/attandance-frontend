// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const TeacherLazyImport = createFileRoute('/teacher')()
const StudentLazyImport = createFileRoute('/student')()
const LoginLazyImport = createFileRoute('/login')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const TeacherLazyRoute = TeacherLazyImport.update({
  path: '/teacher',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/teacher.lazy').then((d) => d.Route))

const StudentLazyRoute = StudentLazyImport.update({
  path: '/student',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/student.lazy').then((d) => d.Route))

const LoginLazyRoute = LoginLazyImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      preLoaderRoute: typeof LoginLazyImport
      parentRoute: typeof rootRoute
    }
    '/student': {
      preLoaderRoute: typeof StudentLazyImport
      parentRoute: typeof rootRoute
    }
    '/teacher': {
      preLoaderRoute: typeof TeacherLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  AboutLazyRoute,
  LoginLazyRoute,
  StudentLazyRoute,
  TeacherLazyRoute,
])
