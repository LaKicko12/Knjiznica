const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/login 	', component: () => import('pages/LoginPage.vue') },
      { path: '/lokacija ', component: () => import('pages/LokacijaPage.vue') },
      { path: '/o_nama ', component: () => import('pages/ONamaPage.vue') },
      { path: '/popis_knjiga ', component: () => import('pages/PopisKnjigaPage.vue') },
      { path: '/registracija ', component: () => import('pages/RegistracijaPage.vue') },
      { path: '/pretrazivanje', component: () => import('pages/TraziKnjiguPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
