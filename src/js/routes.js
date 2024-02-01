
import HomePage from '../pages/home.f7';
import ArtistDetailPage from '../pages/artist-details.f7';
import HowItWorksPage from '../pages/how-it-works.f7';
import AllArtistsPage from '../pages/artists.f7';
import AllManagementPage from '../pages/management.f7';
import AllFeeturresPage from '../pages/feeturres.f7';

import PrivacyPage from '../pages/privacy-policy.f7';


import FeeturreDetailPage from '../pages/feeturre-details.f7';

import CompanyDetailPage from '../pages/company-detail.f7';

import NotFoundPage from '../pages/404.f7';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/artist-details/:userName/',
    component: ArtistDetailPage,
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/how-it-works/',
    component: HowItWorksPage,
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/privacy-policy/',
    component: PrivacyPage,
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/artists/',
    component: AllArtistsPage,
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/management/',
    component: AllManagementPage,
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/company-detail/:companyName',
    component: CompanyDetailPage,
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/feeturres/',
    component: AllFeeturresPage,
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/feeturre-detail/:feeturreName',
    component: FeeturreDetailPage,
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
    options: {
      transition: 'f7-parallax',
    },
  },
  
];

export default routes;