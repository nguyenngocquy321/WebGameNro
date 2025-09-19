import { lazy } from 'react';

const routes = [
    {
        path: '/',
        component: lazy(() => import('@pages/HomePage/HomePage'))
    },

    {
        path: '/login',
        component: lazy(() => import('@pages/Login/Login.jsx'))
    },
    {
        path: '/register',
        component: lazy(() => import('@pages/Register/Register'))
    },
    {
        path: '/blogs',
        component: lazy(() => import('@pages/Blogs/Blogs'))
    },
    {
        path: '/category/tin-tuc-game-ngoc-rong',
        component: lazy(() =>
            import('@pages/Blogs/category/TinTucGameNgocRong')
        )
    },
    {
        path: 'category/tin-tuc-game-free-fire',
        component: lazy(() => import('@pages/Blogs/category/TinTucGameFF'))
    },
    {
        path: '/category/tin-tuc-game-lien-quan',
        component: lazy(() => import('@pages/Blogs/category/TinTucGameLQ'))
    },
    {
        path: '/nap-card',
        component: lazy(() => import('@pages/Service/NapCard.jsx'))
    },
    // {
    //     path: '/nap-atm',
    //     component: lazy(() => import('@pages/Service/NapATM.jsx'))
    // },
    // {
    //     path: '/nap-momo',
    //     component: lazy(() => import('@pages/Service/NapMoMo.jsx'))
    // },
    {
        path: '/pack-nick-ngoc-rong-vip',
        component: lazy(() =>
            import('@pages/PackNick/PackNickNgocRong/PackNickNgocRong.jsx')
        )
    },
    {
        path: '/pack-nick-so-sinh-ngon',
        component: lazy(() =>
            import('@pages/PackNick/PackNickNgocRong/PackNickNgocRongSS.jsx')
        )
    },
    {
        path: '/pack-ban-do-ngoc-rong',
        component: lazy(() =>
            import('@pages/PackNick/PackNickNgocRong/PackDoNgocRong.jsx')
        )
    },
    {
        path: '/pack-ban-bo-1-sao',
        component: lazy(() =>
            import('@pages/PackNick/PackNickNgocRong/PackBo1Sao.jsx')
        )
    },
    {
        path: '/pack-ban-nick-lien-quan-lienquangiare',
        component: lazy(() =>
            import('@pages/PackNick/PackNickLQ/PackNickLQ.jsx')
        )
    }
];

export default routes;
