import { lazy } from 'react'

export const protectedRoutes = [
    {
        key: 'marketplace',
        path: '/marketplace',
        component: lazy(() => import('@/views/marketplace/index')),
        authority: [],
    },
]
